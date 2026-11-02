import type { GuideEntry, Source } from '../guide-schema';

const SRC: Record<string, Source> = {
  district: {
    label: {
      hi: 'पटना जिला प्रशासन — गोलघर का इतिहास पृष्ठ',
      en: 'Patna District Administration — Golghar history page'
    },
    url: 'https://patna.nic.in/tourist-place/gol-ghar/'
  },
  bt: {
    label: {
      hi: 'बिहार पर्यटन — गंतव्य सूची',
      en: 'Bihar Tourism — destination listing'
    },
    url: 'https://tourism.bihar.gov.in/'
  },
  ii: {
    label: {
      hi: 'Incredible India, पर्यटन मंत्रालय — गोलघर प्रविष्टि',
      en: 'Incredible India, Ministry of Tourism — Golghar entry'
    },
    url: 'https://www.incredibleindia.org/'
  },
  pmc: {
    label: {
      hi: 'पटना नगर निगम — शहर प्रशासन जानकारी',
      en: 'Patna Municipal Corporation — city administration information'
    },
    url: 'https://pmc.bihar.gov.in/'
  },
  maps: {
    label: {
      hi: 'Google Maps सार्वजनिक सूची (23 अक्टूबर 2026 को देखी गई)',
      en: 'Google Maps public listing (observed 23 October 2026)'
    },
    url: 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8'
  }
};

const sourcesHistory = [SRC.district, SRC.bt, SRC.ii];
const sourcesStatus = [SRC.district, SRC.bt, SRC.maps];

