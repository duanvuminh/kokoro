import {
  level_local_storage,
  posts_local_storage,
} from "lib/const/app-text-client-const";
import { PostModel } from "lib/model/post-model";

export class UserSettingRepository {
  static limitPracticePost = 50;

  static clear(): void {
    localStorage.clear();
  }

  static getLevel(): number {
    return parseInt(localStorage.getItem(level_local_storage) ?? "0");
  }

  static setLevel(index: number): void {
    localStorage.setItem(level_local_storage, index.toString());
  }

  static getPosts(): PostModel[] {
    const post = localStorage.getItem(posts_local_storage) ?? "[]";
    return JSON.parse(post);
  }

  static setPosts(value: PostModel[]) {
    localStorage.setItem(posts_local_storage, JSON.stringify(value));
  }

  static setPost(value: PostModel) {
    let posts = this.getPosts();
    if (posts.length > this.limitPracticePost) return;
    if (
      posts.findIndex(
        (item) => item.id == value.id && item.postType == value.postType
      ) === -1
    )
      posts.push(value);
    this.setPosts(posts);
  }

  static removePost(value: PostModel) {
    let posts = this.getPosts();
    const index = posts.findIndex(
      (item) => item.id == value.id && item.postType == value.postType
    );
    if (index != -1) posts.splice(index, 1);
    this.setPosts(posts);
  }
}
