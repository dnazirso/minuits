import { CssKeywordMethod } from "../typings/CssAggregate";
import { getStyleElement } from "./manageHtmlElements";

/**
 * stringify a json into a valid css keyframe and return a string
 * for server side rendering. if client side, push css in a style tag
 * @param cssObj contains css class objects
 */

export function stringifyCssObject<T extends { [x: string]: T }>(
  cssObj: T,
  keyworkMethod: CssKeywordMethod
): void {
  Object.keys(cssObj).forEach((name) => {
    const css = `${keyworkMethod.keyword}${name}{${keyworkMethod.method(
      cssObj[name]
    )}}`;
    const i = getStyleElement("MinUiTScssId").innerHTML.indexOf(css);
    if (i < 0) {
      getStyleElement("MinUiTScssId").innerHTML += ` ${css}`;
    }
  });
}
