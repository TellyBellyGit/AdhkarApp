const divineThemes = {
    // MAIN THEMATIC GROUPS (Based on Al-Ghazali & Ibn Al-Qayyim)
    themes: {
        majesty: {
            name: "Names of Majesty (Jalaliyyah)",
            description: "Inspire awe, reverence, and consciousness of Allah's greatness and power. Cultivate fear (khawf) and reverence.",
            names: [3, 4, 5, 6, 7, 8, 9, 10, 15, 22, 25, 28, 33, 37, 41, 48, 61, 65, 78, 81, 84, 85]
        },
        beauty: {
            name: "Names of Beauty (Jamaliyyah)",
            description: "Inspire love, hope, and intimacy with Allah. Cultivate hope (raja') and love.",
            names: [1, 2, 14, 30, 32, 34, 35, 42, 47, 56, 79, 80, 82, 83]
        },
        creation: {
            name: "Names of Creation & Sustenance",
            description: "Reveal Allah as the Originator, Sustainer, and Controller of all existence.",
            names: [11, 12, 13, 16, 17, 20, 21, 39, 49, 58, 59, 60, 61, 88, 89, 90, 91, 92, 95, 96, 97]
        },
        knowledge: {
            name: "Names of Knowledge & Wisdom",
            description: "Manifest Allah's perfect knowledge, awareness, and wise decree.",
            names: [19, 27, 28, 29, 31, 43, 44, 46, 50, 51, 57, 64, 75, 76, 86, 94, 98]
        },
        power: {
            name: "Names of Power & Strength",
            description: "Demonstrate Allah's absolute capability, strength, and firm control.",
            names: [8, 9, 15, 53, 54, 69, 70, 81]
        },
        unity: {
            name: "Names of Divine Unity (Tawheed)",
            description: "Affirm Allah's absolute oneness, uniqueness, and self-sufficiency.",
            names: [66, 67, 68, 88]
        },
        timeSpace: {
            name: "Names of Time & Space",
            description: "Transcend temporal and spatial limitations - First, Last, Manifest, Hidden.",
            names: [71, 72, 73, 74, 75, 76, 96, 97]
        }
    },

    // COMPLEMENTARY PAIRS (Based on Ibn Al-Qayyim's method)
    complementaryPairs: [
        { pair: ["Al-Qabid", "Al-Basit"], ids: [20, 21], theme: "Control" },
        { pair: ["Al-Khafid", "Ar-Rafi'"], ids: [22, 23], theme: "Status" },
        { pair: ["Al-Mu'izz", "Al-Mudhill"], ids: [24, 25], theme: "Honor" },
        { pair: ["Al-Muqaddim", "Al-Mu'akhkhir"], ids: [71, 72], theme: "Time" },
        { pair: ["Ad-Darr", "An-Nafi'"], ids: [91, 92], theme: "Harm/Benefit" },
        { pair: ["Al-Ghaffar", "Al-Ghafur", "Al-Afuww"], ids: [14, 34, 82], theme: "Forgiveness Spectrum" },
        { pair: ["Ar-Rahman", "Ar-Raheem"], ids: [1, 2], theme: "Mercy" },
        { pair: ["Al-Hayy", "Al-Qayyum"], ids: [62, 63], theme: "Life & Sustenance" }
    ],

    // QUR'ANIC GROUPINGS (How Allah pairs Names in the Qur'an)
    quranicPairs: [
        { verse: "Surah Al-Hashr: 24", pairs: ["Al-Khaliq", "Al-Bari'", "Al-Musawwir"], ids: [11, 12, 13] },
        { verse: "Surah Al-Isra: 110", pairs: ["Ar-Rahman", "Ar-Raheem"], ids: [1, 2] },
        { verse: "Surah Al-Hadid: 1-3", pairs: ["Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin"], ids: [73, 74, 75, 76] },
        { verse: "Surah Al-Hashr: 23", pairs: ["Al-Malik", "Al-Quddus", "As-Salam"], ids: [3, 4, 5] }
    ],

    // SITUATIONAL GUIDANCE (Practical application based on need)
    situationalGuide: {
        forgiveness: {
            situation: "After sinning/Seeking forgiveness",
            names: [14, 34, 80, 82, 83], // Ghaffar, Ghafur, Tawwab, Afuww, Ra'uf
            duaLanguage: "Focus on Allah's boundless mercy and willingness to erase sins completely.",
            scholarlyNote: "Ibn Al-Qayyim: 'Call upon Allah with His Names of forgiveness in humility and hope.'"
        },
        provision: {
            situation: "Financial difficulty/Need for sustenance",
            names: [16, 17, 39, 42, 88, 89], // Wahhab, Razzaq, Muqit, Karim, Ghaniyy, Mughni
            duaLanguage: "Emphasize His generosity and your dependence on Him as the True Provider.",
            scholarlyNote: "Al-Ghazali: 'Seek from Al-Ghaniyy (The Rich) while acknowledging your poverty before Him.'"
        },
        oppression: {
            situation: "Being wronged/Oppressed",
            names: [25, 28, 29, 86], // Mudhill, Hakam, Adl, Muqsit
            duaLanguage: "Appeal to His perfect justice without seeking personal vengeance.",
            scholarlyNote: "Ibn Taymiyyah: 'Trust in Al-Adl while embodying patience (As-Sabur).'"
        },
        guidance: {
            situation: "Confusion/Need for direction",
            names: [18, 46, 94, 98], // Fattah, Hakim, Hadi, Rashid
            duaLanguage: "Ask for opening of clarity and wisdom in decisions.",
            scholarlyNote: "Ibn Al-Qayyim: 'Combine Al-Hadi (Guide) with Ar-Rashid (Right Guide) for true direction.'"
        },
        fearAnxiety: {
            situation: "Fear/Anxiety/Uncertainty",
            names: [5, 6, 7, 52, 55], // Salam, Mu'min, Muhaymin, Wakil, Waliyy
            duaLanguage: "Seek peace and protection through trust in His guardianship.",
            scholarlyNote: "The Prophet ﷺ would say in fear: 'Hasbiyallahu la ilaha illa huwa, alayhi tawakkaltu...'"
        },
        health: {
            situation: "Illness/Health concerns",
            names: [12, 60, 62], // Bari', Muhyi, Hayy
            duaLanguage: "Ask the Giver of Life for healing and restoration.",
            scholarlyNote: "Scholars recommend: 'Ya Hayyu ya Qayyum, bi-rahmatika astaghith...'"
        }
    },

    

    // SCHOLARLY ADVICE
    scholarlyAdvice: [
        {
            title: "1. Imam Al-Ghazali (d. 505 AH) - Al-Maqṣad al-Asnā fī Sharḥ Asmā' Allāh al-Ḥusnā",
            content: `
                <p><strong>Key Contribution:</strong> He famously categorized the Names into "Names of Majesty" (Jalāliyyah) and "Names of Beauty" (Jamāliyyah).</p>
                <p><strong>Purpose:</strong> He said this division helps the believer cultivate a balanced relationship with Allah - both awe and love, fear and hope.</p>
                <p><strong>Quote:</strong> "The heart should be between khawf (fear) and rajā' (hope), like a bird whose two wings are fear and hope."</p>
            `
        },
        {
            title: "2. Ibn Al-Qayyim (d. 751 AH) - Miftāḥ Dār al-Saʿādah",
            content: `
                <p><strong>Key Insight:</strong> He emphasized that the Names aren't just for memorization but for takhalluq (embodying the meanings).</p>
                <p><strong>Thematic Approach:</strong> He grouped Names by their effects on the heart. For example:</p>
                <ul>
                    <li>Names that inspire love: Ar-Raḥmān, Ar-Raḥīm, Al-Wadūd</li>
                    <li>Names that inspire awe: Al-Jabbār, Al-Mutakabbir, Al-Qahhār</li>
                    <li>Names that inspire hope: Al-Ghafūr, At-Tawwāb, Al-ʿAfuww</li>
                </ul>
            `
        },
        {
            title: "3. Ibn Taymiyyah (d. 728 AH)",
            content: `
                <p><strong>Caution:</strong> While not rejecting thematic understanding, he emphasized that all Names are interconnected and cannot be fully separated.</p>
                <p><strong>Important Point:</strong> He warned against making the themes rigid or exclusive, as each Name contains aspects of others.</p>
            `
        },
        {
            title: "4. Contemporary Scholars' Views",
            content: `
                <p><strong>Sheikh Ibn 'Uthaymeen:</strong> Encouraged learning Names in thematic pairs (e.g., Al-Qabid & Al-Basit) to understand Allah's comprehensive attributes.</p>
                <p><strong>Sheikh Al-Sa'di:</strong> In his tafsir, he often explains how certain Names appear together in the Qur'an, showing natural thematic groupings.</p>
            `
        },
        {
            title: "Scholarly Consensus on Thematic Use in Du'a",
            content: `
                <p><strong>Permissible & Recommended:</strong></p>
                <ul>
                    <li><strong>For Understanding:</strong> All scholars agree themes help comprehension.</li>
                    <li><strong>For Cultivation (Takhalluq):</strong> Focusing on specific Names to develop certain qualities is encouraged.</li>
                    <li><strong>For Situational Du'a:</strong> Choosing Names relevant to one's situation is based on the principle of tawassul bi'l-asmā' (seeking means through the Names).</li>
                </ul>
            `
        },
        {
            title: "Important Guidelines from Scholars",
            content: `
                <ol>
                    <li><strong>Don't Limit Allah to One Aspect:</strong> While calling upon Ar-Razzāq for provision, remember He's also Al-Ḥakīm (The Wise) - He may withhold for wisdom. <br><em>Imam Al-Ghazali: "The believer should see Allah in every Name, but approach Him through the Name most suitable to the need."</em></li>
                    <li><strong>Balance is Crucial:</strong> <br><em>Ibn Al-Qayyim: "If one only knows Allah as Al-Ghafūr (Forgiving), they might sin freely. If only as Al-Muntaqim (Avenger), they might despair. Knowing both keeps the heart balanced."</em></li>
                    <li><strong>Thematic Du'a is Sunnah:</strong> The Prophet ﷺ taught specific du'as using specific Names: <br>- For distress: "Yā Ḥayyu yā Qayyūm!" (O Ever-Living, O Sustainer!) <br>- For forgiveness: "Yā Ghaffār! Yā Ghafūr! Yā 'Afuww!" <br>This shows contextual use of Names.</li>
                    <li><strong>Don't Create "New" Groups:</strong> Scholars caution against creating personal thematic groupings that might distort meanings. Stick to established scholarly categories (Majesty/Beauty, Creation/Sustenance, etc.).</li>
                </ol>
            `
        },
        {
            title: "Practical Scholarly Advice",
            content: `
                <p><strong>Al-Ghazali's Three Levels of Understanding:</strong></p>
                <ul>
                    <li>Level 1: Memorizing the Names</li>
                    <li>Level 2: Understanding their meanings</li>
                    <li>Level 3: "Living with the Names" - This is where themes become practical:
                        <ul>
                            <li>When poor: Live with Al-Ghanī (The Rich) - dependence on Him</li>
                            <li>When wronged: Live with Al-ʿAdl (The Just) - trust in His justice</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Ibn Al-Qayyim's Method:</strong> Group Names that complement each other in du'a:</p>
                <ul>
                    <li>For sins: Al-Ghafūr, Ar-Raḥīm, Al-ʿAfuww together</li>
                    <li>For needs: Al-Qadīr, As-Samīʿ, Al-Mujīb together</li>
                </ul>
            `
        },
        {
            title: "Modern Application with Scholarly Basis",
            content: `
                <p>The thematic approach you're considering is valid and beneficial if you:</p>
                <ul>
                    <li><strong>Keep the Interconnectedness:</strong> Don't treat groups as separate "departments" of Allah</li>
                    <li><strong>Maintain Balance:</strong> Regularly review Names from different themes</li>
                    <li><strong>Follow Qur'anic/Sunnah Pairings:</strong> Notice how Allah pairs Names in the Qur'an (e.g., Al-ʿAzīz al-Ḥakīm)</li>
                    <li><strong>Use for Cultivation, Not Just Theory:</strong> The goal is transformation of character</li>
                </ul>
            `
        },
        {
            title: "Conclusion from Scholarship",
            content: `
                <p>Yes, the thematic approach has strong scholarly foundation, particularly from Al-Ghazali's Jalāl/Jamāl framework, Ibn Al-Qayyim's emphasis on complementary Names, and The Prophet's ﷺ contextual use of Names in du'a.</p>
                <p><strong>However, scholars universally add this crucial advice:</strong> The themes are doors to understanding Allah better, not boxes to limit His infinite perfection.</p>
                <p>The ultimate goal is what Ibn Al-Qayyim called: "Knowing Allah through His Names and Attributes such that this knowledge enters the heart and bears fruit in one's state and actions."</p>
            `
        }
    ],

    // SCHOLARLY PRACTICES
    practices: [
        {
            name: "Weekly Thematic Focus",
            description: "Focus on one theme per week for deep reflection",
            method: "Choose 1-2 Names from a theme daily, reflect on meanings, and embody attributes",
            source: "Based on Al-Ghazali's method of takhalluq (embodying attributes)"
        },
        {
            name: "Complementary Pair Du'a",
            description: "Use complementary pairs in supplication",
            method: "When asking for something, use both Names (e.g., 'Ya Razzaq, Ya Wahhab' for provision)",
            source: "Ibn Al-Qayyim's observation of Qur'anic pairings"
        },
        {
            name: "Balanced Recitation",
            description: "Balance between Majesty and Beauty Names",
            method: "Recite equal numbers from Jalaliyyah and Jamaliyyah groups",
            source: "Scholarly emphasis on balanced heart between khawf and raja'"
        }
    ]
};