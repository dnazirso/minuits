export type CssKeyWord = "@keyframes " | "@media " | "." | "#" | "";

export interface CssKeywordMethod {
  keyword: CssKeyWord;
  method<T extends { [x: string]: any }>(cssObj: T): string;
}

interface CssAggregate {
  keyframes: CssKeywordMethod;
  media: CssKeywordMethod;
  class: CssKeywordMethod;
  id: CssKeywordMethod;
  global: CssKeywordMethod;
}

export default CssAggregate;
