import { injectable } from "inversify";
import { IMeanRepository } from "lib/repository";
import { postData } from "lib/api";

@injectable()
export class MazziMeanRepository implements IMeanRepository {
  async getMean(query: string): Promise<string> {
    const url: string = "https://mazii.net/api/search";
    return postData(url, {
      query: query,
      dict: "javi",
      type: "word",
      limit: 1,
      page: 1,
    }).then((data) => {
      return `${query}(${data.data?.[0].phonetic}) ${data.data?.[0].short_mean}`
        .replace("()", "")
        .replace(`(${query})`, "");
    });
  }
}
