import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./lib/type";
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
