import { Container, interfaces } from "inversify";
import { TYPES } from "lib/const";
import {
  IMeanRepository,
  IMeanUtilsRepository,
  IPostModel,
  KanjiPostRepository,
  KanjiSubjectRepository,
  MeanRepository,
  MeanUtilsRepository,
} from "lib/repository";
import "reflect-metadata";
import { IPostFactory, PostFactoryImplement } from "./lib/model";

const myContainer = new Container();
myContainer.bind<IMeanRepository>(TYPES.IMeanRepository).to(MeanRepository);
myContainer
  .bind<IMeanUtilsRepository>(TYPES.IMeanUtilsRepository)
  .to(MeanUtilsRepository);
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
myContainer.bind<IPostFactory>(TYPES.IPostFactory).to(PostFactoryImplement);

export { myContainer };
