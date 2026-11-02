import type { Block, Faq, GuideEntry, GroupId, Locale, Source } from '../guide-schema';
import { GROUPS } from '../../lib/site';
import { byGroup } from './index';

const heading: Record<Locale, string> = {
  hi: 'इस वर्ग के पृष्ठ',
  en: 'Pages in this section'
};

const overviewHeading: Record<Locale, string> = {
  hi: 'एक नज़र में',
  en: 'At a glance'
};

const otherHeading: Record<Locale, string> = {
  hi: 'दूसरे वर्ग देखें',
  en: 'Browse other sections'
};

const note: Record<Locale, string> = {
  hi: 'प्रत्येक पृष्ठ स्वतंत्र रूप से पढ़ा जा सकता है। जहाँ स्रोतों में अंतर है, वहाँ तारीख के साथ दोनों स्रोत दिए गए हैं।',
  en: 'Each page can be read on its own. Where sources disagree, both are listed with dates.'
};

const tableNote: Record<Locale, string> = {
  hi: 'इस तालिका की हर पंक्ति सार्वजनिक स्रोतों पर आधारित है। स्रोत और अंतिम समीक्षा की तारीख इसी पृष्ठ के अंत में दी गई है।',
  en: 'Every line in this table rests on the public sources listed at the foot of this page, together with the last review date.'
};

/** Same public sources used on the detail pages of each section. */
const SRC: Record<string, Source> = {
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
  maps: {
    label: {
      hi: 'Google Maps सार्वजनिक सूची (23 अक्टूबर 2026 को देखी गई)',
      en: 'Google Maps public listing (observed 23 October 2026)'
    },
    url: 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8'
  }
};

const HUB_SOURCES: Partial<Record<GroupId, Source[]>> = {
  visit: [SRC.bt, SRC.ii, SRC.maps],
  nearby: [SRC.bt, SRC.maps],
  food: [SRC.bt, SRC.maps],
  itineraries: [SRC.bt, SRC.maps]
};

type HubContent = {
  /** Meta description for the hub, kept distinct from the on-page intro. */
  meta: Record<Locale, string>;
  /** Section-level decision table shown above the page list. */
  table: Record<Locale, { head: string[]; rows: string[][] }>;
  /** Questions that belong to the section as a whole rather than one page. */
  faq: Record<Locale, Faq[]>;
};

/**
 * Section-level content for the hub pages. Only the sections that are served by a
 * generated hub need an entry; a section whose root path is taken by a content
 * page (history) keeps that page instead.
 */
