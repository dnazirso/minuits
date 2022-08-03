import CssQueries from "./CssQueries";
import CssStyleSheet from "./CssStyleSheet";

export type CssKeyWord = "@keyframes " | "@media " | "." | "#" | "";

export interface CssKeywordMethod {
  keyword: CssKeyWord;
  method<T extends { [x: string]: CssStyleSheet | CssQueries }>(
    cssObj: T
  ): string;
}

interface CssAggregate {
  keyframes: CssKeywordMethod;
  media: CssKeywordMethod;
  class: CssKeywordMethod;
  id: CssKeywordMethod;
  global: CssKeywordMethod;
}

export default CssAggregate;
