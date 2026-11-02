import type { GroupId, Locale } from '../content/guide-schema';

export const ORIGIN = 'https://golgharpatna.com';
export const MAP_URL = 'https://maps.app.goo.gl/QowA7WfKUocCjCgH8';
export const MAP_EMBED = 'https://maps.google.com/maps?q=25.620337,85.139448&z=16&output=embed';
export const GEO = { lat: 25.620337, lng: 85.139448 };
export const PLUS_CODE = 'J4CQ+4Q';

/** Google Maps public listing figures, checked on REVIEWED_ON. */
export const RATING = '4.2';
export const REVIEW_COUNT = '24,579';
export const REVIEWED_ON = '2026-11-02';

export const SITE_NAME: Record<Locale, string> = {
  hi: 'गोलघर पटना यात्रा मार्गदर्शिका',
  en: 'Golghar Patna Travel Guide'
};

export const REVIEWED_ON_TEXT: Record<Locale, string> = {
  hi: '2 नवंबर 2026',
  en: '2 November 2026'
};

/** Google Maps listing observation date used for opening hours. */
export const MAPS_OBSERVED_ON_TEXT: Record<Locale, string> = {
  hi: '23 अक्टूबर 2026',
  en: '23 October 2026'
};

export const ADDRESS: Record<Locale, string> = {
  hi: 'गवर्नमेंट गर्ल्स हाई स्कूल के सामने, अशोक राजपथ रोड, पटना, बिहार 800001, भारत',
  en: 'Opp. Govt. Girls High School, Ashok Rajpath Rd, Patna, Bihar 800001, India'
};

export const GROUPS: {
  id: GroupId;
  label: Record<Locale, string>;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
}[] = [
  {
    id: 'visit',
    label: { hi: 'यात्रा जानकारी', en: 'Visit' },
    title: {
      hi: 'गोलघर पटना यात्रा जानकारी: समय, टिकट, स्थान और पहुँच',
      en: 'Golghar Patna Visiting Information: Timings, Tickets, Location and Access'
    },
    intro: {
      hi: 'जाने से पहले जो पूछा जाता है—कहाँ है, कब खुलता है, टिकट कितना है, ऊपर चढ़ सकते हैं या नहीं, और पटना जंक्शन या हवाई अड्डे से कैसे पहुँचें।',
      en: 'The questions people ask before a trip: where it is, when it opens, what it costs, whether the top is reachable, and how to get there from Patna Junction or the airport.'
    }
  },
  {
    id: 'history',
    label: { hi: 'इतिहास और वास्तु', en: 'History & Architecture' },
    title: {
      hi: 'गोलघर पटना का इतिहास और वास्तुकला',
      en: 'History and Architecture of Golghar, Patna'
    },
    intro: {
      hi: '1786 का अनाजघर, गुंबद की बनावट, 145 घुमावदार सीढ़ियाँ, 1770 के अकाल की पृष्ठभूमि और मरम्मत की स्थिति।',
      en: 'The 1786 granary, its dome, the 145 winding stairs, the famine that led to its building and the state of its repairs.'
    }
  },
  {
    id: 'nearby',
    label: { hi: 'आसपास के स्थल', en: 'Nearby Places' },
    title: {
      hi: 'गोलघर के आसपास घूमने की जगहें: गांधी मैदान और मध्य पटना',
      en: 'Places Near Golghar: Gandhi Maidan and Central Patna'
    },
    intro: {
      hi: 'गोलघर के पास संग्रहालय, विज्ञान केंद्र, पार्क और नदी तट। हर पृष्ठ बताता है कि यह आपकी यात्रा में जोड़ने लायक है या नहीं।',
      en: 'Museums, a science centre, parks and the riverfront near Golghar. Each page answers one question: is it worth adding to your trip?'
    }
  },
  {
    id: 'food',
    label: { hi: 'खान-पान', en: 'Food' },
    title: {
      hi: 'गोलघर के आसपास खान-पान: बिहारी व्यंजन और कैफ़े क्षेत्र',
      en: 'Food Near Golghar: Bihari Dishes and Cafe Areas'
    },
    intro: {
      hi: 'लिट्टी चोखा, नाश्ता, दोपहर का भोजन, शाकाहारी विकल्प और कॉफ़ी—यह गाइड क्षेत्र और सुविधा के प्रकार बताती है, किसी व्यक्तिगत दुकान की सिफ़ारिश नहीं करती।',
      en: 'Litti chokha, breakfast, lunch, vegetarian options and coffee. This guide describes areas and facility types; it does not endorse individual shops.'
    }
  },
  {
    id: 'itineraries',
    label: { hi: 'यात्रा योजना', en: 'Itineraries' },
    title: {
      hi: 'गोलघर पटना यात्रा योजना: 90 मिनट से एक दिन तक',
      en: 'Golghar Itineraries: From 90 Minutes to a Full Day'
    },
    intro: {
      hi: 'अपने पास उपलब्ध समय, चलने की क्षमता और मौसम के अनुसार बनी योजनाएँ—अनुमानित क्रम के साथ।',
      en: 'Plans built around the time you have, how far you can walk and the season, with a suggested order of stops.'
    }
  }
];

export const groupLabel = (locale: Locale, id: GroupId): string =>
  GROUPS.find((g) => g.id === id)?.label[locale] ?? id;

/** Locale-neutral path ('', 'visit/timings') to a URL in the requested language. */
export const urlFor = (locale: Locale, path = ''): string => {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const base = locale === 'en' ? '/en' : '';
  return clean ? `${base}/${clean}/` : `${base}/`;
};

export const absoluteUrl = (locale: Locale, path = ''): string => `${ORIGIN}${urlFor(locale, path)}`;

export const isLocale = (value: unknown): value is Locale => value === 'hi' || value === 'en';
