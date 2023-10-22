export interface IDictionaryService {
  getMean(query: string): Promise<string>;
  getQuestion(query: string): Promise<string>;
  getExample(query: string): Promise<string>;
  deleteMeanFromDb(email: string, objectID: string): boolean;
  getMeanFromDb(objectID: string): any;
  partialUpdateMean(
    email: string,
    objectID: string
  ): Promise<boolean>;
  partialUpdateMean1(
    objectID: string,
    mean1: string
  ): Promise<boolean>;
  getPost(postType: string,postId: string): any
}
