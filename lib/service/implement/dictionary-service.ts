import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import * as KanjiCollection from "mdx/mdx-kanji";
import * as KanjiListCollection from "mdx/mdx-kanji-list";
import * as WordListCollection from "mdx/mdx-word-list";
import {
  type IChatGptRepository,
  type IMazziRepository,
  AngoliaClass,
} from "lib/repository";
import { IDictionaryService } from "lib/service";
import { trimMean } from "lib/util";
@injectable()
export class DictionaryService implements IDictionaryService {
  private _iMazzi: IMazziRepository;
  private _iChatGptRepository: IChatGptRepository;
  constructor(
    @inject(TYPES.IMazziRepository)
    iMazzi: IMazziRepository,
    @inject(TYPES.IChatGptRepository)
    iChatGptRepository: IChatGptRepository
  ) {
    this._iMazzi = iMazzi;
    this._iChatGptRepository = iChatGptRepository;
  }

  async getPost(postType: string, postId: string) {
    if (postType == "kanji") {
      const id = postId as keyof typeof KanjiCollection;
      if (KanjiCollection[id] !== undefined) {
        return KanjiCollection[id];
      }
      return null;
    }
    if (postType == "kanji-list") {
      const id = postId as keyof typeof KanjiListCollection;
      if (KanjiListCollection[id] !== undefined) {
        return KanjiListCollection[id];
      }
      return null;
    }
    if (postType == "word-list") {
      const id = postId as keyof typeof WordListCollection;
      if (WordListCollection[id] !== undefined) {
        return WordListCollection[id];
      }
      return null;
    }
    if (postType == "word") {
      return await this.getMean(postId);
    }
  }

  partialUpdateMean1(objectID: string, mean1: string): Promise<boolean> {
    const saveObject = { objectID: objectID, mean1: mean1 };
    return AngoliaClass.partialUpdateObject(saveObject);
  }
  async partialUpdateMean(email: string, objectID: string) {
    const angolia = await this.getMeanFromDb(objectID);
    if (email == "duanvuminh@gmail.com") {
      return AngoliaClass.partialUpdateObject({
        ...angolia,
        mean: angolia.mean1,
      });
    }
    return false;
  }
  getMeanFromDb(objectID: string) {
    return AngoliaClass.getMean(objectID);
  }

  deleteMeanFromDb(email: string, objectID: string): boolean {
    if (email == "duanvuminh@gmail.com") {
      AngoliaClass.deleteMean(objectID);
      return true;
    }
    return false;
  }

  async getMean(query: string): Promise<string> {
    const angolia = await AngoliaClass.getMeans([query]);
    if (angolia.results[0]?.mean != null) {
      return trimMean(angolia.results[0].mean);
    }
    return this._iChatGptRepository.getMean(query).then(async (result) => {
      if (!result.includes("(")) {
        const yomi = await this._iMazzi.getYomi(query);
        result = result != "" ? trimMean(`(${yomi})${result}`) : result;
      }
      // Dont save the search result
      //   if (result != "") {
      //     const saveObject = { objectID: query, mean: result };
      //     indexAngolia.mean.partialUpdateObjects([saveObject], {
      //       createIfNotExists: true,
      //     });
      //   }
      return result;
    });
  }
  getQuestion(query: string): Promise<string> {
    return this._iChatGptRepository.getQuestion(query);
  }
  getExample(query: string): Promise<string> {
    return this._iChatGptRepository.getExample(query);
  }
}
