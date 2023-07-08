export const zeroPad = (num: string | number, places: number) =>
  String(num).padStart(places, "0");

export const trimMean = (mean: string) => mean.replace(/\(.+\)/g, "");
