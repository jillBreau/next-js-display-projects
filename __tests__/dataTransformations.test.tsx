import { first10Entries } from '../utils/dataTransformations';
import { Feed } from '../types/feeds';

const zeroFeeds: Array<Feed> = [];

const lessThan10feeds: Array<Feed> = [
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  }
]

const moreThan10feeds: Array<Feed> = [
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
]

const exactly10feeds: Array<Feed> = [
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },{
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
  {
    device_id: '1234',
    gps_lat: 1234.1234,
    gps_lon: 1234.1234,
    timestamp: 'time',
  },
]

describe('first10Entries', () => {
  it('returns zero feeds', () => {
    expect(first10Entries({ num_of_records: zeroFeeds.length, feeds: zeroFeeds }, 'Test Project')).toStrictEqual({
      name: 'Test Project',
      num_of_records: 0,
      feeds: [],
    });
  })
  it('returns 3 feeds', () => {
    expect(first10Entries({ num_of_records: lessThan10feeds.length, feeds: lessThan10feeds }, 'Test Project')).toStrictEqual({
      name: 'Test Project',
      num_of_records: 3,
      feeds: lessThan10feeds,
    });
  })
  it('returns 10 feeds from 11 input', () => {
    expect(first10Entries({ num_of_records: moreThan10feeds.length, feeds: moreThan10feeds }, 'Test Project')).toStrictEqual({
      name: 'Test Project',
      num_of_records: 11,
      feeds: exactly10feeds,
    });
  })
  it('returns 10 feeds from 10 input', () => {
    expect(first10Entries({ num_of_records: exactly10feeds.length, feeds: exactly10feeds }, 'Test Project')).toStrictEqual({
      name: 'Test Project',
      num_of_records: 10,
      feeds: exactly10feeds,
    });
  })
})