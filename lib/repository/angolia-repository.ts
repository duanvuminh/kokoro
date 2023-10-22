const algoliasearch = require("algoliasearch");

export class AngoliaClass {
  private static get Angolia(): string {
    return process.env.Angolia??"";
  }
  private static client = algoliasearch("EI7K5E2KYY", this.Angolia);
  private static indexAngolia = {
    mean: this.client.initIndex("mean"),
    kanji: this.client.initIndex("kanji"),
  };
  static deleteMean(objectID: string) {
    return this.indexAngolia.mean.deleteObject(objectID);
  }

  static getMean(objectID: string) {
    return this.indexAngolia.mean.getObject(objectID);
  }

  static getMeans(objectIDs: string[]) {
    return this.indexAngolia.mean.getObjects(objectIDs);
  }

  static partialUpdateObject(newObject: any) {
    return this.indexAngolia.mean.partialUpdateObject(newObject);
  }
}
