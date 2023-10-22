export class PostModel {
  postType: string;
  id: string;

  constructor({ postType, id }: { postType: string; id: string }) {
    this.postType = postType;
    this.id = id;
  }
}
