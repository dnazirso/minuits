import CssAggregate from "../typings/CssAggregate";
import CssPeudoClasses from "../typings/CssPseudoClasses";
import CssQueries from "../typings/CssQueries";
import CssStyles from "../typings/CssStyles";
import CssStyleSheet from "../typings/CssStyleSheet";
import { needPxList } from "./needPxList";
import { pseudoClassKeys } from "./pseudoClasskeys";

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
export default function formatCss<T>(
  cssObj: { [k: string]: CssStyleSheet | CssQueries },
  keyword: keyof CssAggregate,
  idx: number
): {
  formattedCss: { [x: string]: CssStyleSheet | CssQueries };
  names: { [i in keyof T]: string };
} {
  // pass references of cssObj to tempCssObj in order
  // to avoid loosing it while working on cssObj

  const formattedCss = cssObj;
  const nameArray = Object.keys(cssObj);

  const names = nameArray
    .filter((v, i, a) => a.indexOf(v) === i)
    .reduce<{ [i in keyof T]: string }>(
      (clsNames, propName, i): { [i in keyof T]: string } => {
        const _clsName = `m${idx}_${i}`;

        clsNames[propName as keyof T] = _clsName;

        const _class: { [x: string]: CssStyleSheet | CssQueries } = {};

        Object.keys(cssObj[propName]).map((cssProperty) => {
          if (typeof cssObj[propName][cssProperty] === "object") {
            if (
              pseudoClassKeys.includes(cssProperty as keyof CssPeudoClasses)
            ) {
              formattedCss[`${_clsName}:${cssProperty}`] = FormatStyles(
                cssObj[propName][cssProperty]
              );
              delete formattedCss[propName][cssProperty]["isPseudo"];
            } else {
              _class[cssProperty] = FormatStyles(cssObj[propName][cssProperty]);
            }
          } else {
            _class[cssProperty] = formatStyleProp(
              cssObj[propName],
              cssProperty
            );
          }
        });

        if (keyword === "media" || keyword === "global") {
          formattedCss[propName.toString()] = _class;
          return clsNames as { [i in keyof T]: string };
        }

        formattedCss[_clsName] = _class;
        delete cssObj[propName];
        return clsNames as { [i in keyof T]: string };
      },
      {} as { [i in keyof T]: string }
    );

  return { formattedCss, names };
}
