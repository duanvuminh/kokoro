"use server";
import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostFactoryImplementModel } from "lib/model";
import {
  ChatGptRepository,
  KanjiDecoratorRepository,
  KanjiListDecoratorRepository,
  KanjiListRepository,
  KanjiRepository,
  MazziRepository,
  SinglePageRepository,
  WordDecoratorRepository,
  WordListDecoratorRepository,
  WordListRepository,
  WordRepository,
  type IChatGptRepository,
  type IMazziRepository,
  type IPostModel,
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

myContainer.bind<IPostModel>(TYPES.KanjiRepository).to(KanjiRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiDecoratorRepository)
  .whenTargetNamed("kanji");

myContainer.bind<IPostModel>(TYPES.WordRepository).to(WordRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(WordDecoratorRepository)
  .whenTargetNamed("mean");

myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(SinglePageRepository)
  .whenTargetNamed("single-page");

myContainer
  .bind<interfaces.Factory<IPostModel>>(TYPES.IPostFactoryCreator)
  .toFactory((context) => {
    return (postType: string, id: string) => {
      let post = context.container.getNamed<IPostModel>(
        TYPES.IPostModel,
        postType
      );
      post.id = id;
      post.postType = postType;
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
