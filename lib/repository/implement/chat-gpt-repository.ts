import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  ChatGPT,
  IChatGptRepository,
  type IMazziRepository,
  indexAngolia,
} from "lib/repository";
import { _postData } from "lib/api/api_server";
import { trimMean } from "lib/util";
import { TYPES } from "lib/const";

@injectable()
export class ChatGptRepository implements IChatGptRepository {
  private _iMazzi: IMazziRepository;
  constructor(
    @inject(TYPES.IMazziRepository)
    iMazzi: IMazziRepository
  ) {
    this._iMazzi = iMazzi;
  }

  getQuestion(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    return _postData(url, {
      Authorization: ChatGPT,
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "japanese, vietnamese",
        },
        {
          role: "user",
          content: `${query}`,
        },
      ],
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 250,
      presence_penalty: 0,
      frequency_penalty: 0,
    }).then((data) => {
      return data.choices?.[0].message.content ?? "";
    });
  }
  async getExample(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    return _postData(url, {
      Authorization: ChatGPT,
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "japanese, vietnamese",
        },
        {
          role: "user",
          content: "ví dụ trong tiếng nhật với 日記",
        },
        {
          role: "assistant",
          content:
            "1.毎日日記を書く - tôi viết nhật kí mỗi ngày 2. 日記を書くのは大好きです - tôi thích viết nhật kí",
        },
        {
          role: "user",
          content: `ví dụ trong tiếng nhật với ${query}`,
        },
      ],
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 250,
      presence_penalty: 0,
      frequency_penalty: 0,
    }).then((data) => {
      return data.choices?.[0].message.content ?? "";
    });
  }
  async getMean(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    const angolia = await indexAngolia.getObjects([query]);
    if (angolia.results[0] != null) {
      return trimMean(angolia.results[0].mean);
    }
    return _postData(url, {
      Authorization: ChatGPT,
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "japanese, vietnamese",
        },
        {
          role: "user",
          content: "日記 trong tiếng nhật nghĩa là gì",
        },
        {
          role: "assistant",
          content: "日記(にっき) nghĩa là nhật kí",
        },
        {
          role: "user",
          content: `${query} trong tiếng nhật nghĩa là gì`,
        },
      ],
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 250,
      presence_penalty: 0,
      frequency_penalty: 0,
    }).then(async (data) => {
      let result = (data.choices?.[0].message.content ?? "") as string;
      if (!result.includes("(")) {
        const yomi = await this._iMazzi.getYomi(query);
        result = result != "" ? trimMean(`(${yomi})${result}`) : result;
      }
      if (result != "") {
        const saveObject = { objectID: query, mean: result };
        indexAngolia.saveObjects([saveObject]);
      }
      return result;
    });
  }
}
