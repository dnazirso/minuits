import { CssKeywordMethod } from "../typings/CssAggregate";
import CssQueries from "../typings/CssQueries";
import CssStyles from "../typings/CssStyles";
import CssStyleSheet from "../typings/CssStyleSheet";
import { getStyleElement } from "./manageHtmlElements";

/**
 * stringify a json into a valid css keyframe and return a string
 * for server side rendering. if client side, push css in a style tag
 * @param cssObj contains css class objects
 */

export function stringifyCssObject(
  cssObj: CssStyles,
  keyworkMethod: CssKeywordMethod
): void {
  Object.keys(cssObj).forEach((name) => {
    const css = `${keyworkMethod.keyword}${name}{${keyworkMethod.method(
      cssObj[name] as { [x: string]: CssStyleSheet | CssQueries }
    )}}`;
    const i = getStyleElement("MinUiTScssId").innerHTML.indexOf(css);
    if (i < 0) {
      getStyleElement("MinUiTScssId").innerHTML += ` ${css}`;
    }
  });
}
