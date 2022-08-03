/* eslint-disable @typescript-eslint/no-explicit-any */
import MinUiBuilder from "./MinUiBuilder";
import DefaultTheme, { mappedCssVars } from "./DefaultTheme";
import CssAggregate from "../typings/CssAggregate";
import CssQueries from "../typings/CssQueries";
import CssStyleSheet from "../typings/CssStyleSheet";
import MinUiTheme from "../typings/MinUiTheme";
import { queryToString } from "./queryToString";
import { stylesToString } from "./stylesToString";
import { mapThemeCharCssVars } from "./mapThemeCharCssVars";
import { deepMerge } from "./deepMerge";
import formatCss from "./formatCss";

const aggregate: CssAggregate = {
  keyframes: { keyword: "@keyframes ", method: queryToString },
  media: { keyword: "@media ", method: queryToString },
  class: { keyword: ".", method: stylesToString },
  id: { keyword: "#", method: stylesToString },
  global: { keyword: "", method: stylesToString },
};

export default class MinUi {
  private static _instance: MinUi;

  private _idx = 0;
  private _theme: MinUiTheme = DefaultTheme;

  /**
   * @see MinUi instance
   */
  public static get Css(): MinUi {
    return this._instance || (this._instance = new this());
  }

  /**
   * Theme
   */
  public set Theme(theme: MinUiTheme) {
    this._theme = deepMerge(DefaultTheme, theme);
    mapThemeCharCssVars(theme);
  }

  /**
   * Merge the charts to the style object
   * @param keyword "class" | "id" | "global" | "keyframes" | "media"
   * @param themeAdder simple callback that applies a theme returns a Style object
   */
  public Use<K extends keyof CssAggregate, T>(
    keyword: K,
    themeAdder: (
      theme: MinUiTheme
    ) => K extends "class" | "id" | "global"
      ? CssStyleSheet
      : K extends "keyframes" | "media"
      ? CssQueries
      : T
  ): { [i in keyof T]?: string | undefined } {
    const mappedTheme = { ...this._theme, ...mappedCssVars };

    const lcssObj = themeAdder(mappedTheme);

    const lformatter = formatCss(lcssObj, keyword, this._idx);

    MinUiBuilder.Css.Build(lformatter.formattedCss, aggregate[keyword]);

    this._idx++;
    return lformatter.names;
  }

  /**
   * Add css object to the stylesheet
   * @param keyword "class" | "id" | "global" | "keyframes" | "media"
   * @param cssObj style object
   */
  public Add<K extends keyof CssAggregate, T>(
    keyword: K,
    cssObj: K extends "class" | "id" | "global"
      ? CssStyleSheet
      : K extends "keyframes" | "media"
      ? CssQueries
      : T
  ): { [i in keyof T]?: string | undefined } {
    const formatter = formatCss(cssObj, keyword, this._idx);
    MinUiBuilder.Css.Build(formatter.formattedCss, aggregate[keyword]);

    this._idx++;
    return formatter.names;
  }
}
