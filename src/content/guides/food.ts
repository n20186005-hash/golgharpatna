import type { GuideEntry, Source } from '../guide-schema';

const SRC: Record<string, Source> = {
  bt: {
    label: {
      hi: 'बिहार पर्यटन विभाग — पर्यटन जानकारी',
      en: 'Bihar Tourism — tourism information'
    },
    url: 'https://tourism.bihar.gov.in/'
  },
  district: {
    label: {
      hi: 'पटना जिला प्रशासन — गोलघर पृष्ठ',
      en: 'Patna District Administration — Golghar page'
    },
    url: 'https://patna.nic.in/tourist-place/gol-ghar/'
  },
  maps: {
    label: {
      hi: 'Google Maps पर गोलघर की सार्वजनिक स्थिति',
      en: 'Golghar location on Google Maps'
    },
    url: 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8'
  }
};

export const food: GuideEntry[] = [
  {
    path: 'food/nearby',
    group: 'food',
    priority: 1,
    title: {
      hi: 'गोलघर पटना आसपास खाने की जगह गाइड',
      en: 'Food Near Golghar Patna: Areas and Facility Types'
    },
    description: {
      hi: 'गोलघर के आसपास किस क्षेत्र में किस प्रकार का खाने का विकल्प मिलता है, कौन-सा भोजन किस समय उपयुक्त है, और आगे कौन-सा पृष्ठ पढ़ें।',
      en: 'Which type of eating place is found in which area around Golghar, which meal suits which time, and which page to read next.'
    },
    h1: {
      hi: 'गोलघर के पास खाने की जगह',
      en: 'Where to eat near Golghar'
    },
    transport: {
      hi: 'खाने के विकल्प गोलघर के आसपास के क्षेत्रों में बिखरे हैं — गांधी मैदान, अशोक राजपथ और मौर्य लोक; नक्शे पर स्थान देखकर निकटतम क्षेत्र चुनें।',
      en: 'Eating options are spread across the areas around Golghar — Gandhi Maidan, Ashok Rajpath and Maurya Lok; use the map to pick the nearest area.'
    },
    intro: {
      hi: 'गोलघर के आसपास गांधी मैदान, अशोक राजपथ, कर्गिल चौक, तारामंडल और मौर्य लोक जैसे क्षेत्रों में छोटे भोजनालय, मिठाई की दुकानें, बेकरी, कैफ़े और नाश्ते के ठेले मिलते हैं। यह पृष्ठ बताता है कि किस प्रकार का विकल्प कहाँ देखना है और किस समय क्या उपयुक्त रहता है। मार्गदर्शिका किसी एक दुकान, ब्रांड या श्रृंखला का नाम नहीं देती और किसी की सिफ़ारिश नहीं करती।',
      en: 'Around Golghar, areas such as Gandhi Maidan, Ashok Rajpath, Kargil Chowk, Taramandal and Maurya Lok hold a mix of small eateries, sweet shops, bakeries, cafes and roadside snack stalls. This page explains which type of option to look for where, and what suits which time of day. The guide names no individual shop, brand or chain and recommends none.'
    },
    blocks: {
      hi: [
        {
          t: 'p',
          text: 'यहाँ खाने के विकल्प अलग-अलग आवश्यकताओं के अनुसार बँटे हैं। किसी दिन आपको जल्दी निकलना होता है, किसी दिन परिवार के साथ बैठकर भोजन करना होता है, और किसी दिन गर्मी या बारिश में कुछ देर रुकना पड़ता है। नीचे दिया क्रम इसी सोच पर आधारित है।'
        },
        { t: 'h2', text: 'क्षेत्र और उनमें मिलने वाले विकल्प' },
        {
          t: 'ul',
          items: [
            'गांधी मैदान और दक्षिण गांधी मैदान क्षेत्र — भोजनालय, मिठाई की दुकानें और नाश्ते के ठेले।',
            'अशोक राजपथ — छोटे शाकाहारी भोजनालय, चाय की दुकानें और बेकरी।',
            'कर्गिल चौक क्षेत्र — नाश्ते और हल्के भोजन के विकल्प।',
            'तारामंडल क्षेत्र — बैठने वाले कैफ़े और बेकरी काउंटर।',
            'मौर्य लोक क्षेत्र — भोजनालय, मिठाई और खरीदारी के साथ भोजन।',
            'बिहार संग्रहालय क्षेत्र — कैफ़े और विश्राम की जगह।'
          ]
        },
        { t: 'h2', text: 'भोजन के समय के अनुसार क्या देखें' },
        {
          t: 'table',
          head: ['समय', 'क्या देखें', 'किसके लिए उपयुक्त'],
          rows: [
            ['सुबह', 'छोटा शाकाहारी भोजनालय, बेकरी काउंटर, चाय की दुकान', 'गोलघर जाने से पहले हल्का भोजन'],
            ['दोपहर', 'परिवार वाला भोजनालय, दाल-भात परोसने वाली जगहें', 'बच्चों या बड़ों के साथ बैठकर भोजन'],
            ['दोपहर के बाद', 'कैफ़े, चाय की दुकान', 'गोलघर देखने के बाद विश्राम'],
            ['शाम', 'सड़क किनारे नाश्ते के ठेले, बेकरी', 'दो स्थलों के बीच छोटा पड़ाव'],
            ['रात', 'परिवार वाला भोजनालय, मिठाई की दुकान', 'भोजन को दिन का अंतिम चरण बनाना']
          ]
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मध्य पटना — गांधी मैदान, अशोक राजपथ और मौर्य लोक जैसे क्षेत्र गोलघर से पैदल या छोटी वाहन-यात्रा की दूरी पर हैं'],
            ['कौन-सा भोजन', 'सुबह से रात तक सभी — इस पृष्ठ में भोजन के समय के अनुसार विकल्प दिए गए हैं'],
            ['किसके लिए उपयुक्त', 'परिवार, अकेले यात्री, शाकाहारी और सीमित बजट वाले'],
            ['खुलने का समय और बुकिंग', 'इस मार्गदर्शिका में किसी जगह का समय दर्ज नहीं है। खुलने का समय, अवकाश के दिन और बुकिंग की सुविधा मौके पर पुष्टि करें; कुछ भोजनालय फ़ोन पर बुकिंग लेते हैं, पर यह हर जगह अलग होता है।'],
            ['इसके बाद', 'भोजन के बाद गांधी मैदान की सैर या अगला स्थल जोड़ा जा सकता है']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ खाने के प्रकार और क्षेत्र बताता है, किसी दुकान या ब्रांड की सिफ़ारिश नहीं करता। किसी भी जगह का चयन करने से पहले उसकी वर्तमान स्थिति, समय और शुद्धता मौके पर जाँच लें।'
        },
        {
          t: 'links',
          items: [
            { label: 'लिट्टी चोखा और सत्तू', path: 'food/litti-chokha' },
            { label: 'शाकाहारी विकल्प', path: 'food/vegetarian' },
            { label: 'परिवार के साथ दोपहर का भोजन', path: 'food/family-lunch' },
            { label: 'कैफ़े और मौसम से बचाव', path: 'food/cafes' },
            { label: 'छोटा नाश्ता', path: 'food/quick-bites' },
            { label: 'बिहारी भोजन का दिन-भर का मार्ग', path: 'food/bihari-tasting-route' },
            { label: 'गोलघर और गांधी मैदान की यात्रा योजना', path: 'itineraries/golghar-gandhi-maidan' }
          ]
        }
      ],
      en: [
        {
          t: 'p',
          text: 'The options here are grouped by need. Some days you must move quickly, some days you want to sit down with family, and some days you need to pause because of heat or rain. The order below follows that thinking rather than a list of places.'
        },
        { t: 'h2', text: 'Areas and the options found in them' },
        {
          t: 'ul',
          items: [
            'Gandhi Maidan and South Gandhi Maidan area — restaurants, sweet shops and snack stalls.',
            'Ashok Rajpath — small vegetarian eateries, chai stalls and bakeries.',
            'Kargil Chowk area — options for snacks and light meals.',
            'Taramandal area — cafes with seating and bakery counters.',
            'Maurya Lok area — eating combined with sweets and shopping.',
            'Bihar Museum area — cafes and places to rest.'
          ]
        },
        { t: 'h2', text: 'What to look for by time of day' },
        {
          t: 'table',
          head: ['Time', 'What to look for', 'Suits'],
          rows: [
            ['Morning', 'small vegetarian eatery, bakery counter, chai stall', 'a light meal before Golghar'],
            ['Midday', 'family restaurant, places serving dal and rice', 'sitting down to eat with children or older companions'],
            ['Afternoon', 'cafe, chai stall', 'a rest after seeing Golghar'],
            ['Evening', 'roadside snack stall, bakery', 'a short pause between two sights'],
            ['Night', 'family restaurant, sweet shop', 'making the meal the last stop of the day']
          ]
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'Central Patna — areas such as Gandhi Maidan, Ashok Rajpath and Maurya Lok are a walk or a short ride from Golghar'],
            ['Which meal', 'Any, from morning to night — this page groups options by time of day'],
            ['Suits', 'Families, solo travellers, vegetarians and budget-minded visitors'],
            ['Hours and booking', 'This guide lists no opening hours for any place. Confirm hours, weekly closures and any booking facility on the spot; some restaurants take bookings by phone, but this varies from place to place.'],
            ['After this', 'After the meal, a walk on Gandhi Maidan or the next sight can follow']
          ]
        },
        {
          t: 'note',
          text: 'This page describes food types and areas; it does not endorse any establishment or brand. Before choosing any place, check its current condition, timing and food practices on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Litti chokha and sattu', path: 'food/litti-chokha' },
            { label: 'Vegetarian options', path: 'food/vegetarian' },
            { label: 'Family lunch', path: 'food/family-lunch' },
            { label: 'Cafes and weather breaks', path: 'food/cafes' },
            { label: 'Quick bites', path: 'food/quick-bites' },
            { label: 'A day-long Bihari tasting route', path: 'food/bihari-tasting-route' },
            { label: 'A Golghar and Gandhi Maidan itinerary', path: 'itineraries/golghar-gandhi-maidan' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर के पास किस प्रकार के खाने के विकल्प मिलते हैं?',
          a: 'क्षेत्र में छोटे शाकाहारी भोजनालय, मिठाई की दुकानें, बेकरी, बैठने वाले कैफ़े, सड़क किनारे नाश्ते के ठेले और परिवार वाले भोजनालय मिलते हैं। यह जानकारी क्षेत्र की सामान्य बनावट बताती है, किसी एक जगह की पुष्टि नहीं करती।'
        },
        {
          q: 'क्या गोलघर के पास लिट्टी चोखा मिलता है?',
          a: 'यह बिहार का जाना-माना व्यंजन है और मध्य पटना के बाज़ार क्षेत्रों में मिलता है। कोई दुकान बताने के बजाय हम यह पृष्ठ जोड़ते हैं जो व्यंजन और उपयुक्त समय समझाता है।'
        },
        {
          q: 'जाने से पहले क्या जाँचना चाहिए?',
          a: 'खुलने का समय, उस दिन की उपलब्धता, शाकाहारी विकल्प और बैठने की जगह मौके पर ही पूछें। सार्वजनिक सूचनाएँ बदलती रहती हैं, इसलिए इन्हें अंतिम न मानें।'
        }
      ],
      en: [
        {
          q: 'What kind of eating options are there near Golghar?',
          a: 'The area has small vegetarian eateries, sweet shops, bakeries, cafes with seating, roadside snack stalls and family restaurants. This describes the general make-up of the locality and does not confirm any single place.'
        },
        {
          q: 'Can I get litti chokha near Golghar?',
          a: 'It is a well-known Bihari dish and appears in the market areas of central Patna. Rather than pointing to a shop, we link to the page that explains the dish and when it fits a visit.'
        },
        {
          q: 'What should I check before going?',
          a: 'Ask on the spot about opening hours, that day availability, vegetarian options and seating. Public information changes, so do not treat it as final.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['food/litti-chokha', 'food/vegetarian', 'visit/gandhi-maidan']
  },

  {
    path: 'food/litti-chokha',
    group: 'food',
    priority: 1,
    title: {
      hi: 'गोलघर पटना लिट्टी चोखा और सत्तू गाइड',
      en: 'Litti Chokha and Sattu Near Golghar Patna'
    },
    description: {
      hi: 'लिट्टी चोखा क्या है, सत्तू कैसे उपयोग होता है, यह सामान्यतः शाकाहारी क्यों है, और गोलघर यात्रा में इसे कब खाया जाए।',
      en: 'What litti chokha is, how sattu is used, why the dish is usually vegetarian, and when it fits a Golghar visit.'
    },
    h1: {
      hi: 'लिट्टी चोखा और सत्तू',
      en: 'Litti chokha and sattu'
    },
    transport: {
      hi: 'लिट्टी-चोखा के ठेले और छोटे भोजनालय अशोक राजपथ तथा कर्गिल चौक के आसपास मिलते हैं, गोलघर से पैदल या थोड़ी दूरी पर; नक्शे से क्षेत्र चुनें।',
      en: 'Litti-chokha stalls and small eateries cluster around Ashok Rajpath and Kargil Chowk, a walk or short ride from Golghar; use the map to pick the area.'
    },
    intro: {
      hi: 'लिट्टी चोखा बिहार का जाना-माना व्यंजन है। लिट्टी गेहूँ के आटे के गोले होते हैं जिन्हें परंपरागत रूप से आग पर भूनकर बनाया जाता है, और चोखा मसले हुए सब्ज़ी का मिश्रण होता है, जिसमें प्रायः आलू, बैंगन और टमाटर रहते हैं। सत्तू यानी भुना हुआ चना आटा भी बिहार में बहुत उपयोग होता है। यह पृष्ठ इन व्यंजनों को पहचानने और यात्रा में उपयुक्त समय चुनने में मदद करता है।',
      en: 'Litti chokha is a well-known Bihari dish. Litti are wheat-flour balls, traditionally roasted, and chokha is a mashed vegetable preparation, commonly of potato, brinjal and tomato. Sattu, roasted gram flour, is a widely used Bihari ingredient. This page helps you recognise these dishes and decide when they fit your trip.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'लिट्टी चोखा और सत्तू क्या हैं' },
        {
          t: 'p',
          text: 'लिट्टी गेहूँ के आटे से बने गोले हैं जिन्हें परंपरागत रूप से आग पर भूनकर पकाया जाता है। इनके साथ चोखा परोसा जाता है, जो मसले हुए सब्ज़ी का मिश्रण होता है और जिसमें प्रायः आलू, बैंगन और टमाटर रहते हैं। सत्तू भुने हुए चने का आटा है और बिहार में यह पेय, भराई और पराठे—तीनों रूपों में उपयोग होता है। ये तीनों चीज़ें बिहारी रसोई की पहचान हैं और अलग-अलग जगहों पर अलग ढंग से परोसी जा सकती हैं।'
        },
        {
          t: 'table',
          head: ['व्यंजन', 'मुख्य सामग्री', 'सामान्य स्वरूप'],
          rows: [
            ['लिट्टी', 'गेहूँ का आटा', 'आग पर भुने गोले'],
            ['चोखा', 'आलू, बैंगन, टमाटर', 'मसला हुआ सब्ज़ी मिश्रण'],
            ['सत्तू', 'भुना चना आटा', 'पाउडर; पेय या भराई में उपयोग']
          ]
        },
        { t: 'h2', text: 'यात्रा में इसे कब खाएँ' },
        {
          t: 'ul',
          items: [
            'भारी दोपहर के भोजन से पहले या उसके बदले, अगर आपको हल्का और भरा हुआ भोजन चाहिए।',
            'गोलघर देखने के बाद, जब आप कुछ देर बैठकर स्थानीय व्यंजन चखना चाहें।',
            'लंबी पैदल यात्रा से पहले ऊर्जा के लिए, पर मात्रा हल्की रखें।',
            'छोटे बच्चों या संवेदनशील पेट वाले साथियों के साथ तीखापन कम माँगें और मौके पर पूछ लें।'
          ]
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मध्य पटना के बाज़ार क्षेत्र, गोलघर से पैदल या छोटी वाहन-यात्रा पर'],
            ['कौन-सा भोजन', 'दोपहर से शाम — हल्के भोजन या शाम के नाश्ते के रूप में; भारी भोजन से पहले भी ठीक'],
            ['किसके लिए उपयुक्त', 'स्थानीय व्यंजन चखने वाले; व्यंजन सामान्यतः शाकाहारी होता है'],
            ['खुलने का समय और बुकिंग', 'इस मार्गदर्शिका में किसी ठेले या दुकान का समय दर्ज नहीं है। ताज़गी, उपलब्धता और साथ परोसी जाने वाली चीज़ें मौके पर जाँचें; यहाँ बुकिंग की व्यवस्था सामान्यतः नहीं होती।'],
            ['इसके बाद', 'खाने के बाद गोलघर की ओर लौटना या गांधी मैदान की सैर जोड़ना आसान रहता है']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ व्यंजन और उनके प्रकार समझाता है, किसी दुकान की सिफ़ारिश नहीं करता। ताज़गी, तीखापन, तेल की मात्रा और साथ परोसी जाने वाली चीज़ें हर जगह अलग होती हैं—इनकी पुष्टि मौके पर करें।'
        },
        {
          t: 'links',
          items: [
            { label: 'शाकाहारी विकल्प', path: 'food/vegetarian' },
            { label: 'छोटा नाश्ता', path: 'food/quick-bites' },
            { label: 'बिहारी भोजन का दिन-भर का मार्ग', path: 'food/bihari-tasting-route' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What litti chokha and sattu are' },
        {
          t: 'p',
          text: 'Litti are balls made from wheat flour, traditionally roasted over a fire. They are served with chokha, a mashed vegetable preparation that commonly uses potato, brinjal and tomato. Sattu is roasted gram flour, widely used in Bihar as a drink, as a stuffing and in parathas. All three are staples of Bihari cooking and can be served differently from one place to another.'
        },
        {
          t: 'table',
          head: ['Item', 'Main ingredient', 'Typical form'],
          rows: [
            ['Litti', 'wheat flour', 'balls roasted over fire'],
            ['Chokha', 'potato, brinjal, tomato', 'mashed vegetable mix'],
            ['Sattu', 'roasted gram flour', 'powder; used as a drink or stuffing']
          ]
        },
        { t: 'h2', text: 'When to eat it during a visit' },
        {
          t: 'ul',
          items: [
            'Before or instead of a heavy midday meal, if you want something light but filling.',
            'After seeing Golghar, when you want to sit down and try a local dish.',
            'Before a long walk, for energy, though keep the portion light.',
            'With small children or companions with sensitive stomachs, ask for less heat and confirm on the spot.'
          ]
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'The market areas of central Patna, a walk or a short ride from Golghar'],
            ['Which meal', 'Midday to evening — as a light meal or an evening snack; also fine before a heavy meal'],
            ['Suits', 'Anyone wanting to try a local dish; the dish is usually vegetarian'],
            ['Hours and booking', 'This guide lists no hours for any stall or shop. Check freshness, availability and accompaniments on the spot; booking is not normally offered for this kind of food.'],
            ['After this', 'After eating, returning towards Golghar or adding a Gandhi Maidan walk is easy']
          ]
        },
        {
          t: 'note',
          text: 'This page explains the dishes and their types; it does not recommend any shop. Freshness, spiciness, the amount of oil and the accompaniments vary from place to place, so confirm them on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Vegetarian options', path: 'food/vegetarian' },
            { label: 'Quick bites', path: 'food/quick-bites' },
            { label: 'A day-long Bihari tasting route', path: 'food/bihari-tasting-route' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'क्या लिट्टी चोखा शाकाहारी है?',
          a: 'यह व्यंजन सामान्यतः शाकाहारी होता है, क्योंकि इसमें गेहूँ का आटा और सब्ज़ी का चोखा मुख्य होता है। फिर भी घी, मक्खन या साथ परोसी जाने वाली चीज़ों के बारे में मौके पर पूछ लेना ठीक रहता है।'
        },
        {
          q: 'सत्तू क्या है और इसे कैसे खाया जाता है?',
          a: 'सत्तू भुने हुए चने का आटा है। इसे पानी या दही में मिलाकर पेय के रूप में, आटे में भराई के रूप में, और सत्तू पराठे में भी बनाया जाता है।'
        },
        {
          q: 'गोलघर देखने से पहले या बाद में यह व्यंजन ठीक रहेगा?',
          a: 'दोनों समय ठीक रह सकता है। बाद में लेने पर आप बैठकर खा सकते हैं; पहले लेने पर भारी न खाएँ, ताकि सीढ़ियाँ चढ़ने या चलने में असुविधा न हो।'
        },
        {
          q: 'तीखापन कम चाहिए तो क्या करें?',
          a: 'परोसने वाले से मिर्च या मसाला कम रखने के लिए कहें। यह जानकारी हर जगह अलग होती है, इसलिए माँगते समय स्पष्ट रूप से बताएँ।'
        }
      ],
      en: [
        {
          q: 'Is litti chokha vegetarian?',
          a: 'The dish is usually vegetarian, since wheat flour and vegetable chokha are the main parts. Even so, it is sensible to ask on the spot about ghee, butter or anything served alongside.'
        },
        {
          q: 'What is sattu and how is it eaten?',
          a: 'Sattu is roasted gram flour. It is mixed with water or curd as a drink, used as a stuffing in dough, and also made into sattu paratha.'
        },
        {
          q: 'Is it better before or after seeing Golghar?',
          a: 'Either can work. After the visit you can sit down and eat; before the visit, keep it light so the stairs or the walk do not become uncomfortable.'
        },
        {
          q: 'What if I want it less spicy?',
          a: 'Ask the person serving to keep the chilli or masala low. This varies from place to place, so state it clearly when ordering.'
        }
      ]
    },
    sources: [SRC.bt, SRC.district],
    related: ['food/nearby', 'food/vegetarian', 'food/quick-bites']
  },

  {
    path: 'food/vegetarian',
    group: 'food',
    priority: 2,
    title: {
      hi: 'गोलघर पटना शाकाहारी भोजन गाइड',
      en: 'Vegetarian Food Near Golghar Patna'
    },
    description: {
      hi: 'गोलघर के आसपास शाकाहारी भोजन कैसे खोजें, कौन-से व्यंजन सामान्यतः शाकाहारी होते हैं, और दुकान पर क्या पूछना चाहिए।',
      en: 'How to find vegetarian food near Golghar, which dishes are commonly vegetarian, and what to ask for at a counter.'
    },
    h1: {
      hi: 'गोलघर के पास शाकाहारी भोजन',
      en: 'Vegetarian food near Golghar'
    },
    transport: {
      hi: 'शाकाहारी भोजन के विकल्प गांधी मैदान के आसपास और अशोक राजपथ पर मिलते हैं, गोलघर के पास ही; नक्शे पर स्थान देखकर निकलें।',
      en: 'Vegetarian options are found around Gandhi Maidan and along Ashok Rajpath, close to Golghar; check the location on the map before heading out.'
    },
    intro: {
      hi: 'मध्य पटना में शाकाहारी भोजन के विकल्प आसानी से मिलते हैं, क्योंकि यहाँ कई छोटे शाकाहारी भोजनालय और मिठाई की दुकानें हैं। असली प्रश्न यह नहीं है कि विकल्प हैं या नहीं, बल्कि यह है कि आपको भोजन किस चीज़ से बनाया गया है यह कैसे पता चले। यह पृष्ठ यही समझाता है और बताता है कि दुकान पर कैसे पूछें।',
      en: 'Vegetarian food is easy to find in central Patna, since the area has many small vegetarian eateries and sweet shops. The real question is not whether options exist, but how you confirm what a dish was made with. This page explains that and how to ask at a counter.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'सामान्यतः शाकाहारी व्यंजन' },
        {
          t: 'ul',
          items: [
            'दाल-भात और सब्ज़ी-रोटी — घर जैसा साधारण भोजन, प्रायः शाकाहारी।',
            'सत्तू और सत्तू पराठा — भुने चने के आटे से बने।',
            'चोखा — मसली हुई सब्ज़ी, प्रायः शुद्ध शाकाहारी।',
            'खाजा — परतों वाली मिठाई, आमतौर पर शाकाहारी।',
            'ठेकुआ — आटे और गुड़ से बनी मिठाई।',
            'हल्का नाश्ता — बेकरी की वस्तुएँ और सूखे नमकीन।'
          ]
        },
        { t: 'h2', text: 'दुकान पर शाकाहारी भोजन कैसे माँगें' },
        {
          t: 'ol',
          items: [
            'पहले स्पष्ट शब्दों में कहें कि आपको शुद्ध शाकाहारी भोजन चाहिए।',
            'अंडा, अंडे से बनी वस्तुएँ और मांस अलग रखने की बात पूछें, ताकि मिलावट की गुंजाइश साफ़ हो।',
            'पूछें कि भोजन किस तेल में और किस तवे या कढ़ाई में बना है, खासकर अगर एक ही रसोई में मिश्रित भोजन बनता हो।',
            'घी, मक्खन या शहद वाले व्यंजनों के बारे में अलग से पूछें, क्योंकि कुछ लोग इन्हें भी नहीं लेते।',
            'अगर भाषा की दिक्कत हो तो मिठाई की दुकान या शाकाहारी भोजनालय चुनें, जहाँ विकल्प सीमित और स्पष्ट रहते हैं।'
          ]
        },
        {
          t: 'p',
          text: 'किस प्रकार की जगह देखें: छोटे शाकाहारी भोजनालय, मिठाई की दुकानें, बेकरी काउंटर और वे भोजनालय जो स्पष्ट रूप से शुद्ध शाकाहारी बताते हैं। ऐसी जगहों पर शाकाहारी विकल्प समझना सरल रहता है, पर बनावट और सामग्री की अंतिम पुष्टि फिर भी मौके पर ही करें।'
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मध्य पटना — अशोक राजपथ और आसपास के क्षेत्रों में छोटे शाकाहारी भोजनालय, गोलघर से पैदल या छोटी यात्रा पर'],
            ['कौन-सा भोजन', 'नाश्ते से रात के भोजन तक सभी — यह पृष्ठ किसी एक समय तक सीमित नहीं'],
            ['किसके लिए उपयुक्त', 'शुद्ध शाकाहारी भोजन चाहने वाले, परिवार और बुज़ुर्ग'],
            ['खुलने का समय और बुकिंग', 'खुलने का समय और अवकाश के दिन हर जगह अलग होते हैं, इसलिए मौके पर पुष्टि करें; छोटे शाकाहारी भोजनालय सामान्यतः बुकिंग नहीं लेते, बड़े भोजनालय कभी-कभी फ़ोन पर लेते हैं।'],
            ['इसके बाद', 'भोजन के बाद गोलघर या गांधी मैदान जाना; रास्ते में मिठाई की दुकान भी पड़ती है']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ व्यंजन के प्रकार और क्षेत्र बताता है, किसी दुकान, ब्रांड या श्रृंखला की सिफ़ारिश नहीं करता। शुद्धता की अंतिम जाँच हमेशा मौके पर ही संभव है।'
        },
        {
          t: 'links',
          items: [
            { label: 'लिट्टी चोखा और सत्तू', path: 'food/litti-chokha' },
            { label: 'परिवार के साथ दोपहर का भोजन', path: 'food/family-lunch' },
            { label: 'गोलघर के आसपास खाने की जगह', path: 'food/nearby' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Dishes that are commonly vegetarian' },
        {
          t: 'ul',
          items: [
            'Dal-bhaat and sabzi-roti — simple home-style meals, usually vegetarian.',
            'Sattu and sattu paratha — made from roasted gram flour.',
            'Chokha — mashed vegetables, usually purely vegetarian.',
            'Khaja — a layered sweet, generally vegetarian.',
            'Thekua — a sweet made from flour and jaggery.',
            'Light snacks — bakery items and dry savouries.'
          ]
        },
        { t: 'h2', text: 'How to ask for vegetarian food at a counter' },
        {
          t: 'ol',
          items: [
            'State clearly, in simple words, that you want strictly vegetarian food.',
            'Ask that egg, egg-based items and meat be kept separate, so the chance of mixing is clear.',
            'Ask which oil was used and on which griddle or pan the dish was cooked, especially where mixed food is prepared in one kitchen.',
            'Ask separately about dishes with ghee, butter or honey, since some people avoid these too.',
            'If language is a barrier, choose a sweet shop or a vegetarian eatery, where the range is limited and easier to follow.'
          ]
        },
        {
          t: 'p',
          text: 'Types of place to look for: small vegetarian eateries, sweet shops, bakery counters, and restaurants that state clearly that they are purely vegetarian. In such places the vegetarian choices are easier to understand, but still confirm the ingredients on the spot.'
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'Central Patna — small vegetarian eateries around Ashok Rajpath and nearby, a walk or a short ride from Golghar'],
            ['Which meal', 'Any slot, from breakfast to dinner — this page is not limited to one'],
            ['Suits', 'Anyone wanting strictly vegetarian food, families and older companions'],
            ['Hours and booking', 'Opening hours and weekly closures differ from place to place, so confirm on the spot; small vegetarian eateries usually do not take bookings, while larger restaurants sometimes do by phone.'],
            ['After this', 'After the meal, going on to Golghar or Gandhi Maidan; sweet shops also fall along the way']
          ]
        },
        {
          t: 'note',
          text: 'This page describes dish types and areas; it does not recommend any shop, brand or chain. The final check for vegetarian preparation is always possible only on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Litti chokha and sattu', path: 'food/litti-chokha' },
            { label: 'Family lunch', path: 'food/family-lunch' },
            { label: 'Where to eat near Golghar', path: 'food/nearby' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर के पास शुद्ध शाकाहारी भोजन कहाँ मिलेगा?',
          a: 'क्षेत्र में छोटे शाकाहारी भोजनालय और मिठाई की दुकानें हैं, जहाँ विकल्प सीमित और स्पष्ट रहते हैं। कोई जगह बताने के बजाय हम ऐसी सुविधाओं के प्रकार बताते हैं और पुष्टि मौके पर करने की सलाह देते हैं।'
        },
        {
          q: 'बिहारी व्यंजनों में कौन-से शाकाहारी होते हैं?',
          a: 'दाल-भात, सब्ज़ी-रोटी, सत्तू और सत्तू पराठा, चोखा, खाजा और ठेकुआ सामान्यतः शाकाहारी माने जाते हैं। परोसते समय सामग्री की पुष्टि कर लेना बेहतर है।'
        },
        {
          q: 'शाकाहारी होने की पुष्टि कैसे करें?',
          a: 'सीधे पूछें कि भोजन अंडे, मांस और अलग तेल से मुक्त है या नहीं, और क्या वह अलग बर्तन में बना था। भरोसेमंद जगह पर ये प्रश्न सामान्य माने जाते हैं।'
        }
      ],
      en: [
        {
          q: 'Where can I get strictly vegetarian food near Golghar?',
          a: 'The area has small vegetarian eateries and sweet shops where the choices are limited and easier to follow. Rather than point to a place, we describe these facility types and suggest confirming on the spot.'
        },
        {
          q: 'Which Bihari dishes are usually vegetarian?',
          a: 'Dal-bhaat, sabzi-roti, sattu and sattu paratha, chokha, khaja and thekua are generally taken as vegetarian. It is better to confirm the ingredients when ordering.'
        },
        {
          q: 'How do I confirm that a dish is vegetarian?',
          a: 'Ask directly whether the food is free of egg and meat and whether it was cooked in a separate pan and oil. In a trusted place these questions are treated as normal.'
        }
      ]
    },
    sources: [SRC.bt, SRC.district],
    related: ['food/litti-chokha', 'food/family-lunch', 'food/nearby']
  },

  {
    path: 'food/family-lunch',
    group: 'food',
    priority: 2,
    title: {
      hi: 'गोलघर पटना परिवार के साथ दोपहर भोजन गाइड',
      en: 'Family Lunch Near Golghar Patna'
    },
    description: {
      hi: 'बच्चों और बड़ों के साथ गोलघर के पास दोपहर का भोजन: बैठने की जगह, भोजन की गति, और यात्रा में इसे कब रखें।',
      en: 'A midday meal near Golghar with children or older companions: seating, pace, and where a lunch stop fits in the visit.'
    },
    h1: {
      hi: 'गोलघर के पास परिवार के साथ दोपहर का भोजन',
      en: 'A family lunch near Golghar'
    },
    transport: {
      hi: 'परिवार के साथ बैठकर खाने के लिए मौर्य लोक और फ्रेज़र रोड क्षेत्र सुविधाजनक रहते हैं, गोलघर से वाहन द्वारा थोड़ी दूरी पर; नक्शे से समय लें।',
      en: 'For a sit-down family meal, the Maurya Lok and Fraser Road areas are convenient, a short vehicle ride from Golghar; get the time from the map.'
    },
    intro: {
      hi: 'दोपहर का भोजन यात्रा का सबसे आरामदेह पड़ाव हो सकता है, खासकर अगर साथ बच्चे या बुज़ुर्ग हों। इस समय आपको बैठने की जगह, भोजन की गति और आगे की योजना—तीनों पर सोचना पड़ता है। यह पृष्ठ इन तीन बातों को आसान बनाता है, किसी भोजनालय का नाम लिए बिना।',
      en: 'Midday is often the most comfortable stop of a visit, especially with children or older companions. At that time you have to think about three things together: seating, pace and the plan after the meal. This page makes those three easier without naming any restaurant.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'बैठने और भोजन की गति पर विचार' },
        {
          t: 'ul',
          items: [
            'ढका हुआ और वातानुकूलित हिस्सा छोटे बच्चों और बुज़ुर्गों के लिए अधिक आरामदेह रहता है।',
            'कुर्सी-मेज़ की जगह बैठने से पहले देख लें, क्योंकि भीड़ के समय इंतज़ार करना पड़ सकता है।',
            'भोजन की गति धीमी रखें—जल्दबाज़ी में बच्चे और बड़े दोनों थक जाते हैं।',
            'भोजन के बाद कुछ देर आराम का समय रखें, ताकि गोलघर जाना बोझ न लगे।',
            'गर्मी के महीनों में भोजन को दोपहर से थोड़ा पहले या बाद में रखें, जिससे तेज़ धूप से बचा जा सके।'
          ]
        },
        { t: 'h2', text: 'ज़रूरत के अनुसार क्या देखें' },
        {
          t: 'table',
          head: ['ज़रूरत', 'क्या देखें'],
          rows: [
            ['छोटे बच्चे', 'साफ़ बैठने की जगह, हल्का और कम मसालेदार भोजन'],
            ['बुज़ुर्ग साथी', 'छायादार या वातानुकूलित जगह, कम दूरी पर भोजन'],
            ['बड़ा परिवार या समूह', 'पहले से बैठने की व्यवस्था पूछें, या खुले बैठने वाली जगह चुनें'],
            ['बीच यात्रा में भोजन', 'गोलघर और गांधी मैदान के बीच पड़ने वाला क्षेत्र चुनें']
          ]
        },
        {
          t: 'p',
          text: 'भोजन को यात्रा में कहाँ रखें: सबसे आसान तरीका यह है कि दोपहर का भोजन गोलघर देखने से पहले या ठीक बाद रखा जाए, ताकि चलने का समय और आराम का समय अलग-अलग रहें। परिवार वाले भोजनालय और बाज़ार क्षेत्र में स्थित भोजनालय इस काम के लिए सुविधाजनक माने जाते हैं, पर बैठने की उपलब्धता मौके पर ही जाँचें।'
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मध्य पटना या मौर्य लोक जैसे बाज़ार क्षेत्र, गोलघर से छोटी वाहन-यात्रा पर'],
            ['कौन-सा भोजन', 'दोपहर का भोजन — यह पृष्ठ इसी समय पर केंद्रित है'],
            ['किसके लिए उपयुक्त', 'बच्चों और बुज़ुर्गों के साथ परिवार, बड़ा समूह'],
            ['खुलने का समय और बुकिंग', 'समय और अवकाश के दिन मौके पर पुष्टि करें; बड़े समूह के लिए पहले फ़ोन पर बैठने की व्यवस्था पूछ लेना बेहतर रहता है, पर बुकिंग की सुविधा हर भोजनालय में नहीं होती।'],
            ['इसके बाद', 'भोजन और आराम के बाद गोलघर या गांधी मैदान की ओर बढ़ना']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ भोजन के प्रकार और सुविधा के प्रकार बताता है, किसी भोजनालय की सिफ़ारिश नहीं करता। बैठने की जगह, भीड़ और भोजन में लगने वाला समय बदलता रहता है, इसलिए पहुँचकर पूछ लें।'
        },
        {
          t: 'links',
          items: [
            { label: 'शाकाहारी विकल्प', path: 'food/vegetarian' },
            { label: 'कैफ़े और आराम', path: 'food/cafes' },
            { label: 'परिवार के साथ एक दिन की योजना', path: 'itineraries/family-day' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Seating and pace to think about' },
        {
          t: 'ul',
          items: [
            'A covered, air-conditioned section is more comfortable for small children and older companions.',
            'Check table seating before deciding, since queues can build up at busy times.',
            'Keep the pace slow; rushing tires both children and older people.',
            'Leave a short rest after the meal, so going on to Golghar does not feel like a burden.',
            'In the hotter months, place the meal a little before or after midday to avoid the strongest sun.'
          ]
        },
        { t: 'h2', text: 'What to look for by need' },
        {
          t: 'table',
          head: ['Need', 'What to look for'],
          rows: [
            ['Small children', 'clean seating, light food with less spice'],
            ['Older companions', 'shaded or air-conditioned space, food within a short distance'],
            ['A large family or group', 'ask about seating in advance, or choose open seating'],
            ['Lunch mid-route', 'an area that falls between Golghar and Gandhi Maidan']
          ]
        },
        {
          t: 'p',
          text: 'Where to place the meal in the visit: the simplest approach is to put lunch just before or just after seeing Golghar, so that the walking time and the resting time stay separate. Family restaurants and places in the market areas are convenient for this, but check seating availability when you arrive.'
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'Central Patna or a market area such as Maurya Lok, a short ride from Golghar'],
            ['Which meal', 'Midday lunch — this page focuses on that slot'],
            ['Suits', 'Families with children and older companions, larger groups'],
            ['Hours and booking', 'Confirm hours and weekly closures on the spot; for a large group it is better to ask ahead by phone about seating, though not every restaurant offers a booking facility.'],
            ['After this', 'After the meal and a rest, going on towards Golghar or Gandhi Maidan']
          ]
        },
        {
          t: 'note',
          text: 'This page describes food types and facility types; it does not recommend any restaurant. Seating, crowds and the time a meal takes all change, so ask when you arrive.'
        },
        {
          t: 'links',
          items: [
            { label: 'Vegetarian options', path: 'food/vegetarian' },
            { label: 'Cafes and resting', path: 'food/cafes' },
            { label: 'A day out with family', path: 'itineraries/family-day' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'बच्चों के साथ गोलघर के पास दोपहर का भोजन कहाँ करें?',
          a: 'बाज़ार क्षेत्रों में परिवार वाले भोजनालय और खुले बैठने वाली जगह मिलती हैं। किसी नाम की सिफ़ारिश के बजाय हम बैठने, गति और छाया जैसी बातों पर ध्यान देने की सलाह देते हैं, और पुष्टि मौके पर करने को कहते हैं।'
        },
        {
          q: 'क्या बैठने की जगह मिल जाएगी?',
          a: 'यह भीड़ और समय पर निर्भर करता है। भोजन से पहले जगह देख लें और अगर समूह बड़ा हो तो बैठने की व्यवस्था के बारे में पहले पूछ लें।'
        },
        {
          q: 'भोजन में कितना समय लगेगा?',
          a: 'यह जगह के अनुसार बदलता है, इसलिए सटीक समय नहीं बताया जा सकता। योजना बनाते समय बैठने, भोजन और आराम के लिए अलग-अलग समय रखें।'
        }
      ],
      en: [
        {
          q: 'Where should we have lunch near Golghar with children?',
          a: 'Family restaurants and open seating can be found in the market areas. Rather than name one, we suggest focusing on seating, pace and shade, and confirming on the spot.'
        },
        {
          q: 'Will we get seating?',
          a: 'That depends on crowds and timing. Look at the place before the meal, and if the group is large, ask about seating arrangements in advance.'
        },
        {
          q: 'How long will the meal take?',
          a: 'It varies by place, so an exact time cannot be given. When planning, keep separate time for seating, eating and resting.'
        }
      ]
    },
    sources: [SRC.bt],
    related: ['food/vegetarian', 'food/cafes', 'itineraries/family-day']
  },

  {
    path: 'food/cafes',
    group: 'food',
    priority: 2,
    title: {
      hi: 'गोलघर पटना कैफ़े और चाय विश्राम गाइड',
      en: 'Cafes and Chai Near Golghar Patna'
    },
    description: {
      hi: 'गोलघर के आसपास कैफ़े और चाय की दुकानें गर्मी या बारिश में विश्राम के लिए कैसे उपयोग करें, और क्या जाँचें।',
      en: 'How to use cafes and chai stalls around Golghar as a heat or rain break, and what to check before sitting down.'
    },
    h1: {
      hi: 'गोलघर के पास कैफ़े और चाय',
      en: 'Cafes and chai near Golghar'
    },
    transport: {
      hi: 'कैफ़े और चाय की जगहें गांधी मैदान के आसपास और मौर्य लोक की ओर मिलती हैं; नक्शे पर स्थान देखकर गोलघर के बाद का पड़ाव तय करें।',
      en: 'Cafes and chai stops are found around Gandhi Maidan and towards Maurya Lok; use the map to choose a stop after Golghar.'
    },
    intro: {
      hi: 'पटना में गर्मी और बारिश दोनों खुली जगह में यात्रा को कठिन बना देती हैं। ऐसे समय कैफ़े या चाय की दुकान एक व्यावहारिक विश्राम बन जाती है, जहाँ आप रुक सकते हैं, पानी पी सकते हैं और आगे की योजना बदल सकते हैं। यह पृष्ठ इसे एक ठहराव के रूप में उपयोग करने पर केंद्रित है, किसी जगह की सिफ़ारिश नहीं।',
      en: 'Both heat and rain in Patna can make travel in the open difficult. At such times a cafe or chai stall becomes a practical rest, where you can pause, drink water and change the plan ahead. This page is about using one as a stop, not about recommending any place.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'गर्मी या बारिश में कैफ़े का उपयोग' },
        {
          t: 'p',
          text: 'जब धूप तेज़ हो या बारिश शुरू हो जाए, तो खुले में चलना जारी रखने के बजाय कुछ देर बैठने वाली जगह पर रुकना बेहतर रहता है। ऐसे ठहराव में आप पानी पी सकते हैं, भीगे कपड़े या जूते सँभाल सकते हैं और मौसम खुलने का इंतज़ार कर सकते हैं। यह छोटा विश्राम बाद में पैदल यात्रा को आसान बनाता है।'
        },
        { t: 'h2', text: 'किस प्रकार की जगह देखें' },
        {
          t: 'ul',
          items: [
            'बैठने वाला कैफ़े — छाया या वातानुकूलित जगह, जहाँ आप आराम से रुक सकें।',
            'चाय की दुकान — तेज़ ठहराव, खड़े-खड़े चाय, कम समय में।',
            'बेकरी काउंटर — हल्का नाश्ता और पानी, बैठने की जगह सीमित हो सकती है।',
            'बिहार संग्रहालय या मौर्य लोक जैसे क्षेत्रों के कैफ़े — बड़े पड़ाव के साथ जोड़ने के लिए।'
          ]
        },
        {
          t: 'p',
          text: 'यात्रा में इसे कब जोड़ें: गोलघर देखने के बाद, या दो स्थलों के बीच के अंतराल में एक कैफ़े ठीक रहता है। अगर आप सुबह जल्दी निकले हैं और दोपहर की गर्मी बढ़ रही है, तो इसी समय बैठकर आराम करना और आगे का क्रम तय करना समझदारी है। यात्रा की योजना में मौसम के अनुसार बदलाव करने का विकल्प रखें।'
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मध्य पटना के बाज़ार क्षेत्र, या बिहार संग्रहालय जैसे क्षेत्र, गोलघर से छोटी यात्रा पर'],
            ['कौन-सा भोजन', 'दोपहर के बाद और शाम — भोजन के बीच विश्राम के रूप में, पूरे भोजन के बजाय'],
            ['किसके लिए उपयुक्त', 'गर्मी या बारिश से बचने वाले, बच्चों के साथ परिवार'],
            ['खुलने का समय और बुकिंग', 'कैफ़े और चाय की दुकानों का समय बदलता रहता है, इसलिए मौके पर देखें; इनमें बुकिंग सामान्यतः नहीं होती और भीड़ भरे समय में बैठने के लिए इंतज़ार करना पड़ सकता है।'],
            ['इसके बाद', 'विश्राम के बाद अगला स्थल; मौसम बदलने पर आगे का क्रम भी बदला जा सकता है']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ कैफ़े, चाय की दुकान और बेकरी जैसी सुविधाओं के प्रकार बताता है, किसी दुकान या ब्रांड की सिफ़ारिश नहीं करता। बैठने की उपलब्धता, समय और भोजन-सूची मौके पर ही जाँचें।'
        },
        {
          t: 'links',
          items: [
            { label: 'छोटा नाश्ता', path: 'food/quick-bites' },
            { label: 'बारिश वाले दिन की योजना', path: 'itineraries/rainy-day' },
            { label: 'गोलघर के आसपास खाने की जगह', path: 'food/nearby' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'Using a cafe as a heat or rain break' },
        {
          t: 'p',
          text: 'When the sun is strong or rain begins, it is better to pause at a place with seating than to keep walking in the open. In such a stop you can drink water, deal with wet clothes or shoes, and wait for the weather to clear. This short rest makes the walking later easier.'
        },
        { t: 'h2', text: 'Types of place to look for' },
        {
          t: 'ul',
          items: [
            'A cafe with seating — a shaded or air-conditioned space where you can rest properly.',
            'A chai stall — a quick stop, tea taken standing, in less time.',
            'A bakery counter — a light snack and water, though seating may be limited.',
            'Cafes in areas such as the Bihar Museum or Maurya Lok — useful for a longer stop.'
          ]
        },
        {
          t: 'p',
          text: 'When to fit this in: a cafe works well after seeing Golghar, or in the gap between two sights. If you started early and midday heat is rising, this is the sensible time to sit, rest and set the order of what follows. Keep the option of changing the plan with the weather.'
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'Market areas of central Patna, or areas such as the Bihar Museum, a short ride from Golghar'],
            ['Which meal', 'Afternoon and evening — as a break between meals rather than a full meal'],
            ['Suits', 'Anyone sheltering from heat or rain, families with children'],
            ['Hours and booking', 'Cafe and chai stall hours change, so check on the spot; they normally do not take bookings, and you may have to wait for seating at busy times.'],
            ['After this', 'The next sight after the rest; the order ahead can also change with the weather']
          ]
        },
        {
          t: 'note',
          text: 'This page describes facility types such as cafes, chai stalls and bakeries; it does not recommend any shop or brand. Check seating availability, timing and the menu when you arrive.'
        },
        {
          t: 'links',
          items: [
            { label: 'Quick bites', path: 'food/quick-bites' },
            { label: 'A plan for a rainy day', path: 'itineraries/rainy-day' },
            { label: 'Where to eat near Golghar', path: 'food/nearby' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'बारिश या गर्मी में गोलघर के पास कहाँ रुकें?',
          a: 'बैठने वाला कैफ़े या किसी बाज़ार क्षेत्र की छत वाली जगह ऐसे ठहराव के लिए उपयुक्त रहती है। कोई नाम बताने के बजाय हम बैठने, छाया और पानी जैसी बुनियादी बातों पर ध्यान देने की सलाह देते हैं।'
        },
        {
          q: 'कैफ़े में बैठने की जगह मिलती है?',
          a: 'यह भीड़ और घंटे पर निर्भर करता है। भीड़ भरे समय में इंतज़ार करना पड़ सकता है, इसलिए पहुँचकर स्थिति देख लें।'
        },
        {
          q: 'बच्चों के साथ कैफ़े जाना ठीक रहेगा?',
          a: 'बैठने वाली जगह बच्चों के लिए आरामदेह रहती है, खासकर गर्मी में। हल्का और कम मीठा नाश्ता चुनें और नींद या थकान के समय यहाँ विश्राम करें।'
        }
      ],
      en: [
        {
          q: 'Where can we stop near Golghar in rain or heat?',
          a: 'A cafe with seating, or a covered place in a market area, works well for such a stop. Instead of naming one, we suggest focusing on basics like seating, shade and water.'
        },
        {
          q: 'Will a cafe have seating?',
          a: 'That depends on crowds and the hour. At busy times you may have to wait, so check the situation when you reach the place.'
        },
        {
          q: 'Is a cafe suitable with children?',
          a: 'A place with seating is comfortable for children, especially in the heat. Choose a light, not-too-sweet snack and use the rest when they are tired or sleepy.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['food/quick-bites', 'food/family-lunch', 'itineraries/rainy-day']
  },

  {
    path: 'food/quick-bites',
    group: 'food',
    priority: 3,
    title: {
      hi: 'गोलघर पटना जल्दी नाश्ता और स्नैक गाइड',
      en: 'Quick Bites Near Golghar Patna'
    },
    description: {
      hi: 'गोलघर के आसपास दो स्थलों के बीच छोटा पड़ाव: हल्का नाश्ता, चाय, मिठाई और ऐसे विकल्प जो कम समय में हो जाएँ।',
      en: 'A short stop between two sights near Golghar: a light snack, chai, sweets and options that fit a brief pause.'
    },
    h1: {
      hi: 'गोलघर के पास छोटा नाश्ता',
      en: 'Quick bites near Golghar'
    },
    transport: {
      hi: 'छोटा नाश्ता और स्नैक्स अशोक राजपथ तथा गोलघर के पास के चौकों पर मिलते हैं; नक्शे पर स्थान देखकर निकटतम जगह चुनें।',
      en: 'Quick bites and snacks are found along Ashok Rajpath and at the junctions near Golghar; use the map to pick the closest spot.'
    },
    intro: {
      hi: 'कभी यात्रा में भोजन के लिए पूरा समय नहीं होता, बस दो स्थलों के बीच का छोटा अंतराल होता है। ऐसे पड़ाव में चाहिए कुछ ऐसा जो जल्दी मिल जाए, चलते-चलते खाया जा सके और जिससे भूख शांत हो जाए। यह पृष्ठ केवल इन छोटे ठहरावों के बारे में है, पूरे भोजन के बारे में नहीं।',
      en: 'Sometimes a trip gives you no full meal break, only a short gap between two sights. For such a stop you want something that arrives quickly, can be eaten on the move and takes the edge off hunger. This page is only about those short stops, not about a full meal.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'छोटे पड़ाव के लिए क्या उपयुक्त है' },
        {
          t: 'ul',
          items: [
            'चाय — सबसे सरल ठहराव, जल्दी मिल जाती है और साथ चलने में आसान।',
            'सत्तू का पेय — भुने चने के आटे से बना, हल्का और भरने वाला।',
            'खाजा या ठेकुआ — परतदार या गुड़ वाली मिठाई, थोड़ी मात्रा में।',
            'बेकरी की वस्तुएँ — पैकेट में मिलने वाला हल्का नाश्ता।',
            'सूखे नमकीन या भुने दाने — चलते-चलते खाने के लिए सुविधाजनक।'
          ]
        },
        {
          t: 'p',
          text: 'कितना समय लगेगा और क्या जाँचें: कोई भी ठहराव जितना छोटा होगा, आगे का समय उतना ही बचेगा। किसी विशेष समय का दावा नहीं किया जा सकता, क्योंकि भीड़ और तैयारी पर निर्भर करता है। इसलिए पहुँचकर देख लें कि वस्तु तैयार है या नहीं, ताज़ी है या नहीं, और क्या वह चलते-चलते खाने के लिए ठीक है।'
        },
        { t: 'h2', text: 'यात्रा में कहाँ जोड़ें' },
        {
          t: 'p',
          text: 'छोटा पड़ाव सबसे अच्छा तब लगता है जब वह दो नज़दीकी स्थलों के बीच पड़े। गोलघर से गांधी मैदान की ओर चलते समय बीच में रुकना सुविधाजनक रहता है, क्योंकि इससे लंबी पैदल यात्रा टूट जाती है और आप थके बिना आगे बढ़ सकते हैं। ऐसे ठहराव को योजना में जोड़ते समय उसे छोटा ही रखें, ताकि मुख्य स्थलों का समय कम न हो।'
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'गोलघर से गांधी मैदान जाते समय बीच के बाज़ार क्षेत्र या सड़क किनारे के ठेले'],
            ['कौन-सा भोजन', 'दोपहर के बाद और शाम का हल्का पड़ाव, पूरे भोजन के बजाय'],
            ['किसके लिए उपयुक्त', 'कम समय वाले यात्री, बच्चे और थके हुए साथी'],
            ['खुलने का समय और बुकिंग', 'ठेलों और बेकरी काउंटरों का समय दिन के साथ बदलता है, इसलिए मौके पर देखें; इनमें बुकिंग की व्यवस्था नहीं होती और उपलब्धता ताज़गी पर निर्भर करती है।'],
            ['इसके बाद', 'छोटे पड़ाव के बाद गांधी मैदान की ओर या गोलघर की ओर आगे बढ़ना']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ नाश्ते और हल्के विकल्पों के प्रकार बताता है, किसी दुकान, ठेले या ब्रांड की सिफ़ारिश नहीं करता। ताज़गी, मात्रा और उपलब्धता मौके पर ही जाँचें।'
        },
        {
          t: 'links',
          items: [
            { label: 'कैफ़े और विश्राम', path: 'food/cafes' },
            { label: 'लिट्टी चोखा और सत्तू', path: 'food/litti-chokha' },
            { label: '90 मिनट की योजना', path: 'itineraries/90-minutes' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What suits a short stop' },
        {
          t: 'ul',
          items: [
            'Chai — the simplest pause, quick to get and easy to have on the move.',
            'A sattu drink — made from roasted gram flour, light and filling.',
            'Khaja or thekua — a layered or jaggery sweet, in a small amount.',
            'Bakery items — a light snack that comes in a packet.',
            'Dry savouries or roasted grains — convenient to eat while walking.'
          ]
        },
        {
          t: 'p',
          text: 'How long it takes and what to check: the shorter the stop, the more time you keep for later. No particular duration can be claimed, since it depends on crowds and preparation. So when you arrive, check whether the item is ready and fresh, and whether it is easy to eat on the move.'
        },
        { t: 'h2', text: 'Where to fit it into the trip' },
        {
          t: 'p',
          text: 'A short stop works best when it falls between two nearby sights. On the walk from Golghar towards Gandhi Maidan, pausing in between is convenient, because it breaks up the long walk and lets you go on without tiring. Keep such a stop short so it does not eat into the time for the main sights.'
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'On the way from Golghar to Gandhi Maidan — the market areas or roadside stalls in between'],
            ['Which meal', 'Afternoon and evening, as a light pause rather than a full meal'],
            ['Suits', 'Travellers short of time, children and tired companions'],
            ['Hours and booking', 'Stall and bakery counter hours shift through the day, so check on the spot; these do not offer booking, and availability depends on freshness.'],
            ['After this', 'After the short stop, continuing towards Gandhi Maidan or back to Golghar']
          ]
        },
        {
          t: 'note',
          text: 'This page describes snack and light-option types; it does not recommend any shop, stall or brand. Check freshness, quantity and availability on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Cafes and resting', path: 'food/cafes' },
            { label: 'Litti chokha and sattu', path: 'food/litti-chokha' },
            { label: 'A 90-minute plan', path: 'itineraries/90-minutes' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'गोलघर और गांधी मैदान के बीच जल्दी क्या खाया जाए?',
          a: 'चाय, सत्तू का पेय, खाजा, ठेकुआ या बेकरी की कोई हल्की वस्तु इस तरह के छोटे पड़ाव के लिए उपयुक्त रहती है। ये विकल्प बाज़ार क्षेत्रों और सड़क किनारे के ठेलों पर सामान्यतः मिलते हैं; किसी जगह की पुष्टि मौके पर करें।'
        },
        {
          q: 'छोटे पड़ाव में कितना समय लगेगा?',
          a: 'सटीक समय नहीं बताया जा सकता, क्योंकि यह भीड़ और तैयारी पर निर्भर करता है। योजना में इसे छोटा रखें, ताकि मुख्य स्थलों का समय बचा रहे।'
        },
        {
          q: 'क्या बच्चों के लिए कोई हल्का विकल्प है?',
          a: 'बेकरी की वस्तुएँ, मिठाई की थोड़ी मात्रा और दूध या पानी जैसे विकल्प आसान रहते हैं। तीखे या भारी नाश्ते बच्चों के लिए टालें।'
        }
      ],
      en: [
        {
          q: 'What is a quick bite between Golghar and Gandhi Maidan?',
          a: 'Chai, a sattu drink, khaja, thekua or a light bakery item suits such a short stop. These are commonly found in the market areas and at roadside stalls; confirm any place on the spot.'
        },
        {
          q: 'How long does a short stop take?',
          a: 'An exact time cannot be given, since it depends on crowds and preparation. Keep it short in your plan so that time for the main sights is not lost.'
        },
        {
          q: 'Is there a light option for children?',
          a: 'Bakery items, a small sweet and options like milk or water are easy. Avoid spicy or heavy snacks for children.'
        }
      ]
    },
    sources: [SRC.bt],
    related: ['food/cafes', 'food/litti-chokha', 'itineraries/90-minutes']
  },

  {
    path: 'food/bihari-tasting-route',
    group: 'food',
    priority: 3,
    title: {
      hi: 'गोलघर पटना बिहारी भोजन मार्ग गाइड',
      en: 'A Bihari Tasting Route Near Golghar Patna'
    },
    description: {
      hi: 'एक दिन में बिहारी व्यंजनों को भोजन के समय के अनुसार बाँटने वाला मार्ग: सुबह, दोपहर, चाय और शाम—किसी दुकान का नाम दिए बिना।',
      en: 'A route that spreads Bihari dishes across one day by meal slot: morning, midday, tea and evening, without naming any establishment.'
    },
    h1: {
      hi: 'बिहारी भोजन का दिन-भर का मार्ग',
      en: 'A day-long Bihari tasting route'
    },
    transport: {
      hi: 'यह मार्ग गोलघर से शुरू होकर गांधी मैदान, अशोक राजपथ और मौर्य लोक की ओर बढ़ता है; नक्शे पर पूरा रास्ता एक साथ देखें।',
      en: 'This route starts at Golghar and moves through Gandhi Maidan and Ashok Rajpath towards Maurya Lok; view the whole route on the map at once.'
    },
    intro: {
      hi: 'अगर आप बिहारी व्यंजन एक ही भोजन में नहीं, बल्कि पूरे दिन में बाँटकर चखना चाहते हैं, तो भोजन के समय के अनुसार एक क्रम बनाया जा सकता है। इससे हर व्यंजन अलग समय पर मिलता है और भारीपन भी नहीं लगता। यह पृष्ठ ऐसा ही मार्ग सुझाता है, केवल व्यंजन प्रकार और क्षेत्र बताते हुए।',
      en: 'If you would rather try Bihari dishes spread across a whole day than in one meal, the day can be arranged into a sequence by meal slot. Each dish then arrives at a different time, and nothing feels too heavy. This page suggests such a route, using only dish types and areas.'
    },
    blocks: {
      hi: [
        { t: 'h2', text: 'यह मार्ग कैसा है' },
        {
          t: 'p',
          text: 'यह कोई निश्चित दुकानों की सूची नहीं है, बल्कि भोजन के समय के अनुसार बना एक क्रम है। आप सुबह हल्के व्यंजन से शुरू करते हैं, दोपहर में घर जैसा भोजन लेते हैं, दोपहर के बाद चाय और मिठाई पर रुकते हैं, और शाम को भुने हुए व्यंजन चखते हैं। हर चरण को गोलघर और आसपास के क्षेत्रों की पैदल यात्रा के साथ जोड़ा जा सकता है।'
        },
        {
          t: 'table',
          head: ['समय', 'व्यंजन का प्रकार', 'क्षेत्र'],
          rows: [
            ['सुबह', 'सत्तू पराठा और चाय', 'अशोक राजपथ / तारामंडल क्षेत्र'],
            ['मध्य सुबह', 'हल्का नाश्ता या सत्तू पेय', 'कर्गिल चौक क्षेत्र'],
            ['दोपहर', 'दाल-भात और सब्ज़ी-रोटी', 'मौर्य लोक क्षेत्र'],
            ['दोपहर के बाद', 'चाय और मिठाई, जैसे खाजा', 'गांधी मैदान क्षेत्र'],
            ['शाम', 'लिट्टी चोखा और ठेकुआ', 'दक्षिण गांधी मैदान / अशोक राजपथ'],
            ['रात', 'हल्का भोजन या मिठाई', 'मौर्य लोक क्षेत्र']
          ]
        },
        { t: 'h2', text: 'चलने के साथ इसे कैसे जोड़ें' },
        {
          t: 'p',
          text: 'यह मार्ग मध्य पटना के उसी क्षेत्र में बनता है जहाँ गोलघर स्थित है, इसलिए इसे देखने के साथ जोड़ा जा सकता है। सुबह के चरण को गोलघर जाने से पहले, दोपहर के भोजन को उसके बाद, और शाम के व्यंजन को गांधी मैदान की सैर के साथ रखा जा सकता है। हर चरण के बीच चलने की दूरी और आराम का समय ध्यान में रखें, और मौसम के अनुसार क्रम बदलने के लिए तैयार रहें।'
        },
        { t: 'h2', text: 'व्यावहारिक जानकारी' },
        {
          t: 'table',
          head: ['विवरण', 'जानकारी'],
          rows: [
            ['गोलघर से रास्ता', 'मार्ग मध्य पटना के उसी क्षेत्र में फैला है जहाँ गोलघर है, इसलिए इसके चरण पैदल यात्रा के साथ जोड़े जा सकते हैं'],
            ['कौन-सा भोजन', 'सुबह से रात तक, चरणों में बँटा हुआ — हर चरण अलग भोजन-समय पर'],
            ['किसके लिए उपयुक्त', 'स्थानीय व्यंजन पूरे दिन चखने वाले, पैदल घूमने वाले यात्री'],
            ['खुलने का समय और बुकिंग', 'हर चरण की जगह का समय मौके पर पुष्टि करें; यह मार्ग बुकिंग पर निर्भर नहीं है, क्योंकि भोजन के समय और उपलब्धता रोज़ बदल सकती है।'],
            ['इसके बाद', 'शाम का चरण गांधी मैदान की सैर के साथ, और रात का हल्का भोजन अंतिम पड़ाव के रूप में']
          ]
        },
        {
          t: 'note',
          text: 'यह पृष्ठ व्यंजनों के प्रकार, भोजन के समय और क्षेत्र बताता है, किसी दुकान, ठेले या ब्रांड की सिफ़ारिश नहीं करता। यह मार्ग केवल एक सुझाव है; उपलब्धता और समय मौके पर जाँचें।'
        },
        {
          t: 'links',
          items: [
            { label: 'लिट्टी चोखा और सत्तू', path: 'food/litti-chokha' },
            { label: 'छोटा नाश्ता', path: 'food/quick-bites' },
            { label: 'पटना में एक दिन की योजना', path: 'itineraries/patna-one-day' }
          ]
        }
      ],
      en: [
        { t: 'h2', text: 'What this route is' },
        {
          t: 'p',
          text: 'This is not a list of fixed shops but a sequence built around meal times. You start in the morning with something light, take a home-style meal at midday, pause for tea and a sweet in the afternoon, and try roasted dishes in the evening. Each step can be joined to the walk through Golghar and the surrounding areas.'
        },
        {
          t: 'table',
          head: ['Time', 'Dish type', 'Area'],
          rows: [
            ['Morning', 'sattu paratha and chai', 'Ashok Rajpath / Taramandal area'],
            ['Mid-morning', 'light snack or a sattu drink', 'Kargil Chowk area'],
            ['Midday', 'dal-bhaat and sabzi-roti', 'Maurya Lok area'],
            ['Afternoon', 'chai and a sweet such as khaja', 'Gandhi Maidan area'],
            ['Evening', 'litti chokha and thekua', 'South Gandhi Maidan / Ashok Rajpath'],
            ['Night', 'a light meal or a sweet', 'Maurya Lok area']
          ]
        },
        { t: 'h2', text: 'How to join it to the walk' },
        {
          t: 'p',
          text: 'The route stays within the same central Patna area where Golghar stands, so it can be joined to the visit. The morning step can come before Golghar, the midday meal after it, and the evening dishes alongside a walk on Gandhi Maidan. Keep the walking distance and a rest between steps in mind, and be ready to change the order with the weather.'
        },
        { t: 'h2', text: 'Practical details' },
        {
          t: 'table',
          head: ['Detail', 'Information'],
          rows: [
            ['Route from Golghar', 'The route lies within the same central Patna area as Golghar, so its steps can be joined to the walk'],
            ['Which meal', 'Morning to night, in stages — each step at a different meal slot'],
            ['Suits', 'Anyone tasting local dishes through the day, travellers who like to walk'],
            ['Hours and booking', 'Confirm the timing of each stop on the spot; this route does not depend on booking, since meal times and availability can change from day to day.'],
            ['After this', 'The evening step alongside a Gandhi Maidan walk, and a light night meal as the last stop']
          ]
        },
        {
          t: 'note',
          text: 'This page describes dish types, meal times and areas; it does not recommend any shop, stall or brand. The route is only a suggestion; check availability and timing on the spot.'
        },
        {
          t: 'links',
          items: [
            { label: 'Litti chokha and sattu', path: 'food/litti-chokha' },
            { label: 'Quick bites', path: 'food/quick-bites' },
            { label: 'A one-day plan for Patna', path: 'itineraries/patna-one-day' }
          ]
        }
      ]
    },
    faq: {
      hi: [
        {
          q: 'एक दिन में बिहारी व्यंजन कैसे बाँटें?',
          a: 'सुबह हल्के व्यंजन जैसे सत्तू पराठा, दोपहर में दाल-भात, दोपहर के बाद चाय और मिठाई, और शाम को लिट्टी चोखा जैसे भुने व्यंजन रखें। इससे हर व्यंजन अलग समय पर मिलता है और भारीपन नहीं लगता।'
        },
        {
          q: 'क्या यह मार्ग पैदल तय किया जा सकता है?',
          a: 'इसके चरण मध्य पटना के उसी क्षेत्र में हैं जहाँ गोलघर है, इसलिए इन्हें पैदल यात्रा के साथ जोड़ा जा सकता है। दूरी और आराम का समय ध्यान में रखें और मौसम के अनुसार बदलाव करें।'
        },
        {
          q: 'क्या यह मार्ग शाकाहारी के लिए उपयुक्त है?',
          a: 'दाल-भात, सत्तू, चोखा, खाजा और ठेकुआ जैसे व्यंजन सामान्यतः शाकाहारी होते हैं। शुद्धता और सामग्री की पुष्टि मौके पर करने की सलाह हमारी शाकाहारी वाले पृष्ठ में दी गई है।'
        }
      ],
      en: [
        {
          q: 'How do I spread Bihari dishes across a day?',
          a: 'Take something light in the morning such as sattu paratha, a dal-bhaat meal at midday, chai and a sweet in the afternoon, and roasted dishes such as litti chokha in the evening. This way each dish arrives at a different time and nothing feels heavy.'
        },
        {
          q: 'Can this route be done on foot?',
          a: 'Its steps lie in the same central Patna area as Golghar, so they can be joined to a walking visit. Keep the distance and rest time in mind and adjust for the weather.'
        },
        {
          q: 'Is this route suitable for vegetarians?',
          a: 'Dishes such as dal-bhaat, sattu, chokha, khaja and thekua are generally vegetarian. Our vegetarian page advises confirming purity and ingredients on the spot.'
        }
      ]
    },
    sources: [SRC.bt, SRC.maps],
    related: ['food/litti-chokha', 'food/quick-bites', 'itineraries/patna-one-day']
  }
];
