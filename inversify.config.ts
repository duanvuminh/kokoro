"use server";
import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostFactoryImplementModel } from "lib/model";
import {
  type IChatGptRepository,
  type IPostModel,
  KanjiRepository,
  MazziRepository,
  MeanRepository,
  SinglePageRepository,
  type IMazziRepository,
  WordListRepository,
  ChatGptRepository,
  KanjiListRepository,
  WordListDecoratorRepository,
  KanjiListDecoratorRepository,
} from "lib/repository";

const myContainer = new Container();
myContainer.bind<IMazziRepository>(TYPES.IMazziRepository).to(MazziRepository);
myContainer
  .bind<IChatGptRepository>(TYPES.IChatGptRepository)
  .to(ChatGptRepository);

myContainer.bind<IPostModel>(TYPES.WordListRepository).to(WordListRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(WordListDecoratorRepository)
  .whenTargetNamed("word-list");

myContainer.bind<IPostModel>(TYPES.KanjiListRepository).to(KanjiListRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiListDecoratorRepository)
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
  .bind<interfaces.Factory<IPostModel>>(TYPES.IPostFactoryCreator)
  .toFactory((context) => {
    return (targetName: string, postId: string) => {
      let post = context.container.getNamed<IPostModel>(
        TYPES.IPostModel,
        targetName
      );
      post.postId = postId;
      post.postType = targetName;
      return post;
    };
  });

myContainer
  .bind<IPostFactoryModel>(TYPES.IPostFactoryModel)
  .to(PostFactoryImplementModel);

const getContainer = () => {
  return myContainer;
};

export { getContainer };