const HUB_CONTENT: Partial<Record<GroupId, HubContent>> = {
  visit: {
    meta: {
      hi: 'गोलघर पटना जाने से पहले की सारी व्यावहारिक जानकारी एक जगह — स्थान, खुलने का समय, टिकट, सीढ़ियों की वर्तमान स्थिति, और पटना जंक्शन, हवाई अड्डे तथा गांधी मैदान से पहुँचने के मार्ग।',
      en: 'Every practical question before a Golghar visit in one place — location, opening hours, tickets, the current status of the stairs, and how to reach it from Patna Junction, the airport and Gandhi Maidan.'
    },
    table: {
      hi: {
        head: ['जानने की बात', 'संक्षेप में', 'विस्तृत पृष्ठ'],
        rows: [
          ['स्थान', 'अशोक राजपथ रोड, गांधी मैदान के पश्चिम', 'स्थान और प्रवेश'],
          ['खुलने का समय', 'तीन सार्वजनिक सूचियाँ अलग-अलग; कोई भी अंतिम न मानें', 'खुलने का समय'],
          ['टिकट', 'इस समीक्षा में वर्तमान दर की पुष्टि नहीं', 'टिकट और शुल्क'],
          ['ऊपर जाना', 'ऐतिहासिक रूप से 145 सीढ़ियाँ; वर्तमान अनुमति अपुष्ट', 'सीढ़ियों की स्थिति'],
          ['पहुँच', 'जंक्शन, हवाई अड्डा और गांधी मैदान से अलग-अलग मार्ग', 'यात्रा के पृष्ठ']
        ]
      },
      en: {
        head: ['What you need', 'In short', 'Detailed page'],
        rows: [
          ['Location', 'Ashok Rajpath Road, west of Gandhi Maidan', 'Location and entrance'],
          ['Hours', 'Three public listings differ; treat none as final', 'Timings and closure'],
          ['Tickets', 'This review could not confirm the current rate', 'Tickets and fees'],
          ['Going up', 'Historically 145 stairs; current access unconfirmed', 'Stair access'],
          ['Getting there', 'Separate routes from the junction, the airport and Gandhi Maidan', 'Transport pages']
        ]
      }
    },
    faq: {
      hi: [
        {
          q: 'यात्रा से पहले कौन-सी जानकारी सबसे ज़रूरी है?',
          a: 'खुलने का समय और सीढ़ियों की वर्तमान स्थिति। दोनों के लिए तारीख के साथ स्रोत दिए गए हैं; निकलने से पहले स्थल पर पुष्टि करें।'
        },
        {
          q: 'क्या यहाँ टिकट मिलते हैं?',
          a: 'नहीं। यह एक स्वतंत्र मार्गदर्शिका है और टिकट नहीं बेचती। शुल्क की जानकारी स्थल पर ही लें।'
        },
        {
          q: 'दिन का कौन-सा समय ठीक रहता है?',
          a: 'जल्दी सुबह या शाम, जब गर्मी कम होती है। मौसम के अनुसार चुनाव के लिए अलग पृष्ठ दिया गया है।'
        }
      ],
      en: [
        {
          q: 'Which details matter most before the trip?',
          a: 'The opening hours and the current status of the stairs. Both are listed with sources and dates; confirm on site before setting out.'
        },
        {
          q: 'Are tickets sold here?',
          a: 'No. This is an independent guide and it does not sell tickets. Get fee information on site.'
        },
        {
          q: 'What time of day works best?',
          a: 'Early morning or evening, when the heat is lower. A separate page covers choosing by season.'
        }
      ]
    }
  },
  nearby: {
    meta: {
      hi: 'गोलघर के आसपास घूमने लायक जगहें — संग्रहालय, विज्ञान केंद्र, पार्क और नदी तट; हर पृष्ठ बताता है कि वह जगह आपकी यात्रा में जोड़ने लायक है या नहीं।',
      en: 'Places worth visiting around Golghar — museums, a science centre, parks and the riverfront. Each page answers whether that place is worth adding to your trip.'
    },
    table: {
      hi: {
        head: ['आपकी स्थिति', 'पहले कहाँ जाएँ', 'विस्तृत पृष्ठ'],
        rows: [
          ['बच्चों के साथ या बारिश में', 'श्रीकृष्ण विज्ञान केंद्र (इनडोर)', 'विज्ञान केंद्र'],
          ['इतिहास और पुरावशेष', 'पटना संग्रहालय या बिहार संग्रहालय', 'संग्रहालय के पृष्ठ'],
          ['खुली जगह में टहलना', 'गांधी मैदान या बुद्ध स्मृति पार्क', 'मैदान और पार्क'],
          ['नदी और घाट', 'गांधी घाट', 'गांधी घाट'],
          ['खरीदारी और भोजन', 'मौर्य लोक क्षेत्र', 'मौर्य लोक']
        ]
      },
      en: {
        head: ['Your situation', 'Where to go first', 'Detailed page'],
        rows: [
          ['With children, or in rain', 'Shrikrishna Science Centre (indoors)', 'Science centre'],
          ['History and antiquities', 'Patna Museum or Bihar Museum', 'Museum pages'],
          ['Open space to walk', 'Gandhi Maidan or Buddha Smriti Park', 'Maidan and parks'],
          ['River and ghats', 'Gandhi Ghat', 'Gandhi Ghat'],
          ['Shopping and food', 'The Maurya Lok area', 'Maurya Lok']
        ]
      }
    },
    faq: {
      hi: [
        {
          q: 'क्या ये सब पैदल जाने लायक हैं?',
          a: 'गांधी मैदान और उसके आसपास के स्थल पैदल दूरी पर हैं। संग्रहालयों और बुद्ध स्मृति पार्क के लिए वाहन ज़्यादा आरामदेह रहता है।'
        },
        {
          q: 'समय कम हो तो क्या छोड़ें?',
          a: 'एक ही बड़ा संग्रहालय चुनें। पटना संग्रहालय और बिहार संग्रहालय दोनों एक ही दिन में भारी लगते हैं।'
        },
        {
          q: 'हर पृष्ठ पर क्या मिलेगा?',
          a: 'यह कि जगह यात्रा में जोड़ने लायक है या नहीं, कितना समय लगेगा, किसके लिए उपयुक्त है और गोलघर से कैसे पहुँचें।'
        }
      ],
      en: [
        {
          q: 'Are they all within walking distance?',
          a: 'Gandhi Maidan and the sites around it are walkable. For the museums and Buddha Smriti Park a vehicle is more comfortable.'
        },
        {
          q: 'What should I drop if time is short?',
          a: 'Pick one large museum. Patna Museum and Bihar Museum together are heavy for a single day.'
        },
        {
          q: 'What does each page tell me?',
          a: 'Whether the place is worth adding, how much time it takes, who it suits and how to reach it from Golghar.'
        }
      ]
    }
  },
  food: {
    meta: {
      hi: 'गोलघर के आसपास कहाँ और कब खाएँ — लिट्टी चोखा, नाश्ता, दोपहर का भोजन, शाकाहारी विकल्प और कैफ़े; क्षेत्र और सुविधा के प्रकार के साथ, किसी दुकान का नाम लिए बिना।',
      en: 'Where and when to eat around Golghar — litti chokha, breakfast, lunch, vegetarian options and cafes, described by area and facility type without naming any shop.'
    },
    table: {
      hi: {
        head: ['भोजन का समय', 'क्षेत्र', 'विस्तृत पृष्ठ'],
        rows: [
          ['सुबह का नाश्ता', 'अशोक राजपथ के आसपास', 'छोटा नाश्ता'],
          ['दोपहर का भोजन', 'मौर्य लोक और फ्रेज़र रोड क्षेत्र', 'परिवार के साथ दोपहर का भोजन'],
          ['चाय या कॉफ़ी', 'गांधी मैदान के आसपास', 'कैफ़े और चाय'],
          ['स्थानीय व्यंजन', 'गांधी मैदान और कर्गिल चौक के आसपास', 'लिट्टी चोखा और सत्तू'],
          ['शाकाहारी विकल्प', 'गांधी मैदान और अशोक राजपथ के आसपास', 'शाकाहारी भोजन']
        ]
      },
      en: {
        head: ['Meal slot', 'Area', 'Detailed page'],
        rows: [
          ['Breakfast', 'Around Ashok Rajpath', 'Quick bites'],
          ['Lunch', 'Maurya Lok and Fraser Road area', 'Family lunch'],
          ['Tea or coffee', 'Around Gandhi Maidan', 'Cafes and chai'],
          ['Local dishes', 'Around Gandhi Maidan and Kargil Chowk', 'Litti chokha and sattu'],
          ['Vegetarian options', 'Around Gandhi Maidan and Ashok Rajpath', 'Vegetarian food']
        ]
      }
    },
    faq: {
      hi: [
        {
          q: 'आप किसी दुकान का नाम क्यों नहीं देते?',
          a: 'यह मार्गदर्शिका किसी व्यापारिक प्रतिष्ठान की सिफ़ारिश नहीं करती और किसी व्यक्तिगत दुकान का नाम नहीं देती। यहाँ क्षेत्र और सुविधा का प्रकार बताया जाता है।'
        },
        {
          q: 'शाकाहारी भोजन कैसे पहचानें?',
          a: 'दुकान पर पूछें कि व्यंजन किस चीज़ से बना है, और क्या अंडा या मांस अलग जगह पर बनाया जाता है।'
        },
        {
          q: 'भोजन का समय कैसे तय करें?',
          a: 'गोलघर की यात्रा से पहले हल्का नाश्ता और बाद में भोजन ठीक रहता है; दोपहर की तेज़ गर्मी लंबे भोजन के लिए उपयुक्त रहती है।'
        }
      ],
      en: [
        {
          q: 'Why do you not name any shop?',
          a: 'This guide does not endorse commercial establishments and names no individual shop. It describes areas and the type of facility.'
        },
        {
          q: 'How do I confirm vegetarian food?',
          a: 'Ask at the counter what the dish is made with, and whether egg or meat is prepared separately.'
        },
        {
          q: 'How should I time my meals?',
          a: 'A light snack before the Golghar visit and a meal afterwards works well; the midday heat suits a longer meal.'
        }
      ]
    }
  },
  itineraries: {
    meta: {
      hi: 'गोलघर के लिए समय के हिसाब से बनी योजनाएँ — 90 मिनट, आधा दिन, पूरा दिन, परिवार, बारिश और कम चलने वाले यात्रियों के लिए अलग-अलग क्रम।',
      en: 'Golghar plans built around the time you have — 90 minutes, a half day, a full day, and separate orders for families, wet weather and travellers who cannot walk far.'
    },
    table: {
      hi: {
        head: ['आपकी सीमा', 'सुझाया गया क्रम', 'विस्तृत पृष्ठ'],
        rows: [
          ['केवल 60–90 मिनट', 'गोलघर पर केंद्रित एक ठहराव', '90 मिनट की योजना'],
          ['आधा दिन', 'गोलघर + गांधी मैदान, या संग्रहालयों के साथ', 'आधे दिन की योजनाएँ'],
          ['पूरा दिन', 'शहर के मुख्य स्थल एक क्रम में', 'एक दिन की योजना'],
          ['बारिश या तेज़ गर्मी', 'इनडोर पहले, गोलघर बाहर से', 'मौसम की योजना'],
          ['कम चलना', 'वाहन के साथ कम पड़ाव', 'कम चलने वाली योजना']
        ]
      },
      en: {
        head: ['Your constraint', 'Suggested order', 'Detailed page'],
        rows: [
          ['Only 60–90 minutes', 'A single stop centred on Golghar', '90-minute plan'],
          ['Half a day', 'Golghar plus Gandhi Maidan, or the museums', 'Half-day plans'],
          ['A full day', 'The city’s main sights in one order', 'One-day plan'],
          ['Rain or extreme heat', 'Indoors first, Golghar from outside', 'Weather plan'],
          ['Limited walking', 'Fewer stops, using a vehicle', 'Low-walking plan']
        ]
      }
    },
    faq: {
      hi: [
        {
          q: 'गोलघर के लिए कितना समय चाहिए?',
          a: 'अकेले गोलघर देखने में लगभग 60–90 मिनट लगते हैं; आसपास के स्थल जोड़ने पर यह आधा दिन या पूरा दिन बन जाता है।'
        },
        {
          q: 'दिन का पहला पड़ाव क्या रखें?',
          a: 'गोलघर को पहले रखें, ताकि दिन की शुरुआत कम गर्मी और कम भीड़ में हो।'
        },
        {
          q: 'क्या योजनाओं में सीढ़ियाँ चढ़ना शामिल है?',
          a: 'नहीं। वर्तमान अनुमति अपुष्ट है, इसलिए योजनाएँ इमारत देखने और बाहर के परिदृश्य पर आधारित हैं।'
        }
      ],
      en: [
        {
          q: 'How much time does Golghar need?',
          a: 'Golghar alone takes roughly 60 to 90 minutes; adding nearby places turns it into a half day or a full day.'
        },
        {
          q: 'What should the first stop be?',
          a: 'Put Golghar first, so the day starts in lower heat and lighter crowds.'
        },
        {
          q: 'Do the plans include climbing the stairs?',
          a: 'No. Current access is unconfirmed, so the plans are built around seeing the building and its setting from outside.'
        }
      ]
    }
  }
};

