import { injectable } from "inversify";
import { IMeanRepository } from "app/lib/repository";
import { postData } from "app/lib/api";

@injectable()
export class ChatGptMeanRepository implements IMeanRepository {
  async getMean(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
    return postData(url, {
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
        }
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
