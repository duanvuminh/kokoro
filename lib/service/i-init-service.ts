export interface IInitService {
  init( { postType, id }:{ postType: string; id: string }): void;
}
