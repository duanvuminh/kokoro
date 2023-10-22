"use server";
import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import { IPostFactoryPage, PostFactoryImplementPage } from "app/(subpage)/post/page";
import { DictionaryService, IDictionaryService, IInitService, InitRepository } from "lib/service";
import { notFound } from "next/navigation";
import {
  ChatGptRepository,
  IChatGptRepository,
  IMazziRepository,
  MazziRepository,
} from "lib/repository";
import {
  IPostPage,
  KanjiDecoratorPage,
  KanjiListDecoratorPage,
  KanjiListPage,
  KanjiPage,
  SinglePagePage,
  WordDecoratorPage,
  WordListDecoratorPage,
  WordListPage,
  WordPage,
} from "app/(subpage)/post/page";

const myContainer = new Container();
myContainer.bind<IMazziRepository>(TYPES.IMazziRepository).to(MazziRepository);
myContainer
  .bind<IChatGptRepository>(TYPES.IChatGptRepository)
  .to(ChatGptRepository);
myContainer
  .bind<IDictionaryService>(TYPES.IDictionaryService)
  .to(DictionaryService);

myContainer
  .bind<IPostPage>(TYPES.WordListRepository)
  .to(WordListPage);
myContainer
  .bind<IPostPage>(TYPES.IPostModel)
  .to(WordListDecoratorPage)
  .whenTargetNamed("word-list");

myContainer
  .bind<IPostPage>(TYPES.KanjiListRepository)
  .to(KanjiListPage);
myContainer
  .bind<IPostPage>(TYPES.IPostModel)
  .to(KanjiListDecoratorPage)
  .whenTargetNamed("kanji-list");

myContainer.bind<IPostPage>(TYPES.KanjiRepository).to(KanjiPage);
myContainer
  .bind<IPostPage>(TYPES.IPostModel)
  .to(KanjiDecoratorPage)
  .whenTargetNamed("kanji");

myContainer.bind<IPostPage>(TYPES.WordRepository).to(WordPage);
myContainer
  .bind<IPostPage>(TYPES.IPostModel)
  .to(WordDecoratorPage)
  .whenTargetNamed("mean");

myContainer
  .bind<IPostPage>(TYPES.IPostModel)
  .to(SinglePagePage)
  .whenTargetNamed("single-page");

myContainer.bind<IInitService>(TYPES.IInitRepository).to(InitRepository);

myContainer
  .bind<interfaces.Factory<IPostPage>>(TYPES.IPostFactoryCreator)
  .toFactory((context) => {
    return (postType: string, id: string) => {
      try {
        let post = context.container.getNamed<IPostPage>(
          TYPES.IPostModel,
          postType
        );
        post.id = id;
        post.postType = postType;
        return post;
      } catch (e) {
        console.log(e);
        notFound();
      }
    };
  });

myContainer
  .bind<IPostFactoryPage>(TYPES.IPostFactoryModel)
  .to(PostFactoryImplementPage);

const getContainer = () => {
  return myContainer;
};

export { getContainer };
