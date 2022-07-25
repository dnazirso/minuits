type CssKeyWord = "@keyframes " | "@media " | "." | "#" | "";

interface CssKeywordMethod {
  keyword: CssKeyWord;
  method<T extends { [x: string]: object }>(cssObj: T): string;
}

interface CssAggregate {
  keyframes: CssKeywordMethod;
  media: CssKeywordMethod;
  class: CssKeywordMethod;
  id: CssKeywordMethod;
  global: CssKeywordMethod;
}
