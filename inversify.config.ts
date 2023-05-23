import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "lib/const";
import {
  IMeanRepository,
  IMeanUtilsRepository,
  IPostRepository,
  IPostStaticPathRepository,
  ISubjectRepository,
  ISubjectStaticPathRepository,
  KanjiPostRepository,
  KanjiPostStaticPathRepository,
  KanjiSubjectRepository,
  KanjiSubjectStaticPathRepository,
  MeanRepository,
  MeanUtilsRepository,
} from "lib/repository";

const myContainer = new Container();
myContainer.bind<IMeanRepository>(TYPES.IMeanRepository).to(MeanRepository);
myContainer.bind<IMeanUtilsRepository>(TYPES.IMeanUtilsRepository).to(MeanUtilsRepository);
myContainer
  .bind<IPostRepository>(TYPES.IPostRepository)
  .to(KanjiPostRepository);
myContainer
  .bind<IPostStaticPathRepository>(TYPES.IPostStaticPathRepository)
  .to(KanjiPostStaticPathRepository);
myContainer
  .bind<ISubjectRepository>(TYPES.ISubjectRepository)
  .to(KanjiSubjectRepository);
myContainer
  .bind<ISubjectStaticPathRepository>(TYPES.ISubjectStaticPathRepository)
  .to(KanjiSubjectStaticPathRepository);

export { myContainer };
