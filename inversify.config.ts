"use server";
import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/app/const";
import { IPostFactoryModel, PostFactoryImplementModel } from "lib/model";
import {
  KanjiDecoratorRepository,
  KanjiListDecoratorRepository,
  KanjiListRepository,
  KanjiRepository,
  SinglePageRepository,
  WordDecoratorRepository,
  WordListDecoratorRepository,
  WordListRepository,
  WordRepository,
  type IPostRepository,
  IInitRepository,
  InitRepository,
} from "lib/app/service";
import { notFound } from "next/navigation";
import { ChatGptRepository, IChatGptRepository, IMazziRepository, MazziRepository } from "lib/repository";

const myContainer = new Container();
myContainer.bind<IMazziRepository>(TYPES.IMazziRepository).to(MazziRepository);
myContainer
  .bind<IChatGptRepository>(TYPES.IChatGptRepository)
  .to(ChatGptRepository);

myContainer.bind<IPostRepository>(TYPES.WordListRepository).to(WordListRepository);
myContainer
  .bind<IPostRepository>(TYPES.IPostModel)
  .to(WordListDecoratorRepository)
  .whenTargetNamed("word-list");

myContainer.bind<IPostRepository>(TYPES.KanjiListRepository).to(KanjiListRepository);
myContainer
  .bind<IPostRepository>(TYPES.IPostModel)
  .to(KanjiListDecoratorRepository)
  .whenTargetNamed("kanji-list");

myContainer.bind<IPostRepository>(TYPES.KanjiRepository).to(KanjiRepository);
myContainer
  .bind<IPostRepository>(TYPES.IPostModel)
  .to(KanjiDecoratorRepository)
  .whenTargetNamed("kanji");

myContainer.bind<IPostRepository>(TYPES.WordRepository).to(WordRepository);
myContainer
  .bind<IPostRepository>(TYPES.IPostModel)
  .to(WordDecoratorRepository)
  .whenTargetNamed("mean");

myContainer
  .bind<IPostRepository>(TYPES.IPostModel)
  .to(SinglePageRepository)
  .whenTargetNamed("single-page");

myContainer
  .bind<IInitRepository>(TYPES.IInitRepository)
  .to(InitRepository);

myContainer
  .bind<interfaces.Factory<IPostRepository>>(TYPES.IPostFactoryCreator)
  .toFactory((context) => {
    return (postType: string, id: string) => {
      try{
        let post = context.container.getNamed<IPostRepository>(
          TYPES.IPostModel,
          postType
        );
        post.id = id;
        post.postType = postType;
        return post;
      }catch(e){
        console.log(e);
        notFound();
      }
    };
  });

myContainer
  .bind<IPostFactoryModel>(TYPES.IPostFactoryModel)
  .to(PostFactoryImplementModel);

const getContainer = () => {
  return myContainer;
};

export { getContainer };
