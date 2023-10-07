export interface IMazziRepository {
  getMean(query: string):  Promise<string>;
  getYomi(query: string): Promise<string>
}
