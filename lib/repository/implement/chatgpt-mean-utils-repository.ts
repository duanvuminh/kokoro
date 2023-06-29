import { injectable } from "inversify";
import { _postData } from "lib/api";
import { IMeanUtilsRepository } from "lib/repository";

@injectable()
export class ChatGptMeanUtilsRepository implements IMeanUtilsRepository {
  getQuestion(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    return _postData(url, {
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
          content: "1.毎日日記を書く - tôi viết nhật kí mỗi ngày 2. 日記を書くのは大好きです - tôi thích viết nhật kí",
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
}
