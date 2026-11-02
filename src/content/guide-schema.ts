export type Locale = 'hi' | 'en';

export type GroupId = 'visit' | 'history' | 'nearby' | 'food' | 'itineraries';

export type Block =
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'note'; text: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'links'; items: { label: string; path: string }[] }
  | { t: 'map' };

/** Away-from-repository source reference shown at the bottom of a page. */
export type Source = { label: Record<Locale, string>; url: string };

/** Frequently asked question; rendered as visible content plus FAQ markup. */
export type Faq = { q: string; a: string };

export type GuideEntry = {
  /** Locale-neutral path without leading or trailing slashes, e.g. 'visit/timings'. */
  path: string;
  group: GroupId;
  priority: 1 | 2 | 3;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  h1: Record<Locale, string>;
  intro: Record<Locale, string>;
  /**
   * One short, page-specific orientation line: where this page's subject sits
   * relative to Golghar and how to reach it. Rendered with the map module.
   */
  transport?: Record<Locale, string>;
  blocks: Record<Locale, Block[]>;
  faq?: Record<Locale, Faq[]>;
  sources?: Source[];
  /** Paths of related guide pages, resolved to the reader's language. */
  related?: string[];
};
