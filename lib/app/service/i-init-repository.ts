export interface IInitRepository {
  init( { postType, id }:{ postType: string; id: string }): void;
}
