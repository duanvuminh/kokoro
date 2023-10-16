const TYPES = {
  IChatGptRepository: Symbol.for("IChatGptRepository"),
  IMazziRepository: Symbol.for("IMazziRepository"),
  IMazziRepositoryContructor: Symbol.for("IMazziRepositoryContructor"),
  IPostModel: Symbol.for("IPostModel"),
  IInitRepository: Symbol.for("IInitRepository"),
  IPostFactoryCreator: Symbol.for("Factory<IPostModel>"),
  IPostFactoryModel: Symbol.for("IPostFactoryModel"),
  WordListRepository:Symbol.for("WordListRepository"),
  KanjiListRepository: Symbol.for("KanjiListRepository"),
  KanjiRepository: Symbol.for("KanjiRepository"),
  WordRepository: Symbol.for("WordRepository"),
};
export { TYPES };
