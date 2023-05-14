export interface IMeanUtilsRepository {
  getExample(query: string):  Promise<string>;
  getQuestion(query: string):  Promise<string>;
}
