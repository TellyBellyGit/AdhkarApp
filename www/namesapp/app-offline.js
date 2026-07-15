// Local offline app logic for NamesApp
// Includes a small localStorage-backed shim for the small database behavior

// --- Local persistence shim ---
function initializeApp(cfg){ return { _cfg: cfg }; }
function getAuth(app){ return { _app: app }; }
function signInAnonymously(auth){
    const existing = localStorage.getItem('namesapp:userId');
    if (existing) return Promise.resolve({ uid: existing });
    const id = 'local_' + Math.random().toString(36).slice(2,10);
    localStorage.setItem('namesapp:userId', id);
    return Promise.resolve({ uid: id });
}
function onAuthStateChanged(auth, cb){
    const id = localStorage.getItem('namesapp:userId') || null;
    setTimeout(()=>cb(id ? { uid: id } : null), 0);
}
function getFirestore(app){ return { _app: app }; }
function doc(db, ...parts){ return { _path: parts.join('/') }; }
async function getDoc(docRef){
    const raw = localStorage.getItem('namesapp:' + docRef._path);
    return { exists: () => !!raw, data: () => (raw ? JSON.parse(raw) : null) };
}
async function setDoc(docRef, data){
    localStorage.setItem('namesapp:' + docRef._path, JSON.stringify(data));
    return Promise.resolve();
}

// Expose minimal API globally (some remote code may expect these names)
window.initializeApp = initializeApp;
window.getAuth = getAuth;
window.signInAnonymously = signInAnonymously;
window.onAuthStateChanged = onAuthStateChanged;
window.getFirestore = getFirestore;
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;

// --- Application runtime ---
const app = initializeApp({});
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'namesapp-local';
let currentUser = null;
let savedNamesIds = [];

async function initAuth(){
    // Show fallback if auth slow
    const fallbackTimer = setTimeout(()=>{
        console.warn('Auth timeout — rendering offline');
        renderNames();
        document.getElementById('names-list') && (document.getElementById('names-list').style.opacity = '1');
    }, 2000);

    try {
        await signInAnonymously(auth);
        onAuthStateChanged(auth, async (user)=>{
            clearTimeout(fallbackTimer);
            if (user) {
                currentUser = user;
                await loadSavedNames();
                renderAll();
            }
        });
    } catch(e){
        clearTimeout(fallbackTimer);
        console.warn('Auth failed — offline only', e);
        renderAll();
    }
}

async function loadSavedNames(){
    if (!currentUser) return;
    const userDocRef = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'selections', 'current');
    try {
        const snap = await getDoc(userDocRef);
        if (snap.exists()) savedNamesIds = snap.data().nameIds || [];
    } catch(e){ console.error('Load error', e); }
}

async function toggleName(nameId){
    // allow toggle even if no user (local-only)
    if (!savedNamesIds.includes(nameId)) savedNamesIds.push(nameId);
    else savedNamesIds = savedNamesIds.filter(id => id !== nameId);
    if (currentUser) {
        const userDocRef = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'selections', 'current');
        await setDoc(userDocRef, { nameIds: savedNamesIds });
    } else {
        // persist locally by default
        localStorage.setItem('namesapp:local-selection', JSON.stringify(savedNamesIds));
    }
    renderAll();
}

function renderAll(){ renderNames(); renderSelection(); }

function renderNames(list = (window.divineNames || [])){
    const container = document.getElementById('names-list');
    if (!container) return;
    container.innerHTML = (list || []).map(n => {
        const isSaved = savedNamesIds.includes(n.id);
        return `
        <div class="name-card">
            <span class="card-number">#${n.id}</span>
            <div class="name-header">
                <div>
                    <span class="name-translit">${n.t}</span>
                    <span class="name-meaning">${n.m}</span>
                </div>
                <div class="name-arabic">${n.a}</div>
            </div>
            <div class="name-explanation">${n.e || ''}</div>
            ${n.r ? `<div class="reflection-box"><strong style="color:var(--primary-gold)">Reflection:</strong> ${n.r}</div>` : ''}
            <div style="display:flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <div style="font-size:12px; color: var(--text-dim)">${n.u || ''}</div>
                <button class="save-btn ${isSaved ? 'active' : ''}" onclick="window.toggleName(${n.id})">${isSaved ? 'Selected' : 'Select'}</button>
            </div>
        </div>`;
    }).join('');
}

