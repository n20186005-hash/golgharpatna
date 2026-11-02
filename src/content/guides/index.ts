import type { GuideEntry, GroupId } from '../guide-schema';
import { visit } from './visit';
import { history } from './history';
import { nearby } from './nearby';
import { food } from './food';
import { itineraries } from './itineraries';

/** All guide pages, in the order used for hub pages and the home-page index. */
export const ENTRIES: GuideEntry[] = [...visit, ...history, ...nearby, ...food, ...itineraries];

export const byPath = (path: string): GuideEntry | undefined =>
  ENTRIES.find((entry) => entry.path === path);

export const byGroup = (group: GroupId): GuideEntry[] => ENTRIES.filter((entry) => entry.group === group);

const near = (entry: GuideEntry, count = 3): GuideEntry[] =>
  byGroup(entry.group)
    .filter((other) => other.path !== entry.path)
    .slice(0, count);

/** Related pages declared on the entry, falling back to other pages in the group. */
export const relatedEntries = (entry: GuideEntry): GuideEntry[] => {
  const declared = (entry.related ?? []).map(byPath).filter((item): item is GuideEntry => Boolean(item));
  const list = declared.length ? declared : near(entry);
  return list.slice(0, 4);
};
