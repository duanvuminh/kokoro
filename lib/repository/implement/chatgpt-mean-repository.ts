import { injectable } from "inversify";
import { ChatGPT, IMeanRepository, client, index } from "lib/repository";
import { _postData } from "lib/api/api";
import { trimMean } from "lib/util";

@injectable()
export class ChatGptMeanRepository implements IMeanRepository {
  getYomi(query: string): Promise<string> {
    const url: string = "https://mazii.net/api/search";
    return _postData(url, {
      query: query,
      dict: "javi",
      type: "word",
      limit: 1,
      page: 1,
    }).then((data) => {
      return `${data?.data?.[0]?.phonetic ?? ""}`;
    });
  }

  async getMean(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    const angolia = await index.getObjects([query]);
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
        const yomi = await this.getYomi(query);
        result = result != "" ? trimMean(`(${yomi})${result}`) : result;
      }
      if (result != "") {
        const saveObject = { objectID: query, mean: result };
        index.saveObjects([saveObject]);
      }
      return result;
    });
  }
}
