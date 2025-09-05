// Make the array available as a global variable
const manzilVerses = [
  {
    id: 1,
    title: 'Al-Fatiha (The Opening)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="mb-2 text-green-800 font-semibold">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <p class="text-base text-gray-600 italic mb-1">Bismilla - hir-Rahma nirr Ra heem</p>
        <p class="text-base text-gray-700 mb-4">In the name of Allah, the Most Gracious, the Most Merciful</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</span><span class="text-sm text-gray-500 ml-4">﴿١﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Alhamdu lillahi rabbil alameen</p>
        <p class="text-base text-gray-700">Praise be to Allah, the Lord of the worlds</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>الرَّحْمَنِ الرَّحِيمِ</span><span class="text-sm text-gray-500 ml-4">﴿٢﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Ar-Rahman-ir-Raheem</p>
        <p class="text-base text-gray-700">The Most Gracious, the Most Merciful</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>مَالِكِ يَوْمِ الدِّينِ</span><span class="text-sm text-gray-500 ml-4">﴿٣﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Maliki yawmid-deen</p>
        <p class="text-base text-gray-700">Master of the Day of Judgment</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</span><span class="text-sm text-gray-500 ml-4">﴿٤﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Iyyaka na'budu wa iyyaka nasta'een</p>
        <p class="text-base text-gray-700">You alone we worship, and You alone we ask for help</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</span><span class="text-sm text-gray-500 ml-4">﴿٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Ihdinas-siratal mustaqeem</p>
        <p class="text-base text-gray-700">Guide us to the straight path</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</span><span class="text-sm text-gray-500 ml-4">﴿٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Siratal-latheena an'amta alayhim ghayril-maghdubi alayhim wa lad-dalleen</p>
        <p class="text-base text-gray-700">The path of those upon whom You have bestowed favor, not of those who have earned Your anger, nor of those who are astray</p>
      </div>
    </div>`
  },
  {
    id: 2,
    title: 'Al-Baqarah (1 to 5)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="mb-2 text-green-800 font-semibold">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <p class="text-base text-gray-600 italic mb-1">Bismilla - hir-Rahma nirr Ra heem</p>
        <p class="text-base text-gray-700 mb-4">In the name of Allah, the Most Gracious, the Most Merciful</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>الم</span><span class="text-sm text-gray-500 ml-4">﴿١﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Alif Lam Meem</p>
        <p class="text-base text-gray-700">Alif Lam Meem</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ</span><span class="text-sm text-gray-500 ml-4">﴿٢﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Thalikal-kitabu la rayba feehi hudan lil-muttaqeen</p>
        <p class="text-base text-gray-700">This is the Book about which there is no doubt, a guidance for those conscious of Allah</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ</span><span class="text-sm text-gray-500 ml-4">﴿٣﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Allazeena yu'minoona bil-ghaybi wa yuqeemoonas-salata wa mimma razaqnahum yunfiqoon</p>
        <p class="text-base text-gray-700">Who believe in the unseen, establish prayer, and spend out of what We have provided for them</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ</span><span class="text-sm text-gray-500 ml-4">﴿٤﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Wallazeena yu'minoona bima unzila ilayka wa ma unzila min qablika wa bil-akhirati hum yooqinoon</p>
        <p class="text-base text-gray-700">And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith]</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</span><span class="text-sm text-gray-500 ml-4">﴿٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Ula-ika 'ala hudam mir-rabbihim wa ula-ika humul-muflihoon</p>
        <p class="text-base text-gray-700">It is they who are upon guidance from their Lord, and it is they who will be successful</p>
      </div>
    </div>`
  },
  {
    id: 6,
    title: 'Ayat Al-Kursi (255)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ</span><span class="text-sm text-gray-500 ml-4">﴿٢٥٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Allahu la ilaha illa huwa al-hayyul-qayyum, la ta'khuzuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man zal-lazi yashfa'u 'indahu illa bi-iznih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma wa huwal-'aliyyul-'azeem</p>
        <p class="text-base text-gray-700">Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.</p>
      </div>
    </div>`
  },
  {
    id: 7,
    title: 'Al-Baqarah (256 & 257)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ</span><span class="text-sm text-gray-500 ml-4">﴿٢٥٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">La ikraha fid-deeni qad tabayyanar-rushdu minal-ghayy, faman yakfur bit-taghooti wa yu'mim billahi faqad istamsaka bil-'urwatil-wuthqa lanfisama laha, wallahu samee'un 'aleem</p>
        <p class="text-base text-gray-700">There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing.</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَاتِ أُولَٰئِكَ أَصْحَابُ النَّارِ هُمْ فِيهَا خَالِدُونَ</span><span class="text-sm text-gray-500 ml-4">﴿٢٥٧﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Allahu waliyyul-lazeena amanoo yukhrijuhum minaz-zulumati ilan-noor, wallazeena kafaroo awliya'uhumut-taghootu yukhrijoonahum minan-noori ilaz-zulumat, ula-ika as-habun-nar, hum feeha khalidoon</p>
        <p class="text-base text-gray-700">Allah is the ally of those who believe. He brings them out from darknesses into the light. And those who disbelieve - their allies are Taghut. They take them out of the light into darknesses. Those are the companions of the Fire; they will abide eternally therein.</p>
      </div>
    </div>`
  },
  {
    id: 8,
    title: 'Al-Baqarah (284)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>لِّلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَإِن تُبْدُوا مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ فَيَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ</span><span class="text-sm text-gray-500 ml-4">﴿٢٨٤﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Lillahi ma fis-samawati wa ma fil-ard, wa in tubdoo ma fee anfusikum aw tukhfoohu yuhasibkum bihillah, fa yaghfiru liman yashaa'u wa yu'adhdhibu man yashaa', wallahu 'ala kulli shay'in qadeer</p>
        <p class="text-base text-gray-700">To Allah belongs whatever is in the heavens and whatever is on the earth. Whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allah is over all things competent.</p>
      </div>
    </div>`
  },
  {
    id: 9,
    title: 'Al-Baqarah (285)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ</span><span class="text-sm text-gray-500 ml-4">﴿٢٨٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Amanar-rasoolu bima unzila ilayhi mir-rabbihi wal-mu'minoon, kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulih, la nufarriqu bayna ahadim mir-rusulih, wa qaloo sami'na wa ata'na ghufranaka rabbana wa ilaykal-maseer</p>
        <p class="text-base text-gray-700">The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."</p>
      </div>
    </div>`
  },
  {
    id: 10,
    title: 'Al-Baqarah (286)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ</span><span class="text-sm text-gray-500 ml-4">﴿٢٨٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">La yukallifullahu nafsan illa wus'aha, laha ma kasabat wa 'alayha ma aktasabat, rabbana la tu'akhidhna in naseena aw akhta'na, rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-lazeena min qablina, rabbana wa la tuhammilna ma la taqata lana bih, wa'fu 'anna waghfir lana warhamna, anta mawlana fansurna 'alal-qawmil-kafireen</p>
        <p class="text-base text-gray-700">Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."</p>
      </div>
    </div>`
  },
  {
    id: 11,
    title: 'Ali Imran (18 - 19)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ</span><span class="text-sm text-gray-500 ml-4">﴿١٨﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Shahidallahu annahu la ilaha illa huwa wal-mala'ikatu wa ulul-'ilmi qa-imam bil-qist, la ilaha illa huwa al-'azizul-hakeem</p>
        <p class="text-base text-gray-700">Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ وَمَا اخْتَلَفَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ وَمَن يَكْفُرْ بِآيَاتِ اللَّهِ فَإِنَّ اللَّهَ سَرِيعُ الْحِسَابِ</span><span class="text-sm text-gray-500 ml-4">﴿١٩﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Inna ad-deena 'indal-lahil-islam, wa makhtalafal-lazeena ootul-kitaba illa min ba'di ma ja'ahumul-'ilmu baghyam baynahum, wa man yakfur bi-ayatillahi fa-innallaha saree'ul-hisab</p>
        <p class="text-base text-gray-700">Indeed, the religion in the sight of Allah is Islam. And those who were given the Scripture did not differ except after knowledge had come to them - out of jealous animosity between themselves. And whoever disbelieves in the verses of Allah, then indeed, Allah is swift in [taking] account.</p>
      </div>
    </div>`
  },
  {
    id: 12,
    title: 'Ali Imran (26 - 27)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ</span><span class="text-sm text-gray-500 ml-4">﴿٢٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Qulil-lahumma malikal-mulki tu'til-mulka man tashaa'u wa tanzi'ul-mulka mimman tashaa', wa tu'izzu man tashaa' wa tuzillu man tashaa', biyadikal-khayr, innaka 'ala kulli shay'in qadeer</p>
        <p class="text-base text-gray-700">Say, "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent."</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَن تَشَاءُ بِغَيْرِ حِسَابٍ</span><span class="text-sm text-gray-500 ml-4">﴿٢٧﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Tulijul-layla fin-nahari wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyiti wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tashaa'u bighayri hisab</p>
        <p class="text-base text-gray-700">You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account.</p>
      </div>
    </div>`
  },
  {
    id: 14,
    title: 'Al-A\'raf (54 - 56)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ يُغْشِي اللَّيْلَ النَّهَارَ يَطْلُبُهُ حَثِيثًا وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ تَبَارَكَ اللَّهُ رَبُّ الْعَالَمِينَ</span><span class="text-sm text-gray-500 ml-4">﴿٥٤﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Inna rabbakumul-lahul-lazi khalaqas-samawati wal-arda fee sittati ayyamin thummas-tawa 'alal-'arsh, yughshil-laylan-nahara yatlubuhu hatheethan wash-shamsa wal-qamara wan-nujoom musakh-kharatim bi-amrih, ala lahul-khalqu wal-amr, tabarakal-lahu rabbul-'alameen</p>
        <p class="text-base text-gray-700">Indeed, your Lord is Allah, who created the heavens and earth in six days and then established Himself above the Throne. He covers the night with the day, [another night] chasing it rapidly; and [He created] the sun, the moon, and the stars, subjected by His command. Unquestionably, His is the creation and the command; blessed is Allah, Lord of the worlds.</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>ادْعُوا رَبَّكُم تَضَرُّعًا وَخُفْيَةً إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ</span><span class="text-sm text-gray-500 ml-4">﴿٥٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Ud'oo rabbakum tadarru'an wa khufyah, innahu la yuhibbul-mu'tadeen</p>
        <p class="text-base text-gray-700">Call upon your Lord in humility and privately; indeed, He does not like transgressors.</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ</span><span class="text-sm text-gray-500 ml-4">﴿٥٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Wa la tufsidoo fil-ardi ba'da islahiha wad'oohu khawfan wa tama'a, inna rahmatallahi qareebum minal-muhsineen</p>
        <p class="text-base text-gray-700">And do not cause corruption upon the earth after its reformation. And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good.</p>
      </div>
    </div>`
  },
  {
    id: 21,
    title: 'Al-Isra (110 - 111)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>قُلِ ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ أَيًّا مَا تَدْعُوا فَلَهُ الْأَسْمَاءُ الْحُسْنَىٰ وَلَا تَجْهَرْ بِصَلَاتِكَ وَلَا تُخَافِتْ بِهَا وَابْتَغِ بَيْنَ ذَٰلِكَ سَبِيلًا</span><span class="text-sm text-gray-500 ml-4">﴿١١٠﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Qulid'oo Allaha awid'oor-Rahman, ayyan ma tad'oo falahul-asma'ul-husna, wa la tajhar bi-salataka wa la tukhafit biha wabtaghi bayna thalika sabeela</p>
        <p class="text-base text-gray-700">Say, "Call upon Allah or call upon the Most Merciful. Whichever [name] you call - to Him belong the best names." And do not recite [too] loudly in your prayer or [too] quietly but seek between that an [intermediate] way.</p>
      </div>
      
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُن لَّهُ وَلِيٌّ مِّنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا</span><span class="text-sm text-gray-500 ml-4">﴿١١١﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Wa qulil-hamdu lillahil-lazi lam yattakhiz waladan wa lam yakun lahu shareekun fil-mulki wa lam yakun lahu waliyyum minadh-dhulli wa kabbirhu takbeera</p>
        <p class="text-base text-gray-700">And say, "Praise to Allah, who has not taken a son and has had no partner in [His] dominion and has no [need of a] protector out of weakness; and glorify Him with [great] glorification."</p>
      </div>
    </div>`
  },
  {
    id: 22,
    title: 'Al-Mu\'minoon (115 - 118)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ</span><span class="text-sm text-gray-500 ml-4">﴿١١٥﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Afa-hasibtum annama khalaqnakum 'abathan wa-annakum ilayna la turja'un</p>
        <p class="text-base text-gray-700">Then did you think that We created you uselessly and that to Us you would not be returned?</p>
      </div>
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ</span><span class="text-sm text-gray-500 ml-4">﴿١١٦﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Fata'alal-lahul-malikul-haqqu la ilaha illa huwa rabbul-'arshil-karim</p>
        <p class="text-base text-gray-700">So exalted is Allah, the Sovereign, the Truth; there is no deity except Him, Lord of the Noble Throne.</p>
      </div>
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>وَمَن يَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ لَا بُرْهَانَ لَهُ بِهِ فَإِنَّمَا حِسَابُهُ عِندَ رَبِّهِ إِنَّهُ لَا يُفْلِحُ الْكَافِرُونَ</span><span class="text-sm text-gray-500 ml-4">﴿١١٧﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Wa man yad'u ma'allahi ilahan akhara la burhana lahu bihi fa-innama hisabuhu 'inda rabbihi innahu la yuflihu al-kafirun</p>
        <p class="text-base text-gray-700">And whoever invokes besides Allah another deity for which he has no proof - then his account is only with his Lord. Indeed, the disbelievers will not succeed.</p>
      </div>
      <div class="mb-6">
        <p class="flex justify-between mb-2"><span>وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ</span><span class="text-sm text-gray-500 ml-4">﴿١١٨﴾</span></p>
        <p class="text-base text-gray-600 italic mb-1">Wa qul rabbi-ghfir warham wa-anta khayru ar-rahimin</p>
        <p class="text-base text-gray-700">And, [O Muhammad], say, "My Lord, forgive and have mercy, and You are the best of the merciful."</p>
      </div>
    </div>`
  },
  {
    id: 24,
    title: 'As-Safaat (1 - 11)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">وَالصَّافَّاتِ صَفًّا ﴿١﴾ فَالزَّاجِرَاتِ زَجْرًا ﴿٢﴾ فَالتَّالِيَاتِ ذِكْرًا ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Was-saffati saffa, faz-zajirati zajra, fat-taliyati dhikra</p>
        <p class="text-base text-gray-700 text-center">By those [angels] lined up in ranks, and those who drive [the clouds], and those who recite the message</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">إِنَّ إِلَٰهَكُمْ لَوَاحِدٌ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Inna ilahakum lawahid</p>
        <p class="text-base text-gray-700 text-center">Indeed, your God is One</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">رَّبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا وَرَبُّ الْمَشَارِقِ ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Rabbu as-samawati wal-ardi wa ma baynahuma wa rabbu al-mashariq</p>
        <p class="text-base text-gray-700 text-center">Lord of the heavens and the earth and that between them and Lord of the sunrises</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ ﴿٦﴾ وَحِفْظًا مِّن كُلِّ شَيْطَانٍ مَّارِدٍ ﴿٧﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Inna zayyanna as-sama'a ad-dunya bi-zinatin al-kawakib, wa hifzam min kulli shaytanin marid</p>
        <p class="text-base text-gray-700 text-center">Indeed, We have adorned the nearest heaven with an adornment of stars and as protection against every rebellious devil</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">لَا يَسَّمَعُونَ إِلَى الْمَلَإِ الْأَعْلَىٰ وَيُقْذَفُونَ مِن كُلِّ جَانِبٍ ﴿٨﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">La yassami'una ila al-mala'i al-a'la wa yuqdhafuna min kulli janib</p>
        <p class="text-base text-gray-700 text-center">[So] they may not listen to the exalted assembly [of angels] and are pelted from every side</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">دُحُورًا وَلَهُمْ عَذَابٌ وَاصِبٌ ﴿٩﴾ إِلَّا مَن خَطِفَ الْخَطْفَةَ فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ ﴿١٠﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Duhuran wa lahum 'adhabun wasib, illa man khatafa al-khaftata fa atba'ahu shihabun thaqib</p>
        <p class="text-base text-gray-700 text-center">Repelled; and for them is a constant punishment, except one who snatches [some words] by theft, but they are pursued by a burning flame, piercing [in brightness]</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">فَاسْتَفْتِهِمْ أَهُمْ أَشَدُّ خَلْقًا أَم مَّنْ خَلَقْنَا إِنَّا خَلَقْنَاهُم مِّن طِينٍ لَّازِبٍ ﴿١١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Fastaftihim ahum ashaddu khalqan am man khalaqna, inna khalaqnahum min tinin lazin</p>
        <p class="text-base text-gray-700 text-center">Then inquire of them, [O Muhammad], "Are they a stronger [or more difficult] creation or those [others] We have created?" Indeed, We created them from sticky clay</p>
      </div>
    </div>`
  },
  {
    id: 26,
    title: 'Ar-Rahman (33 - 40)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ ﴿٣٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Ya ma'shar al-jinni wal-ins, ini istata'tum an tanfudhu min aqtar as-samawati wal-ardi fanfudhu, la tanfudhuna illa bi-sultan</p>
        <p class="text-base text-gray-700 text-center">O company of jinn and mankind, if you are able to pass beyond the regions of the heavens and the earth, then pass. You will not pass except by authority [from Allah]</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ ﴿٣٤﴾ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ﴿٣٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Yursalu 'alaykuma shuwazun min narin wa nuhasun fa la tantasiran, fa bi-ayyi ala'i rabbikuma tukadhiban</p>
        <p class="text-base text-gray-700 text-center">There will be sent upon you a flame of fire and smoke, and you will not defend yourselves. Then which of the favors of your Lord will you deny?</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">فَإِذَا انشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ ﴿٣٦﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Fa idha inshaqqat as-sama'u fa kanat wardatan ka ad-dihan</p>
        <p class="text-base text-gray-700 text-center">And when the heaven is split open and becomes rose-colored like oil</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ﴿٣٧﴾ فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ ﴿٣٨﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Fa bi-ayyi ala'i rabbikuma tukadhiban, fa yawma'idhin la yus'alu 'an dhanbihi insun wa la jann</p>
        <p class="text-base text-gray-700 text-center">Then which of the favors of your Lord will you deny? So on that Day no man or jinn will be asked about his sin</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ﴿٣٩﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Fa bi-ayyi ala'i rabbikuma tukadhiban</p>
        <p class="text-base text-gray-700 text-center">Then which of the favors of your Lord will you deny?</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ ﴿٤٠﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Yu'rafu al-mujrimuna bi-simahum fa yu'khazu bin-nawasi wal-aqdam</p>
        <p class="text-base text-gray-700 text-center">The criminals will be known by their marks, and they will be seized by the forelocks and the feet</p>
      </div>
    </div>`
  },
  {
    id: 27,
    title: 'Al-Hashr (21 - 24)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ ﴿٢١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Law anzalna hatha al-qur'ana 'ala jabalin lara'aytahu khashi'an mutasaddi'an min khashyatillahi wa tilka al-amthalu nadribuha li-nnasi la'allahum yatafakkarun</p>
        <p class="text-base text-gray-700 text-center">If We had sent down this Qur'an upon a mountain, you would have seen it humbled and coming apart from fear of Allah. And these examples We present to the people that perhaps they will give thought.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ ﴿٢٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Huwa Allahu alladhi la ilaha illa huwa 'alim al-ghaybi wash-shahadati huwa ar-Rahman ar-Raheem</p>
        <p class="text-base text-gray-700 text-center">He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ﴿٢٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Huwa Allahu alladhi la ilaha illa huwa al-Malik al-Quddus as-Salam al-Mu'min al-Muhaymin al-'Aziz al-Jabbar al-Mutakabbir, subhan Allahi 'amma yushrikun</p>
        <p class="text-base text-gray-700 text-center">He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ ﴿٢٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Huwa Allahu al-Khaliq al-Bari' al-Musawwir, lahu al-asma' al-husna, yusabbihu lahu ma fi as-samawati wal-ard, wa huwa al-'Aziz al-Hakeem</p>
        <p class="text-base text-gray-700 text-center">He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.</p>
      </div>
    </div>`
  },
  {
    id: 28,
    title: 'Al-Jinn (1 - 4, 5 - 9)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Qul oohiya ilayya annahu istama'a nafarun min al-jinni faqaloo inna sami'na qur'anan 'ajaba</p>
        <p class="text-base text-gray-700 text-center">Say, [O Muhammad], "It has been revealed to me that a group of the jinn listened and said, 'Indeed, we have heard an amazing Qur'an.'</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">يَهْدِي إِلَى الرُّشْدِ فَآمَنَّا بِهِ وَلَن نُّشْرِكَ بِرَبِّنَا أَحَدًا ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Yahdi ila ar-rushdi fa amanna bihi wa lan nushrika birabbina ahadan</p>
        <p class="text-base text-gray-700 text-center">It guides to the right course, and we have believed in it. And we will never associate with our Lord anyone.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّهُ تَعَالَىٰ جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا ﴿٣﴾ وَأَنَّهُ كَانَ يَقُولُ سَفِيهُنَا عَلَى اللَّهِ شَطَطًا ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa annahu ta'ala jaddu rabbina ma ittakhatha sahibatan wa la walada, wa annahu kana yaqulu safeehuna 'ala Allahi shatata</p>
        <p class="text-base text-gray-700 text-center">And [we believe] that exalted is the nobleness of our Lord; He has not taken a wife or a son. And that our foolish one has been saying about Allah an excessive transgression.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّا ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa anna thananna an lan taqula al-insu wal-jinnu 'ala Allahi kathiba</p>
        <p class="text-base text-gray-700 text-center">And we had thought that mankind and the jinn would never speak about Allah a lie.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّهُ كَانَ رِجَالٌ مِّنَ الْإِنسِ يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ فَزَادُوهُمْ رَهَقًا ﴿٦﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa annahu kana rijalun min al-insi ya'oothoona bi-rijalin min al-jinni fa zadoohum rahaqa</p>
        <p class="text-base text-gray-700 text-center">And that there were men from mankind who sought refuge in men from the jinn, so they [only] increased them in burden.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّهُمْ ظَنُّوا كَمَا ظَنَنتُمْ أَن لَّن يَبْعَثَ اللَّهُ أَحَدًا ﴿٧﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa annahum thannu kama thanantum an lan yab'atha Allahu ahadan</p>
        <p class="text-base text-gray-700 text-center">And they had thought, as you thought, that Allah would never send anyone [as a messenger].</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّا لَمَسْنَا السَّمَاءَ فَوَجَدْنَاهَا مُلِئَتْ حَرَسًا شَدِيدًا وَشُهُبًا ﴿٨﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa anna lamasa as-sama'a fa wajadnaha muli'at harasan shadeedan wa shuhuba</p>
        <p class="text-base text-gray-700 text-center">And we have sought [to reach] the heaven but found it filled with powerful guards and burning flames.</p>
      </div>
      
      <div class="mb-6">
        <p class="text-center mb-2">وَأَنَّا كُنَّا نَقْعُدُ مِنْهَا مَقَاعِدَ لِلسَّمْعِ فَمَن يَسْتَمِعِ الْآنَ يَجِدْ لَهُ شِهَابًا رَّصَدًا ﴿٩﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa anna kunna naq'udu minha maqa'ida lis-sam'i fa man yastami' al-ana yajid lahu shihaban rasada</p>
        <p class="text-base text-gray-700 text-center">And we used to sit therein in positions for hearing, but whoever listens now will find a burning flame lying in wait for him.</p>
      </div>
    </div>`
  },
  {
    id: 29,
    title: 'Al-Fil (The Elephant)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Alam tara kayfa fa'ala rabbuka bi-ashabil-fil</p>
        <p class="text-base text-gray-700 text-center">Have you not considered how your Lord dealt with the companions of the elephant?</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Alam yaj'al kaydahum fi tadlil</p>
        <p class="text-base text-gray-700 text-center">Did He not make their plan into misguidance?</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa arsala 'alayhim tayran ababyl</p>
        <p class="text-base text-gray-700 text-center">And He sent against them birds in flocks</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Tarmihim bi-hijaratin min sijjyl</p>
        <p class="text-base text-gray-700 text-center">Striking them with stones of hard clay</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Fa-ja'alahum ka-'asfin ma'kul</p>
        <p class="text-base text-gray-700 text-center">And He made them like eaten straw</p>
      </div>
    </div>`
  },
  {
    id: 30,
    title: 'Al-Kafiroon (The Disbelievers)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">قُلْ يَا أَيُّهَا الْكَافِرُونَ ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Qul ya ayyuhal-kafirun</p>
        <p class="text-base text-gray-700 text-center">Say: O you disbelievers</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">لَا أَعْبُدُ مَا تَعْبُدُونَ ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">La a'budu ma ta'budun</p>
        <p class="text-base text-gray-700 text-center">I do not worship what you worship</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa la antum 'abiduna ma a'bud</p>
        <p class="text-base text-gray-700 text-center">Nor are you worshippers of what I worship</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa la ana 'abidun ma 'abadtum</p>
        <p class="text-base text-gray-700 text-center">Nor will I be a worshipper of what you worship</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa la antum 'abiduna ma a'bud</p>
        <p class="text-base text-gray-700 text-center">Nor will you be worshippers of what I worship</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">لَكُمْ دِينُكُمْ وَلِيَ دِينِ ﴿٦﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Lakum dinukum wa liya din</p>
        <p class="text-base text-gray-700 text-center">For you is your religion, and for me is my religion</p>
      </div>
    </div>`
  },
  {
    id: 31,
    title: 'Al-Ikhlas (The Sincerity)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Qul huwa Allahu ahad</p>
        <p class="text-base text-gray-700 text-center">Say: He is Allah, the One</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">اللَّهُ الصَّمَدُ ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Allahu as-samad</p>
        <p class="text-base text-gray-700 text-center">Allah, the Eternal, Absolute</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Lam yalid wa lam yulad</p>
        <p class="text-base text-gray-700 text-center">He begets not, nor is He begotten</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa lam yakun lahu kufuwan ahad</p>
        <p class="text-base text-gray-700 text-center">And there is none like unto Him</p>
      </div>
    </div>`
  },
  
  {
    id: 32,
    title: 'Al-Falaq (The Daybreak)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Qul a'udhu bi-rabbil-falaq</p>
        <p class="text-base text-gray-700 text-center">Say: I seek refuge with the Lord of daybreak</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">مِن شَرِّ مَا خَلَقَ ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Min sharri ma khalaq</p>
        <p class="text-base text-gray-700 text-center">From the evil of what He has created</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa min sharri ghasiqin idha waqab</p>
        <p class="text-base text-gray-700 text-center">And from the evil of darkness when it settles</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa min sharri an-naffathati fil-'uqad</p>
        <p class="text-base text-gray-700 text-center">And from the evil of the blowers in knots</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Wa min sharri hasidin idha hasad</p>
        <p class="text-base text-gray-700 text-center">And from the evil of an envier when he envies</p>
      </div>
    </div>`
  },
  {
    id: 33,
    title: 'An-Nas (Mankind)',
    content: `<div class="arabic-text text-xl sm:text-2xl md:text-3xl space-y-6 text-gray-900">
      <div class="mb-6">
        <p class="text-center mb-2">قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Qul a'udhu bi-rabbin-nas</p>
        <p class="text-base text-gray-700 text-center">Say: I seek refuge with the Lord of mankind</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">مَلِكِ النَّاسِ ﴿٢﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Malikin-nas</p>
        <p class="text-base text-gray-700 text-center">The Sovereign of mankind</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">إِلَٰهِ النَّاسِ ﴿٣﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Ilahin-nas</p>
        <p class="text-base text-gray-700 text-center">The God of mankind</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Min sharril-waswasil-khannas</p>
        <p class="text-base text-gray-700 text-center">From the evil of the retreating whisperer</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Allazi yuwaswisu fi sudurin-nas</p>
        <p class="text-base text-gray-700 text-center">Who whispers into the hearts of mankind</p>
      </div>
      <div class="mb-6">
        <p class="text-center mb-2">مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾</p>
        <p class="text-base text-gray-600 italic mb-1 text-center">Minal-jinnati wan-nas</p>
        <p class="text-base text-gray-700 text-center">From among the jinn and mankind</p>
      </div>
    </div>`
  }
];

// No need for additional code, the array is already available globally
