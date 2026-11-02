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
      hi: 'बिहार पर्यटन — गंतव्य सूची (खुलने का समय)',
      en: 'Bihar Tourism — destination listing (opening hours)'
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
  maps: {
    label: {
      hi: 'Google Maps सार्वजनिक सूची (23 अक्टूबर 2026 को देखी गई)',
      en: 'Google Maps public listing (observed 23 October 2026)'
    },
    url: 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8'
  },
  metro: {
    label: {
      hi: 'पटना मेट्रो — परियोजना जानकारी',
      en: 'Patna Metro — project information'
    },
    url: 'https://patnametro.bihar.gov.in/'
  }
};

const sourcesAll = [SRC.district, SRC.bt, SRC.maps];
const sourcesTiming = [SRC.bt, SRC.ii, SRC.maps];

export const visit: GuideEntry[] = [
  {
    path: 'visit/location',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'गोलघर पटना कहाँ है: पता, लैंडमार्क और नक्शा गाइड',
      en: 'Where Is Golghar, Patna? Address, Landmarks and Map Guide'
    },
    description: {
      hi: 'गोलघर पटना, अशोक राजपथ रोड पर गांधी मैदान के पश्चिमी किनारे के पास है। पता, प्लस कोड, निर्देशांक, आसपास के पहचान-बिंदु और नक्शा।',
      en: 'Golghar is in Patna on Ashok Rajpath Road, near the western edge of Gandhi Maidan. Address, plus code, coordinates, nearby landmarks and a map.'
    },
    h1: { hi: 'गोलघर कहाँ है?', en: 'Where is Golghar?' },
    intro: {
      hi: 'गोलघर पटना शहर के मध्य भाग में, अशोक राजपथ रोड पर स्थित है। सबसे आसान पहचान यह है कि यह गांधी मैदान के पश्चिमी किनारे की ओर है और इसके सामने गवर्नमेंट गर्ल्स हाई स्कूल है। नीचे दिया पता और निर्देशांक नक्शे में जगह ढूँढने के लिए हैं।',
      en: 'Golghar stands in the middle of Patna on Ashok Rajpath Road. The simplest way to place it: it is towards the western edge of Gandhi Maidan, with Government Girls High School across the road. The address and coordinates below are for finding it on a map.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'पता और निर्देशांक' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पता', 'गवर्नमेंट गर्ल्स हाई स्कूल के सामने, अशोक राजपथ रोड, पटना, बिहार 800001, भारत'],
            ['निर्देशांक', '25.620337, 85.139448'],
            ['प्लस कोड', 'J4CQ+4Q पटना'],
            ['क्षेत्र', 'मध्य पटना, गांधी मैदान के पश्चिमी किनारे की ओर'],
            ['सड़क', 'अशोक राजपथ रोड']
          ]
        },
        { t: 'map' },
        { t: 'h2', text: 'आसपास के पहचान-बिंदु' },
        {
          t: 'p',
          text: 'नक्शे में जगह पहचानने के लिए इन स्थानों का उपयोग करें। ये केवल दिशा और पड़ोस बताने के लिए हैं; इनसे यह न मानें कि कोई निश्चित पैदल दूरी या समय तय है।'
        },
        {
          t: 'ul',
          items: [
            'गांधी मैदान — गोलघर इसके पश्चिमी किनारे की ओर है।',
            'गवर्नमेंट गर्ल्स हाई स्कूल — गोलघर के सामने।',
            'अशोक राजपथ रोड — वही सड़क जिस पर गोलघर स्थित है।',
            'श्रीकृष्ण विज्ञान केंद्र और सभ्यता द्वार — बिहार पर्यटन द्वारा मध्य पटना के इसी क्षेत्र में सूचीबद्ध।',
            'पटना जंक्शन रेलवे स्टेशन — शहर का मुख्य रेलवे स्टेशन।'
          ]
        },
        { t: 'h2', text: 'जगह पर पहुँचकर क्या देखें' },
        {
          t: 'p',
          text: 'गोलघर एक गुंबददार, स्तंभ-रहित अनाजघर है जिसकी दीवारें आधार पर बहुत मोटी हैं और ऊपर तक जाने के लिए घुमावदार सीढ़ियाँ हैं। यात्रा की योजना बनाते समय यह मान न रखें कि ऊपर जाना निश्चित है—सीढ़ियों की वर्तमान स्थिति अलग से जाँचें।'
        },
        {
          t: 'links',
          items: [
            { label: 'सीढ़ियाँ और ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'खुलने का समय और अवकाश', path: 'visit/timings' },
            { label: 'गांधी मैदान की ओर से आने का रास्ता', path: 'visit/gandhi-maidan' }
          ]
        },
        {
          t: 'note',
          text: 'यह पता और निर्देशांक सार्वजनिक सूची से लिए गए हैं। प्रवेश-द्वार, पार्किंग या पैदल मार्ग की गारंटी नहीं देते; मौके पर लगे संकेत और सुरक्षा निर्देश प्राथमिक हैं।'
        }
      ],
      en: [
        { t: 'h2', text: 'Address and coordinates' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Address', 'Opp. Govt. Girls High School, Ashok Rajpath Rd, Patna, Bihar 800001, India'],
            ['Coordinates', '25.620337, 85.139448'],
            ['Plus code', 'J4CQ+4Q Patna'],
            ['Area', 'Central Patna, towards the western edge of Gandhi Maidan'],
            ['Road', 'Ashok Rajpath Road']
          ]
        },
        { t: 'map' },
        { t: 'h2', text: 'Nearby landmarks' },
        {
          t: 'p',
          text: 'Use these to place Golghar on a map. They describe direction and neighbourhood only; they do not confirm any fixed walking distance or time.'
        },
        {
          t: 'ul',
          items: [
            'Gandhi Maidan — Golghar is towards its western edge.',
            'Government Girls High School — directly opposite Golghar.',
            'Ashok Rajpath Road — the road Golghar stands on.',
            'Shrikrishna Science Centre and Sabhyata Dwar — listed by Bihar Tourism in this same central Patna area.',
            'Patna Junction railway station — the city’s main railhead.'
          ]
        },
        { t: 'h2', text: 'What you are looking for on arrival' },
        {
          t: 'p',
          text: 'Golghar is a domed, pillarless granary with very thick walls at the base and winding stairs built to reach the top. Do not plan on the assumption that going up is possible — check the current staircase status separately.'
        },
        {
          t: 'links',
          items: [
            { label: 'Staircase and top access status', path: 'visit/staircase-access' },
            { label: 'Opening hours and weekly closure', path: 'visit/timings' },
            { label: 'Arriving from the Gandhi Maidan side', path: 'visit/gandhi-maidan' }
          ]
        },
        {
          t: 'note',
          text: 'The address and coordinates come from public listings. They do not guarantee an entrance gate, parking or a walking route; on-site signs and safety instructions take priority.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर पटना किस क्षेत्र में है?',
          a: 'यह मध्य पटना में अशोक राजपथ रोड पर, गांधी मैदान के पश्चिमी किनारे की ओर है। सामने गवर्नमेंट गर्ल्स हाई स्कूल है।'
        },
        {
          q: 'क्या यह एक ही इमारत है या पूरा परिसर?',
          a: 'गोलघर आमतौर पर उस गुंबददार अनाजघर के लिए कहा जाता है, पर व्यवहार में लोग आसपास के खुले परिसर को भी इसी नाम से बुलाते हैं। परिसर और भवन के अंदर की पहुँच अलग-अलग शर्तों पर हो सकती है।'
        },
        {
          q: 'नक्शे में गलत जगह दिख रही है, क्या करें?',
          a: 'निर्देशांक 25.620337, 85.139448 या प्लस कोड J4CQ+4Q पटना आज़माएँ। इनपुट के बाद भी अंतर हो तो चालक से अशोक राजपथ रोड पर गवर्नमेंट गर्ल्स हाई स्कूल के सामने पूछें।'
        }
      ],
      en: [
        {
          q: 'Which part of Patna is Golghar in?',
          a: 'Central Patna, on Ashok Rajpath Road towards the western edge of Gandhi Maidan, with Government Girls High School opposite.'
        },
        {
          q: 'Is Golghar one building or a whole complex?',
          a: 'The name usually refers to the domed granary itself, but people also use it for the open grounds around it. Access to the grounds and to the inside of the building can follow different conditions.'
        },
        {
          q: 'The map pin looks wrong. What should I do?',
          a: 'Try the coordinates 25.620337, 85.139448 or the plus code J4CQ+4Q Patna. If it still looks off, ask a driver or passer-by for Ashok Rajpath Road, opposite Government Girls High School.'
        }
      ]
    },
    sources: sourcesAll,
    related: ['visit/timings', 'visit/gandhi-maidan', 'visit/patna-junction']
  },

  {
    path: 'visit/timings',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'गोलघर पटना खुलने का समय और साप्ताहिक अवकाश गाइड',
      en: 'Golghar Patna Timings and Weekly Closure Guide'
    },
    description: {
      hi: 'तीन अलग-अलग स्रोत गोलघर के लिए अलग समय बताते हैं। जानिए कौन-सा स्रोत क्या कहता है, कब देखा गया, और जाने से पहले क्या जाँचना चाहिए।',
      en: 'Three sources give different times for Golghar. See what each source says, when it was checked, and what to verify before you travel.'
    },
    h1: { hi: 'गोलघर खुलने का समय', en: 'Golghar opening hours' },
    transport: {
      hi: 'गोलघर अशोक राजपथ रोड पर, गांधी मैदान के पश्चिमी किनारे के पास है। समय के हिसाब से योजना बनाते समय पहुँचने में लगने वाला समय भी जोड़ें।',
      en: 'Golghar is on Ashok Rajpath Road, near the western edge of Gandhi Maidan. When you plan around the hours, add the time you need to reach it.'
    },
    intro: {
      hi: 'गोलघर के खुलने के समय को लेकर सार्वजनिक सूचनाएँ एक जैसी नहीं हैं। नीचे हर स्रोत और उसकी तारीख दी गई है, ताकि आप अंदाज़े के बजाय जानकारी के आधार पर योजना बना सकें। किसी एक समय को अंतिम मानकर न निकलें।',
      en: 'Public information about Golghar’s opening hours does not agree. Each source and its date is listed below so you can plan on evidence rather than guesswork. Do not treat any single time as final.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'कौन-सा स्रोत क्या कहता है' },
        {
          t: 'table',
          head: ['स्रोत', 'बताया गया समय', 'अवकाश', 'अन्य'],
          rows: [
            ['बिहार पर्यटन गंतव्य सूची', '09:00–18:00', 'सूची में नहीं दिया', 'प्रवेश निःशुल्क बताया गया'],
            ['Incredible India (पर्यटन मंत्रालय)', '09:30–18:00', 'सूची में नहीं दिया', '—'],
            ['Google Maps सूची (23 अक्टूबर 2026)', 'मंगलवार–रविवार 09:00–17:00', 'सोमवार बंद बताया गया', 'सार्वजनिक सूची, आधिकारिक आदेश नहीं']
          ]
        },
        { t: 'h2', text: 'समय में अंतर क्यों है' },
        {
          t: 'p',
          text: 'पर्यटन वेबसाइट और नक्शा-सूची अलग-अलग समय पर बनती और अद्यतन होती हैं। नक्शे की सूची प्रायः स्थानीय विवरण से भरती है, जबकि पर्यटन सूची पर्यटन विभाग के रिकॉर्ड से। दोनों में से कोई भी उस दिन के संचालन की लाइव पुष्टि नहीं करता, इसलिए दोनों में अंतर रह सकता है।'
        },
        { t: 'h2', text: 'जाने से पहले क्या जाँचें' },
        {
          t: 'ol',
          items: [
            'यात्रा की तारीख तय करने के बाद स्थल के नंबर या स्थानीय सूचना केंद्र से उस दिन का समय पूछें।',
            'अगर मंगलवार से पहले जा रहे हैं तो सोमवार बंद रहने की संभावना को ध्यान में रखें—यह केवल नक्शा-सूची का विवरण है।',
            'सूर्यास्त से पहले पहुँचने की योजना बनाएँ, क्योंकि बाहरी क्षेत्र की रोशनी जल्दी कम होती है।',
            'पहुँचने में देरी होने पर फ़ोन पर स्थिति पूछ लें, ताकि बंद मिलने पर यात्रा व्यर्थ न हो।'
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ कोई आधिकारिक समय-पत्रक नहीं है। हम केवल वही बताते हैं जो स्रोत कहते हैं और उनकी तारीख; अंतिम पुष्टि स्थल पर ही हो सकती है।'
        },
        {
          t: 'links',
          items: [
            { label: 'टिकट और शुल्क की स्थिति', path: 'visit/tickets' },
            { label: 'सीढ़ियाँ और ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'मौसम के अनुसार यात्रा का समय', path: 'visit/best-season' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What each source says' },
        {
          t: 'table',
          head: ['Source', 'Time given', 'Weekly closure', 'Notes'],
          rows: [
            ['Bihar Tourism destination listing', '09:00–18:00', 'Not stated', 'Entry described as free'],
            ['Incredible India (Ministry of Tourism)', '09:30–18:00', 'Not stated', '—'],
            ['Google Maps listing (23 October 2026)', 'Tuesday–Sunday 09:00–17:00', 'Monday shown as closed', 'Public listing, not an official order']
          ]
        },
        { t: 'h2', text: 'Why the times differ' },
        {
          t: 'p',
          text: 'Tourism websites and map listings are created and updated at different times. A map listing is usually filled from local details; a tourism listing follows department records. Neither confirms that day’s actual operation, so gaps are normal.'
        },
        { t: 'h2', text: 'What to check before you go' },
        {
          t: 'ol',
          items: [
            'Once you have a travel date, call the site or a local information desk and ask for that day’s hours.',
            'If you are travelling early in the week, keep the Monday closure possibility in mind — that detail comes from the map listing only.',
            'Plan to arrive before sunset, as light in the open grounds drops quickly.',
            'If you are running late, phone ahead so a closed gate does not waste the trip.'
          ]
        },
        {
          t: 'note',
          text: 'This page is not an official timetable. It reports what the sources say and when they were checked; final confirmation can only come on site.'
        },
        {
          t: 'links',
          items: [
            { label: 'Ticket and fee status', path: 'visit/tickets' },
            { label: 'Staircase and top access status', path: 'visit/staircase-access' },
            { label: 'Best time of year to visit', path: 'visit/best-season' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर आज खुला है या बंद?',
          a: 'यह साइट यह नहीं बता सकती कि आज क्या स्थिति है। सबसे सुरक्षित तरीका है कि निकलने से पहले स्थल या स्थानीय पर्यटन सूचना केंद्र से फ़ोन पर पुष्टि करें।'
        },
        {
          q: 'क्या सोमवार को गोलघर बंद रहता है?',
          a: '23 अक्टूबर 2026 को देखी गई Google Maps सूची में सोमवार बंद दिखाया गया है। बिहार पर्यटन और Incredible India की सूचियों में अवकाश का ज़िक्र नहीं मिला, इसलिए इसे अंतिम न मानें।'
        },
        {
          q: 'शाम को कितनी देर तक रुक सकते हैं?',
          a: 'स्रोत 17:00 या 18:00 बंद होने की बात करते हैं। बाहरी क्षेत्र में रोशनी जल्दी घटती है, इसलिए सूर्यास्त से पहले पहुँचना बेहतर रहता है।'
        },
        {
          q: 'छुट्टी के दिन भीड़ कैसी होती है?',
          a: 'इस साइट के पास दिन-वार भीड़ का सत्यापित डेटा नहीं है। सामान्य तौर पर सुबह के शुरुआती घंटे और कार्यदिवस तुलनात्मक रूप से शांत रहते हैं।'
        }
      ],
      en: [
        {
          q: 'Is Golghar open today?',
          a: 'This site cannot tell you today’s status. The safest step is to phone the site or a local tourism information desk before setting out.'
        },
        {
          q: 'Is Golghar closed on Mondays?',
          a: 'The Google Maps listing observed on 23 October 2026 showed Monday as closed. The Bihar Tourism and Incredible India listings did not mention a weekly closure, so treat it as unconfirmed.'
        },
        {
          q: 'How late can I stay?',
          a: 'The sources give 17:00 or 18:00 as closing. Light in the open grounds drops quickly, so arriving before sunset is more reliable.'
        },
        {
          q: 'How busy is it on holidays?',
          a: 'This site has no verified day-by-day footfall data. Generally, early mornings and weekdays tend to be quieter.'
        }
      ]
    },
    sources: sourcesTiming,
    related: ['visit/tickets', 'visit/staircase-access', 'visit/best-season']
  },

  {
    path: 'visit/tickets',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'गोलघर पटना टिकट और शुल्क: क्या पुष्ट है और क्या नहीं',
      en: 'Golghar Patna Tickets and Entry Fees: What Is Confirmed'
    },
    description: {
      hi: 'पुराने स्रोत निःशुल्क प्रवेश बताते हैं, पर वर्तमान शुल्क की पुष्टि नहीं हुई है। परिसर, सीढ़ियाँ और कार्यक्रम के शुल्क अलग हो सकते हैं—जानिए क्या जाँचना है।',
      en: 'Older sources describe free entry, but current fees are not confirmed. Grounds, stairs and events can be priced differently — here is what to check.'
    },
    h1: { hi: 'टिकट और प्रवेश शुल्क', en: 'Tickets and entry fees' },
    transport: {
      hi: 'प्रवेश और शुल्क की बात स्थल पर ही तय होती है। गोलघर अशोक राजपथ रोड पर, गांधी मैदान के पश्चिम में है — निकलने से पहले नक्शे पर स्थान देख लें।',
      en: 'Entry and fees are settled on site. Golghar is on Ashok Rajpath Road, west of Gandhi Maidan — check the map location before setting out.'
    },
    intro: {
      hi: 'गोलघर के टिकट को लेकर एक महत्वपूर्ण बात है: हमें इस समीक्षा में वर्तमान आधिकारिक दर की पुष्टि नहीं मिली। पुराने स्रोत निःशुल्क प्रवेश कहते हैं, पर उसे आज की गारंटी न मानें।',
      en: 'One thing matters most about Golghar tickets: this review could not confirm a current official rate. Older sources describe free entry, but that should not be treated as today’s guarantee.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'हम क्या पुष्ट कर सके' },
        {
          t: 'table',
          head: ['मद', 'स्थिति'],
          rows: [
            ['वर्तमान आधिकारिक प्रवेश शुल्क', 'इस समीक्षा में पुष्ट नहीं'],
            ['पुराने स्रोत का दावा', 'परिसर में निःशुल्क प्रवेश बताया गया—आज की गारंटी नहीं'],
            ['ऊपर (सीढ़ियों) की पहुँच का शुल्क', 'लागू नहीं/अज्ञात, क्योंकि पहुँच की स्थिति ही अपुष्ट है'],
            ['विशेष कार्यक्रम या प्रदर्शनी का शुल्क', 'अलग हो सकता है; इस समीक्षा में पुष्ट नहीं'],
            ['इस वेबसाइट पर टिकट बिक्री', 'कोई नहीं—यह साइट टिकट नहीं बेचती']
          ]
        },
        { t: 'h2', text: 'शुल्क अलग-अलग क्यों दिखते हैं' },
        {
          t: 'p',
          text: 'किसी स्थल का शुल्क समय के साथ बदलता है, और अलग-अलग स्रोत अलग समय पर दर्ज किए गए होते हैं। परिसर, सीढ़ियाँ, विशेष कार्यक्रम और किसी विशेष सुविधा के शुल्क भी अलग हो सकते हैं। इसलिए पुराने लेख का कोई आंकड़ा आज लागू मान लेना जोखिम भरा है।'
        },
        { t: 'h2', text: 'मौके पर क्या जाँचें' },
        {
          t: 'ul',
          items: [
            'प्रवेश-द्वार पर लगा वर्तमान शुल्क बोर्ड या अधिसूचना देखें।',
            'पूछें कि शुल्क केवल परिसर का है या ऊपर जाने का भी—पहुँच की स्थिति बदल सकती है।',
            'नकद और डिजिटल भुगतान दोनों की व्यवस्था है या नहीं, यह पहले पूछ लें।',
            'किसी कार्यक्रम का अलग टिकट हो तो उसकी दर और समय अलग से पूछें।',
            'छूट (बच्चों, विद्यार्थियों, वरिष्ठ नागरिकों) हो तो लागू शर्तें पूछें।'
          ]
        },
        {
          t: 'note',
          text: 'बिना पुष्टि के किसी दर को तय मानकर यात्रा की बजट योजना न बनाएँ। थोड़ी अतिरिक्त राशि साथ रखना व्यावहारिक रहता है।'
        },
        {
          t: 'links',
          items: [
            { label: 'खुलने का समय और अवकाश', path: 'visit/timings' },
            { label: 'सीढ़ियाँ और ऊपर जाने की स्थिति', path: 'visit/staircase-access' },
            { label: 'सुविधाएँ और तैयारी', path: 'visit/family-facilities' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What we could confirm' },
        {
          t: 'table',
          head: ['Item', 'Status'],
          rows: [
            ['Current official entry fee', 'Not confirmed in this review'],
            ['Older source claim', 'Free entry to the grounds was listed — not a guarantee today'],
            ['Fee for the stairway or top', 'Not applicable/unknown, since access itself is unconfirmed'],
            ['Fee for special events or exhibitions', 'Can differ; not confirmed in this review'],
            ['Tickets sold on this website', 'None — this site does not sell tickets']
          ]
        },
        { t: 'h2', text: 'Why the figures differ' },
        {
          t: 'p',
          text: 'Fees at any site change over time, and different sources were recorded at different moments. The grounds, the stairs, special events and individual facilities can each be priced separately. Treating a figure from an old article as today’s rate is therefore risky.'
        },
        { t: 'h2', text: 'What to check on site' },
        {
          t: 'ul',
          items: [
            'Look for the current fee board or notice at the entrance.',
            'Ask whether the fee covers only the grounds or also the climb — access conditions can change.',
            'Ask whether both cash and digital payment are accepted.',
            'If an event has a separate ticket, ask for its rate and timing separately.',
            'If concessions exist (children, students, senior citizens), ask about the conditions.'
          ]
        },
        {
          t: 'note',
          text: 'Do not build a trip budget on an unconfirmed rate. Carrying a small extra amount is the practical approach.'
        },
        {
          t: 'links',
          items: [
            { label: 'Opening hours and weekly closure', path: 'visit/timings' },
            { label: 'Staircase and top access status', path: 'visit/staircase-access' },
            { label: 'Facilities and preparation', path: 'visit/family-facilities' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'क्या गोलघर में प्रवेश निःशुल्क है?',
          a: 'पुराने सार्वजनिक स्रोत निःशुल्क प्रवेश बताते हैं, पर इस समीक्षा में वर्तमान दर की पुष्टि नहीं हुई। इसे आज की गारंटी न मानें और मौके पर बोर्ड देखें।'
        },
        {
          q: 'क्या यहाँ ऑनलाइन टिकट मिलती है?',
          a: 'यह साइट टिकट नहीं बेचती और किसी ऑनलाइन बिक्री की पुष्टि भी नहीं करती। मौके पर उपलब्ध व्यवस्था के बारे में प्रवेश-द्वार पर पूछें।'
        },
        {
          q: 'बच्चों या विद्यार्थियों के लिए छूट है?',
          a: 'इस समीक्षा में छूट की कोई पुष्ट जानकारी नहीं मिली। लागू हो तो शर्तें प्रवेश-द्वार पर पूछें।'
        }
      ],
      en: [
        {
          q: 'Is entry to Golghar free?',
          a: 'Older public sources describe free entry, but this review could not confirm the current rate. Do not treat it as today’s guarantee; check the board on site.'
        },
        {
          q: 'Can I buy a ticket online?',
          a: 'This site does not sell tickets and does not confirm any online sale. Ask at the entrance about the arrangements actually in place.'
        },
        {
          q: 'Are there concessions for children or students?',
          a: 'This review found no confirmed concession information. If any apply, ask about the conditions at the entrance.'
        }
      ]
    },
    sources: sourcesAll,
    related: ['visit/timings', 'visit/staircase-access', 'visit/location']
  },

  {
    path: 'visit/staircase-access',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'गोलघर की 145 सीढ़ियाँ: क्या अभी ऊपर जा सकते हैं?',
      en: 'Golghar’s 145 Stairs: Can You Still Climb to the Top?'
    },
    description: {
      hi: 'इतिहास में गोलघर की 145 घुमावदार सीढ़ियों का ज़िक्र है, पर ऊपर चढ़ने की वर्तमान अनुमति अपुष्ट है। जानिए स्रोत क्या कहते हैं और यात्रा कैसे तय करें।',
      en: 'Golghar’s 145 winding stairs appear in historical records, but current permission to climb is unconfirmed. What the sources say and how to plan.'
    },
    h1: { hi: 'सीढ़ियाँ और ऊपर जाने की स्थिति', en: 'Staircase and top access' },
    transport: {
      hi: 'सीढ़ियों की स्थिति जो भी हो, वहाँ पहुँचना पड़ता है — गोलघर मध्य पटना में अशोक राजपथ रोड पर है।',
      en: 'Whatever the stair status, you still have to get there — Golghar is on Ashok Rajpath Road in central Patna.'
    },
    intro: {
      hi: 'यह पृष्ठ एक ज़रूरी सावधानी से शुरू होता है: इतिहास में गोलघर की 145 घुमावदार सीढ़ियों और ऊपर के दृश्य का ज़िक्र है, पर उनका उल्लेख आज चढ़ने की अनुमति नहीं है। 2026 की मरम्मत-रिपोर्टों में सीढ़ियों के लंबे समय से प्रतिबंधित होने और मरम्मत की योजना का ज़िक्र है।',
      en: 'This page starts with a necessary caution: historical records describe Golghar’s 145 winding stairs and the view from the top, but that description is not permission to climb today. Reports in 2026 noted the stairs had long been restricted, with repairs being planned.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'इतिहास क्या बताता है' },
        {
          t: 'p',
          text: 'जिला प्रशासन के इतिहास विवरण के अनुसार गोलघर में 145 घुमावदार सीढ़ियाँ हैं। इनका ऐतिहासिक उपयोग यह था कि अनाज ऊपर पहुँचाया जाए और दूसरी ओर से उतरा जाए। यह वास्तु और उपयोग का विवरण है, संचालन की सूचना नहीं।'
        },
        { t: 'h2', text: 'वर्तमान स्थिति: अपुष्ट' },
        {
          t: 'table',
          head: ['प्रश्न', 'स्थिति'],
          rows: [
            ['क्या ऊपर चढ़ने की अनुमति है?', 'इस समीक्षा में पुष्ट नहीं'],
            ['क्या सीढ़ियाँ प्रतिबंधित हैं?', '2026 की मरम्मत-रिपोर्टों में लंबे समय से प्रतिबंध का ज़िक्र'],
            ['मरम्मत कब पूरी होगी?', 'कोई पुष्ट समय-सारणी नहीं मिली'],
            ['क्या भविष्य में खुलेंगी?', 'योजना का ज़िक्र है, पर तारीख अपुष्ट']
          ]
        },
        {
          t: 'note',
          text: 'किसी पुराने लेख या वीडियो को देखकर ऊपर जाने की योजना न बनाएँ। सीढ़ियों की स्थिति और भवन के अंदर प्रवेश की शर्तें मौके पर ही पूछें।'
        },
        { t: 'h2', text: 'अगर ऊपर जाना संभव न हो तो भी क्या देखें' },
        {
          t: 'ul',
          items: [
            'गुंबद की बाहरी बनावट और उसका आकार—इमारत मुख्य आकर्षण है।',
            'आधार पर दीवार की मोटाई और स्तंभ-रहित बनावट, जो इसे अनोखा बनाती है।',
            'आसपास का खुला परिसर, जहाँ से इमारत का पूरा नज़रिया मिलता है।',
            'गांधी मैदान और मध्य पटना का क्षेत्र, जिसे इसी यात्रा में जोड़ा जा सकता है।'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'वास्तुकला और गुंबद की बनावट', path: 'architecture' },
            { label: 'मरम्मत की स्थिति', path: 'restoration-status' },
            { label: '145 सीढ़ियों का इतिहास और उपयोग', path: 'history/staircases' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What history records' },
        {
          t: 'p',
          text: 'The district administration’s history page records 145 winding stairs at Golghar. Historically they were used to carry grain up on one side and descend on the other. That describes its architecture and past use, not current operations.'
        },
        { t: 'h2', text: 'Current status: unconfirmed' },
        {
          t: 'table',
          head: ['Question', 'Status'],
          rows: [
            ['Is climbing to the top permitted?', 'Not confirmed in this review'],
            ['Are the stairs restricted?', '2026 repair reporting described a long-standing restriction'],
            ['When will repairs finish?', 'No confirmed schedule found'],
            ['Will they reopen?', 'Planning is mentioned, but no date is confirmed']
          ]
        },
        {
          t: 'note',
          text: 'Do not plan a climb based on an older article or video. Ask on site about the stairs and the conditions for entering the building.'
        },
        { t: 'h2', text: 'What to see even if a climb is not possible' },
        {
          t: 'ul',
          items: [
            'The outer form of the dome and its proportions — the building itself is the main draw.',
            'The thickness of the base walls and the pillarless construction, which make it unusual.',
            'The open grounds around it, where you get a full view of the building.',
            'Gandhi Maidan and central Patna, which can be added to the same trip.'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'Architecture and the dome', path: 'architecture' },
            { label: 'Restoration status', path: 'restoration-status' },
            { label: 'History and purpose of the 145 stairs', path: 'history/staircases' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर में कितनी सीढ़ियाँ हैं?',
          a: 'पटना जिला प्रशासन के इतिहास विवरण में 145 घुमावदार सीढ़ियों का उल्लेख है। यह ऐतिहासिक विवरण है।'
        },
        {
          q: 'क्या मैं आज ऊपर चढ़कर शहर देख सकता हूँ?',
          a: 'इस समीक्षा में ऐसी अनुमति की पुष्टि नहीं हुई। 2026 की रिपोर्टों में सीढ़ियों के लंबे समय से प्रतिबंधित होने का ज़िक्र है, इसलिए मौके पर स्थिति पूछें।'
        },
        {
          q: 'क्या मौसम देखकर पता चल जाएगा कि सीढ़ियाँ खुली हैं?',
          a: 'नहीं। मौसम का पूर्वानुमान स्थल की अनुमति, सुरक्षा निरीक्षण या सीढ़ियों की उपलब्धता की पुष्टि नहीं करता।'
        },
        {
          q: 'बच्चों या बुज़ुर्गों के साथ जाना ठीक है?',
          a: 'परिसर बाहर से देखने के लिए ठीक है। सीढ़ियों की स्थिति अपुष्ट होने के कारण चढ़ाई को योजना में शामिल न करें।'
        }
      ],
      en: [
        {
          q: 'How many stairs does Golghar have?',
          a: 'The Patna district administration history page records 145 winding stairs. That is a historical description.'
        },
        {
          q: 'Can I climb to the top and see the city today?',
          a: 'This review could not confirm such permission. Reporting in 2026 described the stairs as long restricted, so ask about the status on site.'
        },
        {
          q: 'Does the weather tell me whether the stairs are open?',
          a: 'No. A weather forecast does not confirm site permission, safety inspections or stair availability.'
        },
        {
          q: 'Is it suitable with children or older visitors?',
          a: 'The grounds are fine for viewing from outside. Because stair access is unconfirmed, do not include a climb in your plan.'
        }
      ]
    },
    sources: [
      SRC.district,
      {
        label: {
          hi: 'मरम्मत और सीढ़ियों की सीमा पर 2026 की समाचार रिपोर्ट',
          en: 'News report on repairs and stair restrictions (2026)'
        },
        url: 'https://www.abplive.com/'
      },
      SRC.maps
    ],
    related: ['architecture', 'restoration-status', 'history/staircases']
  },

  {
    path: 'visit/patna-junction',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'पटना जंक्शन से गोलघर कैसे पहुँचें: पूरी यात्रा गाइड',
      en: 'Patna Junction to Golghar: How to Reach the Monument'
    },
    description: {
      hi: 'पटना जंक्शन शहर का मुख्य रेलवे स्टेशन है और गोलघर मध्य पटना में है। रास्ता चुनने, यातायात, मेट्रो की वर्तमान स्थिति और बाहर निकलने के बाद की योजना।',
      en: 'Patna Junction is the city’s main railhead and Golghar sits in central Patna. Route choices, traffic, the current metro status and what to plan after leaving the station.'
    },
    h1: { hi: 'पटना जंक्शन से गोलघर', en: 'Patna Junction to Golghar' },
    transport: {
      hi: 'गोलघर मध्य पटना में है, इसलिए पटना जंक्शन से यात्रा शहर के भीतर ही रहती है। उस दिन का समय-अनुमान लाइव नक्शे से देखें।',
      en: 'Golghar is in central Patna, so the journey from Patna Junction stays inside the city. Get that day’s time estimate from a live map.'
    },
    intro: {
      hi: 'पटना जंक्शन से गोलघर मध्य पटना में है, इसलिए रास्ता शहर के भीतर ही रहता है। नीचे यात्रा की योजना के मुद्दे दिए हैं। सटीक दूरी या समय इस पृष्ठ पर नहीं दिया गया, क्योंकि वे यातायात और समय के साथ बदलते हैं—नक्शे से उस दिन का अनुमान देखें।',
      en: 'Golghar is in central Patna, so the journey from Patna Junction stays inside the city. The planning points are below. No precise distance or travel time is given here because both change with traffic and time of day — check a live map for that day.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यात्रा की योजना कैसे बनाएँ' },
        {
          t: 'ol',
          items: [
            'स्टेशन से बाहर निकलकर पहले नक्शे में अशोक राजपथ रोड तक का रास्ता देखें।',
            'उपलब्ध साधन चुनें—ऑटो, टैक्सी, ऐप-आधारित कैब या बस। किराया पहले तय कर लें।',
            'यातायात के कारण अतिरिक्त समय जोड़कर चलें, खासकर सुबह और शाम के व्यस्त घंटों में।',
            'गोलघर के सामने गवर्नमेंट गर्ल्स हाई स्कूल को पहचान-बिंदु बनाएँ।',
            'पहुँचने पर खुलने का समय और सीढ़ियों की स्थिति मौके पर जाँचें।'
          ]
        },
        { t: 'h2', text: 'मेट्रो की वर्तमान स्थिति' },
        {
          t: 'p',
          text: 'पटना मेट्रो की परियोजना और उससे जुड़े हिस्से निर्माणाधीन बताए जाते हैं। गांधी मैदान क्षेत्र से जुड़ी मेट्रो सेवा को आज उपलब्ध मानकर यात्रा की योजना न बनाएँ। सेवा शुरू होने की घोषणा हो तो आधिकारिक स्रोत से पुष्टि करें।'
        },
        {
          t: 'links',
          items: [
            { label: 'हवाई अड्डे से गोलघर', path: 'visit/airport' },
            { label: 'गांधी मैदान की ओर से आना', path: 'visit/gandhi-maidan' },
            { label: 'पार्किंग और उतरने की जगह', path: 'visit/parking' }
          ]
        },
        { t: 'h2', text: 'पहुँचने के बाद का क्रम' },
        {
          t: 'p',
          text: 'गोलघर देखने के बाद गांधी मैदान और मध्य पटना के अन्य स्थल जोड़ना आसान रहता है, क्योंकि ये एक ही क्षेत्र में हैं। समय कम हो तो पहले गोलघर, फिर आसपास का एक ही स्थल रखें; भोजन और विश्राम का समय अलग रखें।'
        },
        {
          t: 'note',
          text: 'सार्वजनिक परिवहन की लाइन, किराया, पड़ाव और आखिरी सेवा का समय बदलता रहता है। इनकी पुष्टि यात्रा के दिन स्थानीय जानकारी से करें।'
        }
      ],
      en: [
        { t: 'h2', text: 'How to plan the journey' },
        {
          t: 'ol',
          items: [
            'On leaving the station, check the route to Ashok Rajpath Road on a map first.',
            'Choose your mode — auto-rickshaw, taxi, app-based cab or bus. Agree the fare before starting.',
            'Add buffer time for traffic, especially in the morning and evening peaks.',
            'Use Government Girls High School, opposite Golghar, as your landmark.',
            'On arrival, check the day’s opening hours and staircase status on site.'
          ]
        },
        { t: 'h2', text: 'Current metro status' },
        {
          t: 'p',
          text: 'The Patna Metro project and its related sections are described as under construction. Do not plan a trip on the assumption that metro service near the Gandhi Maidan area is available today. If a launch is announced, confirm it from an official source.'
        },
        {
          t: 'links',
          items: [
            { label: 'From the airport to Golghar', path: 'visit/airport' },
            { label: 'Arriving from the Gandhi Maidan side', path: 'visit/gandhi-maidan' },
            { label: 'Parking and drop-off', path: 'visit/parking' }
          ]
        },
        { t: 'h2', text: 'What to do after arriving' },
        {
          t: 'p',
          text: 'After Golghar, Gandhi Maidan and other places in central Patna are easy to add because they are in the same area. Short on time? Do Golghar first, then one nearby place, and keep separate time for food and rest.'
        },
        {
          t: 'note',
          text: 'Public transport routes, fares, stops and last-service times change. Confirm them locally on the day of travel.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'पटना जंक्शन से गोलघर तक कितनी दूर है?',
          a: 'गोलघर मध्य पटना में है और जंक्शन भी उसी शहर-केंद्र का हिस्सा है, पर यातायात के कारण समय बदलता रहता है। सटीक अनुमान उस दिन के नक्शे से देखें।'
        },
        {
          q: 'क्या मेट्रो से जा सकते हैं?',
          a: 'पटना मेट्रो से जुड़े हिस्से निर्माणाधीन बताए जाते हैं। इसे उपलब्ध मानकर योजना न बनाएँ और शुरू होने पर आधिकारिक पुष्टि करें।'
        },
        {
          q: 'किराया कितना लगेगा?',
          a: 'किराया साधन, दूरी और समय पर निर्भर है और बदलता रहता है। चढ़ने से पहले किराया तय कर लेना व्यावहारिक रहता है।'
        }
      ],
      en: [
        {
          q: 'How far is Golghar from Patna Junction?',
          a: 'Golghar is in central Patna and the junction is part of the same city core, but travel time shifts with traffic. Check a map on the day for a realistic estimate.'
        },
        {
          q: 'Can I take the metro?',
          a: 'The parts of Patna Metro around this area are described as under construction. Do not plan on it being available; confirm officially if a service launch is announced.'
        },
        {
          q: 'What will the fare be?',
          a: 'Fares depend on the mode, distance and time, and change. Agreeing the fare before you get in is the practical approach.'
        }
      ]
    },
    sources: [SRC.maps, SRC.metro, SRC.bt],
    related: ['visit/airport', 'visit/gandhi-maidan', 'visit/parking']
  },

  {
    path: 'visit/airport',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'पटना हवाई अड्डे से गोलघर कैसे पहुँचें',
      en: 'Patna Airport to Golghar: Arrival and Transfer Guide'
    },
    description: {
      hi: 'जय प्रकाश नारायण हवाई अड्डे (PAT) से गोलघर पहुँचने की योजना—साधन चुनने, सामान, यातायात और पहुँचने के समय को लेकर व्यावहारिक सलाह।',
      en: 'Planning the transfer from Jay Prakash Narayan Airport (PAT) to Golghar — choosing transport, luggage, traffic and arrival timing.'
    },
    h1: { hi: 'हवाई अड्डे से गोलघर', en: 'From the airport to Golghar' },
    transport: {
      hi: 'हवाई अड्डे से यात्रा मध्य पटना की ओर आती है, जहाँ अशोक राजपथ रोड पर गोलघर है। समय का अनुमान लाइव नक्शे से लें।',
      en: 'From the airport the journey comes into central Patna, where Golghar stands on Ashok Rajpath Road. Get the time estimate from a live map.'
    },
    intro: {
      hi: 'पटना का हवाई अड्डा जय प्रकाश नारायण हवाई अड्डा (PAT) है। वहाँ से गोलघर मध्य पटना की ओर आना होता है। इस पृष्ठ पर सटीक दूरी या समय नहीं दिया गया, क्योंकि वे यातायात के साथ बदलते हैं; नक्शे लाइव अनुमान देते हैं।',
      en: 'Patna’s airport is Jay Prakash Narayan Airport (PAT). From there you travel towards central Patna. No precise distance or time is given here because they change with traffic; a live map gives the estimate.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'बाहर निकलकर क्या करें' },
        {
          t: 'ol',
          items: [
            'आगमन क्षेत्र से बाहर निकलने के बाद उपलब्ध आधिकारिक साधन देखें।',
            'किराया या मीटर की बात पहले तय करें; ऐप आधारित कैब हो तो बुकिंग पहले करें।',
            'सामान के साथ सामान्य वाहन छोटा पड़ सकता है—बड़े सामान के लिए उपयुक्त वाहन चुनें।',
            'यातायात के व्यस्त घंटों में अतिरिक्त समय जोड़ें।',
            'सीधे गोलघर जाने के बजाय, यदि समय हो, पहले निकट के अन्य स्थल या विश्राम का विकल्प सोचें।'
          ]
        },
        { t: 'h2', text: 'यात्रा का क्रम कैसे बनाएँ' },
        {
          t: 'p',
          text: 'दिन में पहुँचने पर पहले गोलघर देखना और फिर मध्य पटना के आसपास के स्थल जोड़ना सुविधाजनक रहता है। देर शाम पहुँचने पर खुलने का समय समाप्त हो सकता है, इसलिए उस स्थिति में अगले दिन की योजना बेहतर रहती है।'
        },
        {
          t: 'links',
          items: [
            { label: 'पटना जंक्शन से गोलघर', path: 'visit/patna-junction' },
            { label: 'पार्किंग और उतरने की जगह', path: 'visit/parking' },
            { label: 'खुलने का समय और अवकाश', path: 'visit/timings' }
          ]
        },
        {
          t: 'note',
          text: 'हवाई अड्डे से निकलने का समय, साधन की उपलब्धता और किराया बदलते रहते हैं। आगमन के बाद आधिकारिक काउंटर या लाइसेंसी वाहन ही चुनें।'
        }
      ],
      en: [
        { t: 'h2', text: 'What to do after landing' },
        {
          t: 'ol',
          items: [
            'Once you exit arrivals, look at the official transport options available.',
            'Agree the fare or meter before starting; for app-based cabs, book before you leave the terminal.',
            'A standard car can be tight with luggage — pick a vehicle that suits your bags.',
            'Add buffer time during peak traffic hours.',
            'If you have time, consider a rest stop or a nearby place rather than heading straight to Golghar.'
          ]
        },
        { t: 'h2', text: 'How to order the day' },
        {
          t: 'p',
          text: 'Arriving during the day, seeing Golghar first and then adding places around central Patna works well. Arriving late in the evening may be past closing time, so planning it for the next day is better in that case.'
        },
        {
          t: 'links',
          items: [
            { label: 'Patna Junction to Golghar', path: 'visit/patna-junction' },
            { label: 'Parking and drop-off', path: 'visit/parking' },
            { label: 'Opening hours and weekly closure', path: 'visit/timings' }
          ]
        },
        {
          t: 'note',
          text: 'Exit times, transport availability and fares change. After arrival, use official counters or licensed vehicles only.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'हवाई अड्डे से गोलघर तक कितना समय लगता है?',
          a: 'यह यातायात और समय पर निर्भर है, इसलिए इस पृष्ठ पर कोई निश्चित समय नहीं दिया गया। आगमन के दिन नक्शे से अनुमान देखें।'
        },
        {
          q: 'क्या हवाई अड्डे पर सामान रखने की सुविधा है?',
          a: 'इस समीक्षा में ऐसी किसी सेवा की पुष्टि नहीं हुई। सामान की व्यवस्था पहले से योजना में शामिल करना बेहतर रहता है।'
        }
      ],
      en: [
        {
          q: 'How long does it take from the airport to Golghar?',
          a: 'It depends on traffic and time of day, so no fixed duration is given here. Check a map for an estimate on your arrival day.'
        },
        {
          q: 'Is there left luggage at the airport?',
          a: 'This review found no confirmed such service. It is better to plan luggage handling in advance.'
        }
      ]
    },
    sources: [SRC.maps, SRC.bt],
    related: ['visit/patna-junction', 'visit/parking', 'visit/timings']
  },

  {
    path: 'visit/gandhi-maidan',
    group: 'visit',
    priority: 1,
    title: {
      hi: 'गांधी मैदान से गोलघर तक: पैदल और वाहन से आने की गाइड',
      en: 'Gandhi Maidan to Golghar: Walking and Arrival Guide'
    },
    description: {
      hi: 'गोलघर गांधी मैदान के पश्चिमी किनारे की ओर है। यहाँ से आने का तरीका, पहचान-बिंदु, गर्मी और बारिश में सावधानी तथा साथ में जोड़ने योग्य स्थल।',
      en: 'Golghar is towards the western edge of Gandhi Maidan. How to arrive from there, landmarks, heat and rain cautions, and what to combine with the walk.'
    },
    h1: { hi: 'गांधी मैदान से गोलघर', en: 'From Gandhi Maidan to Golghar' },
    transport: {
      hi: 'गोलघर गांधी मैदान के पश्चिमी किनारे की ओर है, इसलिए दोनों को एक ही नक्शे पर देखकर दूरी और रास्ता तय करें।',
      en: 'Golghar sits towards the western edge of Gandhi Maidan, so use one map to judge the distance and the route between them.'
    },
    intro: {
      hi: 'गांधी मैदान मध्य पटना का बड़ा खुला क्षेत्र है और गोलघर उसके पश्चिमी किनारे की ओर स्थित है। दोनों को एक ही यात्रा में जोड़ना स्वाभाविक है। नीचे रास्ता चुनने और तैयारी के मुद्दे दिए हैं; निश्चित पैदल समय मौसम और भीड़ पर निर्भर है।',
      en: 'Gandhi Maidan is the large open ground in central Patna, and Golghar sits towards its western edge. Combining the two in one trip is natural. The points below cover route choices and preparation; walking time depends on weather and crowds.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'आने के तरीके' },
        {
          t: 'table',
          head: ['तरीका', 'कब उपयुक्त'],
          rows: [
            ['पैदल', 'ठंडे मौसम में, जब खुला क्षेत्र पार करना आरामदायक हो'],
            ['ऑटो या ई-रिक्शा', 'छोटी दूरी के लिए, गर्मी या बारिश में'],
            ['टैक्सी या कैब', 'परिवार, बुज़ुर्गों या अधिक सामान के साथ'],
            ['निजी वाहन', 'जब पार्किंग की स्थिति पहले जाँच ली जाए']
          ]
        },
        { t: 'h2', text: 'खुले क्षेत्र में चलते समय' },
        {
          t: 'ul',
          items: [
            'गर्मी में दोपहर के समय खुले मैदान में चलना कठिन होता है—सुबह या शाम चुनें।',
            'बारिश में ज़मीन और रास्ते फिसलन भरे हो सकते हैं।',
            'पानी साथ रखें; खुले क्षेत्र में छाया हर जगह नहीं मिलती।',
            'भीड़ या किसी आयोजन के दिन रास्ते बदल सकते हैं—स्थानीय संकेत देखें।'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'गांधी मैदान: इतिहास और यात्रा', path: 'nearby/gandhi-maidan' },
            { label: 'गोलघर + गांधी मैदान आधे दिन की योजना', path: 'itineraries/golghar-gandhi-maidan' },
            { label: 'यात्रा का सबसे अच्छा मौसम', path: 'visit/best-season' }
          ]
        },
        {
          t: 'note',
          text: 'गांधी मैदान क्षेत्र में कार्यक्रम, रैलियाँ या मरम्मत के कारण आवागमन प्रभावित हो सकता है। यात्रा के दिन स्थानीय स्थिति देखें।'
        }
      ],
      en: [
        { t: 'h2', text: 'Ways to arrive' },
        {
          t: 'table',
          head: ['Mode', 'When it suits'],
          rows: [
            ['On foot', 'In cool weather, when crossing the open ground is comfortable'],
            ['Auto-rickshaw or e-rickshaw', 'Short hops, or in heat and rain'],
            ['Taxi or cab', 'With family, older visitors or extra luggage'],
            ['Private vehicle', 'When parking availability has been checked first']
          ]
        },
        { t: 'h2', text: 'Crossing the open ground' },
        {
          t: 'ul',
          items: [
            'Midday heat makes walking across the open ground hard — choose morning or evening.',
            'In the rain, surfaces and paths can become slippery.',
            'Carry water; shade is not available everywhere on the open ground.',
            'On crowded days or during events, routes can change — follow local signs.'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'Gandhi Maidan: history and visiting', path: 'nearby/gandhi-maidan' },
            { label: 'Golghar + Gandhi Maidan half day', path: 'itineraries/golghar-gandhi-maidan' },
            { label: 'Best season to visit', path: 'visit/best-season' }
          ]
        },
        {
          t: 'note',
          text: 'Events, rallies or works in the Gandhi Maidan area can affect movement. Check the local situation on the day of travel.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गांधी मैदान से गोलघर पैदल कितनी दूर है?',
          a: 'गोलघर गांधी मैदान के पश्चिमी किनारे की ओर है, पर निश्चित पैदल दूरी और समय मौसम, भीड़ और चुने गए रास्ते पर निर्भर करते हैं। नक्शे से उस दिन का अनुमान देखें।'
        },
        {
          q: 'दोनों को एक ही दिन देख सकते हैं?',
          a: 'हाँ, ये एक ही क्षेत्र में हैं। समय कम हो तो पहले गोलघर और फिर गांधी मैदान रखना सुविधाजनक रहता है।'
        },
        {
          q: 'शाम को इस क्षेत्र में जाना ठीक है?',
          a: 'शाम को मौसम अपेक्षाकृत ठीक रहता है, पर रोशनी कम होने लगती है। बंद होने के समय को ध्यान में रखें और स्थानीय निर्देश मानें।'
        }
      ],
      en: [
        {
          q: 'How far is Golghar from Gandhi Maidan on foot?',
          a: 'Golghar is towards the western edge of Gandhi Maidan, but exact walking distance and time depend on weather, crowds and the route you take. Check a map for that day.'
        },
        {
          q: 'Can I see both in one day?',
          a: 'Yes, they are in the same area. With limited time, doing Golghar first and then Gandhi Maidan is convenient.'
        },
        {
          q: 'Is an evening visit to this area fine?',
          a: 'Evenings are usually more comfortable, but light drops. Keep the closing time in mind and follow local guidance.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['nearby/gandhi-maidan', 'itineraries/golghar-gandhi-maidan', 'visit/parking']
  },

  {
    path: 'visit/parking',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'गोलघर के पास पार्किंग और उतरने की जगह: क्या जाँचें',
      en: 'Parking and Drop-Off Near Golghar: What to Check'
    },
    description: {
      hi: 'इस समीक्षा में गोलघर के लिए कोई पुष्ट समर्पित पार्किंग नहीं मिली। वाहन से आने पर उतरने की जगह, सड़क नियम और सुरक्षित विकल्प चुनने की सलाह।',
      en: 'This review found no confirmed dedicated parking at Golghar. Advice on drop-off points, road rules and safer options if you arrive by vehicle.'
    },
    h1: { hi: 'पार्किंग और उतरने की जगह', en: 'Parking and drop-off' },
    intro: {
      hi: 'गोलघर अशोक राजपथ रोड जैसी व्यस्त सड़क पर स्थित है, इसलिए वाहन से आने पर पार्किंग की स्थिति पहले जान लेना जरूरी है। इस समीक्षा में एक भी पुष्ट समर्पित पार्किंग क्षेत्र नहीं मिला, इसलिए नीचे सावधानियाँ दी गई हैं।',
      en: 'Golghar stands on a busy road, Ashok Rajpath Road, so anyone arriving by vehicle should know the parking situation in advance. This review found no confirmed dedicated parking area, so the cautions below matter.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'इस समय पुष्ट क्या है' },
        {
          t: 'table',
          head: ['मद', 'स्थिति'],
          rows: [
            ['समर्पित पार्किंग क्षेत्र', 'इस समीक्षा में पुष्टि नहीं हुई'],
            ['सड़क पर खड़े होने की अनुमति', 'चलाने वाले प्राधिकरण के नियमों पर निर्भर'],
            ['नो-पार्किंग क्षेत्र', 'मौके पर लगे संकेत देखें'],
            ['उतरने (ड्रॉप-ऑफ) की जगह', 'यातायात के अनुसार बदलती है']
          ]
        },
        { t: 'h2', text: 'सुरक्षित तरीका' },
        {
          t: 'ol',
          items: [
            'निकलने से पहले नक्शे पर आसपास के वैध पार्किंग क्षेत्र देखें।',
            'मौके पर लगे पार्किंग संकेतों और नो-पार्किंग बोर्डों का पालन करें।',
            'व्यस्त सड़क पर वाहन छोड़कर न जाएँ; ट्रैफ़िक बाधित न करें।',
            'संभव हो तो ऑटो, कैब या सार्वजनिक परिवहन चुनें, जिससे पार्किंग की समस्या ही न रहे।',
            'बुज़ुर्गों या बच्चों के साथ हों तो उतरने की जगह पहले तय करें ताकि सड़क पार करनी न पड़े।'
          ]
        },
        { t: 'h2', text: 'नक्शे पर स्थिति' },
        { t: 'map' },
        {
          t: 'links',
          items: [
            { label: 'हवाई अड्डे से गोलघर', path: 'visit/airport' },
            { label: 'पटना जंक्शन से गोलघर', path: 'visit/patna-junction' },
            { label: 'बुज़ुर्गों और सीमित चलने वालों के लिए', path: 'visit/accessibility' }
          ]
        },
        {
          t: 'note',
          text: 'पार्किंग और यातायात नियम स्थानीय प्रशासन बदल सकता है। इस पृष्ठ की जानकारी व्यावहारिक सलाह है, कोई आधिकारिक अनुमति नहीं।'
        }
      ],
      en: [
        { t: 'h2', text: 'What is confirmed right now' },
        {
          t: 'table',
          head: ['Item', 'Status'],
          rows: [
            ['Dedicated parking area', 'Not confirmed in this review'],
            ['Permission to park on the road', 'Depends on the operating authority’s rules'],
            ['No-parking zones', 'Check the signs posted on site'],
            ['A drop-off point', 'Varies with traffic conditions']
          ]
        },
        { t: 'h2', text: 'The safer approach' },
        {
          t: 'ol',
          items: [
            'Before setting out, check valid parking areas nearby on a map.',
            'Follow the parking signs and no-parking boards posted on site.',
            'Do not leave a vehicle on a busy road or block traffic.',
            'Where possible, use an auto, cab or public transport so parking is not your problem.',
            'With older visitors or children, decide the drop-off point first so no one has to cross the road.'
          ]
        },
        { t: 'h2', text: 'Location on the map' },
        { t: 'map' },
        {
          t: 'links',
          items: [
            { label: 'From the airport to Golghar', path: 'visit/airport' },
            { label: 'Patna Junction to Golghar', path: 'visit/patna-junction' },
            { label: 'For older visitors and reduced mobility', path: 'visit/accessibility' }
          ]
        },
        {
          t: 'note',
          text: 'Parking and traffic rules can change at short notice. The information here is practical advice, not official permission.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर पर पार्किंग उपलब्ध है?',
          a: 'इस समीक्षा में कोई पुष्ट समर्पित पार्किंग क्षेत्र नहीं मिला। मौके पर संकेत देखें और यातायात नियम मानें।'
        },
        {
          q: 'क्या सड़क किनारे वाहन खड़ा कर सकते हैं?',
          a: 'यह स्थानीय नियमों और उस दिन की भीड़ पर निर्भर है। नो-पार्किंग संकेत का पालन करें; व्यस्त सड़क पर वाहन न छोड़ें।'
        },
        {
          q: 'क्या सार्वजनिक परिवहन बेहतर रहेगा?',
          a: 'पार्किंग की अनिश्चितता देखते हुए ऑटो, कैब या सार्वजनिक परिवहन चुनना अक्सर आसान रहता है।'
        }
      ],
      en: [
        {
          q: 'Is parking available at Golghar?',
          a: 'This review found no confirmed dedicated parking area. Check signs on site and follow traffic rules.'
        },
        {
          q: 'Can I park at the roadside?',
          a: 'That depends on local rules and the day’s crowding. Follow no-parking signs and do not leave a vehicle on a busy road.'
        },
        {
          q: 'Is public transport a better option?',
          a: 'Given the parking uncertainty, an auto, cab or public transport is often the easier choice.'
        }
      ]
    },
    sources: [SRC.maps],
    related: ['visit/airport', 'visit/patna-junction', 'visit/accessibility']
  },

  {
    path: 'visit/accessibility',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'गोलघर यात्रा: बुज़ुर्गों और सीमित चलने वालों के लिए गाइड',
      en: 'Visiting Golghar with Reduced Mobility or as an Older Visitor'
    },
    description: {
      hi: 'इस समीक्षा में रैंप, लिफ़्ट या व्हीलचेयर-अनुकूल पहुँच की कोई पुष्ट जानकारी नहीं मिली। बुज़ुर्गों और सीमित चलने वाले यात्रियों के लिए व्यावहारिक तैयारी।',
      en: 'This review found no confirmed information about ramps, lifts or wheelchair access. Practical preparation for older visitors and people with reduced mobility.'
    },
    h1: { hi: 'सीमित चलने वाले यात्रियों के लिए', en: 'For visitors with reduced mobility' },
    transport: {
      hi: 'सीमित चलने वाले यात्रियों के लिए वाहन से प्रवेश द्वार के पास उतरना आसान रहता है; नक्शे पर स्थान देखकर उतरने की जगह पहले तय करें।',
      en: 'For visitors with limited mobility, a vehicle drop-off near the entrance is easier than a longer walk; use the map to agree the drop-off point first.'
    },
    intro: {
      hi: 'गोलघर की ऐतिहासिक बनावट—मोटी दीवारें और घुमावदार सीढ़ियाँ—स्वाभाविक रूप से सीमित पहुँच वाले यात्रियों के लिए चुनौतीपूर्ण हैं। इस समीक्षा में रैंप, लिफ़्ट, व्हीलचेयर या विशेष सहायता की कोई पुष्ट जानकारी नहीं मिली, इसलिए यात्रा पहले से बात करके तय करें।',
      en: 'Golghar’s historic form — thick walls and winding stairs — is naturally challenging for visitors with limited mobility. This review found no confirmed information on ramps, lifts, wheelchairs or special assistance, so plan the visit by asking ahead.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यात्रा से पहले पूछें' },
        {
          t: 'ul',
          items: [
            'क्या परिसर तक वाहन से पहुँचने की व्यवस्था है और उतरने की जगह कहाँ है?',
            'क्या रास्ता समतल है या सीढ़ियाँ पार करनी पड़ती हैं?',
            'क्या व्हीलचेयर या सहायक कर्मचारी उपलब्ध है?',
            'क्या बैठने की व्यवस्था और शौचालय परिसर में हैं?',
            'सबसे कम भीड़ वाला समय कौन-सा है?'
          ]
        },
        { t: 'h2', text: 'व्यावहारिक तैयारी' },
        {
          t: 'ul',
          items: [
            'मौसम ठंडा हो तो बाहरी भ्रमण अधिक आरामदायक रहता है।',
            'पानी, दवा और ज़रूरी सामान साथ रखें।',
            'साथ में कोई व्यक्ति रखें जो ज़रूरत पड़ने पर सहायता कर सके।',
            'चलने की दूरी कम रखें और बीच में विश्राम की योजना बनाएँ।',
            'यदि ऊपर जाना संभव न हो, तो बाहर से इमारत देखना भी यात्रा का मुख्य हिस्सा मान लें।'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'कम चलने वाली यात्रा योजना', path: 'itineraries/low-walking' },
            { label: 'पार्किंग और उतरने की जगह', path: 'visit/parking' },
            { label: 'सीढ़ियाँ और ऊपर जाने की स्थिति', path: 'visit/staircase-access' }
          ]
        },
        {
          t: 'note',
          text: 'सुविधाओं की उपलब्धता बदलती रहती है। इस पृष्ठ की सूची ऐसी जानकारी है जो मौके पर पूछनी चाहिए, कोई गारंटी नहीं।'
        }
      ],
      en: [
        { t: 'h2', text: 'Ask before you travel' },
        {
          t: 'ul',
          items: [
            'Can a vehicle reach the grounds, and where is the drop-off point?',
            'Is the route level, or are there steps to cross?',
            'Are a wheelchair or assisting staff available?',
            'Is there seating and are there toilets within the grounds?',
            'Which hours are least crowded?'
          ]
        },
        { t: 'h2', text: 'Practical preparation' },
        {
          t: 'ul',
          items: [
            'In cooler weather, moving around outside is more comfortable.',
            'Carry water, medicines and essentials.',
            'Bring someone who can assist if needed.',
            'Keep walking distances short and plan rest stops.',
            'If a climb is not possible, treat viewing the building from outside as the main part of the visit.'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'Low-walking itinerary', path: 'itineraries/low-walking' },
            { label: 'Parking and drop-off', path: 'visit/parking' },
            { label: 'Staircase and top access status', path: 'visit/staircase-access' }
          ]
        },
        {
          t: 'note',
          text: 'Facilities change over time. The list here is information to ask about on site, not a guarantee.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'क्या गोलघर व्हीलचेयर-अनुकूल है?',
          a: 'इस समीक्षा में व्हीलचेयर-अनुकूल पहुँच की कोई पुष्ट जानकारी नहीं मिली। यात्रा से पहले स्थल या स्थानीय पर्यटन सूचना से पूछें।'
        },
        {
          q: 'क्या लिफ़्ट या रैंप है?',
          a: 'पुष्ट जानकारी उपलब्ध नहीं। ऐतिहासिक बनावट को देखते हुए पहुँच के बारे में पहले पूछना जरूरी है।'
        },
        {
          q: 'बुज़ुर्गों के साथ जाने का सबसे अच्छा समय?',
          a: 'ठंडे मौसम की सुबह या शाम, जब गर्मी और भीड़ कम हो। चलने की दूरी कम रखें और विश्राम का समय जोड़ें।'
        }
      ],
      en: [
        {
          q: 'Is Golghar wheelchair accessible?',
          a: 'This review found no confirmed information about wheelchair access. Ask the site or a local tourism information desk before travelling.'
        },
        {
          q: 'Are there ramps or a lift?',
          a: 'No confirmed information is available. Given the historic construction, access should be asked about in advance.'
        },
        {
          q: 'Best time to visit with older visitors?',
          a: 'A morning or evening in cooler weather, when heat and crowds are lower. Keep walking distances short and add rest time.'
        }
      ]
    },
    sources: [SRC.maps, SRC.bt],
    related: ['itineraries/low-walking', 'visit/parking', 'visit/staircase-access']
  },

  {
    path: 'visit/family-facilities',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'बच्चों के साथ गोलघर यात्रा: सुविधाएँ और तैयारी',
      en: 'Visiting Golghar with Children: Facilities and Preparation'
    },
    description: {
      hi: 'बच्चों के साथ गोलघर जाने की तैयारी—भोजन, पानी, शौचालय और बैठने की जगह को लेकर क्या पूछें, तथा आसपास के कौन-से स्थल बच्चों के अनुकूल हैं।',
      en: 'Preparing for Golghar with children — what to ask about food, water, toilets and seating, and which nearby places suit children.'
    },
    h1: { hi: 'बच्चों के साथ यात्रा', en: 'Visiting with children' },
    transport: {
      hi: 'बच्चों के साथ वाहन से प्रवेश द्वार के पास उतरना सुविधाजनक रहता है; नक्शे पर स्थान देखकर यह पहले तय करें।',
      en: 'With children, a drop-off close to the entrance is more convenient; use the map to plan it in advance.'
    },
    intro: {
      hi: 'गोलघर की बाहरी बनावट बच्चों के लिए देखने में रोचक है, पर यह एक ऐतिहासिक इमारत है और यहाँ बच्चों के लिए विशेष सुविधाओं की कोई पुष्ट जानकारी इस समीक्षा में नहीं मिली। यात्रा को सरल और छोटा रखना बेहतर रहता है।',
      en: 'Golghar’s outer form is visually interesting for children, but it is a historic building and this review found no confirmed child-specific facilities. Keeping the visit simple and short works better.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'सुविधाओं के बारे में क्या पूछें' },
        {
          t: 'ul',
          items: [
            'शौचालय परिसर में हैं या पास में?',
            'पानी पीने की व्यवस्था कहाँ है?',
            'छाया और बैठने के लिए जगहें कहाँ हैं?',
            'गाड़ी (स्ट्रोलर) ले जाने के लिए रास्ता समतल है या नहीं?',
            'किस समय सबसे कम भीड़ रहती है?'
          ]
        },
        { t: 'h2', text: 'साथ रखने योग्य सामान' },
        {
          t: 'ul',
          items: [
            'पानी की बोतल और हल्का नाश्ता।',
            'टोपी या छाता, मौसम के अनुसार।',
            'बच्चों के लिए सनस्क्रीन (गर्मी में)।',
            'गीले टिश्यू और एक अतिरिक्त कपड़ा।',
            'दवा, यदि बच्चे को नियमित दवा चाहिए।'
          ]
        },
        { t: 'h2', text: 'आसपास के अनुकूल स्थल' },
        {
          t: 'p',
          text: 'बच्चों के साथ हों तो श्रीकृष्ण विज्ञान केंद्र जैसा स्थल जोड़ना उपयुक्त रहता है, जहाँ सीखने वाली गतिविधियाँ हैं। बारिश या गर्मी में संग्रहालय जैसे भीतरी स्थल बेहतर विकल्प हैं।'
        },
        {
          t: 'links',
          items: [
            { label: 'श्रीकृष्ण विज्ञान केंद्र', path: 'nearby/science-centre' },
            { label: 'बच्चों के साथ एक दिन की योजना', path: 'itineraries/family-day' },
            { label: 'बारिश के दिन की योजना', path: 'itineraries/rainy-day' }
          ]
        },
        {
          t: 'note',
          text: 'बच्चों के साथ अनुमति वाले रास्ते पर रहें और सीढ़ियों या बंद हिस्सों के आसपास स्थानीय सुरक्षा निर्देश मानें।'
        }
      ],
      en: [
        { t: 'h2', text: 'What to ask about facilities' },
        {
          t: 'ul',
          items: [
            'Are toilets inside the grounds or nearby?',
            'Where is drinking water available?',
            'Where is there shade and seating?',
            'Is the route level enough for a stroller?',
            'Which hours are least crowded?'
          ]
        },
        { t: 'h2', text: 'What to carry' },
        {
          t: 'ul',
          items: [
            'A water bottle and a light snack.',
            'A hat or umbrella, depending on the season.',
            'Sunscreen for children (in summer).',
            'Wet wipes and a spare set of clothes.',
            'Medicines if a child needs them regularly.'
          ]
        },
        { t: 'h2', text: 'Nearby places that suit children' },
        {
          t: 'p',
          text: 'With children, adding a place such as Shrikrishna Science Centre works well, since it has activity-based exhibits. In rain or heat, indoor options such as a museum are better.'
        },
        {
          t: 'links',
          items: [
            { label: 'Shrikrishna Science Centre', path: 'nearby/science-centre' },
            { label: 'A family day plan', path: 'itineraries/family-day' },
            { label: 'A rainy-day plan', path: 'itineraries/rainy-day' }
          ]
        },
        {
          t: 'note',
          text: 'With children, stay on permitted routes and follow local safety instructions near stairs or closed sections.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'बच्चों के साथ गोलघर जाना ठीक है?',
          a: 'हाँ, देखने के लिए ठीक है। यात्रा छोटी रखें और बंद हिस्सों या सीढ़ियों के पास स्थानीय निर्देश मानें।'
        },
        {
          q: 'क्या वहाँ शौचालय या पानी है?',
          a: 'इस समीक्षा में इनकी पुष्ट जानकारी नहीं मिली। मौके पर पूछें या आवश्यक सामान साथ रखें।'
        },
        {
          q: 'कितना समय लगेगा?',
          a: 'बाहर से देखने में सामान्यतः कम समय लगता है। बच्चों के साथ विश्राम और नाश्ते का समय जोड़कर योजना बनाएँ।'
        }
      ],
      en: [
        {
          q: 'Is Golghar suitable for children?',
          a: 'Yes, for viewing. Keep the visit short and follow local instructions near closed sections or stairs.'
        },
        {
          q: 'Are there toilets or drinking water?',
          a: 'This review found no confirmed information. Ask on site, or carry what you need.'
        },
        {
          q: 'How long does a visit take?',
          a: 'Viewing from outside generally takes little time. With children, add time for rest and snacks.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['nearby/science-centre', 'itineraries/family-day', 'itineraries/rainy-day']
  },

  {
    path: 'visit/best-season',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'गोलघर घूमने का सबसे अच्छा मौसम और समय',
      en: 'Best Season and Time of Day to Visit Golghar'
    },
    description: {
      hi: 'पटना में अक्टूबर से मार्च सबसे सुहाना मौसम रहता है; गर्मी और मानसून में योजना बदलनी पड़ती है। महीने के अनुसार तैयारी और दिन का सही समय।',
      en: 'October to March is the most comfortable stretch in Patna; summer and monsoon need a different plan. Month-by-month preparation and the best time of day.'
    },
    h1: { hi: 'किस मौसम में जाएँ', en: 'When to visit' },
    transport: {
      hi: 'गोलघर मध्य पटना में अशोक राजपथ रोड पर है। दिन और समय मौसम के हिसाब से चुनें, और नक्शे से पैदल की दूरी और छाया का अंदाज़ा लें।',
      en: 'Golghar is on Ashok Rajpath Road in central Patna. Choose the day and hour from the forecast, and use the map to judge the walk and the shade.'
    },
    intro: {
      hi: 'पटना का मौसम साल भर बदलता रहता है और यह तय करता है कि गोलघर की यात्रा कितनी आरामदायक रहेगी। सामान्यतः अक्टूबर से मार्च तक का समय सबसे अनुकूल रहता है; अप्रैल से जून में गर्मी तेज़ होती है और जुलाई से सितंबर में बारिश।',
      en: 'Patna’s weather changes through the year and decides how comfortable a Golghar visit will be. Generally, October to March is the most favourable; April to June is hot and July to September brings the monsoon.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'महीनों के अनुसार योजना' },
        {
          t: 'table',
          head: ['मौसम', 'महीने', 'कैसा रहता है', 'तैयारी'],
          rows: [
            ['सर्दी', 'नवंबर–फरवरी', 'अधिकतर आरामदायक; सुबह कोहरा संभव', 'हल्का स्वेटर या जैकेट, सुबह की योजना में लचीलापन'],
            ['वसंत जैसा', 'अक्टूबर, मार्च', 'सुहाना', 'सामान्य हल्के कपड़े'],
            ['गर्मी', 'अप्रैल–जून', 'दिन बहुत गर्म', 'सुबह जल्दी या शाम, पानी, टोपी'],
            ['मानसून', 'जुलाई–सितंबर', 'बारिश और उमस', 'छाता, फिसलन से बचाव, भीतरी विकल्प']
          ]
        },
        { t: 'h2', text: 'दिन का सबसे अच्छा समय' },
        {
          t: 'p',
          text: 'सुबह के शुरुआती घंटे और सूर्यास्त से पहले का समय सबसे अनुकूल रहता है—तापमान कम होता है और रोशनी फोटोग्राफी के लिए भी अच्छी रहती है। दोपहर में खुले परिसर में चलना कठिन हो सकता है।'
        },
        { t: 'h2', text: 'बारिश और गर्मी में विकल्प' },
        {
          t: 'p',
          text: 'तेज़ बारिश या गर्मी में भीतरी स्थल जोड़ना बेहतर रहता है, जैसे संग्रहालय या विज्ञान केंद्र। इससे यात्रा मौसम पर निर्भर नहीं रहती और समय व्यर्थ नहीं जाता।'
        },
        {
          t: 'links',
          items: [
            { label: 'बारिश के दिन की योजना', path: 'itineraries/rainy-day' },
            { label: 'खुलने का समय और अवकाश', path: 'visit/timings' },
            { label: 'आज का मौसम और सुझाव (होम पेज पर)', path: '' }
          ]
        },
        {
          t: 'note',
          text: 'मौसम का पूर्वानुमान स्थल के खुलने की स्थिति नहीं बताता। यात्रा के दिन दोनों अलग-अलग जाँचें।'
        }
      ],
      en: [
        { t: 'h2', text: 'Month-by-month planning' },
        {
          t: 'table',
          head: ['Season', 'Months', 'What it is like', 'Preparation'],
          rows: [
            ['Winter', 'November–February', 'Mostly comfortable; morning fog possible', 'Light sweater or jacket, flexibility for morning plans'],
            ['Mild', 'October, March', 'Pleasant', 'Normal light clothing'],
            ['Summer', 'April–June', 'Very hot days', 'Early morning or evening, water, hat'],
            ['Monsoon', 'July–September', 'Rain and humidity', 'Umbrella, care on slippery surfaces, indoor options']
          ]
        },
        { t: 'h2', text: 'The best time of day' },
        {
          t: 'p',
          text: 'Early morning and the hours before sunset are most comfortable — lower temperatures, and light that also suits photography. Walking across the open grounds at midday can be hard.'
        },
        { t: 'h2', text: 'Alternatives in rain and heat' },
        {
          t: 'p',
          text: 'In heavy rain or heat, adding indoor places such as a museum or science centre works better. It makes the trip less dependent on the weather and avoids wasted time.'
        },
        {
          t: 'links',
          items: [
            { label: 'A rainy-day plan', path: 'itineraries/rainy-day' },
            { label: 'Opening hours and weekly closure', path: 'visit/timings' },
            { label: 'Today’s weather and advice (on the home page)', path: '' }
          ]
        },
        {
          t: 'note',
          text: 'A weather forecast does not tell you whether the site is open. Check both separately on the day of travel.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर घूमने का सबसे अच्छा महीना कौन-सा है?',
          a: 'सामान्यतः अक्टूबर से मार्च का समय सबसे अनुकूल रहता है, जब तापमान कम होता है और बाहर घूमना आरामदायक रहता है।'
        },
        {
          q: 'गर्मी में जाना ठीक रहेगा?',
          a: 'जाना संभव है, पर दोपहर से बचें। सुबह जल्दी या शाम को जाएँ, पानी साथ रखें और खुले क्षेत्र में समय कम रखें।'
        },
        {
          q: 'बारिश में क्या ध्यान रखें?',
          a: 'बारिश में सतह फिसलन भरी हो सकती है। छाता रखें और बाहरी समय कम करके भीतरी विकल्प जोड़ें।'
        }
      ],
      en: [
        {
          q: 'What is the best month to visit Golghar?',
          a: 'Generally October to March, when temperatures are lower and being outdoors is comfortable.'
        },
        {
          q: 'Is a summer visit manageable?',
          a: 'It is possible, but avoid midday. Go early morning or evening, carry water and limit time in the open.'
        },
        {
          q: 'What should I watch out for in the rain?',
          a: 'Surfaces can be slippery. Carry an umbrella, cut outdoor time and add indoor options.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['itineraries/rainy-day', 'visit/timings', 'visit/photography']
  },

  {
    path: 'visit/photography',
    group: 'visit',
    priority: 2,
    title: {
      hi: 'गोलघर की फोटोग्राफी: समय, कोण और सावधानियाँ',
      en: 'Photographing Golghar: Timing, Angles and Cautions'
    },
    description: {
      hi: 'गोलघर की तस्वीरें लेने का सबसे अच्छा समय, कौन-सा कोण इमारत को पूरा दिखाता है, और किन नियमों का पालन करना चाहिए।',
      en: 'The best hours to photograph Golghar, which angle shows the building fully, and what rules to follow.'
    },
    h1: { hi: 'फोटोग्राफी गाइड', en: 'Photography guide' },
    transport: {
      hi: 'गोलघर अशोक राजपथ रोड पर है; नक्शे पर स्थान देखकर तय करें कि आप किस ओर से पहुँचेंगे, ताकि रोशनी का रुख़ पहले से अंदाज़ा लग सके।',
      en: 'Golghar stands on Ashok Rajpath Road; use the map to decide which side you approach from, so you can judge the light in advance.'
    },
    intro: {
      hi: 'गोलघर की गोल बनावट और ऊँचा गुंबद इसे फोटोग्राफी के लिए उपयुक्त बनाते हैं। सबसे अच्छी रोशनी सुबह और सूर्यास्त से पहले मिलती है। इस समीक्षा में फोटोग्राफी से जुड़े कोई विशेष नियम पुष्ट नहीं हुए, इसलिए मौके पर संकेत देखें।',
      en: 'Golghar’s round form and tall dome make it good to photograph. The best light is in the morning and before sunset. This review confirmed no special photography rules, so follow the signs on site.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'समय और रोशनी' },
        {
          t: 'table',
          head: ['समय', 'रोशनी', 'किसके लिए'],
          rows: [
            ['सुबह जल्दी', 'नरम और तिरछी', 'इमारत की बनावट और विवरण'],
            ['दोपहर', 'कड़ी और सीधी', 'कम अनुकूल; परछाईं बहुत गहरी'],
            ['सूर्यास्त से पहले', 'गर्म रंग की नरम रोशनी', 'समग्र दृश्य और आसपास का क्षेत्र']
          ]
        },
        { t: 'h2', text: 'कोण चुनना' },
        {
          t: 'ul',
          items: [
            'इमारत से पर्याप्त दूरी रखें ताकि गुंबद पूरा फ्रेम में आए।',
            'किसी एक कोने से लगातार शॉट लेने के बजाय कुछ अलग स्थानों से रचना आज़माएँ।',
            'क्षैतिज फोटो में इमारत का गोल आकार बेहतर दिखता है।',
            'पृष्ठभूमि में आकाश अधिक हो तो गुंबद का आकार स्पष्ट रहता है।',
            'भीड़ कम हो तो स्थिर, साफ़ तस्वीर लेना आसान रहता है।'
          ]
        },
        { t: 'h2', text: 'ध्यान रखने योग्य बातें' },
        {
          t: 'ul',
          items: [
            'मौके पर लगे किसी भी निषेध संकेत का पालन करें।',
            'लोगों की तस्वीर लेने से पहले अनुमति लें।',
            'सीढ़ियों, बंद हिस्सों या किसी भी सुरक्षा-बाड़ के पास न जाएँ।',
            'ट्राइपॉड या बड़े उपकरण से रास्ता बाधित न करें।',
            'गर्मी में दोपहर की धूप में उपकरण ज़्यादा गर्म हो सकते हैं।'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'फोटोग्राफी वॉक की योजना', path: 'itineraries/photography-walk' },
            { label: 'वास्तुकला और गुंबद', path: 'architecture' },
            { label: 'खुलने का समय', path: 'visit/timings' }
          ]
        },
        {
          t: 'note',
          text: 'ऊपर के मंच से मिलने वाला दृश्य अक्सर ऐतिहासिक विवरणों में आता है, पर वर्तमान में वहाँ की पहुँच अपुष्ट है। फोटोग्राफी की योजना ज़मीन के स्तर से बनाएँ।'
        }
      ],
      en: [
        { t: 'h2', text: 'Timing and light' },
        {
          t: 'table',
          head: ['Time', 'Light', 'Best for'],
          rows: [
            ['Early morning', 'Soft and angled', 'Form and detail of the building'],
            ['Midday', 'Hard and direct', 'Least favourable; heavy shadows'],
            ['Before sunset', 'Warm, soft light', 'Overall view and the surrounding area']
          ]
        },
        { t: 'h2', text: 'Choosing an angle' },
        {
          t: 'ul',
          items: [
            'Step back far enough for the entire dome to fit in the frame.',
            'Try a few different positions rather than shooting repeatedly from one corner.',
            'A horizontal frame shows the round shape better.',
            'More sky in the background keeps the dome’s outline clear.',
            'A quieter time makes a steady, clean shot easier.'
          ]
        },
        { t: 'h2', text: 'Things to keep in mind' },
        {
          t: 'ul',
          items: [
            'Follow any prohibition signs posted on site.',
            'Ask before photographing people.',
            'Do not go near stairs, closed sections or any safety barrier.',
            'Do not block paths with a tripod or large equipment.',
            'In summer, equipment left in the midday sun can get very hot.'
          ]
        },
        {
          t: 'links',
          items: [
            { label: 'A photography walk plan', path: 'itineraries/photography-walk' },
            { label: 'Architecture and the dome', path: 'architecture' },
            { label: 'Opening hours', path: 'visit/timings' }
          ]
        },
        {
          t: 'note',
          text: 'The view from the top platform appears often in historical descriptions, but access there is currently unconfirmed. Plan your photographs from ground level.'
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'फोटो लेने का सबसे अच्छा समय कौन-सा है?',
          a: 'सुबह जल्दी और सूर्यास्त से पहले की रोशनी सबसे अच्छी रहती है; दोपहर की कड़ी धूप में तस्वीरें कम बेहतर आती हैं।'
        },
        {
          q: 'क्या यहाँ फोटो लेने पर रोक है?',
          a: 'इस समीक्षा में किसी विशेष निषेध की पुष्टि नहीं हुई। मौके पर लगे संकेत देखें और उनका पालन करें।'
        },
        {
          q: 'ड्रोन या ट्राइपॉड ले जा सकते हैं?',
          a: 'इसकी पुष्ट जानकारी नहीं है। किसी भी उपकरण से रास्ता न रोकें और स्थानीय अनुमति पहले पूछें।'
        }
      ],
      en: [
        {
          q: 'What is the best time to take photos?',
          a: 'Early morning and the hours before sunset give the best light; hard midday sun is less flattering.'
        },
        {
          q: 'Is photography restricted here?',
          a: 'This review confirmed no specific prohibition. Check and follow the signs posted on site.'
        },
        {
          q: 'Can I bring a drone or tripod?',
          a: 'No confirmed information is available. Do not block paths with any equipment, and ask about local permission first.'
        }
      ]
    },
    sources: [SRC.maps, SRC.bt],
    related: ['itineraries/photography-walk', 'architecture', 'visit/best-season']
  }
];
