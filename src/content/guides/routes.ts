import type { GuideEntry } from '../guide-schema';
import { ENTRIES } from './index';
import { hubEntries } from './hubs';

/**
 * Every generated guide URL: section hubs plus the 45 content pages.
 * A content page that lives at a section root (for example `history`) takes
 * the place of that section's auto-generated hub page.
 */
export const ALL_ENTRIES: GuideEntry[] = [
  ...hubEntries().filter((hub) => !ENTRIES.some((entry) => entry.path === hub.path)),
  ...ENTRIES
];
