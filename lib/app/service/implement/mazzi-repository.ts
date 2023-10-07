import { injectable } from "inversify";
import { _postData } from "lib/repository/api/api_server";
import { trimMean } from "lib/app/util";
import { IMazziRepository } from "lib/app/service";

@injectable()
export class MazziRepository implements IMazziRepository {
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
    const url: string = "https://mazii.net/api/search";
    return _postData(url, {
      query: query,
      dict: "javi",
      type: "word",
      limit: 1,
      page: 1,
    }).then((data) => {
      return trimMean(
        `${query}(${data?.data?.[0]?.phonetic ?? ""}) ${
          data?.data?.[0]?.short_mean ?? ""
        }`
      );
    });
  }
}
