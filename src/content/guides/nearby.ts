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

export const nearby: GuideEntry[] = [
  {
    path: 'nearby/gandhi-maidan',
    group: 'nearby',
    priority: 1,
    title: {
      hi: 'गांधी मैदान, पटना: गोलघर के साथ घूमने की गाइड',
      en: 'Gandhi Maidan, Patna: A Guide to Visiting with Golghar'
    },
    description: {
      hi: 'गांधी मैदान का इतिहास, गोलघर के साथ इसे जोड़ने का तरीका, कितना समय चाहिए और किसके लिए यह यात्रा में जोड़ने लायक है।',
      en: 'The history of Gandhi Maidan, how to pair it with Golghar, how much time to allow and whether it is worth adding to your trip.'
    },
    h1: { hi: 'गांधी मैदान', en: 'Gandhi Maidan' },
    transport: {
      hi: 'गांधी मैदान गोलघर के ठीक पूर्व में है और दोनों पैदल दूरी पर हैं; नक्शे पर दोनों को एक साथ देखकर रास्ता तय करें।',
      en: 'Gandhi Maidan lies just east of Golghar and the two are within walking distance; use one map to plan the route between them.'
    },
    intro: {
      hi: 'गांधी मैदान पटना के मध्य में स्थित एक बड़ा खुला मैदान है, जो ऐतिहासिक रैलियों और सभाओं का गवाह रहा है। गोलघर गांधी मैदान के पश्चिमी किनारे की ओर है, इसलिए ये दोनों अक्सर एक ही भ्रमण में जोड़ लिए जाते हैं। यह पृष्ठ बताता है कि इसे अपनी यात्रा में जोड़ना कब फ़ायदेमंद है और कब नहीं।',
      en: 'Gandhi Maidan is a large open ground in the middle of Patna, best known as the site of historic rallies and public meetings. Golghar faces its western edge, which is why the two are usually combined in one outing. This page explains when adding Gandhi Maidan to your trip is worth it and when it is not.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यह क्या है' },
        {
          t: 'p',
          text: 'गांधी मैदान एक खुला सार्वजनिक मैदान है, ऐसा नहीं जिसे एक निश्चित टिकट लेकर घूमा जाए। यहाँ लोग टहलने, दौड़ने और बैठने आते हैं। इसका महत्व इमारतों से नहीं, इसकी जगह और इतिहास से है — आज़ादी की लड़ाई के दौरान यहाँ बड़ी जनसभाएँ हुई थीं।'
        },
        { t: 'h2', text: 'गोलघर के साथ इसे कैसे जोड़ें' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'गोलघर मैदान के पश्चिमी किनारे की ओर'],
            ['कैसे जाएँ', 'पैदल, या रिक्शा/टैक्सी से'],
            ['उपयुक्त समय', 'सुबह या शाम की ठंडी हवा'],
            ['लगने वाला समय', 'थोड़ी देर का टहलाव, या घंटे भर की सैर'],
            ['किसके लिए', 'पहली बार आने वाले, टहलने वाले, फ़ोटोग्राफ़ी करने वाले']
          ]
        },
        { t: 'h2', text: 'क्यों जोड़ें — और क्यों नहीं' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप गोलघर के साथ मध्य पटना की खुली हवा में टहलना चाहते हैं।',
            'जोड़ें अगर: आप शाम की रोशनी में शहर की भीड़भाड़ देखना चाहते हैं।',
            'न जोड़ें अगर: आपको केवल इमारतें देखनी हैं — यह एक खुला मैदान है, संग्रहालय नहीं।',
            'न जोड़ें अगर: दोपहर की तेज़ गर्मी में आप बाहर ज़्यादा देर नहीं रुक सकते।'
          ]
        },
        {
          t: 'note',
          text: 'मैदान कभी-कभी बड़े आयोजनों या मेलों के लिए उपयोग में रहता है। उस समय भीड़ और प्रवेश-नियम अलग हो सकते हैं, इसलिए मौके की स्थिति देखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गांधी मैदान की ओर से गोलघर आने का रास्ता', path: 'visit/gandhi-maidan' },
            { label: 'गोलघर के आसपास खाने की जगह', path: 'food/nearby' },
            { label: 'श्रीकृष्ण विज्ञान केंद्र', path: 'nearby/science-centre' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What it is' },
        {
          t: 'p',
          text: 'Gandhi Maidan is an open public ground rather than a ticketed attraction. People come here to walk, run and sit. Its importance comes not from buildings but from its location and history — large public meetings were held here during the freedom movement.'
        },
        { t: 'h2', text: 'How to pair it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Golghar sits towards the western edge of the maidan'],
            ['How to get there', 'On foot, or by rickshaw or taxi'],
            ['Best time', 'Morning or evening, when it is cooler'],
            ['Time needed', 'A short stroll, or an hour-long walk'],
            ['Suits', 'First-time visitors, walkers, photographers']
          ]
        },
        { t: 'h2', text: 'Why to add it — and why not' },
        {
          t: 'ul',
          items: [
            'Add it if: you want a walk in the open air of central Patna alongside Golghar.',
            'Add it if: you want to see the city fill up in evening light.',
            'Skip it if: you are here only for buildings — this is an open ground, not a museum.',
            'Skip it if: you cannot stay outdoors for long in the midday heat.'
          ]
        },
        {
          t: 'note',
          text: 'The maidan is sometimes in use for large events or fairs. Crowds and access rules can be different then, so judge conditions on the day.'
        },
        {
          t: 'links',
          items: [
            { label: 'Walking to Golghar from Gandhi Maidan', path: 'visit/gandhi-maidan' },
            { label: 'Where to eat near Golghar', path: 'food/nearby' },
            { label: 'Shrikrishna Science Centre', path: 'nearby/science-centre' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या गांधी मैदान में टिकट लगता है?', a: 'यह एक खुला सार्वजनिक मैदान है। किसी विशेष आयोजन के दौरान नियम अलग हो सकते हैं।' },
        { q: 'गोलघर और गांधी मैदान साथ में घूम सकते हैं?', a: 'हाँ, गोलघर मैदान के पश्चिमी किनारे की ओर है, इसलिए दोनों को एक ही भ्रमण में जोड़ा जा सकता है।' },
        { q: 'गांधी मैदान देखने में कितना समय लगता है?', a: 'यह आप पर निर्भर है — छोटी सैर से लेकर घंटे भर के टहलाव तक।' }
      ],
      en: [
        { q: 'Is there a ticket for Gandhi Maidan?', a: 'It is an open public ground. Rules can differ during special events.' },
        { q: 'Can Golghar and Gandhi Maidan be visited together?', a: 'Yes — Golghar is towards the western edge of the maidan, so the two fit into one outing.' },
        { q: 'How long does Gandhi Maidan take?', a: 'It depends on you — from a short stroll to an hour-long walk.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/gandhi-maidan', 'nearby/science-centre', 'nearby/sabhyata-dwar', 'food/nearby']
  },
  {
    path: 'nearby/science-centre',
    group: 'nearby',
    priority: 1,
    title: {
      hi: 'श्रीकृष्ण विज्ञान केंद्र, पटना: बच्चों के साथ गाइड',
      en: 'Shrikrishna Science Centre, Patna: A Guide for Families'
    },
    description: {
      hi: 'श्रीकृष्ण विज्ञान केंद्र — गोलघर के पास बच्चों के लिए उपयुक्त इनडोर विकल्प, खुलने का समय जाँचने का तरीका, कितना समय चाहिए और गोलघर के साथ इसे जोड़ने का क्रम।',
      en: 'Shrikrishna Science Centre — an indoor option near Golghar for children, how to check its timings, how much time to allow and how to order it with Golghar.'
    },
    h1: { hi: 'श्रीकृष्ण विज्ञान केंद्र', en: 'Shrikrishna Science Centre' },
    transport: {
      hi: 'विज्ञान केंद्र गांधी मैदान के दक्षिण-पश्चिम कोने की ओर, गोलघर से थोड़ी दूरी पर है; नक्शे पर रास्ता देखकर पैदल या वाहन चुनें।',
      en: 'The science centre sits towards the south-west corner of Gandhi Maidan, a short distance from Golghar; use the map to choose between walking and a vehicle.'
    },
    intro: {
      hi: 'श्रीकृष्ण विज्ञान केंद्र मध्य पटना में एक विज्ञान संग्रहालय है, जहाँ प्रदर्शनी और इंटरैक्टिव मॉडल रहते हैं। गोलघर के इतिहास के बाद यह वह जगह है जहाँ बच्चे अपने हाथों से चीज़ें आज़मा सकते हैं। यह पृष्ठ बताता है कि इसे गोलघर की यात्रा में कब और कैसे जोड़ें।',
      en: 'Shrikrishna Science Centre is a science museum in central Patna with exhibits and interactive models. After the history of Golghar, it is the place where children can try things with their own hands. This page explains when and how to fit it into a Golghar trip.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यहाँ क्या मिलता है' },
        {
          t: 'p',
          text: 'यह एक इनडोर केंद्र है जिसमें विज्ञान के विभिन्न विषयों पर प्रदर्शनी और मॉडल रहते हैं। यहाँ का सबसे बड़ा फ़ायदा यह है कि इसे बारिश या गर्मी में भी देखा जा सकता है, और बच्चे चीज़ों को छूकर और चलाकर सीखते हैं।'
        },
        { t: 'h2', text: 'गोलघर के साथ क्रम' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'मध्य पटना, गोलघर के आसपास के क्षेत्र में'],
            ['क्रम का सुझाव', 'पहले गोलघर, फिर विज्ञान केंद्र'],
            ['लगने वाला समय', 'देखने के तरीके पर निर्भर — घंटे से अधिक भी'],
            ['किसके लिए', 'बच्चे, छात्र, बारिश या गर्मी से बचने वाले'],
            ['टिकट', 'अलग प्रवेश शुल्क लागू हो सकता है — मौके पर जाँचें']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'पास के क्षेत्र में होने के कारण अच्छे मौसम में पैदल जाना संभव है'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से छोटी दूरी'],
            ['दिशा-संकेत', 'मध्य पटना, गोलघर के आसपास का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 5 से 15 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद गांधी मैदान या भोजन की जगह जोड़ी जा सकती है']
          ]
        },
        { t: 'h2', text: 'क्यों यह गोलघर से अच्छा जोड़ है' },
        {
          t: 'ul',
          items: [
            'गोलघर वास्तुकला और इतिहास बताता है; विज्ञान केंद्र यह समझाता है कि चीज़ें कैसे काम करती हैं।',
            'यह इनडोर है, इसलिए मौसम की मार से बचाव का रास्ता देता है।',
            'बच्चों के लिए यह गोलघर से ज़्यादा सक्रिय अनुभव है।',
            'यह थकान के बाद आराम से घूमने का विकल्प देता है, जहाँ चलना कम पड़ता है।'
          ]
        },
        {
          t: 'note',
          text: 'संग्रहालय के खुलने के दिन और समय बदलते रहते हैं, और कभी-कभी सोमवार या छुट्टियों पर बंद रहते हैं। जाने से पहले आधिकारिक समय की पुष्टि कर लें।'
        },
        {
          t: 'links',
          items: [
            { label: 'बच्चों के साथ गोलघर: सुविधाएँ', path: 'visit/family-facilities' },
            { label: 'बारिश और गर्मी की योजना', path: 'itineraries/rainy-day' },
            { label: 'गांधी मैदान', path: 'nearby/gandhi-maidan' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What is here' },
        {
          t: 'p',
          text: 'This is an indoor centre with exhibits and models across different areas of science. Its biggest practical advantage is that it can be visited in rain or heat, and children learn by touching and operating things.'
        },
        { t: 'h2', text: 'Ordering it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Central Patna, in the area around Golghar'],
            ['Suggested order', 'Golghar first, then the science centre'],
            ['Time needed', 'Depends how you explore — an hour or more'],
            ['Suits', 'Children, students, anyone sheltering from rain or heat'],
            ['Ticket', 'A separate entry fee may apply — check on site']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'In the same area, so walkable in good weather'],
            ['By vehicle', 'A short ride by rickshaw, auto or taxi'],
            ['Landmark', 'Central Patna, in the area around Golghar'],
            ['Rough time', 'About 5 to 15 minutes by road, traffic depending'],
            ['After this', 'Gandhi Maidan or a place to eat can follow']
          ]
        },
        { t: 'h2', text: 'Why it pairs well with Golghar' },
        {
          t: 'ul',
          items: [
            'Golghar tells you about architecture and history; the science centre shows how things work.',
            'It is indoors, so it doubles as a way to escape the weather.',
            'For children it is a more active experience than Golghar.',
            'It offers an easier, lower-walking option once you are tired.'
          ]
        },
        {
          t: 'note',
          text: 'Museum opening days and hours change, and it may close on certain weekdays or holidays. Confirm official timings before travelling.'
        },
        {
          t: 'links',
          items: [
            { label: 'Golghar with children: facilities', path: 'visit/family-facilities' },
            { label: 'A rain and heat plan', path: 'itineraries/rainy-day' },
            { label: 'Gandhi Maidan', path: 'nearby/gandhi-maidan' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या विज्ञान केंद्र बच्चों के लिए अच्छा है?', a: 'हाँ, यह इनडोर केंद्र है जहाँ बच्चे मॉडल देखकर और चलाकर सीखते हैं।' },
        { q: 'गोलघर के साथ कौन पहले देखें?', a: 'पहले गोलघर, फिर विज्ञान केंद्र — इस क्रम में दोनों का हिस्सा बेहतर बँटता है।' },
        { q: 'क्या यह सोमवार को खुला रहता है?', a: 'संग्रहालयों के अवकाश के दिन बदलते रहते हैं, इसलिए जाने से पहले आधिकारिक समय जाँच लें।' }
      ],
      en: [
        { q: 'Is the science centre good for children?', a: 'Yes — it is an indoor centre where children learn by seeing and operating models.' },
        { q: 'Which should come first with Golghar?', a: 'Golghar first, then the science centre; the two divide up well in that order.' },
        { q: 'Is it open on Mondays?', a: 'Museum closure days change, so check official timings before you go.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/gandhi-maidan', 'visit/family-facilities', 'itineraries/rainy-day', 'nearby/gandhi-sangrahalaya']
  },
  {
    path: 'nearby/gandhi-sangrahalaya',
    group: 'nearby',
    priority: 2,
    title: {
      hi: 'गांधी संग्रहालय, पटना: यात्रा की योजना',
      en: 'Gandhi Sangrahalaya, Patna: Planning a Visit'
    },
    description: {
      hi: 'गांधी संग्रहालय (गांधी म्यूजियम) — गांधी जीवन और स्वतंत्रता आंदोलन से जुड़ी सामग्री, गोलघर के साथ इसे जोड़ने का तरीका और किसके लिए यह उपयुक्त है।',
      en: 'Gandhi Sangrahalaya (Gandhi Museum) — material on Gandhi’s life and the independence movement, how to pair it with Golghar and who it suits.'
    },
    h1: { hi: 'गांधी संग्रहालय', en: 'Gandhi Sangrahalaya' },
    transport: {
      hi: 'गांधी संग्रहालय गांधी मैदान के पश्चिमी किनारे की ओर, गोलघर के पास ही है; नक्शे पर स्थान देखकर दोनों को एक भ्रमण में जोड़ें।',
      en: 'Gandhi Sangrahalaya is towards the western edge of Gandhi Maidan, close to Golghar; use the map to combine both in one outing.'
    },
    intro: {
      hi: 'गांधी संग्रहालय पटना में गांधी जीवन और भारत के स्वतंत्रता आंदोलन से जुड़ी सामग्री को समर्पित संग्रहालय है। यह गोलघर से दूर नहीं है, और जो लोग आधुनिक भारत के इतिहास में रुचि रखते हैं, उनके लिए यह गोलघर के औपनिवेशिक इतिहास का स्वाभाविक अगला हिस्सा बन जाता है।',
      en: 'Gandhi Sangrahalaya is a museum in Patna devoted to Gandhi’s life and India’s independence movement. It is not far from Golghar, and for anyone interested in modern Indian history it becomes the natural follow-on to Golghar’s colonial-era story.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यहाँ क्या देखें' },
        {
          t: 'p',
          text: 'संग्रहालय में तस्वीरें, दस्तावेज़ और ऐतिहासिक सामग्री के ज़रिए स्वतंत्रता आंदोलन की कहानी बताई जाती है, विशेष रूप से बिहार से जुड़े अध्याय। यहाँ का सबसे बड़ा मूल्य यह है कि यह गोलघर के 1786 वाले दौर और 20वीं सदी के बीच का पुल बनाता है।'
        },
        { t: 'h2', text: 'गोलघर के साथ योजना' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'मध्य पटना, गांधी मैदान क्षेत्र के पास'],
            ['क्रम का सुझाव', 'गोलघर → गांधी संग्रहालय → भोजन'],
            ['लगने वाला समय', 'लगभग एक घंटा या उससे अधिक'],
            ['किसके लिए', 'इतिहास में रुचि रखने वाले, छात्र, शोधार्थी'],
            ['प्रवेश', 'नियम और समय मौके पर जाँचें']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'गांधी मैदान क्षेत्र की ओर होने के कारण अच्छे मौसम में पैदल संभव'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से छोटी दूरी'],
            ['दिशा-संकेत', 'मध्य पटना, गांधी मैदान क्षेत्र के पास'],
            ['अनुमानित समय', 'वाहन से लगभग 8 से 15 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद भोजन की जगह या गांधी मैदान जोड़ा जा सकता है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप स्वतंत्रता आंदोलन और आधुनिक भारत के इतिहास में रुचि रखते हैं।',
            'जोड़ें अगर: आपको पढ़ने और देखने वाला शांत वातावरण पसंद है।',
            'न जोड़ें अगर: आपके पास केवल एक घंटा है और आप गोलघर पर केंद्रित रहना चाहते हैं।',
            'न जोड़ें अगर: आप छोटे बच्चों के साथ हैं जिन्हें लंबी प्रदर्शनी में बोरियत होती है।'
          ]
        },
        {
          t: 'note',
          text: 'संग्रहालय बंद होने के दिन और समय स्रोतों में एक जैसे नहीं मिले। यात्रा से पहले आधिकारिक जानकारी देख लें और अपने समय में थोड़ी छूट रखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'छात्रों के लिए गोलघर', path: 'learn/golghar-for-students' },
            { label: 'गांधी मैदान', path: 'nearby/gandhi-maidan' },
            { label: 'संग्रहालय आधे दिन की योजना', path: 'itineraries/museum-half-day' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What is on display' },
        {
          t: 'p',
          text: 'The museum tells the story of the independence movement through photographs, documents and historical material, with a particular focus on chapters connected to Bihar. Its main value here is that it bridges the world of Golghar in 1786 and the twentieth century.'
        },
        { t: 'h2', text: 'Planning it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Central Patna, near the Gandhi Maidan area'],
            ['Suggested order', 'Golghar → Gandhi Sangrahalaya → a meal'],
            ['Time needed', 'About an hour, often more'],
            ['Suits', 'People interested in history, students, researchers'],
            ['Entry', 'Check rules and timings on site']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'Towards the Gandhi Maidan area, so walkable in good weather'],
            ['By vehicle', 'A short ride by rickshaw, auto or taxi'],
            ['Landmark', 'Central Patna, near the Gandhi Maidan area'],
            ['Rough time', 'About 8 to 15 minutes by road, traffic depending'],
            ['After this', 'A place to eat or Gandhi Maidan can follow']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you are interested in the freedom movement and modern Indian history.',
            'Add it if: you enjoy a quiet, reading-and-looking kind of visit.',
            'Skip it if: you have only an hour and want to keep the focus on Golghar.',
            'Skip it if: you are with small children who tire of long displays.'
          ]
        },
        {
          t: 'note',
          text: 'Closing days and timings for the museum did not match across the sources reviewed. Check official information before travelling and leave some slack in your schedule.'
        },
        {
          t: 'links',
          items: [
            { label: 'Golghar for students', path: 'learn/golghar-for-students' },
            { label: 'Gandhi Maidan', path: 'nearby/gandhi-maidan' },
            { label: 'A museum half-day plan', path: 'itineraries/museum-half-day' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गांधी संग्रहालय में क्या मिलता है?', a: 'इसमें स्वतंत्रता आंदोलन से जुड़ी तस्वीरें, दस्तावेज़ और ऐतिहासिक सामग्री रहती है, जिसमें बिहार से जुड़े अध्याय भी शामिल हैं।' },
        { q: 'गोलघर के साथ इसे कब देखें?', a: 'गोलघर के बाद, क्योंकि यह 1786 के बाद की अवधि को जोड़ता है।' },
        { q: 'क्या यह बच्चों के लिए उपयुक्त है?', a: 'बड़े बच्चों और छात्रों के लिए उपयुक्त है; बहुत छोटे बच्चों के लिए लंबी प्रदर्शनी थका सकती है।' }
      ],
      en: [
        { q: 'What does Gandhi Sangrahalaya contain?', a: 'Photographs, documents and historical material on the independence movement, including chapters connected to Bihar.' },
        { q: 'When should it be seen relative to Golghar?', a: 'After Golghar, because it covers the period that follows 1786.' },
        { q: 'Is it suitable for children?', a: 'It suits older children and students; for very young children long displays can be tiring.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/gandhi-maidan', 'learn/golghar-for-students', 'itineraries/museum-half-day', 'nearby/patna-museum']
  },
  {
    path: 'nearby/sabhyata-dwar',
    group: 'nearby',
    priority: 2,
    title: {
      hi: 'सभ्यता द्वार, पटना: संस्कृति और वास्तुकला गाइड',
      en: 'Sabhyata Dwar, Patna: Culture and Architecture Guide'
    },
    description: {
      hi: 'सभ्यता द्वार — गंगा किनारे बना सांस्कृतिक द्वार, गोलघर के साथ इसे जोड़ने का तरीका, सबसे अच्छा समय और किसके लिए यह यात्रा में जोड़ने लायक है।',
      en: 'Sabhyata Dwar — the cultural gateway near the Ganges, how to pair it with Golghar, the best time to go and who it suits.'
    },
    h1: { hi: 'सभ्यता द्वार', en: 'Sabhyata Dwar' },
    transport: {
      hi: 'सभ्यता द्वार गांधी मैदान के उत्तरी किनारे की ओर है, गोलघर से पैदल जाने लायक दूरी पर; नक्शे पर रास्ता देख लें।',
      en: 'Sabhyata Dwar stands towards the northern edge of Gandhi Maidan, within walking distance of Golghar; check the route on the map.'
    },
    intro: {
      hi: 'सभ्यता द्वार पटना में बना एक बड़ा सांस्कृतिक द्वार है, जो स्थापत्य और स्थानीय संस्कृति को दर्शाता है। यह उन लोगों को पसंद आता है जो इमारतों की बनावट, नक्काशी और खुली जगह में घूमना पसंद करते हैं। यह पृष्ठ बताता है कि इसे गोलघर की यात्रा में कैसे जोड़ें।',
      en: 'Sabhyata Dwar is a large cultural gateway structure in Patna that reflects local heritage and architecture. It appeals to people who enjoy monumental buildings, carving and open public spaces. This page explains how to fit it into a Golghar trip.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यह क्या है' },
        {
          t: 'p',
          text: 'यह एक स्मारकीय द्वार-संरचना है, जिसे पटना और बिहार की सांस्कृतिक विरासत के प्रतीक के रूप में बनाया गया है। यहाँ लोग नक्काशी, बनावट और द्वार के ऊपर-नीचे के विवरण देखने आते हैं। बिहार पर्यटन इसे इसी मध्य पटना क्षेत्र के प्रमुख स्थलों में गिनता है।'
        },
        { t: 'h2', text: 'गोलघर के साथ योजना' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'गंगा किनारे की ओर, मध्य पटना से छोटी यात्रा'],
            ['क्रम का सुझाव', 'गोलघर → शाम को सभ्यता द्वार'],
            ['उपयुक्त समय', 'सुबह या शाम, जब रोशनी अच्छी हो'],
            ['लगने वाला समय', 'थोड़ी देर — 30 से 60 मिनट'],
            ['किसके लिए', 'फ़ोटोग्राफ़ी, वास्तुकला और संस्कृति में रुचि रखने वाले']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'दूरी अधिक है, इसलिए वाहन बेहतर; गंगा किनारे की ओर चलना संभव नहीं हर मौसम में'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से मध्य पटना से किनारे की ओर'],
            ['दिशा-संकेत', 'गंगा किनारे की ओर, मध्य पटना से छोटी यात्रा'],
            ['अनुमानित समय', 'वाहन से लगभग 10 से 20 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद गांधी घाट या नदी किनारे की शाम की सैर जोड़ी जा सकती है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आपको नक्काशी और स्मारकीय बनावट देखना पसंद है।',
            'जोड़ें अगर: आप गोलघर के बाद नदी किनारे की ओर शाम की सैर चाहते हैं।',
            'न जोड़ें अगर: आप बहुत कम समय में केवल गोलघर देखना चाहते हैं।',
            'न जोड़ें अगर: आप बिना तैयारी सीधी धूप में देर तक नहीं रुक सकते।'
          ]
        },
        {
          t: 'note',
          text: 'यह खुली जगह है, इसलिए मौसम सीधा असर डालता है। बारिश या तेज़ गर्मी में यात्रा टालना बेहतर रहता है, और मौके पर सुरक्षा-निर्देश देखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'शाम की सैर और रात का भोजन', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'वास्तु फ़ोटोग्राफ़ी की सैर', path: 'itineraries/photography-walk' },
            { label: 'गोलघर की वास्तुकला', path: 'architecture' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What it is' },
        {
          t: 'p',
          text: 'This is a monumental gateway structure built as a symbol of the cultural heritage of Patna and Bihar. Visitors come to see the carving, the construction and the detail above and below the arch. Bihar Tourism lists it among the notable sites of this central Patna area.'
        },
        { t: 'h2', text: 'Planning it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Towards the Ganges, a short trip from central Patna'],
            ['Suggested order', 'Golghar earlier, Sabhyata Dwar in the evening'],
            ['Best time', 'Morning or evening, when the light is good'],
            ['Time needed', 'A short stop — 30 to 60 minutes'],
            ['Suits', 'Photography, architecture and culture interests']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'The distance is long, so a vehicle is better; not a walk for every season'],
            ['By vehicle', 'Rickshaw, auto or taxi from central Patna towards the riverfront'],
            ['Landmark', 'Towards the Ganges, a short trip from central Patna'],
            ['Rough time', 'About 10 to 20 minutes by road, traffic depending'],
            ['After this', 'Gandhi Ghat or an evening walk by the river can follow']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you enjoy carving and monumental construction.',
            'Add it if: you want an evening walk towards the riverfront after Golghar.',
            'Skip it if: your time budget is very tight and Golghar alone is the goal.',
            'Skip it if: you cannot spend long in direct sun without preparation.'
          ]
        },
        {
          t: 'note',
          text: 'This is an open-air site, so weather matters. In heavy rain or extreme heat it is better to postpone, and follow any safety notices on site.'
        },
        {
          t: 'links',
          items: [
            { label: 'An evening walk and dinner', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'An architecture photo walk', path: 'itineraries/photography-walk' },
            { label: 'Golghar’s architecture', path: 'architecture' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'सभ्यता द्वार क्या है?', a: 'यह पटना में बनी एक स्मारकीय सांस्कृतिक द्वार-संरचना है, जो स्थानीय विरासत को दर्शाती है।' },
        { q: 'इसे देखने में कितना समय लगता है?', a: 'लगभग 30 से 60 मिनट, अगर आप विवरण देखते और फ़ोटो लेते हैं।' },
        { q: 'दिन का सबसे अच्छा समय कौन-सा है?', a: 'सुबह या शाम, जब रोशनी नरम हो और गर्मी कम हो।' }
      ],
      en: [
        { q: 'What is Sabhyata Dwar?', a: 'It is a monumental cultural gateway structure in Patna that reflects local heritage.' },
        { q: 'How long does it take?', a: 'Roughly 30 to 60 minutes if you look at the detail and take photographs.' },
        { q: 'What is the best time of day?', a: 'Morning or evening, when the light is softer and it is cooler.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/gandhi-maidan', 'itineraries/evening-gandhi-maidan', 'itineraries/photography-walk', 'architecture']
  },
  {
    path: 'nearby/patna-museum',
    group: 'nearby',
    priority: 2,
    title: {
      hi: 'पटना संग्रहालय: यात्रा की योजना और रास्ता',
      en: 'Patna Museum: Visit Plan and Route'
    },
    description: {
      hi: 'पटना संग्रहालय — बिहार की पुरातात्विक और कला सामग्री, गोलघर से इसे जोड़ने का क्रम, कितना समय चाहिए और किसके लिए यह उपयुक्त है।',
      en: 'Patna Museum — Bihar’s archaeological and art collections, how to order it with Golghar, how much time to allow and who it suits.'
    },
    h1: { hi: 'पटना संग्रहालय', en: 'Patna Museum' },
    transport: {
      hi: 'पटना संग्रहालय बुद्ध स्मृति पार्क के पास, गोलघर से कुछ किलोमीटर दक्षिण में है; उस दिन का समय-अनुमान लाइव नक्शे से लें।',
      en: 'Patna Museum is near Buddha Smriti Park, a few kilometres south of Golghar; get that day’s time estimate from a live map.'
    },
    intro: {
      hi: 'पटना संग्रहालय शहर के पुराने संग्रहालयों में से एक है, जहाँ पुरातत्व, मूर्तिकला, चित्रकला और क्षेत्रीय इतिहास से जुड़ी सामग्री रखी गई है। गोलघर का औपनिवेशिक इतिहास देखने के बाद यहाँ आने से तस्वीर को और पुराने दौर तक फैलाया जा सकता है।',
      en: 'Patna Museum is one of the city’s older museums, holding material relating to archaeology, sculpture, painting and regional history. Coming here after Golghar extends the story back well beyond the colonial period.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यहाँ क्या है' },
        {
          t: 'p',
          text: 'संग्रहालय में पुरातात्विक पुरावशेष, मूर्तियाँ, चित्र और क्षेत्रीय इतिहास से जुड़ी वस्तुएँ प्रदर्शित हैं। जो लोग प्राचीन बिहार, मौर्य और उसके बाद के दौर की सामग्री में रुचि रखते हैं, उनके लिए यह सबसे उपयुक्त जगहों में से एक है।'
        },
        { t: 'h2', text: 'गोलघर के साथ क्रम' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['क्रम का सुझाव', 'गोलघर → पटना संग्रहालय'],
            ['लगने वाला समय', 'लगभग एक से डेढ़ घंटा'],
            ['किसके लिए', 'इतिहास, पुरातत्व और कला में रुचि'],
            ['प्रवेश', 'टिकट और समय मौके पर जाँचें'],
            ['साथ में', 'गांधी संग्रहालय भी जोड़ा जा सकता है']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'मध्य पटना में होने के कारण अच्छे मौसम में पैदल जाना संभव'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से छोटी दूरी'],
            ['दिशा-संकेत', 'मध्य पटना, गांधी मैदान के आसपास का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 8 से 15 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद गांधी संग्रहालय या भोजन की जगह जोड़ी जा सकती है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आपको प्राचीन इतिहास और पुरावशेष देखना पसंद है।',
            'जोड़ें अगर: आप एक ही दिन में दो संग्रहालय जोड़ना चाहते हैं।',
            'न जोड़ें अगर: आपके पास आधे दिन से कम समय है।',
            'न जोड़ें अगर: आप बिना पढ़े जल्दी घूम जाने वाले आगंतुक हैं।'
          ]
        },
        {
          t: 'note',
          text: 'पटना संग्रहालय और बिहार संग्रहालय दो अलग संग्रहालय हैं, और लोग इन्हें अक्सर मिला देते हैं। जाने से पहले पुष्टि करें कि आप किसे देखना चाहते हैं।'
        },
        {
          t: 'links',
          items: [
            { label: 'बिहार संग्रहालय', path: 'nearby/bihar-museum' },
            { label: 'संग्रहालय आधे दिन की योजना', path: 'itineraries/museum-half-day' },
            { label: 'गोलघर का इतिहास', path: 'history' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What is here' },
        {
          t: 'p',
          text: 'The museum displays archaeological finds, sculpture, paintings and objects connected to regional history. For anyone interested in ancient Bihar, the Mauryan period and what followed, it is among the most relevant places in the city.'
        },
        { t: 'h2', text: 'Ordering it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Suggested order', 'Golghar → Patna Museum'],
            ['Time needed', 'About one to one and a half hours'],
            ['Suits', 'Interest in history, archaeology and art'],
            ['Entry', 'Check ticket and timings on site'],
            ['Combine with', 'Gandhi Sangrahalaya can also be added']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'In central Patna, so walkable in good weather'],
            ['By vehicle', 'A short ride by rickshaw, auto or taxi'],
            ['Landmark', 'Central Patna, in the area around Gandhi Maidan'],
            ['Rough time', 'About 8 to 15 minutes by road, traffic depending'],
            ['After this', 'Gandhi Sangrahalaya or a place to eat can follow']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you like ancient history and archaeological objects.',
            'Add it if: you want to fit two museums into one day.',
            'Skip it if: you have less than half a day.',
            'Skip it if: you prefer to move quickly without reading up.'
          ]
        },
        {
          t: 'note',
          text: 'Patna Museum and Bihar Museum are two separate museums and are often confused. Confirm which one you mean to visit before setting out.'
        },
        {
          t: 'links',
          items: [
            { label: 'Bihar Museum', path: 'nearby/bihar-museum' },
            { label: 'A museum half-day plan', path: 'itineraries/museum-half-day' },
            { label: 'History of Golghar', path: 'history' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या पटना संग्रहालय और बिहार संग्रहालय एक ही हैं?', a: 'नहीं, ये दो अलग संग्रहालय हैं, और इन्हें अक्सर एक-दूसरे से मिला दिया जाता है।' },
        { q: 'पटना संग्रहालय में कितना समय लगता है?', a: 'लगभग एक से डेढ़ घंटा, आपकी रुचि के अनुसार।' },
        { q: 'क्या इसे गोलघर के साथ जोड़ा जा सकता है?', a: 'हाँ, गोलघर के बाद इसे जोड़ना सुविधाजनक क्रम रहता है।' }
      ],
      en: [
        { q: 'Are Patna Museum and Bihar Museum the same?', a: 'No, they are two separate museums and are often confused with each other.' },
        { q: 'How long does Patna Museum take?', a: 'Roughly one to one and a half hours, depending on your interest.' },
        { q: 'Can it be combined with Golghar?', a: 'Yes, visiting it after Golghar makes a convenient order.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/bihar-museum', 'nearby/gandhi-sangrahalaya', 'itineraries/museum-half-day', 'history']
  },
  {
    path: 'nearby/bihar-museum',
    group: 'nearby',
    priority: 2,
    title: {
      hi: 'बिहार संग्रहालय: आधे दिन की सांस्कृतिक योजना',
      en: 'Bihar Museum: A Half-Day Cultural Plan'
    },
    description: {
      hi: 'बिहार संग्रहालय — आधुनिक प्रदर्शनी, परिवार के साथ घूमने की योजना, गोलघर से इसे जोड़ने का क्रम, लगने वाला समय और विकल्प।',
      en: 'Bihar Museum — modern galleries, a plan for visiting with family, how to order it with Golghar, how much time to allow and the trade-offs.'
    },
    h1: { hi: 'बिहार संग्रहालय', en: 'Bihar Museum' },
    transport: {
      hi: 'बिहार संग्रहालय गोलघर से दक्षिण की ओर, बेली रोड क्षेत्र में है; नक्शे पर दूरी देखें — वाहन से जाना आसान रहता है।',
      en: 'Bihar Museum lies to the south of Golghar in the Bailey Road area; check the distance on the map — a vehicle is usually easier.'
    },
    intro: {
      hi: 'बिहार संग्रहालय शहर का बड़ा और आधुनिक संग्रहालय है, जहाँ क्षेत्रीय इतिहास और संस्कृति को बड़े प्रदर्शनी-कक्षों में प्रस्तुत किया जाता है। इसमें घूमने में समय लगता है, इसलिए इसे अलग आधे दिन की योजना के रूप में देखना बेहतर रहता है।',
      en: 'Bihar Museum is the city’s large, modern museum, presenting the region’s history and culture across extensive galleries. It takes real time to get through, so it is best treated as a half-day plan of its own.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'क्यों अलग आधे दिन की योजना' },
        {
          t: 'p',
          text: 'यह संग्रहालय बड़ा है और इसमें कई प्रदर्शनी-कक्ष हैं। इसे जल्दी-जल्दी देखना इसका फ़ायदा कम कर देता है। इसलिए इसे गोलघर के साथ जोड़ना तभी उचित है जब आपके पास पूरा दिन या कम से कम आधा दिन हो।'
        },
        { t: 'h2', text: 'गोलघर के साथ योजना' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['क्रम का सुझाव', 'गोलघर (सुबह) → भोजन → बिहार संग्रहालय'],
            ['लगने वाला समय', 'दो घंटे से अधिक, आराम से देखने पर'],
            ['किसके लिए', 'परिवार, बच्चे, इतिहास में रुचि रखने वाले'],
            ['सुविधा', 'अंदर भोजन और विश्राम की व्यवस्था मौके पर जाँचें'],
            ['मौसम', 'इनडोर — बारिश और गर्मी के लिए अच्छा विकल्प']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'दूरी अधिक है, इसलिए वाहन बेहतर रहता है'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से शहर के उस हिस्से तक'],
            ['दिशा-संकेत', 'मध्य पटना से दूर, बेली रोड की ओर का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 20 से 30 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद भोजन और विश्राम, या सीधे वापसी का क्रम बनता है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप परिवार के साथ हैं और बच्चों को कुछ ठोस देखने को चाहिए।',
            'जोड़ें अगर: मौसम खराब है और आप इनडोर योजना चाहते हैं।',
            'न जोड़ें अगर: आपके पास केवल दो-तीन घंटे हैं।',
            'न जोड़ें अगर: आप उसी दिन पटना संग्रहालय भी पूरा करना चाहते हैं — दोनों एक दिन में भारी पड़ते हैं।'
          ]
        },
        {
          t: 'note',
          text: 'बड़े संग्रहालयों में प्रदर्शनी-कक्ष, समय और प्रवेश-शुल्क बदलते रहते हैं। जाने से पहले आधिकारिक समय और टिकट की जानकारी देखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'बारिश और गर्मी की योजना', path: 'itineraries/rainy-day' },
            { label: 'परिवार के साथ एक दिन', path: 'itineraries/family-day' },
            { label: 'पटना संग्रहालय', path: 'nearby/patna-museum' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Why it is a half-day of its own' },
        {
          t: 'p',
          text: 'This museum is large and holds several galleries. Rushing through it wastes the point of coming. So combining it with Golghar only makes sense if you have a full day, or at least half of one.'
        },
        { t: 'h2', text: 'Planning it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Suggested order', 'Golghar (morning) → a meal → Bihar Museum'],
            ['Time needed', 'More than two hours at an unhurried pace'],
            ['Suits', 'Families, children, people interested in history'],
            ['Facilities', 'Check on-site dining and rest areas'],
            ['Weather', 'Indoor — a good option in rain or heat']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'The distance is long, so a vehicle is better'],
            ['By vehicle', 'Rickshaw, auto or taxi to that part of the city'],
            ['Landmark', 'Away from central Patna, towards the Bailey Road area'],
            ['Rough time', 'About 20 to 30 minutes by road, traffic depending'],
            ['After this', 'A meal and a rest, or the journey back, usually follows']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you are with family and children need something concrete to look at.',
            'Add it if: the weather is poor and you want an indoor plan.',
            'Skip it if: you only have two or three hours.',
            'Skip it if: you also intend to complete Patna Museum the same day — both together is a heavy load.'
          ]
        },
        {
          t: 'note',
          text: 'In large museums, galleries, timings and entry fees change. Check official timings and ticket information before you go.'
        },
        {
          t: 'links',
          items: [
            { label: 'A rain and heat plan', path: 'itineraries/rainy-day' },
            { label: 'A day out with family', path: 'itineraries/family-day' },
            { label: 'Patna Museum', path: 'nearby/patna-museum' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'बिहार संग्रहालय देखने में कितना समय लगता है?', a: 'आराम से देखने पर दो घंटे से अधिक समय लग सकता है।' },
        { q: 'क्या इसे गोलघर के साथ जोड़ा जा सकता है?', a: 'हाँ, पर तभी जब आपके पास पूरा दिन या आधा दिन हो।' },
        { q: 'क्या यह बारिश में जाने लायक है?', a: 'हाँ, यह इनडोर है, इसलिए बारिश और गर्मी दोनों में यह अच्छा विकल्प है।' }
      ],
      en: [
        { q: 'How long does Bihar Museum take?', a: 'At an unhurried pace it can take more than two hours.' },
        { q: 'Can it be combined with Golghar?', a: 'Yes, but only if you have a full or half day available.' },
        { q: 'Is it worth visiting in the rain?', a: 'Yes — it is indoors, which makes it a good choice in both rain and heat.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/patna-museum', 'itineraries/museum-half-day', 'itineraries/rainy-day', 'itineraries/family-day']
  },
  {
    path: 'nearby/khuda-bakhsh-library',
    group: 'nearby',
    priority: 3,
    title: {
      hi: 'खुदा बख्श ओरिएंटल पब्लिक लाइब्रेरी: गाइड',
      en: 'Khuda Bakhsh Oriental Public Library: A Guide'
    },
    description: {
      hi: 'खुदा बख्श ओरिएंटल पब्लिक लाइब्रेरी — दुर्लभ पांडुलिपियों और पुस्तकों का ऐतिहासिक संग्रह, गोलघर के साथ इसे जोड़ने का तरीका और किसके लिए यह उपयुक्त है।',
      en: 'Khuda Bakhsh Oriental Public Library — a historic collection of rare manuscripts and books, how to pair it with Golghar and who it suits.'
    },
    h1: { hi: 'खुदा बख्श ओरिएंटल पब्लिक लाइब्रेरी', en: 'Khuda Bakhsh Oriental Public Library' },
    transport: {
      hi: 'खुदा बख्श लाइब्रेरी अशोक राजपथ पर, गोलघर से पूर्व की ओर है; नक्शे पर स्थान देखकर एक ही यात्रा में जोड़ सकते हैं।',
      en: 'Khuda Bakhsh Library is on Ashok Rajpath, east of Golghar; use the map to fold it into the same trip.'
    },
    intro: {
      hi: 'खुदा बख्श ओरिएंटल पब्लिक लाइब्रेरी पटना में स्थित एक ऐतिहासिक पुस्तकालय है, जो दुर्लभ पांडुलिपियों और पुस्तकों के संग्रह के लिए जाना जाता है। यह उन लोगों के लिए है जिन्हें अक्षर, कागज़, लिपि और शोध की दुनिया आकर्षित करती है।',
      en: 'Khuda Bakhsh Oriental Public Library is a historic library in Patna known for its collection of rare manuscripts and books. It appeals to people drawn to script, paper, calligraphy and research than to monuments.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यहाँ क्या है' },
        {
          t: 'p',
          text: 'यह पुस्तकालय पांडुलिपियों और दुर्लभ पुस्तकों का संग्रह रखता है, और इसकी पहचान एक शोध-केंद्र तथा ऐतिहासिक स्थल दोनों रूपों में है। यह एक शांत जगह है, जहाँ लोग पढ़ने और देखने आते हैं, न कि भीड़भाड़ वाली सैर के लिए।'
        },
        { t: 'h2', text: 'गोलघर के साथ योजना' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['क्रम का सुझाव', 'गोलघर → पुस्तकालय (शांत समय में)'],
            ['लगने वाला समय', 'लगभग 45 से 90 मिनट'],
            ['किसके लिए', 'शोधार्थी, पुस्तक-प्रेमी, इतिहास और भाषा में रुचि'],
            ['प्रवेश', 'नियम और समय मौके पर जाँचें'],
            ['स्वभाव', 'शांत, पढ़ने और देखने वाला']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'मध्य पटना में होने के कारण अच्छे मौसम में पैदल जाना संभव'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से छोटी दूरी'],
            ['दिशा-संकेत', 'मध्य पटना, गांधी मैदान के आसपास का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 5 से 12 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'यह शांत पड़ाव है, इसलिए इसके बाद पटना संग्रहालय या भोजन का क्रम बैठता है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप दुर्लभ पांडुलिपियों और पुरानी छपाई में रुचि रखते हैं।',
            'जोड़ें अगर: आप शांत, कम भीड़ वाली जगह चाहते हैं।',
            'न जोड़ें अगर: आप बच्चों के साथ सक्रिय भ्रमण चाहते हैं।',
            'न जोड़ें अगर: आपके पास समय बहुत कम है।'
          ]
        },
        {
          t: 'note',
          text: 'यह पुस्तकालय एक अध्ययन-स्थल है, पर्यटन-स्थल से पहले। अंदर प्रवेश, फ़ोटोग्राफ़ी और संग्रह देखने के नियम अलग हो सकते हैं — कर्मचारियों के निर्देश मानें।'
        },
        {
          t: 'links',
          items: [
            { label: 'पटना संग्रहालय', path: 'nearby/patna-museum' },
            { label: 'वास्तु फ़ोटोग्राफ़ी की सैर', path: 'itineraries/photography-walk' },
            { label: 'गोलघर का इतिहास', path: 'history' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What is here' },
        {
          t: 'p',
          text: 'The library holds a collection of manuscripts and rare books, and it is known both as a research institution and a historic site. It is a quiet place, visited for reading and looking rather than for a busy sightseeing stop.'
        },
        { t: 'h2', text: 'Planning it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Suggested order', 'Golghar → the library at a quiet hour'],
            ['Time needed', 'About 45 to 90 minutes'],
            ['Suits', 'Researchers, book lovers, interest in history and language'],
            ['Entry', 'Check rules and timings on site'],
            ['Character', 'Quiet, reading-and-looking']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'In central Patna, so walkable in good weather'],
            ['By vehicle', 'A short ride by rickshaw, auto or taxi'],
            ['Landmark', 'Central Patna, in the area around Gandhi Maidan'],
            ['Rough time', 'About 5 to 12 minutes by road, traffic depending'],
            ['After this', 'This is a quiet stop, so Patna Museum or a meal follows well']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you are interested in rare manuscripts and early printing.',
            'Add it if: you want a quiet place with few crowds.',
            'Skip it if: you are looking for an active outing with children.',
            'Skip it if: your time is very limited.'
          ]
        },
        {
          t: 'note',
          text: 'This is a place of study before it is a tourist site. Rules on entry, photography and viewing the collection may differ — follow staff guidance.'
        },
        {
          t: 'links',
          items: [
            { label: 'Patna Museum', path: 'nearby/patna-museum' },
            { label: 'An architecture photo walk', path: 'itineraries/photography-walk' },
            { label: 'History of Golghar', path: 'history' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'क्या पुस्तकालय आम आगंतुकों के लिए खुला है?', a: 'यह एक अध्ययन-संस्थान और ऐतिहासिक स्थल है; प्रवेश के नियम और समय मौके पर जाँचें।' },
        { q: 'यहाँ कितना समय लगता है?', a: 'लगभग 45 से 90 मिनट, आपकी रुचि के अनुसार।' },
        { q: 'क्या यह बच्चों के लिए उपयुक्त है?', a: 'यह शांत अध्ययन-स्थल है, इसलिए बड़े बच्चों और छात्रों के लिए ज़्यादा उपयुक्त है।' }
      ],
      en: [
        { q: 'Is the library open to general visitors?', a: 'It is a place of study and a historic site; check entry rules and timings on site.' },
        { q: 'How long does it take?', a: 'About 45 to 90 minutes, depending on your interest.' },
        { q: 'Is it suitable for children?', a: 'It is a quiet study setting, so it suits older children and students better.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/patna-museum', 'itineraries/photography-walk', 'history', 'nearby/gandhi-sangrahalaya']
  },
  {
    path: 'nearby/buddha-smriti-park',
    group: 'nearby',
    priority: 3,
    title: {
      hi: 'बुद्ध स्मृति पार्क, पटना: पार्क और संस्कृति गाइड',
      en: 'Buddha Smriti Park, Patna: Park and Culture Guide'
    },
    description: {
      hi: 'बुद्ध स्मृति पार्क — हरा-भरा खुला परिसर, पटना जंक्शन के पास स्थिति, गोलघर के साथ इसे जोड़ने का तरीका और किसके लिए यह उपयुक्त है।',
      en: 'Buddha Smriti Park — a green open complex, its position near Patna Junction, how to pair it with Golghar and who it suits.'
    },
    h1: { hi: 'बुद्ध स्मृति पार्क', en: 'Buddha Smriti Park' },
    transport: {
      hi: 'बुद्ध स्मृति पार्क गोलघर से दक्षिण में, पटना जंक्शन की ओर है; नक्शे पर रास्ता देखकर पैदल या वाहन तय करें।',
      en: 'Buddha Smriti Park is south of Golghar, towards Patna Junction; use the map to choose between walking and a vehicle.'
    },
    intro: {
      hi: 'बुद्ध स्मृति पार्क पटना में एक बड़ा खुला हरा-भरा परिसर है, जो बौद्ध परंपरा से जुड़ी सांस्कृतिक सामग्री के साथ आराम और टहलने की जगह देता है। यह पटना जंक्शन के आसपास है, इसलिए ट्रेन से आने-जाने वालों के लिए इसे जोड़ना आसान रहता है।',
      en: 'Buddha Smriti Park is a large green open complex in Patna that combines space to walk and rest with cultural material connected to Buddhist tradition. It is near Patna Junction, which makes it easy to add for anyone travelling by train.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यहाँ क्या है' },
        {
          t: 'p',
          text: 'यह एक खुला परिसर है जिसमें हरियाली, टहलने के रास्ते और बौद्ध परंपरा से जुड़ी सांस्कृतिक संरचनाएँ हैं। यह उन लोगों के लिए उपयुक्त है जो स्मारकों के बीच थोड़ा आराम और खुली हवा चाहते हैं।'
        },
        { t: 'h2', text: 'गोलघर के साथ क्रम' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'पटना जंक्शन के आसपास का क्षेत्र'],
            ['क्रम का सुझाव', 'गोलघर → बुद्ध स्मृति पार्क → स्टेशन की ओर'],
            ['लगने वाला समय', 'लगभग एक घंटा'],
            ['किसके लिए', 'आराम, टहलाव, शांति और संस्कृति में रुचि'],
            ['मौसम', 'खुला परिसर — सुबह या शाम बेहतर']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'दूरी अधिक है, इसलिए वाहन बेहतर रहता है'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से पटना जंक्शन की ओर'],
            ['दिशा-संकेत', 'पटना जंक्शन के आसपास का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 15 से 25 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद स्टेशन की ओर जाना या भोजन जोड़ना सुविधाजनक रहता है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप ट्रेन से आ रहे हैं और स्टेशन के पास समय बचाना चाहते हैं।',
            'जोड़ें अगर: आपको हरी-भरी शांत जगह में टहलना पसंद है।',
            'न जोड़ें अगर: आपके पास केवल गोलघर के लिए एक घंटा है।',
            'न जोड़ें अगर: आप दोपहर की तेज़ धूप में बाहर नहीं रुक सकते।'
          ]
        },
        {
          t: 'note',
          text: 'यह खुला परिसर है, इसलिए खुलने का समय, प्रवेश-नियम और कुछ हिस्सों की उपलब्धता बदल सकती है। मौके पर जानकारी देखें और शांत वातावरण का ध्यान रखें।'
        },
        {
          t: 'links',
          items: [
            { label: 'पटना जंक्शन से गोलघर', path: 'visit/patna-junction' },
            { label: 'बारिश और गर्मी की योजना', path: 'itineraries/rainy-day' },
            { label: 'कम चलने वालों के लिए योजना', path: 'itineraries/low-walking' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What is here' },
        {
          t: 'p',
          text: 'It is an open complex with greenery, walking paths and cultural structures connected to Buddhist tradition. It suits anyone who wants a little rest and open air between monuments.'
        },
        { t: 'h2', text: 'Ordering it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'The area around Patna Junction'],
            ['Suggested order', 'Golghar → Buddha Smriti Park → towards the station'],
            ['Time needed', 'About an hour'],
            ['Suits', 'Rest, walking, quiet and cultural interest'],
            ['Weather', 'Open complex — morning or evening is better']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'The distance is long, so a vehicle is better'],
            ['By vehicle', 'Rickshaw, auto or taxi towards Patna Junction'],
            ['Landmark', 'The area around Patna Junction'],
            ['Rough time', 'About 15 to 25 minutes by road, traffic depending'],
            ['After this', 'Continuing towards the station, or a meal, follows conveniently']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you arrive by train and want to use spare time near the station.',
            'Add it if: you enjoy walking in a green, quiet space.',
            'Skip it if: you have only an hour and it is meant for Golghar.',
            'Skip it if: you cannot stay outdoors in the early afternoon sun.'
          ]
        },
        {
          t: 'note',
          text: 'This is an open complex, so opening hours, entry rules and access to some areas can change. Check information on site and respect the quiet setting.'
        },
        {
          t: 'links',
          items: [
            { label: 'Patna Junction to Golghar', path: 'visit/patna-junction' },
            { label: 'A rain and heat plan', path: 'itineraries/rainy-day' },
            { label: 'A low-walking plan', path: 'itineraries/low-walking' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'बुद्ध स्मृति पार्क कहाँ है?', a: 'यह पटना जंक्शन के आसपास के क्षेत्र में स्थित है।' },
        { q: 'यहाँ कितना समय लगता है?', a: 'लगभग एक घंटा, यह निर्भर है कि आप कितना टहलते हैं।' },
        { q: 'क्या यह ट्रेन यात्रियों के लिए सुविधाजनक है?', a: 'हाँ, पटना जंक्शन के पास होने के कारण आने-जाने से पहले इसे जोड़ना आसान रहता है।' }
      ],
      en: [
        { q: 'Where is Buddha Smriti Park?', a: 'It is in the area around Patna Junction.' },
        { q: 'How long does it take?', a: 'About an hour, depending on how much you walk.' },
        { q: 'Is it convenient for rail travellers?', a: 'Yes — being near Patna Junction makes it easy to add before or after a train.' }
      ]
    },
    sources: sourcesAll,
    related: ['visit/patna-junction', 'itineraries/rainy-day', 'itineraries/low-walking', 'nearby/gandhi-maidan']
  },
  {
    path: 'nearby/gandhi-ghat',
    group: 'nearby',
    priority: 3,
    title: {
      hi: 'गांधी घाट, पटना: गंगा किनारे की गाइड',
      en: 'Gandhi Ghat, Patna: A Riverfront Guide'
    },
    description: {
      hi: 'गांधी घाट — गंगा किनारे का घाट, शहर के इतिहास से जुड़ाव, गोलघर के साथ इसे जोड़ने का तरीका, उपयुक्त समय और सावधानियाँ।',
      en: 'Gandhi Ghat — the Ganges riverfront in Patna, its link to the city’s history, how to pair it with Golghar, the right time and safety notes.'
    },
    h1: { hi: 'गांधी घाट', en: 'Gandhi Ghat' },
    transport: {
      hi: 'गांधी घाट गंगा के किनारे, गोलघर से पूर्व की ओर है; नक्शे पर घाट तक का रास्ता और उतरने की जगह देख लें।',
      en: 'Gandhi Ghat is on the Ganga, east of Golghar; use the map to check the route down to the ghat and a drop-off point.'
    },
    intro: {
      hi: 'गांधी घाट पटना में गंगा नदी के किनारे का एक प्रमुख घाट है, जो शहर के नदी-इतिहास और सांस्कृतिक जीवन से जुड़ा है। यहाँ लोग नदी का नज़ारा, सुबह की रोशनी और किनारे की गतिविधि देखने आते हैं। यह पृष्ठ बताता है कि इसे गोलघर की यात्रा में कैसे जोड़ें।',
      en: 'Gandhi Ghat is the main riverfront on the Ganges in Patna, tied to the city’s river history and cultural life. People come for the view of the river, the morning light and the activity along the bank. This page explains how to fit it into a Golghar trip.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यह क्या है' },
        {
          t: 'p',
          text: 'यह एक नदी-किनारे का घाट है, जहाँ सीढ़ियाँ सीधे पानी तक जाती हैं। यह जगह नदी और शहर के रिश्ते को समझने का सबसे सीधा तरीका है — यही नदी पटना के इतिहास में व्यापार, यातायात और रोज़मर्रा की ज़िंदगी का हिस्सा रही है।'
        },
        { t: 'h2', text: 'गोलघर के साथ योजना' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'गंगा किनारे की ओर, मध्य पटना से यात्रा'],
            ['क्रम का सुझाव', 'सुबह घाट → दिन में गोलघर'],
            ['उपयुक्त समय', 'भोर या शाम, जब गर्मी कम हो'],
            ['लगने वाला समय', 'लगभग 30 से 60 मिनट'],
            ['किसके लिए', 'नज़ारा, फ़ोटोग्राफ़ी, शांति चाहने वाले']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'दूरी अधिक है, इसलिए वाहन बेहतर रहता है'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से गंगा किनारे की ओर'],
            ['दिशा-संकेत', 'गंगा किनारे की ओर, मध्य पटना से यात्रा'],
            ['अनुमानित समय', 'वाहन से लगभग 15 से 25 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'इसके बाद सभ्यता द्वार या नदी किनारे की सैर जोड़ी जा सकती है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: आप सुबह जल्दी निकल सकते हैं और नदी की रोशनी देखना चाहते हैं।',
            'जोड़ें अगर: आप शहर के इतिहास को नदी से जोड़कर समझना चाहते हैं।',
            'न जोड़ें अगर: आपके पास सीमित समय है और गोलघर केंद्र में है।',
            'न जोड़ें अगर: आप अकेले देर शाम जाने की योजना बना रहे हैं।'
          ]
        },
        {
          t: 'note',
          text: 'घाट पर सीढ़ियाँ और पानी के किनारे फिसलन हो सकती है, और नदी का स्तर बदलता रहता है। बच्चों का ध्यान रखें, पानी के करीब न जाएँ और मौके के निर्देश मानें।'
        },
        {
          t: 'links',
          items: [
            { label: 'सभ्यता द्वार', path: 'nearby/sabhyata-dwar' },
            { label: 'शाम की सैर और रात का भोजन', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'फ़ोटोग्राफ़ी के लिए उपयुक्त समय', path: 'visit/photography' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What it is' },
        {
          t: 'p',
          text: 'It is a riverfront ghat where steps lead down to the water. It is the most direct way to understand the relationship between the river and the city — this is the river that has been part of Patna’s trade, transport and daily life through its history.'
        },
        { t: 'h2', text: 'Planning it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Towards the Ganges, a trip from central Patna'],
            ['Suggested order', 'Ghat in the morning → Golghar during the day'],
            ['Best time', 'Dawn or evening, when it is cooler'],
            ['Time needed', 'About 30 to 60 minutes'],
            ['Suits', 'View, photography, anyone seeking quiet']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'The distance is long, so a vehicle is better'],
            ['By vehicle', 'Rickshaw, auto or taxi towards the Ganges'],
            ['Landmark', 'Towards the Ganges, a trip from central Patna'],
            ['Rough time', 'About 15 to 25 minutes by road, traffic depending'],
            ['After this', 'Sabhyata Dwar or a walk by the river can follow']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you can set out early and want to see the river in morning light.',
            'Add it if: you want to understand the city’s history through the river.',
            'Skip it if: your time is limited and Golghar is the centre of the trip.',
            'Skip it if: you are planning to go alone late in the evening.'
          ]
        },
        {
          t: 'note',
          text: 'Steps and the water’s edge can be slippery, and the river level changes. Watch children, do not go close to the water and follow instructions on site.'
        },
        {
          t: 'links',
          items: [
            { label: 'Sabhyata Dwar', path: 'nearby/sabhyata-dwar' },
            { label: 'An evening walk and dinner', path: 'itineraries/evening-gandhi-maidan' },
            { label: 'Best times for photography', path: 'visit/photography' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'गांधी घाट क्या है?', a: 'यह पटना में गंगा नदी के किनारे का प्रमुख घाट है, जहाँ सीढ़ियाँ पानी तक जाती हैं।' },
        { q: 'जाने का सबसे अच्छा समय कौन-सा है?', a: 'भोर या शाम, जब रोशनी नरम हो और गर्मी कम हो।' },
        { q: 'यहाँ कितना समय लगता है?', a: 'लगभग 30 से 60 मिनट।' }
      ],
      en: [
        { q: 'What is Gandhi Ghat?', a: 'It is the main ghat on the Ganges in Patna, with steps leading down to the water.' },
        { q: 'What is the best time to go?', a: 'Dawn or evening, when the light is soft and it is cooler.' },
        { q: 'How long does it take?', a: 'About 30 to 60 minutes.' }
      ]
    },
    sources: sourcesAll,
    related: ['nearby/sabhyata-dwar', 'itineraries/evening-gandhi-maidan', 'visit/photography', 'nearby/gandhi-maidan']
  },
  {
    path: 'nearby/maurya-lok',
    group: 'nearby',
    priority: 3,
    title: {
      hi: 'मौर्य लोक, पटना: खरीदारी और भोजन की गाइड',
      en: 'Maurya Lok, Patna: Shopping and Food Guide'
    },
    description: {
      hi: 'मौर्य लोक क्षेत्र — मध्य पटना में खरीदारी, भोजन और विश्राम का विकल्प, गोलघर के साथ इसे जोड़ने का तरीका और किसके लिए यह उपयुक्त है।',
      en: 'The Maurya Lok area — shopping, food and a rest stop in central Patna, how to fit it into a Golghar trip and who it suits.'
    },
    h1: { hi: 'मौर्य लोक क्षेत्र', en: 'The Maurya Lok area' },
    transport: {
      hi: 'मौर्य लोक गोलघर से दक्षिण में, फ्रेज़र रोड क्षेत्र की ओर है; नक्शे पर स्थान देखें — वाहन से जाना सुविधाजनक रहता है।',
      en: 'The Maurya Lok area is south of Golghar, around the Fraser Road area; check the location on the map — a vehicle is usually more convenient.'
    },
    intro: {
      hi: 'मौर्य लोक मध्य पटना का एक व्यावसायिक क्षेत्र है, जहाँ खरीदारी, भोजन और विश्राम के विकल्प एक साथ मिलते हैं। गोलघर के बाद अगर आपको बैठकर कुछ खाने और हल्की खरीदारी करने की जगह चाहिए, तो यह क्षेत्र उपयोगी रहता है।',
      en: 'Maurya Lok is a commercial area in central Patna where shopping, food and a place to rest sit together. If you want somewhere to eat and do a little shopping after Golghar, this area is practical.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यह क्षेत्र क्या देता है' },
        {
          t: 'p',
          text: 'यहाँ दुकानें, भोजनालय और बैठकर आराम करने की जगहें हैं। यह किसी एक दुकान की सिफ़ारिश नहीं है — यह एक ऐसा क्षेत्र है जहाँ आपको सुविधा का प्रकार मिलता है: खाना, पानी, विश्राम और हल्की खरीदारी।'
        },
        { t: 'h2', text: 'गोलघर के साथ क्रम' },
        {
          t: 'table',
          head: ['पहलू', 'जानकारी'],
          rows: [
            ['दूरी की दिशा', 'मध्य पटना, गोलघर के आसपास के क्षेत्र में'],
            ['क्रम का सुझाव', 'गोलघर → मौर्य लोक में भोजन और विश्राम'],
            ['लगने वाला समय', 'लगभग एक घंटा या अधिक'],
            ['किसके लिए', 'भोजन, खरीदारी और आराम चाहने वाले'],
            ['साथ में', 'गांधी मैदान की सैर भी जोड़ी जा सकती है']
          ]
        },
        { t: 'h2', text: 'गोलघर से कैसे पहुँचें' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['पैदल', 'मध्य पटना में होने के कारण अच्छे मौसम में पैदल जाना संभव'],
            ['वाहन से', 'रिक्शा, ऑटो या टैक्सी से छोटी दूरी'],
            ['दिशा-संकेत', 'मध्य पटना, गोलघर के आसपास का क्षेत्र'],
            ['अनुमानित समय', 'वाहन से लगभग 5 से 15 मिनट, यातायात के अनुसार'],
            ['यहाँ से आगे', 'भोजन और विश्राम के बाद गांधी मैदान की सैर या वापसी का क्रम बनता है']
          ]
        },
        { t: 'h2', text: 'क्या इसे जोड़ें' },
        {
          t: 'ul',
          items: [
            'जोड़ें अगर: गोलघर के बाद आपको बैठकर भोजन और आराम चाहिए।',
            'जोड़ें अगर: आपको स्थानीय खरीदारी में रुचि है।',
            'न जोड़ें अगर: आप सिर्फ़ स्मारक देखना चाहते हैं।',
            'न जोड़ें अगर: आप व्यस्त समय में भीड़ से बचना चाहते हैं।'
          ]
        },
        {
          t: 'note',
          text: 'यह मार्गदर्शिका किसी दुकान, ब्रांड या भोजनालय का नाम नहीं देती और किसी की सिफ़ारिश नहीं करती। भोजन और खरीदारी के फ़ैसले अपनी पसंद और बजट के अनुसार लें।'
        },
        {
          t: 'links',
          items: [
            { label: 'गोलघर के आसपास खाना', path: 'food/nearby' },
            { label: 'तेज़ नाश्ते के विकल्प', path: 'food/quick-bites' },
            { label: 'गांधी मैदान', path: 'nearby/gandhi-maidan' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What the area offers' },
        {
          t: 'p',
          text: 'There are shops, places to eat and somewhere to sit and rest. This is not a recommendation of any one shop — it is an area where you find a type of convenience: food, water, a rest and light shopping.'
        },
        { t: 'h2', text: 'Ordering it with Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Direction', 'Central Patna, in the area around Golghar'],
            ['Suggested order', 'Golghar → food and rest in Maurya Lok'],
            ['Time needed', 'About an hour or more'],
            ['Suits', 'People wanting food, shopping and rest'],
            ['Combine with', 'A walk on Gandhi Maidan also fits']
          ]
        },
        { t: 'h2', text: 'Getting there from Golghar' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['On foot', 'In central Patna, so walkable in good weather'],
            ['By vehicle', 'A short ride by rickshaw, auto or taxi'],
            ['Landmark', 'Central Patna, in the area around Golghar'],
            ['Rough time', 'About 5 to 15 minutes by road, traffic depending'],
            ['After this', 'After eating and resting, a Gandhi Maidan walk or the return follows']
          ]
        },
        { t: 'h2', text: 'Whether to add it' },
        {
          t: 'ul',
          items: [
            'Add it if: you want to sit down, eat and rest after Golghar.',
            'Add it if: you are interested in local shopping.',
            'Skip it if: you are here only for monuments.',
            'Skip it if: you want to avoid crowds at busy times.'
          ]
        },
        {
          t: 'note',
          text: 'This guide names no shop, brand or restaurant and recommends none. Make your own food and shopping choices according to taste and budget.'
        },
        {
          t: 'links',
          items: [
            { label: 'Where to eat near Golghar', path: 'food/nearby' },
            { label: 'Quick snack options', path: 'food/quick-bites' },
            { label: 'Gandhi Maidan', path: 'nearby/gandhi-maidan' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        { q: 'मौर्य लोक में क्या मिलता है?', a: 'यह व्यावसायिक क्षेत्र है जहाँ खरीदारी, भोजन और विश्राम के विकल्प मिलते हैं।' },
        { q: 'क्या यह गोलघर के पास है?', a: 'यह मध्य पटना में गोलघर के आसपास के क्षेत्र में है।' },
        { q: 'क्या मार्गदर्शिका किसी दुकान की सिफ़ारिश करती है?', a: 'नहीं, यह किसी दुकान, ब्रांड या भोजनालय का नाम नहीं देती।' }
      ],
      en: [
        { q: 'What is available in Maurya Lok?', a: 'It is a commercial area with shopping, food and places to rest.' },
        { q: 'Is it near Golghar?', a: 'It is in central Patna, in the area around Golghar.' },
        { q: 'Does the guide recommend any shop?', a: 'No — it names no shop, brand or restaurant.' }
      ]
    },
    sources: sourcesAll,
    related: ['food/nearby', 'food/quick-bites', 'nearby/gandhi-maidan', 'food/family-lunch']
  }
];
