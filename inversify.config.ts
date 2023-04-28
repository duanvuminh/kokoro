import { Container } from "inversify";
import "reflect-metadata";
import {
  IPostRepository,
  IPostStaticPathRepository,
  ISubjectRepository,
  ISubjectStaticPathRepository,
  KanjiPostRepository,
  KanjiPostStaticPathRepository,
  KanjiSubjectRepository,
  KanjiSubjectStaticPathRepository,
} from "./lib/repository";
import { TYPES } from "./lib/type";

const myContainer = new Container();
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
