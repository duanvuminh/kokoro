import { Container } from "inversify";
import "reflect-metadata";
import {
  IMeanRepository,
  IPostRepository,
  IPostStaticPathRepository,
  ISubjectRepository,
  ISubjectStaticPathRepository,
  ITranslateRepository,
  KanjiPostRepository,
  KanjiPostStaticPathRepository,
  KanjiSubjectRepository,
  KanjiSubjectStaticPathRepository,
  MeanRepository,
  TranslateRepository,
} from "./lib/repository";
import { TYPES } from "./lib/type";

const myContainer = new Container();
myContainer.bind<IMeanRepository>(TYPES.IMeanRepository).to(MeanRepository);
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
myContainer
  .bind<ITranslateRepository>(TYPES.ITranslateRepository)
  .to(TranslateRepository);

export { myContainer };
