import CssStyles from "../typings/CssStyles";

/**
 * Stringify styles
 * @param cssObj css object
 */
export function stylesToString(cssObj: CssStyles) {
  return Object.keys(cssObj).reduce((prev, curr) => {
    return `${(prev += curr
      .split(/(?=[A-Z])/)
      .join("-")
      .toLowerCase())}:${cssObj[curr]};`;
  }, "");
}
