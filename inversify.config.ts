import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import {
  ChatGptMeanRepository,
  ChatGptMeanUtilsRepository,
  IMeanRepository,
  IMeanUtilsRepository,
  IPostModel,
  KanjiRepository,
  MeanRepository,
  SinglePageRepository,
  WordListRepository,
} from "lib/repository";
import { KanjiListRepository } from "lib/repository/implement/kanji-list-repository";
import { IPostFactoryModel, PostFactoryImplementModel } from "./lib/model";

const myContainer = new Container();
myContainer
  .bind<IMeanRepository>(TYPES.IMeanRepository)
  .to(ChatGptMeanRepository);
myContainer
  .bind<IMeanUtilsRepository>(TYPES.IMeanUtilsRepository)
  .to(ChatGptMeanUtilsRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(WordListRepository)
  .whenTargetNamed("word-list");
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiListRepository)
  .whenTargetNamed("kanji-list");
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiRepository)
  .whenTargetNamed("kanji");
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(SinglePageRepository)
  .whenTargetNamed("single-page");
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(MeanRepository)
  .whenTargetNamed("mean");
myContainer
  .bind<interfaces.Factory<IPostModel>>(TYPES.IPostModelFactory)
  .toFactory((context) => {
    return (targetName: string, postId: string) => {
      let post = context.container.getNamed<IPostModel>(
        TYPES.IPostModel,
        targetName
      );
      post.postId = postId;
      return post;
    };
  });
myContainer
  .bind<IPostFactoryModel>(TYPES.IPostFactoryModel)
  .to(PostFactoryImplementModel);

export { myContainer };
