import type { Feed } from '../types/feeds';
import type { Entries } from '../types/entries';

export function first10Entries(data: { num_of_records: number, feeds: Array<Feed> }, project: string): Entries {
  const { num_of_records, feeds } = data;
  const feedsReduced = feeds.slice(0, Math.min(10, feeds.length));
  const entries = {
    name: project,
    num_of_records,
    feeds: feedsReduced,
  };

  return entries;
}
