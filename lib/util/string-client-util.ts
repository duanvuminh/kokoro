export const zeroPad = (num: string | number, places: number) =>
  String(num).padStart(places, "0");