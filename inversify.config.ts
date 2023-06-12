import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import {
  ChatGptMeanRepository,
  ChatGptMeanUtilsRepository,
  IMeanRepository,
  IMeanUtilsRepository,
  IPostModel,
  KanjiPostRepository,
  KanjiSubjectRepository,
} from "lib/repository";
import { IPostFactoryModel, PostFactoryImplementModel } from "./lib/model";

const myContainer = new Container();
myContainer.bind<IMeanRepository>(TYPES.IMeanRepository).to(ChatGptMeanRepository);
myContainer
  .bind<IMeanUtilsRepository>(TYPES.IMeanUtilsRepository)
  .to(ChatGptMeanUtilsRepository);
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiSubjectRepository)
  .whenTargetNamed("subject");
myContainer
  .bind<IPostModel>(TYPES.IPostModel)
  .to(KanjiPostRepository)
  .whenTargetNamed("kanji");
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
myContainer.bind<IPostFactoryModel>(TYPES.IPostFactoryModel).to(PostFactoryImplementModel);

export { myContainer };
