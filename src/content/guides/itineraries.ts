import type { GuideEntry, Source } from '../guide-schema';

const SRC: Record<string, Source> = {
  bt: {
    label: {
      hi: 'बिहार पर्यटन — गंतव्य सूची',
      en: 'Bihar Tourism — destination listing'
    },
    url: 'https://tourism.bihar.gov.in/'
  },
  district: {
    label: {
      hi: 'पटना जिला प्रशासन — पर्यटन स्थल',
      en: 'Patna District Administration — tourist places'
    },
    url: 'https://patna.nic.in/tourist-place/gol-ghar/'
  },
  ii: {
    label: {
      hi: 'Incredible India, पर्यटन मंत्रालय — बिहार प्रविष्टियाँ',
      en: 'Incredible India, Ministry of Tourism — Bihar entries'
    },
    url: 'https://www.incredibleindia.org/'
  },
  maps: {
    label: {
      hi: 'Google Maps सार्वजनिक सूची (23 अक्टूबर 2026 को देखी गई)',
      en: 'Google Maps public listing (observed 23 October 2026)'
    },
    url: 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8'
  }
};

const sourcesAll = [SRC.bt, SRC.district, SRC.maps];

const routeCaveat: Record<'hi' | 'en', string> = {
  hi: 'यह सुझाया गया क्रम है, पुष्ट मिनट-दर-मिनट समय-सारिणी नहीं। रास्ते, प्रवेश-द्वार, भीड़ और खुलने का समय बदलते हैं, इसलिए यात्रा से पहले हर पड़ाव का समय जाँच लें और अपने दिन में थोड़ी छूट रखें।',
  en: 'This is a suggested order, not a confirmed minute-by-minute timetable. Routes, entrances, crowds and opening hours change, so check each stop before you travel and leave some slack in your day.'
};

const stairsCaveat: Record<'hi' | 'en', string> = {
  hi: 'इन योजनाओं में गोलघर की सीढ़ियों से ऊपर चढ़ना शामिल नहीं माना गया है, क्योंकि वर्तमान अनुमति अपुष्ट है।',
  en: 'These plans do not assume you can climb Golghar’s stairs, because current access is unconfirmed.'
};

