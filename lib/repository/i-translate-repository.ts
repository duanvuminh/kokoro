export interface ITranslateRepository {
  getTranslate(query: string):  Promise<string>;
}