/** Links to the other sections, so readers can move sideways from any hub. */
const otherLinks = (id: GroupId, locale: Locale): { label: string; path: string }[] =>
  GROUPS.filter((group) => group.id !== id).map((group) => ({
    label: group.label[locale],
    path: group.id
  }));

const blocksFor = (id: GroupId, locale: Locale): Block[] => {
  const content = HUB_CONTENT[id];
  const blocks: Block[] = [];

  if (content) {
    blocks.push({ t: 'h2', text: overviewHeading[locale] });
    blocks.push({ t: 'table', head: content.table[locale].head, rows: content.table[locale].rows });
    blocks.push({ t: 'note', text: tableNote[locale] });
  }

  blocks.push({ t: 'h2', text: heading[locale] });
  blocks.push({
    t: 'links',
    items: byGroup(id).map((entry) => ({ label: entry.h1[locale], path: entry.path }))
  });
  blocks.push({ t: 'h2', text: otherHeading[locale] });
  blocks.push({ t: 'links', items: otherLinks(id, locale) });
  blocks.push({ t: 'note', text: note[locale] });

  return blocks;
};

/** Section hub pages, generated from the group definitions so navigation stays in sync. */
export const hubEntries = (): GuideEntry[] =>
  GROUPS.map((group) => {
    const content = HUB_CONTENT[group.id];

    return {
      path: group.id,
      group: group.id,
      priority: 1 as const,
      title: group.title,
      description: content ? content.meta : group.intro,
      h1: group.title,
      intro: group.intro,
      blocks: {
        hi: blocksFor(group.id, 'hi'),
        en: blocksFor(group.id, 'en')
      },
      faq: content?.faq,
      sources: HUB_SOURCES[group.id]
    };
  });