export const itineraries: GuideEntry[] = [
  {
    path: 'itineraries/90-minutes',
    group: 'itineraries',
    priority: 2,
    title: {
      hi: 'गोलघर के लिए 90 मिनट: जल्दी वाली यात्रा योजना',
      en: '90 Minutes at Golghar: A Short Visit Plan'
    },
    description: {
      hi: 'अगर आपके पास केवल 60 से 90 मिनट हैं, तो गोलघर कैसे देखें — क्या प्राथमिकता दें, क्या छोड़ दें और सबसे तेज़ क्रम क्या है।',
      en: 'If you have only 60 to 90 minutes, how to see Golghar — what to prioritise, what to skip and the fastest order.'
    },
    h1: { hi: 'केवल 90 मिनट में गोलघर', en: 'Golghar in just 90 minutes' },
    transport: {
      hi: 'यह योजना गोलघर पर ही केंद्रित है, इसलिए पहला और आख़िरी पड़ाव एक ही जगह है; नक्शे पर स्थान देखकर आने-जाने का समय जोड़ें।',
      en: 'This plan centres on Golghar itself, so the first and last stop is the same place; use the map to add arrival and departure time.'
    },
    intro: {
      hi: 'कम समय में गोलघर देखना पूरी तरह संभव है, बस यह तय करना पड़ता है कि किस चीज़ को प्राथमिकता देनी है। यह योजना उन यात्रियों के लिए है जो किसी और काम से आए हैं और एक ठहराव में इमारत देख लेना चाहते हैं।',
      en: 'Seeing Golghar in a short window is entirely possible; it just requires deciding what to prioritise. This plan is for travellers who are in the city for something else and want to see the building in a single stop.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'सबसे तेज़ क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर परिसर पहुँचें और बाहर से इमारत की गोल बनावट और गुंबद देखें।',
            'सीढ़ियों की ओर लिपटी बनावट देखें, पर ऊपर चढ़ने की योजना न बनाएँ।',
            'कुछ फ़ोटो लें और आसपास की ओर एक छोटी सैर करें।',
            'अगर समय बचे, तो पास के किसी आसान पड़ाव पर रुकें।'
          ]
        },
        { t: 'h2', text: 'कितना समय कहाँ' },
        {
          t: 'table',
          head: ['गतिविधि', 'मोटा अंदाज़ा'],
          rows: [
            ['पहुँचना और बाहर से देखना', '20 से 30 मिनट'],
            ['सीढ़ियों की बनावट देखना', '10 मिनट'],
            ['फ़ोटो', '15 मिनट'],
            ['आसपास की छोटी सैर', '15 से 20 मिनट'],
            ['कुल', 'लगभग 60 से 90 मिनट']
          ]
        },
        { t: 'h2', text: 'क्या छोड़ दें' },
        {
          t: 'ul',
          items: [
            'संग्रहालय और लंबी सैर, अगर आपके पास केवल 90 मिनट हैं।',
            'खरीदारी, जो अक्सर सोचे से ज़्यादा समय ले लेती है।',
            'ऊपर चढ़ने की योजना, क्योंकि वर्तमान अनुमति अपुष्ट है।'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'खुलने का समय और स्रोतों में अंतर', path: 'visit/timings' },
            { label: 'फ़ोटोग्राफ़ी के लिए उपयुक्त समय', path: 'visit/photography' },
            { label: 'गोलघर + गांधी मैदान की आधी यात्रा', path: 'itineraries/golghar-gandhi-maidan' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The fastest order' },
        {
          t: 'ol',
          items: [
            'Arrive at the Golghar compound and look at the round shape and dome from outside.',
            'Look at how the stairs wind around the outside, but do not plan on climbing.',
            'Take a few photographs and walk briefly around the area.',
            'If time remains, stop at one easy nearby point.'
          ]
        },
        { t: 'h2', text: 'Rough time budget' },
        {
          t: 'table',
          head: ['Activity', 'Rough allowance'],
          rows: [
            ['Arriving and looking from outside', '20 to 30 minutes'],
            ['Studying the stairs', '10 minutes'],
            ['Photographs', '15 minutes'],
            ['A short walk around', '15 to 20 minutes'],
            ['Total', 'About 60 to 90 minutes']
          ]
        },
        { t: 'h2', text: 'What to leave out' },
        {
          t: 'ul',
          items: [
            'Museums and long walks, if you truly have only 90 minutes.',
            'Shopping, which often takes longer than expected.',
            'Any plan to climb, since current access is unconfirmed.'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Opening hours and why sources differ', path: 'visit/timings' },
            { label: 'Best times for photography', path: 'visit/photography' },
            { label: 'A half-day with Golghar and Gandhi Maidan', path: 'itineraries/golghar-gandhi-maidan' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या 90 मिनट में गोलघर देखा जा सकता है?', a: 'हाँ, बाहर से देखने, सीढ़ियों की बनावट समझने और फ़ोटो लेने के लिए यह समय पर्याप्त है।' },
        { q: 'कम समय में क्या छोड़ देना चाहिए?', a: 'संग्रहालय, लंबी सैर और खरीदारी — ये समय खा जाते हैं।' },
        { q: 'क्या इस योजना में ऊपर चढ़ना शामिल है?', a: 'नहीं, क्योंकि सीढ़ियों की वर्तमान अनुमति अपुष्ट है।' }
      ],
      en: [
        { q: 'Can Golghar be seen in 90 minutes?', a: 'Yes — that is enough to see it from outside, study the stairs and take photographs.' },
        { q: 'What should be left out in a short window?', a: 'Museums, long walks and shopping — these consume time quickly.' },
        { q: 'Does this plan include climbing?', a: 'No, because current access to the stairs is unconfirmed.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/timings', 'visit/photography', 'itineraries/golghar-gandhi-maidan', 'visit/location']
  },
  {
    path: 'itineraries/golghar-gandhi-maidan',
    group: 'itineraries',
    priority: 1,
    title: {
      hi: 'गोलघर और गांधी मैदान: आधे दिन की योजना',
      en: 'Golghar and Gandhi Maidan: A Half-Day Plan'
    },
    description: {
      hi: 'गोलघर और गांधी मैदान को जोड़कर आधे दिन की योजना — क्रम, हर पड़ाव का समय, चलने की मात्रा और किसके लिए यह उपयुक्त है।',
      en: 'A half-day plan combining Golghar and Gandhi Maidan — the order, time at each stop, how much walking is involved and who it suits.'
    },
    h1: { hi: 'गोलघर और गांधी मैदान: आधा दिन', en: 'Golghar and Gandhi Maidan: a half day' },
    transport: {
      hi: 'दोनों पड़ाव पैदल दूरी पर हैं — गोलघर गांधी मैदान के पश्चिमी किनारे पर है; नक्शे पर एक ही रास्ता देखकर चलें।',
      en: 'Both stops are within walking distance — Golghar sits at Gandhi Maidan’s western edge; use one map to walk the route.'
    },
    intro: {
      hi: 'यह सबसे सरल और सबसे भरोसेमंद आधे दिन की योजना है, क्योंकि गोलघर गांधी मैदान के पश्चिमी किनारे की ओर ही है। इसमें लंबी यात्रा नहीं करनी पड़ती और दोनों पड़ाव एक दूसरे के पूरक हैं — एक इमारत, दूसरा खुला शहर।',
      en: 'This is the simplest and most dependable half-day plan, because Golghar already sits towards the western edge of Gandhi Maidan. It needs no long travel and the two stops complement each other — one a building, the other the open city.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'योजना का क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर: बाहर से इमारत देखें, बनावट समझें और फ़ोटो लें।',
            'गांधी मैदान: पश्चिमी किनारे से शुरू करके मैदान की ओर टहलें।',
            'बीच में एक बार रुककर पानी पिएँ और आराम करें।',
            'आसपास के किसी भोजन-क्षेत्र में बैठकर कुछ खाएँ।'
          ]
        },
        { t: 'h2', text: 'समय और चलना' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर', '45 से 60 मिनट'],
            ['गांधी मैदान की सैर', '45 से 60 मिनट'],
            ['भोजन और विश्राम', '45 मिनट'],
            ['कुल', 'लगभग तीन घंटे'],
            ['चलना', 'मध्यम — खुली जगह में']
          ]
        },
        { t: 'h2', text: 'किसके लिए उपयुक्त' },
        {
          t: 'ul',
          items: [
            'पहली बार पटना आने वाले यात्री।',
            'परिवार, जिन्हें लंबा और थकाऊ कार्यक्रम नहीं चाहिए।',
            'जिनके पास आधा दिन है और बाकी दिन किसी और काम के लिए।'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'गांधी मैदान के बारे में', path: 'nearby/gandhi-maidan' },
            { label: 'गोलघर के आसपास खाना', path: 'food/nearby' },
            { label: 'कम चलने वालों के लिए योजना', path: 'itineraries/low-walking' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Golghar: see the building from outside, study its construction and take photographs.',
            'Gandhi Maidan: start from the western edge and walk out into the maidan.',
            'Pause once to drink water and rest.',
            'Sit down for something to eat in one of the nearby food areas.'
          ]
        },
        { t: 'h2', text: 'Time and walking' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar', '45 to 60 minutes'],
            ['Walking Gandhi Maidan', '45 to 60 minutes'],
            ['Food and rest', '45 minutes'],
            ['Total', 'About three hours'],
            ['Walking level', 'Moderate — in open ground']
          ]
        },
        { t: 'h2', text: 'Who it suits' },
        {
          t: 'ul',
          items: [
            'First-time visitors to Patna.',
            'Families who do not want a long, tiring schedule.',
            'Anyone with half a day free and the rest committed elsewhere.'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'About Gandhi Maidan', path: 'nearby/gandhi-maidan' },
            { label: 'Where to eat near Golghar', path: 'food/nearby' },
            { label: 'A low-walking plan', path: 'itineraries/low-walking' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर और गांधी मैदान में कितना समय लगता है?', a: 'आराम से देखने और भोजन सहित लगभग तीन घंटे।' },
        { q: 'क्या यह योजना परिवार के लिए उपयुक्त है?', a: 'हाँ, इसमें लंबी यात्रा और अधिक चलना शामिल नहीं है।' },
        { q: 'कौन पहले देखें?', a: 'गोलघर पहले, फिर गांधी मैदान की सैर — इससे दिन सहज बँटता है।' }
      ],
      en: [
        { q: 'How long do Golghar and Gandhi Maidan take?', a: 'About three hours at an unhurried pace, including a meal.' },
        { q: 'Is this plan suitable for families?', a: 'Yes — it avoids long travel and heavy walking.' },
        { q: 'Which comes first?', a: 'Golghar first, then the walk across Gandhi Maidan; the day divides more easily that way.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/gandhi-maidan', 'visit/gandhi-maidan', 'food/nearby', 'itineraries/low-walking']
  },
  {
    path: 'itineraries/museum-half-day',
    group: 'itineraries',
    priority: 2,
    title: {
      hi: 'संग्रहालय और इतिहास: आधे दिन की योजना',
      en: 'Museums and History: A Half-Day Plan'
    },
    description: {
      hi: 'गोलघर से शुरू करके संग्रहालयों तक जाने वाली आधे दिन की सांस्कृतिक योजना — क्रम, चुनाव और किसके लिए यह उपयुक्त है।',
      en: 'A half-day culture plan starting at Golghar and moving through the city’s museums — the order, the choices and who it suits.'
    },
    h1: { hi: 'संग्रहालय और इतिहास: आधा दिन', en: 'Museums and history: a half day' },
    transport: {
      hi: 'यह मार्ग गोलघर से शुरू होकर शहर के संग्रहालयों की ओर दक्षिण में बढ़ता है; नक्शे पर पड़ावों का क्रम और दूरी देख लें।',
      en: 'This route starts at Golghar and moves south towards the city’s museums; check the order of stops and the distance on the map.'
    },
    intro: {
      hi: 'यह योजना उन लोगों के लिए है जो इतिहास पढ़ना पसंद करते हैं। यह गोलघर के 1786 वाले दौर से शुरू होती है और शहर के संग्रहालयों में जाकर उसे और पीछे तथा आगे दोनों दिशाओं में फैलाती है।',
      en: 'This plan is for people who like reading history rather than only looking at it. It starts with Golghar’s world of 1786 and then extends that story backwards and forwards through the city’s museums.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर: औपनिवेशिक दौर और अनाज भंडार की पृष्ठभूमि।',
            'पटना संग्रहालय: प्राचीन पुरावशेष और क्षेत्रीय इतिहास।',
            'गांधी संग्रहालय: स्वतंत्रता आंदोलन और आधुनिक भारत।',
            'भोजन के साथ विश्राम।'
          ]
        },
        { t: 'h2', text: 'समय का बँटवारा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर', '45 मिनट'],
            ['पटना संग्रहालय', '60 से 90 मिनट'],
            ['गांधी संग्रहालय', '60 मिनट'],
            ['भोजन और यात्रा', '60 मिनट'],
            ['कुल', 'आधा दिन या अधिक']
          ]
        },
        { t: 'h2', text: 'चुनाव करें' },
        {
          t: 'ul',
          items: [
            'अगर समय कम है, तो दोनों संग्रहालयों में से एक चुनें।',
            'बड़ा संग्रहालय चाहिए तो बिहार संग्रहालय के लिए अलग आधा दिन रखें।',
            'हर पड़ाव का खुलने का समय पहले जाँच लें।'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'पटना संग्रहालय', path: 'nearby/patna-museum' },
            { label: 'गांधी संग्रहालय', path: 'nearby/gandhi-sangrahalaya' },
            { label: 'बिहार संग्रहालय', path: 'nearby/bihar-museum' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Golghar: the colonial period and the background to a grain store.',
            'Patna Museum: ancient finds and regional history.',
            'Gandhi Sangrahalaya: the freedom movement and modern India.',
            'A meal and a rest.'
          ]
        },
        { t: 'h2', text: 'Time budget' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar', '45 minutes'],
            ['Patna Museum', '60 to 90 minutes'],
            ['Gandhi Sangrahalaya', '60 minutes'],
            ['Food and travel', '60 minutes'],
            ['Total', 'Half a day or more']
          ]
        },
        { t: 'h2', text: 'Making choices' },
        {
          t: 'ul',
          items: [
            'If time is short, choose one of the two museums rather than both.',
            'If you want the largest collection, set aside a separate half-day for Bihar Museum.',
            'Check opening hours for every stop in advance.'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Patna Museum', path: 'nearby/patna-museum' },
            { label: 'Gandhi Sangrahalaya', path: 'nearby/gandhi-sangrahalaya' },
            { label: 'Bihar Museum', path: 'nearby/bihar-museum' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'एक आधे दिन में कितने संग्रहालय देख सकते हैं?', a: 'आराम से दो तक; इससे ज़्यादा रखने पर हर जगह जल्दबाज़ी होगी।' },
        { q: 'क्रम क्या रखें?', a: 'गोलघर, फिर पटना संग्रहालय या गांधी संग्रहालय — इतिहास का क्रम इसी तरह बनता है।' },
        { q: 'क्या खुलने का समय एक जैसा रहता है?', a: 'नहीं, संग्रहालयों के दिन और समय बदलते रहते हैं, इसलिए पहले जाँच लें।' }
      ],
      en: [
        { q: 'How many museums fit into half a day?', a: 'Comfortably up to two; adding more forces you to rush.' },
        { q: 'What order makes sense?', a: 'Golghar, then Patna Museum or Gandhi Sangrahalaya — that follows the historical sequence.' },
        { q: 'Do opening hours stay the same?', a: 'No — museum days and hours change, so check first.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/patna-museum', 'nearby/gandhi-sangrahalaya', 'nearby/bihar-museum', 'history']
  },
  {
    path: 'itineraries/patna-one-day',
    group: 'itineraries',
    priority: 2,
    title: {
      hi: 'पटना एक दिन में: पहली बार आने वालों की योजना',
      en: 'Patna in One Day: A First-Time Visitor’s Plan'
    },
    description: {
      hi: 'पहली बार पटना आने वालों के लिए एक दिन की योजना — गोलघर से शुरुआत, दिन का क्रम, विश्राम और शाम का अंत।',
      en: 'A one-day plan for first-time visitors to Patna — starting at Golghar, the order through the day, rests and an evening finish.'
    },
    h1: { hi: 'पटना एक दिन में', en: 'Patna in one day' },
    transport: {
      hi: 'दिन का मार्ग गोलघर से नदी किनारे और संग्रहालयों तक फैलता है; नक्शे पर पूरा चक्र एक साथ देखकर समय बाँटें।',
      en: 'The day’s route stretches from Golghar to the riverfront and the museums; view the whole loop on the map to spread the time.'
    },
    intro: {
      hi: 'एक दिन में पूरा पटना देखना संभव नहीं है, पर शहर का असली चरित्र — नदी, इतिहास, इमारतें और खाना — एक दिन में समझा जा सकता है। यह योजना उसी संतुलन के लिए बनी है।',
      en: 'One day is not enough for all of Patna, but it is enough to grasp the city’s real character: the river, its history, its buildings and its food. This plan is built around that balance.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'दिन का क्रम' },
        {
          t: 'ol',
          items: [
            'सुबह: गोलघर — इमारत से शुरुआत, जो शहर के इतिहास की सबसे साफ़ कड़ी है।',
            'दोपहर से पहले: गांधी मैदान की सैर और आसपास का भोजन।',
            'दोपहर: एक संग्रहालय — इतिहास जारी रखें या गर्मी में आराम करें।',
            'शाम: गंगा किनारे की ओर — घाट या सांस्कृतिक द्वार।',
            'रात: किसी भोजन-क्षेत्र में बैठकर दिन का अंत।'
          ]
        },
        { t: 'h2', text: 'दिन का समय कहाँ लगेगा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर', '45 से 60 मिनट'],
            ['गांधी मैदान की सैर', '30 से 45 मिनट'],
            ['भोजन और विश्राम', '60 मिनट'],
            ['एक संग्रहालय', '60 से 90 मिनट'],
            ['नदी किनारे की ओर जाना', '45 मिनट'],
            ['रात का भोजन', '60 मिनट'],
            ['पड़ावों के बीच आवागमन', 'हर बार 15 से 30 मिनट, ऊपर के समय से अलग']
          ]
        },
        { t: 'h2', text: 'व्यावहारिक बातें' },
        {
          t: 'table',
          head: ['पहलू', 'सुझाव'],
          rows: [
            ['शुरुआत', 'सुबह जल्दी, गर्मी से पहले'],
            ['सबसे भारी हिस्सा', 'दोपहर — इसे इनडोर रखें'],
            ['विश्राम', 'दोपहर में एक बार ज़रूर'],
            ['पानी', 'साथ रखें, मध्य पटना में दूरी अधिक है'],
            ['ट्रैफ़िक', 'पड़ावों के बीच अधिक समय निकालें']
          ]
        },
        { t: 'h2', text: 'किसके लिए उपयुक्त' },
        {
          t: 'ul',
          items: [
            'पहली बार पटना आए यात्री।',
            'जिनके पास सिर्फ़ एक दिन है और वे शहर का पूरा चरित्र देखना चाहते हैं।',
            'जो अधिक चलने में सहज हैं।'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'गोलघर का इतिहास', path: 'history' },
            { label: 'शाम की सैर और रात का भोजन', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'परिवार के साथ एक दिन', path: 'itineraries/family-day' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The shape of the day' },
        {
          t: 'ol',
          items: [
            'Morning: Golghar — start with the building that is the clearest link to the city’s history.',
            'Before noon: a walk on Gandhi Maidan and a meal nearby.',
            'Afternoon: one museum — keep following the history, or rest through the heat.',
            'Evening: towards the Ganges — the ghat or the cultural gateway.',
            'Night: sit down to eat in one of the food areas and close the day.'
          ]
        },
        { t: 'h2', text: 'Where the day goes' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar', '45 to 60 minutes'],
            ['Walk on Gandhi Maidan', '30 to 45 minutes'],
            ['Meal and rest', '60 minutes'],
            ['One museum', '60 to 90 minutes'],
            ['Towards the riverfront', '45 minutes'],
            ['Dinner', '60 minutes'],
            ['Travel between stops', '15 to 30 minutes each time, on top of the above']
          ]
        },
        { t: 'h2', text: 'Practical points' },
        {
          t: 'table',
          head: ['Detail', 'Suggestion'],
          rows: [
            ['Start', 'Early morning, before the heat'],
            ['Heaviest part', 'Midday — keep it indoors'],
            ['Rest', 'Take one proper break in the afternoon'],
            ['Water', 'Carry it; distances in central Patna add up'],
            ['Traffic', 'Allow generous time between stops']
          ]
        },
        { t: 'h2', text: 'Who it suits' },
        {
          t: 'ul',
          items: [
            'First-time visitors to Patna.',
            'Anyone with a single day who wants the city’s full character.',
            'Travellers comfortable with a fair amount of walking.'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'History of Golghar', path: 'history' },
            { label: 'An evening walk and dinner', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'A day out with family', path: 'itineraries/family-day' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'एक दिन में पटना का क्या देखा जा सकता है?', a: 'गोलघर, गांधी मैदान, एक संग्रहालय और शाम को नदी किनारे — यह एक संतुलित दिन बनाता है।' },
        { q: 'दोपहर में क्या करें?', a: 'दोपहर का हिस्सा इनडोर रखें, जैसे संग्रहालय या विश्राम।' },
        { q: 'क्या यह योजना बच्चों के साथ ठीक है?', a: 'एक दिन का कार्यक्रम बच्चों के लिए भारी पड़ सकता है; उनके लिए अलग योजना बेहतर है।' }
      ],
      en: [
        { q: 'What can be seen in one day in Patna?', a: 'Golghar, Gandhi Maidan, one museum and the riverfront in the evening make a balanced day.' },
        { q: 'What should be done in the midday heat?', a: 'Keep the middle of the day indoors — a museum or a rest.' },
        { q: 'Does this plan work with children?', a: 'A full one-day schedule can be heavy for children; a separate plan works better for them.' }
      ]
    },
    sources: sourcesAll,
    related: ['itineraries/golghar-gandhi-maidan', 'itineraries/evening-gandhi-maidan', 'itineraries/family-day', 'nearby/gandhi-ghat']
  },
  {
    path: 'itineraries/family-day',
    group: 'itineraries',
    priority: 2,
    title: {
      hi: 'परिवार के साथ गोलघर: एक दिन की योजना',
      en: 'Golghar with Family: A One-Day Plan'
    },
    description: {
      hi: 'बच्चों और बड़ों के साथ गोलघर का एक दिन — विश्राम, भोजन, इनडोर विकल्प और थकान से बचने का क्रम।',
      en: 'A day at Golghar with children and elders — rests, meals, indoor options and an order that avoids exhaustion.'
    },
    h1: { hi: 'परिवार के साथ एक दिन', en: 'A day out with family' },
    transport: {
      hi: 'परिवार के दिन में पड़ाव कम रखे गए हैं; गोलघर से शुरुआत करके नक्शे पर हर पड़ाव के बीच की दूरी देख लें।',
      en: 'The family day keeps stops few; start at Golghar and check the distance between each stop on the map.'
    },
    intro: {
      hi: 'परिवार के साथ यात्रा की सबसे बड़ी चुनौती समय नहीं, थकान होती है। यह योजना इसी सोच पर बनी है: कम पड़ाव, बीच में विश्राम, और ज़रूरत पड़ने पर इनडोर विकल्प।',
      en: 'With family, the real constraint is not time but tiredness. This plan is built around that: fewer stops, rests in between, and an indoor fallback when needed.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'योजना का क्रम' },
        {
          t: 'ol',
          items: [
            'सुबह: गोलघर — बाहर से देखें, धीरे-धीरे घूमें।',
            'फिर गांधी मैदान की छोटी सैर — बच्चे खुली जगह में चल सकते हैं।',
            'दोपहर: बैठकर भोजन और आराम।',
            'दोपहर बाद: एक इनडोर विकल्प, जैसे विज्ञान केंद्र या संग्रहालय।',
            'शाम: हल्की सैर और घर/होटल की ओर वापसी।'
          ]
        },
        { t: 'h2', text: 'समय का बँटवारा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर (बाहर से)', '30 से 45 मिनट'],
            ['गांधी मैदान की छोटी सैर', '30 मिनट'],
            ['भोजन और आराम', '60 से 90 मिनट'],
            ['इनडोर पड़ाव — विज्ञान केंद्र या संग्रहालय', '60 से 90 मिनट'],
            ['शाम की हल्की सैर', '30 मिनट'],
            ['पड़ावों के बीच आवागमन', 'हर बार 15 से 30 मिनट, ऊपर से अलग']
          ]
        },
        { t: 'h2', text: 'परिवार के लिए व्यावहारिक बातें' },
        {
          t: 'table',
          head: ['ज़रूरत', 'सुझाव'],
          rows: [
            ['विश्राम', 'हर दो घंटे में एक बार बैठें'],
            ['भोजन', 'समय पर, भीड़ से पहले'],
            ['इनडोर विकल्प', 'मौसम खराब हो तो संग्रहालय'],
            ['चलना', 'कम रखें, दूरी के लिए वाहन लें'],
            ['पानी और नाश्ता', 'साथ रखें']
          ]
        },
        { t: 'h2', text: 'क्या न करें' },
        {
          t: 'ul',
          items: [
            'एक दिन में बहुत सारे पड़ाव न रखें।',
            'दोपहर की तेज़ धूप में खुली जगह पर लंबा समय न बिताएँ।',
            'ऊपर चढ़ने की योजना पर निर्भर न रहें, क्योंकि वर्तमान अनुमति अपुष्ट है।'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'बच्चों के साथ गोलघर: सुविधाएँ', path: 'visit/family-facilities' },
            { label: 'श्रीकृष्ण विज्ञान केंद्र', path: 'nearby/science-centre' },
            { label: 'बारिश और गर्मी की योजना', path: 'itineraries/rainy-day' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Morning: Golghar — look from outside and move at an easy pace.',
            'Then a short walk on Gandhi Maidan, where children can move around.',
            'Midday: sit down for a meal and a rest.',
            'Afternoon: one indoor option, such as the science centre or a museum.',
            'Evening: a gentle walk and back towards home or the hotel.'
          ]
        },
        { t: 'h2', text: 'How the time is split' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar (from outside)', '30 to 45 minutes'],
            ['Short walk on Gandhi Maidan', '30 minutes'],
            ['Meal and rest', '60 to 90 minutes'],
            ['Indoor stop — science centre or museum', '60 to 90 minutes'],
            ['Gentle evening walk', '30 minutes'],
            ['Travel between stops', '15 to 30 minutes each time, on top of the above']
          ]
        },
        { t: 'h2', text: 'Practical points for families' },
        {
          t: 'table',
          head: ['Need', 'Suggestion'],
          rows: [
            ['Rest', 'Sit down once every two hours'],
            ['Meals', 'On time, before the rush'],
            ['Indoor fallback', 'A museum if the weather turns'],
            ['Walking', 'Keep it low and use a vehicle for distance'],
            ['Water and snacks', 'Carry them']
          ]
        },
        { t: 'h2', text: 'What not to do' },
        {
          t: 'ul',
          items: [
            'Do not pack too many stops into one day.',
            'Avoid long stretches outdoors in the early afternoon heat.',
            'Do not rely on climbing, since current access is unconfirmed.'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Golghar with children: facilities', path: 'visit/family-facilities' },
            { label: 'Shrikrishna Science Centre', path: 'nearby/science-centre' },
            { label: 'A rain and heat plan', path: 'itineraries/rainy-day' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'बच्चों के साथ गोलघर जाना ठीक है?', a: 'हाँ, अगर पड़ाव कम रखें, बीच में विश्राम करें और दोपहर की धूप से बचें।' },
        { q: 'मौसम खराब हो तो क्या करें?', a: 'इनडोर विकल्प चुनें, जैसे विज्ञान केंद्र या कोई संग्रहालय।' },
        { q: 'एक दिन में कितने पड़ाव रखें?', a: 'कम रखें — गोलघर, एक खुली जगह और एक इनडोर पड़ाव पर्याप्त है।' }
      ],
      en: [
        { q: 'Is Golghar suitable with children?', a: 'Yes, if you keep the number of stops low, rest in between and avoid the midday sun.' },
        { q: 'What if the weather turns bad?', a: 'Choose an indoor option such as the science centre or a museum.' },
        { q: 'How many stops should a family day have?', a: 'Few — Golghar, one open space and one indoor stop is plenty.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/family-facilities', 'nearby/science-centre', 'itineraries/rainy-day', 'nearby/maurya-lok']
  },
  {
    path: 'itineraries/rainy-day',
    group: 'itineraries',
    priority: 2,
    title: {
      hi: 'बारिश और गर्मी की योजना: इनडोर विकल्प',
      en: 'A Rain and Heat Plan: Indoor Options'
    },
    description: {
      hi: 'बारिश या तेज़ गर्मी में गोलघर की यात्रा — इमारत को बाहर से छोटा ठहराव, फिर इनडोर विकल्प और सुरक्षित क्रम।',
      en: 'Visiting Golghar in rain or extreme heat — a brief outdoor stop at the building, then indoor options and a safer order.'
    },
    h1: { hi: 'बारिश और गर्मी की योजना', en: 'A rain and heat plan' },
    transport: {
      hi: 'बारिश और गर्मी में इनडोर पड़ाव प्राथमिकता हैं; गोलघर बाहर से देखने का छोटा ठहराव है, इसलिए नक्शे पर उतरने की जगह पहले तय करें।',
      en: 'In rain and heat the indoor stops come first; Golghar is a short outside stop, so agree the drop-off point on the map in advance.'
    },
    intro: {
      hi: 'पटना में मौसम यात्रा का सबसे बड़ा नियंत्रक है। बारिश और तेज़ गर्मी दोनों में योजना इस तरह बनानी चाहिए कि ज़्यादा समय इनडोर बीते और गोलघर को बाहर से देखना एक छोटा, सुरक्षित ठहराव बन जाए।',
      en: 'In Patna, weather is the biggest control on any plan. In both heavy rain and extreme heat, the plan should keep most of your time indoors, with Golghar as a short, safe stop to see the building from outside.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'योजना का क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर: बाहर से छोटा ठहराव — इमारत और गुंबद देखें।',
            'तुरंत छाया या वाहन में लौटें; लंबा खुला समय न बिताएँ।',
            'इनडोर पड़ाव: विज्ञान केंद्र या कोई संग्रहालय।',
            'भोजन और विश्राम इनडोर।',
            'मौसम खुल जाए तो शाम को छोटी सैर।'
          ]
        },
        { t: 'h2', text: 'समय का बँटवारा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर — बाहर से छोटा ठहराव', '15 से 20 मिनट'],
            ['छाया या वाहन में लौटना', '10 मिनट'],
            ['इनडोर पड़ाव — विज्ञान केंद्र या संग्रहालय', '90 मिनट या अधिक'],
            ['इनडोर भोजन और विश्राम', '60 मिनट'],
            ['मौसम खुलने पर शाम की सैर', '30 मिनट'],
            ['पड़ावों के बीच आवागमन', 'हर बार 15 से 30 मिनट, ऊपर से अलग']
          ]
        },
        { t: 'h2', text: 'मौसम के अनुसार विकल्प' },
        {
          t: 'table',
          head: ['स्थिति', 'क्या करें'],
          rows: [
            ['तेज़ बारिश', 'इनडोर संग्रहालय; बाहर की सैर टालें'],
            ['हल्की बारिश', 'छोटा बाहर ठहराव और इनडोर पड़ाव'],
            ['तेज़ गर्मी', 'सुबह जल्दी या शाम को बाहर; दोपहर इनडोर'],
            ['उमस', 'लंबी सैर से बचें, बार-बार पानी पिएँ']
          ]
        },
        { t: 'h2', text: 'सावधानियाँ' },
        {
          t: 'ul',
          items: [
            'बारिश में फर्श और सीढ़ियाँ फिसलन वाली हो सकती हैं।',
            'बिजली गिरने के दौरान खुली जगह पर न रुकें।',
            'गर्मी में दोपहर के बाहर के समय को जितना कम हो सके, कम रखें।'
          ]
        },
        {
          t: 'note',
          text: 'इनडोर स्थलों के खुलने के दिन और समय बदलते रहते हैं। बारिश या गर्मी की योजना बनाने से पहले उस इनडोर पड़ाव का समय जाँच लें, वरना पूरी योजना बंद दरवाज़े पर रुक सकती है।'
        },
        {
          t: 'links',
          items: [
            { label: 'बिहार संग्रहालय', path: 'nearby/bihar-museum' },
            { label: 'श्रीकृष्ण विज्ञान केंद्र', path: 'nearby/science-centre' },
            { label: 'मौसम के अनुसार यात्रा का समय', path: 'visit/best-season' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Golghar: a brief stop outside to see the building and dome.',
            'Return to shade or a vehicle quickly; do not spend long in the open.',
            'An indoor stop: the science centre or a museum.',
            'Eat and rest indoors.',
            'If the weather clears, take a short walk in the evening.'
          ]
        },
        { t: 'h2', text: 'How the time is split' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar — a brief stop outside', '15 to 20 minutes'],
            ['Returning to shade or a vehicle', '10 minutes'],
            ['Indoor stop — science centre or museum', '90 minutes or more'],
            ['Eating and resting indoors', '60 minutes'],
            ['Evening walk if the weather clears', '30 minutes'],
            ['Travel between stops', '15 to 30 minutes each time, on top of the above']
          ]
        },
        { t: 'h2', text: 'Options by weather' },
        {
          t: 'table',
          head: ['Condition', 'What to do'],
          rows: [
            ['Heavy rain', 'An indoor museum; postpone outdoor walks'],
            ['Light rain', 'A short outdoor stop plus an indoor one'],
            ['Extreme heat', 'Outdoors early or late; indoors at midday'],
            ['Humidity', 'Avoid long walks and drink water often']
          ]
        },
        { t: 'h2', text: 'Cautions' },
        {
          t: 'ul',
          items: [
            'In rain, floors and steps can be slippery.',
            'Do not stay in the open during lightning.',
            'In heat, keep the midday outdoor time as short as possible.'
          ]
        },
        {
          t: 'note',
          text: 'Indoor sites change their days and hours. Before building a rain or heat plan, check the timings of that indoor stop, or the whole plan may end at a closed door.'
        },
        {
          t: 'links',
          items: [
            { label: 'Bihar Museum', path: 'nearby/bihar-museum' },
            { label: 'Shrikrishna Science Centre', path: 'nearby/science-centre' },
            { label: 'When to visit by season', path: 'visit/best-season' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'बारिश में गोलघर देखा जा सकता है?', a: 'बाहर से छोटा ठहराव संभव है, पर लंबा खुला समय न बिताएँ और इनडोर योजना साथ रखें।' },
        { q: 'गर्मी में कब जाएँ?', a: 'सुबह जल्दी या शाम को; दोपहर का हिस्सा इनडोर रखें।' },
        { q: 'इनडोर योजना बनाने से पहले क्या जाँचें?', a: 'उस संग्रहालय या केंद्र के खुलने के दिन और समय।' }
      ],
      en: [
        { q: 'Can Golghar be visited in the rain?', a: 'A short stop outside is possible, but avoid long spells in the open and keep an indoor plan ready.' },
        { q: 'When should you go in the heat?', a: 'Early morning or evening, and keep the middle of the day indoors.' },
        { q: 'What should be checked before an indoor plan?', a: 'The opening days and hours of that museum or centre.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/bihar-museum', 'nearby/science-centre', 'visit/best-season', 'itineraries/family-day']
  },
  {
    path: 'itineraries/colonial-heritage',
    group: 'itineraries',
    priority: 3,
    title: {
      hi: 'औपनिवेशिक विरासत की सैर: पटना में एक रास्ता',
      en: 'A Colonial Heritage Route in Patna'
    },
    description: {
      hi: 'गोलघर से शुरू होकर शहर के औपनिवेशिक दौर की इमारतों की ओर जाने वाला रास्ता — क्रम, फ़ोकस और व्यावहारिक सुझाव।',
      en: 'A route starting at Golghar and moving through the city’s colonial-era buildings — the order, the focus and practical notes.'
    },
    h1: { hi: 'औपनिवेशिक विरासत की सैर', en: 'A colonial heritage walk' },
    transport: {
      hi: 'सैर गोलघर (1786) से शुरू होती है और उसी दौर की इमारतों की ओर बढ़ती है; नक्शे पर पूरा मार्ग एक साथ देखें।',
      en: 'The walk begins at Golghar (1786) and moves towards buildings of the same era; view the whole route on the map at once.'
    },
    intro: {
      hi: 'गोलघर 1786 का है, और शहर में उसी दौर की कई इमारतें और संस्थाएँ हैं — कुछ सरकारी, कुछ शिक्षा और संस्कृति से जुड़ी। यह रास्ता उन लोगों के लिए है जो इमारतों की बनावट और उनके पीछे के दौर को एक साथ देखना चाहते हैं।',
      en: 'Golghar dates from 1786, and the city holds a number of buildings and institutions from that era — some administrative, some connected to education and culture. This route is for people who want to look at construction and the period behind it together.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'रास्ते का क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर: औपनिवेशिक दौर का सबसे साफ़ और पुराना नमूना।',
            'गुंबद और बिना स्तंभ की बनावट को ध्यान से देखें।',
            'आगे बढ़कर उसी दौर की अन्य इमारतें देखें — लेकिन केवल बाहर से, अगर प्रवेश खुला न हो।',
            'शाम की सैर के साथ दिन का अंत।'
          ]
        },
        { t: 'h2', text: 'समय का बँटवारा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर — बनावट और गुंबद', '45 मिनट'],
            ['पास की औपनिवेशिक इमारतें, बाहर से', '30 से 45 मिनट'],
            ['एक संस्था या संग्रहालय, अगर उस दिन खुला हो', '45 से 60 मिनट'],
            ['शाम की सैर', '30 मिनट'],
            ['पड़ावों के बीच आवागमन', 'हर बार 10 से 20 मिनट, ऊपर से अलग']
          ]
        },
        { t: 'h2', text: 'ध्यान केंद्रित करने वाली बातें' },
        {
          t: 'table',
          head: ['देखने की बात', 'क्यों'],
          rows: [
            ['इमारत की सामग्री', 'पत्थर, चूना और प्लास्टर का मेल'],
            ['गुंबद की वक्रता', 'भार फैलाने का तरीका'],
            ['सीढ़ियों की जगह', 'काम के अनुसार बनी बनावट'],
            ['द्वार और खिड़कियाँ', 'दौर की स्थापत्य शैली']
          ]
        },
        { t: 'h2', text: 'व्यावहारिक बातें' },
        {
          t: 'ul',
          items: [
            'किसी भी इमारत में प्रवेश की अनुमति पहले जाँचें।',
            'सरकारी इमारतों के आसपास फ़ोटोग्राफ़ी के नियम अलग हो सकते हैं।',
            'तेज़ गर्मी में यह सैर छोटी रखें।'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'गोलघर की वास्तुकला', path: 'architecture' },
            { label: 'गोलघर का इतिहास', path: 'history' },
            { label: 'वास्तु फ़ोटोग्राफ़ी की सैर', path: 'itineraries/photography-walk' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Golghar: the clearest and oldest surviving example of the colonial period here.',
            'Study the dome and the pillarless construction closely.',
            'Move on to other buildings of the same era — from outside only, if entry is not open.',
            'Close the day with an evening walk.'
          ]
        },
        { t: 'h2', text: 'How the time is split' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar — construction and dome', '45 minutes'],
            ['Other colonial-era buildings, from outside', '30 to 45 minutes'],
            ['One institution or museum, if it is open that day', '45 to 60 minutes'],
            ['Evening walk', '30 minutes'],
            ['Travel between stops', '10 to 20 minutes each time, on top of the above']
          ]
        },
        { t: 'h2', text: 'What to focus on' },
        {
          t: 'table',
          head: ['Thing to look at', 'Why'],
          rows: [
            ['Building material', 'The mix of stone, lime and plaster'],
            ['The curve of the dome', 'How it spreads load'],
            ['Where the stairs sit', 'Construction shaped by function'],
            ['Doors and windows', 'The architectural style of the period']
          ]
        },
        { t: 'h2', text: 'Practical notes' },
        {
          t: 'ul',
          items: [
            'Check permission before entering any building.',
            'Photography rules around government buildings may differ.',
            'Keep this walk short in extreme heat.'
          ]
        },
        {
          t: 'note',
          text: routeCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Golghar’s architecture', path: 'architecture' },
            { label: 'History of Golghar', path: 'history' },
            { label: 'An architecture photo walk', path: 'itineraries/photography-walk' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'औपनिवेशिक विरासत की सैर में क्या शामिल है?', a: 'गोलघर और उसी दौर की अन्य इमारतें — बनावट, सामग्री और उस समय की शैली पर ध्यान।' },
        { q: 'क्या सभी इमारतों में प्रवेश खुला रहता है?', a: 'नहीं, कुछ में प्रवेश की अनुमति अलग होती है; पहले जाँच लें।' },
        { q: 'यह सैर किसके लिए है?', a: 'वास्तुकला और इतिहास में गहरी रुचि रखने वालों के लिए।' }
      ],
      en: [
        { q: 'What does the colonial heritage route include?', a: 'Golghar and other buildings of the same era, with attention to construction, materials and period style.' },
        { q: 'Is entry open at every building?', a: 'No — permission differs from place to place, so check first.' },
        { q: 'Who is this walk for?', a: 'People with a deeper interest in architecture and history.' }
      ]
    },
    sources: sourcesAll,
    related: ['architecture', 'history', 'itineraries/photography-walk', 'itineraries/patna-one-day']
  },
  {
    path: 'itineraries/photography-walk',
    group: 'itineraries',
    priority: 3,
    title: {
      hi: 'वास्तु फ़ोटोग्राफ़ी की सैर: पटना',
      en: 'An Architecture Photo Walk in Patna'
    },
    description: {
      hi: 'गोलघर और आसपास की इमारतों की फ़ोटोग्राफ़ी के लिए रोशनी, कोण, समय और सावधानियों पर आधारित सैर की योजना।',
      en: 'A photo walk built around Golghar and nearby buildings — light, angles, timing and what to be careful about.'
    },
    h1: { hi: 'वास्तु फ़ोटोग्राफ़ी की सैर', en: 'An architecture photo walk' },
    transport: {
      hi: 'फ़ोटोग्राफ़ी सैर गोलघर के इर्द-गिर्द घूमती है, इसलिए नक्शे पर देखें कि किस ओर से पहुँचें ताकि रोशनी का रुख़ पहले से तय हो।',
      en: 'The photo walk circles Golghar, so use the map to decide which side you approach from, so the light is planned in advance.'
    },
    intro: {
      hi: 'गोलघर की गोल बनावट और गुंबद फ़ोटोग्राफ़ी के लिए अच्छा विषय है, क्योंकि चारों ओर से इसका आकार बदलता दिखता है। इस सैर में रोशनी और कोण को केंद्र में रखा गया है, न कि जल्दी-जल्दी कई जगह पहुँचने को।',
      en: 'Golghar’s round form and dome make good photographic subjects, because the shape reads differently from every side. This walk puts light and angle at the centre, instead of rushing to tick off many places.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'सैर का क्रम' },
        {
          t: 'ol',
          items: [
            'सुबह या शाम: गोलघर के चारों ओर घूमकर अलग कोणों से इमारत देखें।',
            'गुंबद और सीढ़ियों की बनावट पर ध्यान दें।',
            'पास की इमारतों की ओर बढ़ें — बनावट और द्वारों के विवरण पर।',
            'रोशनी बदलने पर उसी जगह लौटकर दूसरी फ़ोटो लें।'
          ]
        },
        { t: 'h2', text: 'रोशनी और समय' },
        {
          t: 'table',
          head: ['समय', 'कैसी रोशनी'],
          rows: [
            ['सुबह जल्दी', 'नरम, लंबी परछाईं'],
            ['दोपहर', 'कड़ी और सीधी — कठिन'],
            ['शाम', 'सुनहरी, इमारत के लिए अच्छी'],
            ['बादल वाला दिन', 'समान रोशनी — विवरण साफ़']
          ]
        },
        { t: 'h2', text: 'हर पड़ाव पर कितना समय' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर के चारों ओर घूमना', '30 से 40 मिनट'],
            ['गुंबद और सीढ़ियों की बनावट के फ़्रेम', '20 मिनट'],
            ['पास की इमारतों के द्वार और विवरण', '20 से 30 मिनट'],
            ['रोशनी बदलने पर दूसरा दौर', '20 मिनट'],
            ['पड़ावों के बीच आवागमन', 'हर बार 10 से 20 मिनट, ऊपर से अलग']
          ]
        },
        { t: 'h2', text: 'सावधानियाँ' },
        {
          t: 'ul',
          items: [
            'किसी परिसर या इमारत में फ़ोटोग्राफ़ी की अनुमति पहले जाँचें।',
            'लोगों की निजता का ध्यान रखें, खासकर भीड़ में।',
            'सड़क के बीच में रुककर फ़ोटो न लें।',
            'बारिश में उपकरण और फिसलन दोनों से बचें।'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'फ़ोटोग्राफ़ी के लिए उपयुक्त समय', path: 'visit/photography' },
            { label: 'गुंबद और वास्तुकला', path: 'architecture' },
            { label: 'औपनिवेशिक विरासत की सैर', path: 'itineraries/colonial-heritage' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Morning or evening: walk right around Golghar and see it from different angles.',
            'Focus on the dome and on how the stairs sit against the wall.',
            'Move towards nearby buildings — construction and doorway detail.',
            'Return to the same spot as the light changes and shoot again.'
          ]
        },
        { t: 'h2', text: 'Light and timing' },
        {
          t: 'table',
          head: ['Time', 'What the light is like'],
          rows: [
            ['Early morning', 'Soft, with long shadows'],
            ['Midday', 'Hard and direct — difficult'],
            ['Evening', 'Golden, good for buildings'],
            ['Overcast day', 'Even light — detail reads clearly']
          ]
        },
        { t: 'h2', text: 'How long each stop takes' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Walking right around Golghar', '30 to 40 minutes'],
            ['Framing the dome and the stairs', '20 minutes'],
            ['Doorway and detail shots on nearby buildings', '20 to 30 minutes'],
            ['A second pass as the light changes', '20 minutes'],
            ['Travel between stops', '10 to 20 minutes each time, on top of the above']
          ]
        },
        { t: 'h2', text: 'Cautions' },
        {
          t: 'ul',
          items: [
            'Check photography permission inside any compound or building.',
            'Respect people’s privacy, especially in crowds.',
            'Do not stop in the middle of the road to take a shot.',
            'In rain, protect both your equipment and your footing.'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Best times for photography', path: 'visit/photography' },
            { label: 'The dome and architecture', path: 'architecture' },
            { label: 'A colonial heritage route', path: 'itineraries/colonial-heritage' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गोलघर की फ़ोटोग्राफ़ी के लिए सबसे अच्छा समय कौन-सा है?', a: 'सुबह जल्दी या शाम, जब रोशनी नरम हो।' },
        { q: 'क्या फ़ोटोग्राफ़ी की अनुमति हर जगह होती है?', a: 'नहीं, परिसर और इमारतों के नियम अलग हो सकते हैं; पहले जाँच लें।' },
        { q: 'क्या इस सैर में ऊपर चढ़ना शामिल है?', a: 'नहीं, क्योंकि सीढ़ियों की वर्तमान अनुमति अपुष्ट है।' }
      ],
      en: [
        { q: 'What is the best time for photographing Golghar?', a: 'Early morning or evening, when the light is soft.' },
        { q: 'Is photography allowed everywhere?', a: 'No — rules differ between compounds and buildings, so check first.' },
        { q: 'Does this walk include climbing?', a: 'No, because current access to the stairs is unconfirmed.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/photography', 'architecture', 'itineraries/colonial-heritage', 'nearby/sabhyata-dwar']
  },
  {
    path: 'itineraries/low-walking',
    group: 'itineraries',
    priority: 3,
    title: {
      hi: 'कम चलने वालों के लिए योजना: बड़ों और सीमित गतिशीलता',
      en: 'A Low-Walking Plan: Elders and Limited Mobility'
    },
    description: {
      hi: 'जिनके लिए ज़्यादा चलना कठिन है, उनके लिए गोलघर की योजना — कम दूरी, वाहन का उपयोग, विश्राम और विकल्प।',
      en: 'A Golghar plan for people who cannot walk far — shorter distances, using a vehicle, rests and alternatives.'
    },
    h1: { hi: 'कम चलने वाली योजना', en: 'A low-walking plan' },
    transport: {
      hi: 'कम चलने वाली योजना में हर पड़ाव के पास वाहन से उतरना ज़रूरी है; नक्शे पर हर उतरने की जगह पहले तय करें।',
      en: 'The low-walking plan needs a vehicle drop-off near every stop; agree each drop-off point on the map in advance.'
    },
    intro: {
      hi: 'यात्रा का आनंद चलने की मात्रा से तय नहीं होता। यह योजना बड़ों और कम गतिशीलता वाले यात्रियों के लिए बनी है: पड़ाव कम, दूरी कम, और हर पड़ाव के बीच बैठने का मौक़ा।',
      en: 'The value of a trip is not measured by how much you walk. This plan is for elders and travellers with limited mobility: fewer stops, shorter distances and a chance to sit between each one.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'योजना का क्रम' },
        {
          t: 'ol',
          items: [
            'वाहन से सीधे गोलघर के पास पहुँचें, बाहर के खुले रास्ते पर चलने से बचें।',
            'गोलघर को जहाँ से सबसे साफ़ दिखे, वहीं से देखें।',
            'बैठने की व्यवस्था वाली जगह पर विश्राम करें।',
            'दूसरा पड़ाव वाहन से ही चुनें, पैदल नहीं।',
            'दोपहर में आराम, शाम को हल्की सैर अगर सुविधा हो।'
          ]
        },
        { t: 'h2', text: 'समय का बँटवारा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['वाहन से गोलघर के पास पहुँचना', '20 से 30 मिनट'],
            ['बैठकर या खड़े होकर इमारत देखना', '20 से 30 मिनट'],
            ['विश्राम', '20 मिनट'],
            ['वाहन से दूसरा पड़ाव', '20 से 30 मिनट'],
            ['दूसरे पड़ाव पर बैठकर बिताया समय', '30 से 45 मिनट'],
            ['शाम की हल्की सैर, अगर सुविधा हो', '20 मिनट']
          ]
        },
        { t: 'h2', text: 'सुविधा के अनुसार विकल्प' },
        {
          t: 'table',
          head: ['ज़रूरत', 'सुझाव'],
          rows: [
            ['कम चलना', 'पड़ावों के बीच वाहन लें'],
            ['बैठने की जगह', 'हर पड़ाव पर पहले देख लें'],
            ['छाया', 'दोपहर में खुली जगह से बचें'],
            ['समय', 'सुबह जल्दी या शाम, जब ठंडा हो'],
            ['साथी', 'साथ में कोई रहे, ताकि सहायता मिल सके']
          ]
        },
        { t: 'h2', text: 'सावधानियाँ' },
        {
          t: 'ul',
          items: [
            'असमान फर्श और सीढ़ियों पर ध्यान रखें।',
            'गर्मी में बाहर का समय छोटा रखें और पानी पीते रहें।',
            'अगर परिसर में कहीं दूर पैदल जाना पड़े, तो उस पड़ाव को छोड़ दें।'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.hi
        },
        {
          t: 'links',
          items: [
            { label: 'बड़ों और कम गतिशीलता वालों के लिए गोलघर', path: 'visit/accessibility' },
            { label: 'परिवार के साथ एक दिन', path: 'itineraries/family-day' },
            { label: 'बुद्ध स्मृति पार्क', path: 'nearby/buddha-smriti-park' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The order' },
        {
          t: 'ol',
          items: [
            'Reach Golghar directly by vehicle, avoiding a walk in from outside the area.',
            'View Golghar from whichever point gives the clearest sight of it.',
            'Rest somewhere with seating.',
            'Choose the second stop so it can also be reached by vehicle, not on foot.',
            'Rest in the middle of the day; take a short walk in the evening if it is comfortable.'
          ]
        },
        { t: 'h2', text: 'How the time is split' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Reaching Golghar by vehicle', '20 to 30 minutes'],
            ['Looking at the building, seated or standing', '20 to 30 minutes'],
            ['Rest', '20 minutes'],
            ['Vehicle to the second stop', '20 to 30 minutes'],
            ['Time at the second stop', '30 to 45 minutes'],
            ['A gentle evening walk, if comfortable', '20 minutes'],
            ['Travel between stops', 'counted on top of the above each time']
          ]
        },
        { t: 'h2', text: 'Options by need' },
        {
          t: 'table',
          head: ['Need', 'Suggestion'],
          rows: [
            ['Less walking', 'Use a vehicle between stops'],
            ['Seating', 'Check for it at each stop in advance'],
            ['Shade', 'Avoid open ground at midday'],
            ['Timing', 'Early morning or evening, when it is cooler'],
            ['Company', 'Bring someone along so help is at hand']
          ]
        },
        { t: 'h2', text: 'Cautions' },
        {
          t: 'ul',
          items: [
            'Watch for uneven floors and steps.',
            'Keep outdoor time short in the heat and drink water regularly.',
            'If a stop requires a long walk inside the compound, drop that stop.'
          ]
        },
        {
          t: 'note',
          text: stairsCaveat.en
        },
        {
          t: 'links',
          items: [
            { label: 'Golghar for elders and limited mobility', path: 'visit/accessibility' },
            { label: 'A day out with family', path: 'itineraries/family-day' },
            { label: 'Buddha Smriti Park', path: 'nearby/buddha-smriti-park' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'कम चलने वालों के लिए गोलघर देखना संभव है?', a: 'हाँ, अगर वाहन से सीधे पास पहुँचा जाए और पड़ाव कम रखे जाएँ।' },
        { q: 'किन बातों का ध्यान रखें?', a: 'असमान फर्श, छाया, बैठने की जगह और गर्मी में बाहर का कम समय।' },
        { q: 'क्या योजना में ऊपर चढ़ना शामिल है?', a: 'नहीं, क्योंकि सीढ़ियों की वर्तमान अनुमति अपुष्ट है।' }
      ],
      en: [
        { q: 'Is Golghar manageable for someone who cannot walk far?', a: 'Yes, if you travel directly by vehicle and keep the number of stops low.' },
        { q: 'What should be kept in mind?', a: 'Uneven floors, shade, seating and limiting outdoor time in the heat.' },
        { q: 'Does the plan include climbing?', a: 'No, because current access to the stairs is unconfirmed.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/accessibility', 'itineraries/family-day', 'nearby/buddha-smriti-park', 'visit/parking']
  },
  {
    path: 'itineraries/evening-gandhi-maidan',
    group: 'itineraries',
    priority: 3,
    title: {
      hi: 'शाम की सैर और रात का भोजन: गोलघर क्षेत्र',
      en: 'An Evening Walk and Dinner Around Golghar'
    },
    description: {
      hi: 'शाम को गोलघर क्षेत्र में सैर, गांधी मैदान की रोशनी और बाद में भोजन — क्रम, समय और व्यावहारिक सुझाव।',
      en: 'An evening in the Golghar area — a walk, Gandhi Maidan in evening light and dinner afterwards, with order, timing and practical notes.'
    },
    h1: { hi: 'शाम की सैर और रात का भोजन', en: 'An evening walk and dinner' },
    transport: {
      hi: 'शाम की सैर गोलघर और गांधी मैदान के बीच होती है और अंत भोजन के साथ — नक्शे पर स्थान देखकर आने-जाने की दिशा तय करें।',
      en: 'The evening walk runs between Golghar and Gandhi Maidan and ends with a meal; use the map to settle the direction of travel.'
    },
    intro: {
      hi: 'गोलघर के आसपास का क्षेत्र शाम को सबसे जीवंत रहता है — रोशनी नरम होती है, गर्मी कम होती है और मैदान में लोग निकल आते हैं। यह योजना उसी समय के लिए है, जब भोजन के साथ दिन का अंत करना हो।',
      en: 'The area around Golghar comes alive in the evening: the light softens, the heat drops and people come out on the maidan. This plan is for exactly that window, closing the day with a meal.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'शाम का क्रम' },
        {
          t: 'ol',
          items: [
            'गोलघर: सुनहरी रोशनी में बाहर से इमारत देखें।',
            'गांधी मैदान की ओर बढ़ें और शाम की भीड़ में थोड़ी सैर करें।',
            'रोशनी ढलने पर आसपास के भोजन-क्षेत्र की ओर चलें।',
            'बैठकर भोजन करें और दिन का अंत करें।'
          ]
        },
        { t: 'h2', text: 'समय का अंदाज़ा' },
        {
          t: 'table',
          head: ['पड़ाव', 'मोटा अंदाज़ा'],
          rows: [
            ['गोलघर', '30 मिनट'],
            ['गांधी मैदान की सैर', '45 मिनट'],
            ['भोजन-क्षेत्र तक चलना', '15 मिनट'],
            ['भोजन', '60 मिनट'],
            ['कुल', 'लगभग ढाई घंटे']
          ]
        },
        { t: 'h2', text: 'व्यावहारिक सुझाव' },
        {
          t: 'ul',
          items: [
            'शाम को भीड़ बढ़ती है, इसलिए अपनी चीज़ों का ध्यान रखें।',
            'वापसी का साधन पहले तय कर लें, खासकर अगर देर हो रही हो।',
            'खाने की जगह चुनते समय भीड़ और प्रतीक्षा-समय देखें।'
          ]
        },
        {
          t: 'note',
          text: 'यह मार्गदर्शिका किसी भोजनालय का नाम नहीं देती। क्षेत्र देखकर अपनी पसंद और बजट के अनुसार चुनें, और खुलने का समय मौके पर जाँचें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गांधी मैदान', path: 'nearby/gandhi-maidan' },
            { label: 'तेज़ नाश्ते के विकल्प', path: 'food/quick-bites' },
            { label: 'सभ्यता द्वार', path: 'nearby/sabhyata-dwar' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'The evening order' },
        {
          t: 'ol',
          items: [
            'Golghar: see the building from outside in golden light.',
            'Move towards Gandhi Maidan and take a walk through the evening crowd.',
            'As the light fades, head to one of the nearby food areas.',
            'Sit down to eat and close the day.'
          ]
        },
        { t: 'h2', text: 'Rough timings' },
        {
          t: 'table',
          head: ['Stop', 'Rough allowance'],
          rows: [
            ['Golghar', '30 minutes'],
            ['Walking Gandhi Maidan', '45 minutes'],
            ['Walking to a food area', '15 minutes'],
            ['Dinner', '60 minutes'],
            ['Total', 'About two and a half hours']
          ]
        },
        { t: 'h2', text: 'Practical tips' },
        {
          t: 'ul',
          items: [
            'Crowds grow in the evening, so keep an eye on your belongings.',
            'Decide how you will get back before it gets late.',
            'When choosing where to eat, look at the crowd and the waiting time.'
          ]
        },
        {
          t: 'note',
          text: 'This guide names no restaurant. Choose by looking at the area, matching your taste and budget, and check opening times on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Gandhi Maidan', path: 'nearby/gandhi-maidan' },
            { label: 'Quick snack options', path: 'food/quick-bites' },
            { label: 'Sabhyata Dwar', path: 'nearby/sabhyata-dwar' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'शाम को गोलघर देखने का समय अच्छा है?', a: 'हाँ, रोशनी नरम होती है और गर्मी कम, इसलिए शाम सैर के लिए उपयुक्त है।' },
        { q: 'शाम की योजना में कितना समय लगता है?', a: 'सैर और भोजन सहित लगभग ढाई घंटे।' },
        { q: 'क्या मार्गदर्शिका कोई भोजनालय बताती है?', a: 'नहीं, यह किसी भोजनालय का नाम नहीं देती; क्षेत्र देखकर खुद चुनें।' }
      ],
      en: [
        { q: 'Is the evening a good time to see Golghar?', a: 'Yes — the light is softer and the heat lower, which suits a walk.' },
        { q: 'How long does the evening plan take?', a: 'About two and a half hours, including the walk and dinner.' },
        { q: 'Does the guide name a restaurant?', a: 'No — it names none; choose by looking at the area yourself.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/gandhi-maidan', 'nearby/sabhyata-dwar', 'food/quick-bites', 'visit/photography']
  }
];