export const history: GuideEntry[] = [
  {
    path: 'history',
    group: 'history',
    priority: 1,
    title: {
      hi: 'गोलघर पटना का इतिहास: 1786 में क्यों बना',
      en: 'History of Golghar, Patna: Why It Was Built in 1786'
    },
    description: {
      hi: 'गोलघर पटना का इतिहास — 1786 में बने गोल अनाजघर की पृष्ठभूमि, नाम का अर्थ, दर्ज अभिलेख और लोक-कथाओं से अलग रखी गई बातें।',
      en: 'The history of Golghar, Patna: why the round granary was built in 1786, what its name means, what records say, and how that differs from local legend.'
    },
    h1: { hi: 'गोलघर का इतिहास', en: 'The history of Golghar' },
    transport: {
      hi: 'गोलघर मध्य पटना में अशोक राजपथ रोड पर है; इतिहास पढ़ते समय नक्शा साथ रखें ताकि आज का परिदृश्य साफ़ रहे।',
      en: 'Golghar stands on Ashok Rajpath Road in central Patna; keep the map to hand while reading, so today’s setting stays clear.'
    },
    intro: {
      hi: 'गोलघर पटना का सबसे पुराना और सबसे पहचाने जाने वाला औपनिवेशिक स्मारक है। यह 1786 में बना एक विशाल गोल अनाजघर है, जिसका उद्देश्य अनाज जमा करना था। यह पृष्ठ बताता है कि यह कब और क्यों बना, नाम का क्या अर्थ है, और कहाँ दर्ज अभिलेख समाप्त होकर लोक-कथाएँ शुरू होती हैं।',
      en: 'Golghar is the oldest and most recognisable colonial-era monument in Patna. Built in 1786, it is a large round grain storehouse, and that single purpose explains almost everything about its shape. This page covers when and why it was built, what the name means, and where documented records end and local legend begins.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'इमारत कब बनी' },
        {
          t: 'p',
          text: 'गोलघर का निर्माण 1786 में हुआ। यह उस दौर में बना जब इस क्षेत्र पर ईस्ट इंडिया कंपनी का प्रशासन था और पटना बंगाल प्रेसीडेंसी का हिस्सा था। ऐतिहासिक विवरणों में इसका निर्माण-प्रभार कैप्टन जॉन गार्स्टिन को दिया जाता है; यह विवरण संग्रहालय-गाइडों में सबसे आम तौर पर दोहराया जाता है।'
        },
        { t: 'h2', text: 'क्यों बना: अकाल से सबक' },
        {
          t: 'p',
          text: 'गोलघर का सीधा संबंध 1770 के बंगाल अकाल से जोड़ा जाता है। उस अकाल में बड़ी संख्या में लोगों की जान गई थी और अनाज की कमी ने संकट बढ़ाया था। इसके बाद प्रशासन ने अनाज को सुरक्षित और शुष्क रखने के लिए बड़ा भंडार बनाने की योजना बनाई, ताकि भविष्य में ऐसी स्थिति में भंडार उपलब्ध रहे।'
        },
        {
          t: 'table',
          head: ['प्रश्न', 'जानकारी'],
          rows: [
            ['निर्माण वर्ष', '1786'],
            ['उद्देश्य', 'अनाज भंडारण'],
            ['पृष्ठभूमि', '1770 के अकाल के बाद बनी भंडार-योजना'],
            ['स्थान', 'अशोक राजपथ रोड, मध्य पटना'],
            ['वर्तमान स्थिति', 'संरक्षित स्मारक; सीढ़ियों की वर्तमान अनुमति अपुष्ट']
          ]
        },
        { t: 'h2', text: 'नाम का अर्थ' },
        {
          t: 'p',
          text: 'गोलघर शब्द दो हिस्सों से बना है — गोल, यानी गोलाकार अथवा बेलनाकार आकार, और घर। नाम ही इसकी पहचान बता देता है: यह एक गोल इमारत है। यह भवन का वर्णन है, इसकी उपयोगिता का नहीं।'
        },
        { t: 'h2', text: 'दर्ज अभिलेख और लोक-कथा' },
        {
          t: 'p',
          text: 'गोलघर के बारे में कई किस्से सुनाए जाते हैं, जिनमें इसकी उपयोगिता और अनाज भरने के तरीके से जुड़ी बातें शामिल हैं। इनमें से कुछ बातों का आधार दर्ज अभिलेख हैं, और कुछ स्थानीय मौखिक परंपरा का हिस्सा हैं।'
        },
        {
          t: 'note',
          text: 'किसी भी ऐसी लोककथा को तथ्य न मानें जिसका स्रोत न बताया गया हो। इस पृष्ठ पर केवल वे बातें दी गई हैं जो सार्वजनिक अभिलेखों में दोहराई जाती हैं; बाकी को अनुमान मानें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गुंबद और वास्तुकला', path: 'architecture' },
            { label: '145 सीढ़ियों का उद्देश्य', path: 'history/staircases' },
            { label: '1770 का अकाल और भंडार', path: 'history/granary-famine' },
            { label: 'मरम्मत की स्थिति', path: 'restoration-status' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'When it was built' },
        {
          t: 'p',
          text: 'Golghar was built in 1786. It dates from a period when this region was under East India Company administration and Patna formed part of the Bengal Presidency. Historical accounts usually credit Captain John Garstin with its construction, a detail most commonly repeated in museum and guide material.'
        },
        { t: 'h2', text: 'Why it was built: a lesson from famine' },
        {
          t: 'p',
          text: 'Golghar is directly linked to the Bengal famine of 1770, in which a large number of people died and food shortage deepened the crisis. Afterwards the administration planned a large storehouse that could keep grain safe and dry, so that stock would be available if such a situation returned.'
        },
        {
          t: 'table',
          head: ['Question', 'Information'],
          rows: [
            ['Year built', '1786'],
            ['Purpose', 'Grain storage'],
            ['Background', 'A storage plan drawn up after the 1770 famine'],
            ['Location', 'Ashok Rajpath Road, central Patna'],
            ['Current status', 'Protected monument; stair access currently unconfirmed']
          ]
        },
        { t: 'h2', text: 'What the name means' },
        {
          t: 'p',
          text: 'Golghar combines two parts: gol, meaning round or cylindrical, and ghar, meaning house. The name describes the building rather than its use — it is a round house. That description is about shape, not function.'
        },
        { t: 'h2', text: 'Records and local legend' },
        {
          t: 'p',
          text: 'Several stories circulate about Golghar, including how it was used and how grain was filled. Some of what is repeated has a basis in records; other parts belong to local oral tradition.'
        },
        {
          t: 'note',
          text: 'Do not treat any legend as fact unless a source is named for it. This page gives only what public records commonly repeat; treat everything else as conjecture.'
        },
        {
          t: 'links',
          items: [
            { label: 'The dome and architecture', path: 'architecture' },
            { label: 'Purpose of the 145 stairs', path: 'history/staircases' },
            { label: 'The 1770 famine and the granary', path: 'history/granary-famine' },
            { label: 'Restoration status', path: 'restoration-status' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर कब बना था?', a: 'सार्वजनिक अभिलेखों में गोलघर का निर्माण वर्ष 1786 बताया जाता है।' },
        { q: 'गोलघर क्यों बनाया गया?', a: 'इसे अनाज भंडारण के लिए बनाया गया था, और इसकी योजना 1770 के अकाल के बाद बनी थी।' },
        { q: 'गोलघर नाम का क्या अर्थ है?', a: 'गोल का अर्थ गोलाकार और घर का अर्थ भवन है — अर्थात गोल आकार की इमारत।' }
      ],
      en: [
        { q: 'When was Golghar built?', a: 'Public records give 1786 as the year Golghar was built.' },
        { q: 'Why was Golghar built?', a: 'It was built for grain storage, planned after the famine of 1770.' },
        { q: 'What does the name Golghar mean?', a: 'Gol means round and ghar means house — a round building.' }
      ]
    },
    sources: sourcesHistory,
    related: ['architecture', 'history/staircases', 'history/granary-famine', 'restoration-status']
  },
  {
    path: 'architecture',
    group: 'history',
    priority: 1,
    title: {
      hi: 'गोलघर की वास्तुकला: गुंबद, दीवारें और बिना स्तंभ की बनावट',
      en: 'Golghar Architecture: Dome, Thick Walls and a Pillarless Interior'
    },
    description: {
      hi: 'गोलघर की बनावट समझें — गोलाकार गुंबद, नीचे से मोटी दीवारें, भीतर स्तंभ रहित खुली जगह और बाहर लिपटी घुमावदार सीढ़ियाँ। आसान शब्दों में।',
      en: 'How Golghar is put together — a round dome, walls that thicken towards the base, a pillarless interior and stairs that wind up the outside. Explained plainly.'
    },
    h1: { hi: 'गोलघर की वास्तुकला', en: 'Golghar architecture' },
    transport: {
      hi: 'इमारत का गोल आकार और गुंबद नक्शे पर स्थान देखकर बेहतर समझ आता है; गोलघर अशोक राजपथ रोड पर है।',
      en: 'The round form and dome are easier to picture with the location in view; Golghar stands on Ashok Rajpath Road.'
    },
    intro: {
      hi: 'गोलघर देखने में साधारण लगता है, पर इसकी बनावट पूरी तरह अपने काम के अनुसार बनी है। इस पृष्ठ में बताया गया है कि गुंबद, दीवारें और सीढ़ियाँ किस तरह एक भंडार के रूप में इसके उपयोग से जुड़ी हैं, और कौन-सी बातें अलग-अलग स्रोतों में अलग-अलग बताई जाती हैं।',
      en: 'Golghar looks simple, but every part of it is shaped by its job as a grain store. This page explains how the dome, the walls and the stairs relate to that use, and which details are reported differently by different sources.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'एक नज़र में बनावट' },
        {
          t: 'table',
          head: ['हिस्सा', 'बनावट'],
          rows: [
            ['आकार', 'गोलाकार, ऊपर गुंबद की ओर ढलान'],
            ['भीतरी हिस्सा', 'स्तंभ रहित, खुली गोल जगह'],
            ['दीवारें', 'आधार पर मोटी, ऊपर की ओर पतली'],
            ['प्रवेश', 'नीचे की ओर एक द्वार'],
            ['सीढ़ियाँ', 'बाहर की ओर लिपटी घुमावदार सीढ़ियाँ']
          ]
        },
        { t: 'h2', text: 'गुंबद और बिना स्तंभ की छत' },
        {
          t: 'p',
          text: 'गोलघर की सबसे बड़ी खासियत यह है कि भीतर कोई स्तंभ नहीं है। इतनी बड़ी गोल जगह को सहारा देने का काम दीवारों और गुंबद की वक्रता करती है। गोल आकार में भार दीवारों की ओर फैलता है, इसलिए अंदर खाली जगह बनी रहती है — जो अनाज भरने और निकालने के लिए ज़रूरी थी।'
        },
        { t: 'h2', text: 'दीवारें क्यों मोटी हैं' },
        {
          t: 'p',
          text: 'गोलघर की दीवारें आधार पर काफ़ी मोटी हैं और ऊपर जाकर पतली होती जाती हैं। ऐसा दो कारणों से किया गया: पहला, नीचे के दबाव को सहन करना; दूसरा, भीतर का तापमान और नमी ज़्यादा न बदले, जिससे अनाज सुरक्षित रहे। मोटी दीवारें भंडार को बाहर की गर्मी और बारिश से बचाने में मदद करती हैं।'
        },
        {
          t: 'note',
          text: 'गोलघर की ऊँचाई, व्यास और दीवार की मोटाई के आँकड़े अलग-अलग स्रोतों में अलग-अलग मिलते हैं। यहाँ कोई निश्चित माप नहीं दिया गया है, क्योंकि इस समीक्षा में सभी स्रोतों का मेल नहीं बैठा।'
        },
        { t: 'h2', text: 'बाहर की घुमावदार सीढ़ियाँ' },
        {
          t: 'p',
          text: 'इमारत के बाहर सीढ़ियाँ लिपटी हुई ऊपर तक जाती हैं। ये सीढ़ियाँ सजावट नहीं, बल्कि काम के लिए बनी थीं — ऊपर के खुलने तक पहुँचकर अनाज भरना और निकालना। इनके बारे में अलग पृष्ठ में विस्तार से लिखा गया है।'
        },
        {
          t: 'links',
          items: [
            { label: '145 सीढ़ियों का उद्देश्य', path: 'history/staircases' },
            { label: 'फिलहाल ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'मरम्मत की स्थिति', path: 'restoration-status' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The structure at a glance' },
        {
          t: 'table',
          head: ['Part', 'How it is built'],
          rows: [
            ['Shape', 'Round, curving inwards towards a dome'],
            ['Interior', 'Pillarless, one open circular space'],
            ['Walls', 'Thick at the base, tapering upwards'],
            ['Entrance', 'A single doorway at ground level'],
            ['Stairs', 'Winding stairs on the outside']
          ]
        },
        { t: 'h2', text: 'The dome and the pillarless roof' },
        {
          t: 'p',
          text: 'The most striking thing about Golghar is that there is no pillar inside. Holding up a circular space that wide is the job of the walls and the curve of the dome. In a round shape, load spreads outwards towards the wall, which is why the interior stays empty — and an empty interior was exactly what filling and emptying grain required.'
        },
        { t: 'h2', text: 'Why the walls are thick' },
        {
          t: 'p',
          text: 'The walls of Golghar are very thick at the base and grow thinner with height. That did two things: it carried the weight pressing down from above, and it kept the temperature and humidity inside more stable so the grain stayed in better condition. Thick walls also slow the heat and rain coming in from outside.'
        },
        {
          t: 'note',
          text: 'Published figures for the height, diameter and wall thickness of Golghar differ between sources. No single measurement is repeated here, because the sources reviewed for this guide did not agree.'
        },
        { t: 'h2', text: 'The winding stairs outside' },
        {
          t: 'p',
          text: 'The stairs spiral up the outside of the building. They were not decorative: they gave access to an opening near the top so that grain could be loaded in and taken out. They are covered in more detail on their own page.'
        },
        {
          t: 'links',
          items: [
            { label: 'Purpose of the 145 stairs', path: 'history/staircases' },
            { label: 'Whether the top is open right now', path: 'visit/staircase-access' },
            { label: 'Restoration status', path: 'restoration-status' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर के अंदर स्तंभ क्यों नहीं हैं?', a: 'गोल आकार में भार दीवारों की ओर फैलता है, इसलिए भीतर स्तंभ की ज़रूरत नहीं पड़ी और अनाज भरने के लिए खुली जगह मिली।' },
        { q: 'गोलघर की दीवारें मोटी क्यों हैं?', a: 'मोटी दीवारें वज़न सहन करती हैं और भीतर का तापमान व नमी स्थिर रखकर अनाज को बचाने में मदद करती हैं।' },
        { q: 'गोलघर की ऊँचाई कितनी है?', a: 'प्रकाशित आँकड़े अलग-अलग स्रोतों में अलग मिलते हैं, इसलिए यहाँ कोई एक निश्चित माप नहीं दिया गया।' }
      ],
      en: [
        { q: 'Why is there no pillar inside Golghar?', a: 'In a round shape the load spreads towards the walls, so no columns were needed and the interior stayed open for grain.' },
        { q: 'Why are the walls so thick?', a: 'Thick walls carry the weight above and keep the interior temperature and humidity steadier, which helps protect stored grain.' },
        { q: 'How tall is Golghar?', a: 'Published figures differ between sources, so no single measurement is given here.' }
      ]
    },
    sources: sourcesHistory,
    related: ['history', 'history/staircases', 'visit/staircase-access', 'restoration-status']
  },
  {
    path: 'history/staircases',
    group: 'history',
    priority: 1,
    title: {
      hi: 'गोलघर की 145 सीढ़ियाँ: डिज़ाइन और उद्देश्य',
      en: 'Golghar’s 145 Stairs: Design and Purpose'
    },
    description: {
      hi: 'गोलघर की 145 घुमावदार सीढ़ियाँ किस लिए बनी थीं, अनाज भरने में उनका क्या काम था, और यह इतिहास आज की अनुमति से अलग क्यों है।',
      en: 'Why Golghar has 145 winding stairs, how they were used for loading grain, and why that history is not the same as permission to climb today.'
    },
    h1: { hi: '145 सीढ़ियाँ: डिज़ाइन और उद्देश्य', en: 'The 145 stairs: design and purpose' },
    transport: {
      hi: '145 सीढ़ियाँ इमारत के बाहर लिपटी हुई हैं; नक्शे पर स्थान देखकर ही तय करें कि आप किस ओर से इमारत तक पहुँचेंगे।',
      en: 'The 145 stairs wrap around the outside of the building; use the map to judge which side you will approach it from.'
    },
    intro: {
      hi: 'गोलघर के बाहर 145 घुमावदार सीढ़ियाँ हैं। ये गोल इमारत के चारों ओर लिपटी हुई ऊपर तक जाती हैं। यह पृष्ठ बताता है कि ये सीढ़ियाँ क्यों बनीं और अनाज भंडारण में इनका क्या काम था — साथ ही यह भी स्पष्ट करता है कि ऐतिहासिक विवरण आज ऊपर जाने की अनुमति नहीं है।',
      en: 'Golghar has 145 winding stairs on the outside, spiralling around the round building up to an opening near the top. This page explains why they were built and what role they played in storing grain — and makes one point explicitly: a historical description is not permission to climb today.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'सीढ़ियों की बनावट' },
        {
          t: 'p',
          text: 'सीढ़ियाँ गोल इमारत की बाहरी दीवार के साथ-साथ घूमती हुई ऊपर जाती हैं। इस तरह की बनावट में सीढ़ी की लंबाई बढ़ जाती है, ढलान धीमी रहती है, और ऊपर पहुँचने का रास्ता इमारत की गोलाई के अनुसार ढल जाता है।'
        },
        { t: 'h2', text: 'अनाज भरने में इनका उपयोग' },
        {
          t: 'p',
          text: 'गोलघर अनाज भंडारने के लिए बना था, और इसमें भरने-निकालने का रास्ता ऊपर से था। ऐतिहासिक विवरणों के अनुसार श्रमिक ऊपर के खुलने तक अनाज लेकर चढ़ते थे और उसे भीतर डालते थे। बोरे ढोने के लिए ऊपर जाना और नीचे उतरना दो अलग दिशाओं में होता था, जिससे भीड़ न लगे।'
        },
        {
          t: 'table',
          head: ['पहलू', 'विवरण'],
          rows: [
            ['सीढ़ियों की संख्या', '145 (जिला प्रशासन के इतिहास पृष्ठ के अनुसार)'],
            ['स्थान', 'इमारत के बाहर, गोलाकार लिपटी हुई'],
            ['उद्देश्य', 'ऊपर के खुलने तक पहुँचकर अनाज भरना और निकालना'],
            ['आज की अनुमति', 'इस समीक्षा में पुष्ट नहीं']
          ]
        },
        { t: 'h2', text: 'इतिहास और आज की स्थिति अलग हैं' },
        {
          t: 'p',
          text: 'यह जानना ज़रूरी है कि 145 सीढ़ियों का ज़िक्र एक ऐतिहासिक विवरण है। 2026 की मरम्मत-रिपोर्टों में कहा गया कि सीढ़ियाँ लंबे समय से प्रतिबंधित रही हैं और मरम्मत की योजना बन रही है। इसलिए यात्रा की योजना बनाते समय यह न मानें कि ऊपर जाना संभव है।'
        },
        {
          t: 'note',
          text: 'यहाँ दिया गया विवरण केवल यह बताता है कि सीढ़ियाँ क्यों बनीं। यह ऊपर जाने की अनुमति का संकेत नहीं है। मौके पर लगे संकेत और कर्मचारियों के निर्देश ही अंतिम माने जाएँ।'
        },
        {
          t: 'links',
          items: [
            { label: 'फिलहाल ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'गुंबद और वास्तुकला', path: 'architecture' },
            { label: 'मरम्मत की स्थिति', path: 'restoration-status' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'How the stairs are shaped' },
        {
          t: 'p',
          text: 'The stairs wind along the outer wall of the round building as they rise. That shape lengthens each step of the climb, keeps the slope gentle, and lets the route follow the curve of the structure instead of cutting straight through it.'
        },
        { t: 'h2', text: 'How they were used for grain' },
        {
          t: 'p',
          text: 'Golghar was built to store grain, and grain went in and out from the top. Historical accounts describe workers carrying grain up to the opening and tipping it inside. Carrying sacks up and coming down were kept to separate directions so the traffic did not jam on the narrow stairs.'
        },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Number of stairs', '145 (per the district administration history page)'],
            ['Position', 'Outside the building, winding round it'],
            ['Purpose', 'Reach the upper opening to load and remove grain'],
            ['Access today', 'Not confirmed in this review']
          ]
        },
        { t: 'h2', text: 'History and today are different things' },
        {
          t: 'p',
          text: 'It matters that the 145 stairs are a historical record. Reports in 2026 noted that the stairs had long been restricted and that repairs were being planned. So when planning a visit, do not assume the climb is possible.'
        },
        {
          t: 'note',
          text: 'The description here explains only why the stairs were built. It is not a sign that climbing is allowed. On site, posted notices and staff instructions are the final word.'
        },
        {
          t: 'links',
          items: [
            { label: 'Whether the top is open right now', path: 'visit/staircase-access' },
            { label: 'The dome and architecture', path: 'architecture' },
            { label: 'Restoration status', path: 'restoration-status' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर में कितनी सीढ़ियाँ हैं?', a: 'जिला प्रशासन के इतिहास पृष्ठ में 145 सीढ़ियों का ज़िक्र है।' },
        { q: 'क्या आज इन सीढ़ियों से ऊपर जा सकते हैं?', a: 'इस समीक्षा में ऊपर जाने की वर्तमान अनुमति की पुष्टि नहीं हुई; 2026 की रिपोर्टों में लंबे समय से प्रतिबंध का ज़िक्र था।' },
        { q: 'सीढ़ियाँ बनी क्यों थीं?', a: 'अनाज भरने और निकालने के लिए, क्योंकि भंडार का उपयोग ऊपर के खुलने से होता था।' }
      ],
      en: [
        { q: 'How many stairs does Golghar have?', a: 'The district administration history page records 145 stairs.' },
        { q: 'Can you climb them today?', a: 'This review could not confirm current permission; 2026 reports noted a long-standing restriction.' },
        { q: 'Why were the stairs built?', a: 'To load and remove grain, because the store was filled through an opening at the top.' }
      ]
    },
    sources: sourcesHistory,
    related: ['architecture', 'visit/staircase-access', 'restoration-status', 'history']
  },
  {
    path: 'history/granary-famine',
    group: 'history',
    priority: 2,
    title: {
      hi: '1770 का अकाल और गोलघर बनाने का उद्देश्य',
      en: 'The 1770 Famine and the Purpose Behind Golghar'
    },
    description: {
      hi: '1770 के बंगाल अकाल ने पटना क्षेत्र को कैसे प्रभावित किया और उसके बाद अनाज भंडार बनाने की योजना क्यों बनी — गोलघर के असली उद्देश्य की कहानी।',
      en: 'How the Bengal famine of 1770 affected the Patna region, and why a grain store was planned afterwards — the story behind Golghar’s real purpose.'
    },
    h1: { hi: '1770 का अकाल और भंडार का उद्देश्य', en: 'The 1770 famine and the purpose of the granary' },
    transport: {
      hi: 'अकाल और अनाज भंडारण का इतिहास पढ़ते समय नक्शे पर गोलघर की स्थिति देखें — यह गंगा की ओर जाने वाले पुराने मार्गों के पास, अशोक राजपथ रोड पर खड़ा है।',
      en: 'When reading about the famine and grain storage, keep the location in view — Golghar stands on Ashok Rajpath Road, close to the old routes down to the Ganga.'
    },
    intro: {
      hi: 'गोलघर को उसके आकार से नहीं, उसके मकसद से समझा जाना चाहिए। यह एक ऐसे संकट की प्रतिक्रिया था जिसने इस पूरे क्षेत्र को हिला दिया था। यह पृष्ठ बताता है कि भंडार बनाने की योजना क्यों बनी और वह योजना किस हद तक अपने मकसद में सफल रही।',
      en: 'Golghar is best understood by its purpose rather than its shape. It was a response to a crisis that shook this entire region. This page explains why the storage plan was made and how far it actually achieved what it set out to do.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: '1770 का संकट' },
        {
          t: 'p',
          text: '1770 के बंगाल अकाल में बड़ी संख्या में लोगों की जान गई और अनाज की कमी ने स्थिति को और कठिन बना दिया। पटना और उसके आसपास का क्षेत्र भी इस संकट से प्रभावित हुआ। यह वह पृष्ठभूमि है जिसमें अनाज सुरक्षित रखने की ज़रूरत सबसे ज़्यादा महसूस की गई।'
        },
        { t: 'h2', text: 'भंडार बनाने की योजना' },
        {
          t: 'p',
          text: 'संकट के बाद प्रशासन ने बड़ी मात्रा में अनाज जमा करने की योजना बनाई, ताकि किसी भविष्य की कमी में भंडार काम आ सके। इसी सोच से 1786 में गोलघर बना। इसका ढाँचा — मोटी दीवारें, बंद गुंबद, ऊपर से भरने का रास्ता — सीधे इसी उद्देश्य से तय हुआ।'
        },
        {
          t: 'table',
          head: ['प्रश्न', 'जानकारी'],
          rows: [
            ['संकट का वर्ष', '1770'],
            ['गोलघर का निर्माण', '1786'],
            ['मुख्य उद्देश्य', 'अनाज सुरक्षित भंडारण'],
            ['तरीका', 'बंद, सूखा भंडार जिसमें ऊपर से अनाज भरा जाए']
          ]
        },
        { t: 'h2', text: 'योजना की सीमाएँ' },
        {
          t: 'p',
          text: 'बड़ा भंडार होना और उसका असरदार होना दो अलग बातें हैं। ऐतिहासिक विवरणों में यह भी दर्ज है कि गोलघर अपने पूरे इरादे के अनुसार उपयोगी साबित नहीं हुआ। इसका एक बड़ा कारण भंडार के भरने और खाली होने की प्रक्रिया से जुड़ी व्यावहारिक कठिनाइयाँ बताई जाती हैं।'
        },
        {
          t: 'note',
          text: 'गोलघर को भरने और उसके वास्तविक उपयोग के बारे में कई बातें कही जाती हैं, पर सभी का स्रोत एक जैसा नहीं है। किसी निष्कर्ष को अंतिम मानने से पहले दिए गए अभिलेख देखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गोलघर का इतिहास', path: 'history' },
            { label: '145 सीढ़ियों का उद्देश्य', path: 'history/staircases' },
            { label: 'मरम्मत की स्थिति', path: 'restoration-status' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The crisis of 1770' },
        {
          t: 'p',
          text: 'The Bengal famine of 1770 killed a very large number of people and food shortage made the situation worse. Patna and the surrounding region were affected too. That is the setting in which the need to store grain safely was felt most sharply.'
        },
        { t: 'h2', text: 'The plan to build a store' },
        {
          t: 'p',
          text: 'After the crisis the administration planned a large reserve of grain, so that stock would be available if shortage returned. Golghar was built in 1786 out of that thinking. Its design — thick walls, a closed dome, filling from the top — followed directly from that purpose.'
        },
        {
          t: 'table',
          head: ['Question', 'Information'],
          rows: [
            ['Year of the crisis', '1770'],
            ['Golghar built', '1786'],
            ['Main purpose', 'Safe storage of grain'],
            ['Method', 'A closed, dry store filled from the top']
          ]
        },
        { t: 'h2', text: 'Limits of the plan' },
        {
          t: 'p',
          text: 'Having a large store and having an effective one are two different things. Historical accounts also record that Golghar did not work out as fully as intended. A major reason cited is the practical difficulty of filling and emptying a store of this design.'
        },
        {
          t: 'note',
          text: 'Several claims are made about how Golghar was filled and how it was actually used, and they do not all rest on the same source. Read the records listed below before treating any one account as final.'
        },
        {
          t: 'links',
          items: [
            { label: 'History of Golghar', path: 'history' },
            { label: 'Purpose of the 145 stairs', path: 'history/staircases' },
            { label: 'Restoration status', path: 'restoration-status' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर किस अकाल से जुड़ा है?', a: 'गोलघर की योजना 1770 के बंगाल अकाल के बाद बनी थी, और इसका निर्माण 1786 में हुआ।' },
        { q: 'क्या गोलघर अपने मकसद में सफल रहा?', a: 'ऐतिहासिक विवरणों में कहा जाता है कि गोलघर अपने पूरे इरादे के अनुसार उपयोगी नहीं साबित हुआ।' },
        { q: 'गोलघर में अनाज कैसे भरा जाता था?', a: 'भंडार में ऊपर के खुलने से अनाज भरा जाता था, जहाँ बाहर की घुमावदार सीढ़ियाँ पहुँचती थीं।' }
      ],
      en: [
        { q: 'Which famine is Golghar linked to?', a: 'It was planned after the Bengal famine of 1770 and built in 1786.' },
        { q: 'Did Golghar succeed at its purpose?', a: 'Historical accounts record that it did not work out as fully as intended.' },
        { q: 'How was grain put into Golghar?', a: 'Through an opening at the top, reached by the winding stairs on the outside.' }
      ]
    },
    sources: sourcesHistory,
    related: ['history', 'history/staircases', 'architecture', 'restoration-status']
  },
  {
    path: 'restoration-status',
    group: 'history',
    priority: 1,
    title: {
      hi: 'गोलघर की मरम्मत और संरक्षण की स्थिति',
      en: 'Golghar Restoration and Conservation Status'
    },
    description: {
      hi: 'गोलघर की मरम्मत, संरक्षण और सीढ़ियों की अनुमति पर उपलब्ध जानकारी — क्या पुष्ट है, क्या अपुष्ट है और दौरे से पहले क्या जाँचें।',
      en: 'What is known about Golghar restoration, conservation and stair access — what is confirmed, what is not, and what to check before a visit.'
    },
    h1: { hi: 'मरम्मत और संरक्षण की स्थिति', en: 'Restoration and conservation status' },
    transport: {
      hi: 'मरम्मत और घेराबंदी की स्थिति बदलती रहती है, इसलिए नक्शे पर स्थान देखकर आएँ और प्रवेश द्वार की पुष्टि स्थल पर ही करें।',
      en: 'Restoration work and barriers change, so check the location on the map and confirm the entrance on site before you set out.'
    },
    intro: {
      hi: 'गोलघर को संरक्षित स्मारक के रूप में रखा जाता है, और समय-समय पर इसकी मरम्मत की ज़रूरत पड़ती रही है। यह पृष्ठ उपलब्ध जानकारी को साफ़-साफ़ बाँटता है: क्या पुष्ट है, क्या केवल योजना के रूप में दर्ज है, और क्या अभी अपुष्ट है।',
      en: 'Golghar is maintained as a protected monument and has needed repair work from time to time. This page separates the available information clearly: what is confirmed, what exists only as a plan, and what remains unconfirmed.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'वर्तमान स्थिति: अपुष्ट' },
        {
          t: 'p',
          text: 'इस समीक्षा में यह पुष्ट नहीं हुआ कि इन दिनों गोलघर की सीढ़ियों से ऊपर जाने की अनुमति है या नहीं। 2026 की मरम्मत-रिपोर्टों में कहा गया था कि सीढ़ियाँ लंबे समय से प्रतिबंधित हैं और मरम्मत तथा पुनः-खोलने की योजना पर काम चल रहा है। किसी भी रिपोर्ट में पूरा होने की पुष्ट तारीख नहीं मिली।'
        },
        {
          t: 'table',
          head: ['प्रश्न', 'स्थिति'],
          rows: [
            ['क्या सीढ़ियाँ खुली हैं?', 'इस समीक्षा में पुष्ट नहीं'],
            ['क्या मरम्मत चल रही है?', 'रिपोर्टों में योजना का ज़िक्र है'],
            ['पूरा होने की तारीख', 'कोई पुष्ट तारीख नहीं मिली'],
            ['परिसर खुलने का समय', 'स्रोतों में अंतर — अलग पृष्ठ देखें']
          ]
        },
        { t: 'h2', text: 'यात्रा से पहले क्या जाँचें' },
        {
          t: 'ul',
          items: [
            'यात्रा से पहले बिहार पर्यटन या जिला प्रशासन की वेबसाइट पर नवीनतम सूचना देखें।',
            'मौके पर लगे नोटिस और सुरक्षा-निर्देश सबसे प्राथमिक मानें।',
            'अगर ऊपर जाना ही मुख्य उद्देश्य है, तो यात्रा की योजना इस पर न टिकाएँ।',
            'परिसर के बाहर से इमारत देखना और फ़ोटो लेना आम तौर पर संभव रहता है।'
          ]
        },
        { t: 'h2', text: 'संरक्षण क्यों ज़रूरी है' },
        {
          t: 'p',
          text: 'गोलघर पत्थर और चूने जैसी सामग्री से बना है, और ऐसी इमारतों पर उमस, बारिश और नमी का असर लंबे समय में पड़ता है। मरम्मत का मकसद ढाँचे को सुरक्षित रखना और देखने वालों की सुरक्षा बनाए रखना दोनों है। इसीलिए कभी-कभी कुछ हिस्सों पर अस्थायी रोक लगाई जाती है।'
        },
        {
          t: 'note',
          text: 'मरम्मत की तारीखों और अनुमति के बारे में स्थिति बदलती रहती है। इस पृष्ठ की जानकारी समीक्षा की तारीख तक की है; ताज़ा स्थिति के लिए आधिकारिक सूचना देखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'फिलहाल ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'खुलने का समय और स्रोतों में अंतर', path: 'visit/timings' },
            { label: 'गोलघर का इतिहास', path: 'history' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Current status: unconfirmed' },
        {
          t: 'p',
          text: 'This review could not confirm whether the stairs of Golghar are currently open to visitors. Restoration reports in 2026 stated that the stairs had long been restricted and that repair and reopening were being planned. No report reviewed here gave a confirmed completion date.'
        },
        {
          t: 'table',
          head: ['Question', 'Status'],
          rows: [
            ['Are the stairs open?', 'Not confirmed in this review'],
            ['Is restoration under way?', 'Reports mention a plan'],
            ['Completion date', 'No confirmed date found'],
            ['Complex opening hours', 'Sources differ — see the dedicated page']
          ]
        },
        { t: 'h2', text: 'What to check before you go' },
        {
          t: 'ul',
          items: [
            'Check the Bihar Tourism or district administration site for the latest notice before travelling.',
            'Treat on-site notices and safety instructions as the most reliable guide.',
            'If climbing is the main reason for your trip, do not build the plan around it.',
            'Viewing the building from outside and taking photographs is generally possible.'
          ]
        },
        { t: 'h2', text: 'Why conservation matters' },
        {
          t: 'p',
          text: 'Golghar is built from materials such as stone and lime, and buildings like this are affected over long periods by humidity, rain and moisture. Restoration work has two aims: keeping the structure safe and keeping visitors safe. That is why parts of a monument are sometimes temporarily closed.'
        },
        {
          t: 'note',
          text: 'Restoration dates and access permission change over time. The information on this page is current as of the review date; check official notices for the latest position.'
        },
        {
          t: 'links',
          items: [
            { label: 'Whether the top is open right now', path: 'visit/staircase-access' },
            { label: 'Opening hours and why sources differ', path: 'visit/timings' },
            { label: 'History of Golghar', path: 'history' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या गोलघर की सीढ़ियाँ अभी खुली हैं?', a: 'इस समीक्षा में पुष्टि नहीं हुई। 2026 की रिपोर्टों में लंबे समय से प्रतिबंध और मरम्मत की योजना का ज़िक्र था।' },
        { q: 'मरम्मत कब पूरी होगी?', a: 'इस समीक्षा में कोई पुष्ट समय-सारणी नहीं मिली।' },
        { q: 'क्या परिसर घूमने लायक है अगर ऊपर न जा सकें?', a: 'हाँ, इमारत को बाहर से देखना और उसकी बनावट समझना अपने आप में उपयोगी अनुभव है।' }
      ],
      en: [
        { q: 'Are Golghar’s stairs open right now?', a: 'It could not be confirmed in this review. Reports from 2026 mentioned a long-standing restriction and plans for repair.' },
        { q: 'When will restoration finish?', a: 'No confirmed timeline was found in this review.' },
        { q: 'Is a visit still worthwhile if the top is closed?', a: 'Yes — seeing the building from outside and understanding its construction is worthwhile on its own.' }
      ]
    },
    sources: sourcesStatus,
    related: ['visit/staircase-access', 'history', 'architecture', 'history/staircases']
  },
  {
    path: 'learn/golghar-for-students',
    group: 'history',
    priority: 3,
    title: {
      hi: 'छात्रों के लिए गोलघर: शैक्षिक भ्रमण मार्गदर्शिका',
      en: 'Golghar for Students: A Guide to an Educational Visit'
    },
    description: {
      hi: 'स्कूल और कॉलेज समूहों के लिए गोलघर भ्रमण — क्या देखें, कौन-से सवाल पूछें, कक्षा में कैसे जोड़ें और किन बातों की पुष्टि पहले करें।',
      en: 'Planning a Golghar visit for a school or college group — what to look at, what questions to ask, how to link it to classwork and what to verify first.'
    },
    h1: { hi: 'छात्रों के लिए गोलघर', en: 'Golghar for students' },
    transport: {
      hi: 'स्कूल या कॉलेज समूह के साथ आते समय नक्शे पर स्थान देखकर बस या वाहन के उतरने की जगह तय करें; गोलघर अशोक राजपथ रोड पर है।',
      en: 'On a school or college visit, use the map to agree a drop-off point for the bus or vehicle; Golghar is on Ashok Rajpath Road.'
    },
    intro: {
      hi: 'गोलघर इतिहास, भूगोल और विज्ञान — तीनों विषयों को एक जगह जोड़ने वाला स्मारक है। यह पृष्ठ शिक्षकों और छात्रों के लिए एक व्यावहारिक ढाँचा देता है: भ्रमण से पहले क्या पढ़ें, मौके पर क्या देखें, और लौटकर क्या लिखें।',
      en: 'Golghar connects three subjects in one place: history, geography and science. This page gives teachers and students a practical structure — what to read before the visit, what to observe on site, and what to write up afterwards.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'भ्रमण से पहले की तैयारी' },
        {
          t: 'ul',
          items: [
            'समय-सारिणी: परिसर खुलने का समय स्रोतों में अलग है, इसलिए यात्रा से पहले पुष्टि करें।',
            'सुरक्षा: भीड़ वाले दिनों में समूह को छोटे हिस्सों में बाँटें।',
            'प्रश्न-पत्र: छात्रों को कुछ ऐसे सवाल पहले दें जिनके जवाब उन्हें मौके पर ढूँढने हैं।',
            'संदर्भ: गोलघर का निर्माण वर्ष और उसका उद्देश्य पहले पढ़ लें।'
          ]
        },
        { t: 'h2', text: 'मौके पर क्या देखें' },
        {
          t: 'table',
          head: ['देखने की बात', 'संबंधित विषय'],
          rows: [
            ['गोल आकार और गुंबद', 'भूगोल, भौतिकी'],
            ['बिना स्तंभ की भीतरी छत', 'भौतिकी, गणित'],
            ['नीचे मोटी दीवारें', 'भंडारण और तापमान'],
            ['बाहर की घुमावदार सीढ़ियाँ', 'इतिहास, अभियांत्रिकी'],
            ['अनाज भंडारण का उद्देश्य', 'इतिहास, अर्थशास्त्र']
          ]
        },
        { t: 'h2', text: 'कक्षा में जोड़ने के तरीके' },
        {
          t: 'p',
          text: 'भ्रमण के बाद छात्र गोल इमारत का नक्शा बना सकते हैं, यह समझा सकते हैं कि वज़न कैसे फैलता है, या 1770 के अकाल और उसके बाद बनी भंडार-योजना पर एक लेख लिख सकते हैं। ये गतिविधियाँ स्मारक को केवल देखने की जगह से आगे ले जाती हैं।'
        },
        {
          t: 'note',
          text: 'इस समीक्षा में गोलघर की ऊँचाई, व्यास या दीवार की मोटाई के आँकड़े स्रोतों में अलग-अलग मिले। विद्यार्थियों को कोई एक आँकड़ा याद कराने के बजाय यह सिखाएँ कि स्रोत कैसे मिलाए जाते हैं।'
        },
        { t: 'h2', text: 'सावधानियाँ' },
        {
          t: 'p',
          text: 'सीढ़ियों की वर्तमान अनुमति अपुष्ट है, इसलिए भ्रमण की योजना केवल ऊपर चढ़ने पर न टिकाएँ। समूह के साथ जाने पर मौके के निर्देशों का पालन करें और किसी भी प्रतिबंधित हिस्से में प्रवेश न करें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गोलघर का इतिहास', path: 'history' },
            { label: 'गुंबद और वास्तुकला', path: 'architecture' },
            { label: 'फिलहाल ऊपर जाने की स्थिति', path: 'visit/staircase-access' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Prepare before the visit' },
        {
          t: 'ul',
          items: [
            'Timings: sources give different opening hours, so confirm before setting out.',
            'Safety: split a large group into smaller batches on busy days.',
            'A question sheet: give students questions in advance to answer on site.',
            'Background: read up on the year Golghar was built and its purpose first.'
          ]
        },
        { t: 'h2', text: 'What to observe on site' },
        {
          t: 'table',
          head: ['Thing to observe', 'Subject link'],
          rows: [
            ['Round shape and dome', 'Geography, physics'],
            ['Pillarless interior roof', 'Physics, mathematics'],
            ['Thick walls at the base', 'Storage and temperature'],
            ['Winding stairs outside', 'History, engineering'],
            ['Purpose as a grain store', 'History, economics']
          ]
        },
        { t: 'h2', text: 'Ways to take it back to class' },
        {
          t: 'p',
          text: 'After the visit, students can draw a plan of the round building, explain how weight spreads in a dome, or write a short piece on the famine of 1770 and the storage plan that followed it. These activities turn the monument from something seen into something understood.'
        },
        {
          t: 'note',
          text: 'For this review, published figures for the height, diameter and wall thickness of Golghar differed between sources. Rather than asking students to memorise one number, use the site to teach how sources are compared.'
        },
        { t: 'h2', text: 'Cautions' },
        {
          t: 'p',
          text: 'Current permission to climb the stairs is unconfirmed, so do not build the trip around reaching the top. With a group, follow on-site instructions and do not enter any area that is closed off.'
        },
        {
          t: 'links',
          items: [
            { label: 'History of Golghar', path: 'history' },
            { label: 'The dome and architecture', path: 'architecture' },
            { label: 'Whether the top is open right now', path: 'visit/staircase-access' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या स्कूल समूह के लिए गोलघर उपयुक्त है?', a: 'हाँ, यह इतिहास और विज्ञान दोनों के लिए उपयुक्त स्थल है; समूह को छोटे हिस्सों में बाँटना बेहतर रहता है।' },
        { q: 'छात्रों को पहले क्या पढ़ाना चाहिए?', a: 'गोलघर का निर्माण वर्ष, उसका उद्देश्य और सीढ़ियों की वर्तमान स्थिति की अपुष्टता।' },
        { q: 'भ्रमण की योजना में क्या एहतियात रखें?', a: 'सीढ़ियों की अनुमति अपुष्ट है, इसलिए योजना को केवल ऊपर चढ़ने पर न टिकाएँ।' }
      ],
      en: [
        { q: 'Is Golghar suitable for a school group?', a: 'Yes — it works for both history and science, and splitting a group into batches is better.' },
        { q: 'What should students know beforehand?', a: 'The year it was built, its purpose, and that current access to the stairs is unconfirmed.' },
        { q: 'What precaution should the plan include?', a: 'Climbing access is unconfirmed, so do not build the itinerary around reaching the top.' }
      ]
    },
    sources: sourcesHistory,
    related: ['history', 'architecture', 'history/staircases', 'history/granary-famine']
  }
];
