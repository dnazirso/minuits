import CssAggregate from "../typings/CssAggregate";
import CssPeudoClasses from "../typings/CssPseudoClasses";
import { pseudoClassKeys } from "../typings/pseudoClassKeys";
import CssQueries from "../typings/CssQueries";
import CssStyles from "../typings/CssStyles";
import CssStyleSheet from "../typings/CssStyleSheet";
import { needPxList } from "./needPxList";

type CssObject = { [k: string]: CssStyleSheet | CssQueries };

/**
 * Format a style property
 * @param style style rules object
 * @param styleProp style property string
 */
function formatStyleProp(style: CssStyles, styleProp: string) {
  if (needPxList.includes(styleProp) && typeof style[styleProp] === "number") {
    return `${style[styleProp]}px`;
  }
  return style[styleProp];
}

/**
 * Format a style object
 * @param style css style rules object
 */
function FormatStyles(style: CssStyles) {
  const restyled: CssStyles = {};

  Object.keys(style).map((k) => {
    restyled[k] = formatStyleProp(style, k);
  });

  return restyled;
}

/**
 * Format css object to obtain a stringyfiable version of it
 * @param cssObj css object
 */
export default function formatCss(
  cssObj: CssObject,
  keyword: keyof CssAggregate,
  idx: number
) {
  // pass references of cssObj to tempCssObj in order
  // to avoid loosing it while working on cssObj

  const formattedCss: { [x: string]: CssStyleSheet | CssQueries } = cssObj;
  const names: { [i in keyof CssObject]: string } = {};

  Object.keys(cssObj)
    .filter((v, i, a) => {
      return a.indexOf(v) === i;
    })
    .forEach((name: keyof CssObject, i) => {
      const _clsName = `m${idx}_${i}`;
      names[name] = _clsName;
      const _class: { [x: string]: CssStyleSheet | CssQueries } = {};
      Object.keys(cssObj[name]).map((cssProperty) => {
        if (typeof cssObj[name][cssProperty] === "object") {
          if (pseudoClassKeys.includes(cssProperty as keyof CssPeudoClasses)) {
            formattedCss[`${_clsName}:${cssProperty}`] = FormatStyles(
              cssObj[name][cssProperty]
            );
            delete formattedCss[name][cssProperty]["isPseudo"];
          } else {
            _class[cssProperty] = FormatStyles(cssObj[name][cssProperty]);
          }
        } else {
          _class[cssProperty] = formatStyleProp(cssObj[name], cssProperty);
        }
      });
      if (keyword === "media" || keyword === "global") {
        formattedCss[name.toString()] = _class;
        return;
      }
      formattedCss[_clsName] = _class;
      delete cssObj[name];
    });

  return { formattedCss, names };
}
