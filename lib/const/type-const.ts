import { N1, N2, N3, N4, N5 } from "lib/const";

interface Level {
  id: number;
  name: string;
}

const TYPES = {
  IMeanRepository: Symbol.for("IMeanRepository"),
  IMeanUtilsRepository: Symbol.for("IMeanUtilsRepository"),
  IPostModel: Symbol.for("IPostModel"),
  IPostModelFactory: Symbol.for("Factory<IPostModel>"),
  IPostFactoryModel: Symbol.for("IPostFactoryModel"),
};

const levelList: Level[] = [
  {
    id: 0,
    name: N1,
  },
  {
    id: 1,
    name: N2,
  },
  {
    id: 2,
    name: N3,
  },
  {
    id: 3,
    name: N4,
  },
  {
    id: 4,
    name: N5,
  },
];
export { TYPES, levelList };
