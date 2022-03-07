import type { Feed } from './feeds';

export type Entries = {
  name: string,
  num_of_records: number,
  feeds: Array<Feed>,
}