function renderSelection(){
    const container = document.getElementById('saved-names-list');
    if (!container) return;
    const list = (window.divineNames || []).filter(n => savedNamesIds.includes(n.id));
    if (!list.length) { container.innerHTML = `<div class="empty-state">No names selected yet.</div>`; return; }
    container.innerHTML = list.map(n => `
        <div class="name-card">
            <span class="card-number">#${n.id}</span>
            <div class="name-header">
                <div>
                    <span class="name-translit">${n.t}</span>
                    <span class="name-meaning">${n.m}</span>
                </div>
                <div class="name-arabic">${n.a}</div>
            </div>
            <button class="save-btn active" style="width:100%" onclick="window.toggleName(${n.id})">Remove</button>
        </div>
    `).join('');
}

// Toggle dataset (if present). If not, remain on same list.
function toggleDataset(){
    if (window.divineNamesSimple && window.divineNamesExtended) {
        if (window.divineNames === window.divineNamesSimple) window.divineNames = window.divineNamesExtended;
        else window.divineNames = window.divineNamesSimple;
    }
    // re-render
    const q = document.getElementById('nameSearch');
    if (q && q.value) filterNames(); else renderNames();
    renderSelection();
}

// Tab and filter helpers
window.showTab = function(tabId){
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(tabId);
    if (el) el.classList.add('active');
    // set active button
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const btns = Array.from(document.querySelectorAll('.tab-btn'));
    const found = btns.find(b => b.textContent.replace(/\s+/g,'').toLowerCase().includes(tabId.replace('-','')));
    if (found) found.classList.add('active');
    window.scrollTo(0,0);
}

window.filterNames = function(){
    const q = document.getElementById('nameSearch');
    const query = (q && q.value) ? q.value.toLowerCase() : '';
    if (!query) { renderNames(); return; }
    const filtered = (window.divineNames || []).filter(n => (n.t||'').toLowerCase().includes(query) || (n.m||'').toLowerCase().includes(query));
    renderNames(filtered);
}

// Etiquettes (copied from remote)
const etiquettes = [
    { title: "1. Sincere Intention & Presence of Heart", detail: "<p><strong>Focus:</strong> Direct your heart entirely toward Allah. Remove distractions.</p>" },
    { title: "2. Begin with Praise & Salutations", detail: "<p><strong>Method:</strong> Start by praising Allah and sending blessings (salawat) upon the Prophet (pbuh).</p>" },
    { title: "3. Use the Appropriate Names", detail: "<p><strong>Specificity:</strong> Choose Names relevant to your request.</p>" },
    { title: "4. Invoke with Humility & Hope", detail: "<p><strong>Manner:</strong> Call upon Allah with humility and balance fear with hope.</p>" },
    { title: "5. Be Insistent & Repeat (With Moderation)", detail: "<p><strong>Practice:</strong> Repeat your du'a, be persistent but patient.</p>" },
    { title: "6. Acknowledge Your Need & Sinfulness", detail: "<p><strong>Attitude:</strong> Admit your dependence and shortcomings.</p>" },
    { title: "7. Choose Times & States of Acceptance", detail: "<p><strong>Optimal Times:</strong> The last third of the night, during prostration, and other moments.</p>" },
    { title: "8. Ensure Lawful Sustenance & Good Deeds", detail: "<p><strong>Prerequisite:</strong> Strive to earn halal income and perform good deeds.</p>" },
    { title: "9. Face the Qiblah & Raise Your Hands", detail: "<p>Face the Qiblah if possible and raise your hands when making du'a.</p>" },
    { title: "10. Be Certain of Acceptance & Trust Allah's Decree", detail: "<p><strong>Heart Condition:</strong> Have firm faith that Allah hears and will answer.</p>" }
];

function toggleDetail(index){
    const detail = document.getElementById(`detail-${index}`);
    const btn = document.getElementById(`btn-${index}`);
    if (!detail) return;
    const visible = detail.style.display === 'block';
    detail.style.display = visible ? 'none' : 'block';
    btn.textContent = visible ? 'Detail' : 'Hide';
}

function renderEtiquettes(){
    const container = document.getElementById('etiquette-list');
    if (!container) return;
    container.innerHTML = etiquettes.map((e,i) => `
        <div class="etiquette-item">
            <div class="etiquette-header">
                <span class="etiquette-title">${e.title}</span>
                <button id="btn-${i}" class="detail-btn" onclick="toggleDetail(${i})">Detail</button>
            </div>
            <div id="detail-${i}" class="etiquette-detail">${e.detail}</div>
        </div>
    `).join('');
}

// Initialize app
window.addEventListener('load', function(){
    // try to restore local selection if present
    try {
        const raw = localStorage.getItem('namesapp:local-selection');
        if (raw) savedNamesIds = JSON.parse(raw) || [];
    } catch(e){}
    initAuth();
    renderEtiquettes();
});

// Expose toggleName for inline handlers
window.toggleName = toggleName;
window.toggleDataset = toggleDataset;
