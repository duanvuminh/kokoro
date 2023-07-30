export interface IChatGptRepository {
  getMean(query: string): Promise<string>;
  getQuestion(query: string): Promise<string>;
  getExample(query: string): Promise<string>;
}
