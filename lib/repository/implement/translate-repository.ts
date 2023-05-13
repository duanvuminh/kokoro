import { injectable } from "inversify";
import { ITranslateRepository } from "lib/repository";
import { postData } from "lib/api";

@injectable()
export class TranslateRepository implements ITranslateRepository {
  async getTranslate(query: string): Promise<string> {
    const url: string = "https://api.openai.com/v1/chat/completions";
   return postData(url, {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `${query} dịch cho tôi`,
        },
      ],
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 250,
      presence_penalty: 0,
      frequency_penalty: 0,
    }).then((data)=> {
        return data.choices?.[0].message.content??"";
    });
  }
}
