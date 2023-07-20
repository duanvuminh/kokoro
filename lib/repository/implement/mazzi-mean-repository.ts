"use server"
import { injectable } from "inversify";
import { IMeanRepository } from "lib/repository";
import { _postData } from "lib/api/api_server";
import { trimMean } from "lib/util";

@injectable()
export class MazziMeanRepository implements IMeanRepository {
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
