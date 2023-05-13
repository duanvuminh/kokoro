export interface IMeanRepository {
  getMean(query: string):  Promise<string>;
}
