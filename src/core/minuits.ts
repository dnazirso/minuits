/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapThemeCharCssVars } from "./manageHtmlElements";
import { stringifyCssObject } from "./stringifyCssObject";
import DefaultTheme, { mappedCssVars } from "./DefaultTheme";
import CssAggregate from "../typings/CssAggregate";
import CssQueries from "../typings/CssQueries";
import CssStyleSheet from "../typings/CssStyleSheet";
import MinUiTheme from "./MinUiTheme";
import { queryToString } from "./queryToString";
import { stylesToString } from "./stylesToString";
import { deepMerge } from "./deepMerge";
import formatCss from "./formatCss";

const aggregate: CssAggregate = {
  keyframes: { keyword: "@keyframes ", method: queryToString },
  media: { keyword: "@media ", method: queryToString },
  class: { keyword: ".", method: stylesToString },
  id: { keyword: "#", method: stylesToString },
  global: { keyword: "", method: stylesToString },
};

let _theme: MinUiTheme = DefaultTheme;
let _idx = 0;

/**
 * Theme
 */
export function SetTheme(theme: MinUiTheme) {
  _theme = deepMerge<MinUiTheme>(DefaultTheme, theme)!;
  mapThemeCharCssVars(theme);
}

/**
 * Merge the charts to the style object
 * @param keyword "class" | "id" | "global" | "keyframes" | "media"
 * @param themeAdder simple callback that applies a theme returns a Style object
 */
export function Use<K extends keyof CssAggregate, T>(
  keyword: K,
  themeAdder: (
    theme: MinUiTheme
  ) => K extends "class" | "id" | "global"
    ? CssStyleSheet
    : K extends "keyframes" | "media"
    ? CssQueries
    : T
): { [i in keyof T]: string } {
  const mappedTheme = { ..._theme, ...mappedCssVars };

  const lcssObj = themeAdder(mappedTheme);

  const lformatter = formatCss<T>(lcssObj, keyword, _idx);

  stringifyCssObject(lformatter.formattedCss, aggregate[keyword]);

  _idx++;
  return lformatter.names;
}

/**
 * Add css object to the stylesheet
 * @param keyword "class" | "id" | "global" | "keyframes" | "media"
 * @param cssObj style object
 */
export function Add<K extends keyof CssAggregate, T>(
  keyword: K,
  cssObj: K extends "class" | "id" | "global"
    ? CssStyleSheet
    : K extends "keyframes" | "media"
    ? CssQueries
    : T
): { [i in keyof T]: string } {
  const formatter = formatCss<T>(cssObj, keyword, _idx);
  stringifyCssObject(formatter.formattedCss, aggregate[keyword]);

  _idx++;
  return formatter.names;
}
