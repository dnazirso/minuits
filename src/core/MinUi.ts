/* eslint-disable @typescript-eslint/no-explicit-any */
import MinUiBuilder from "./MinUiBuilder";
import MinUiShaper from "./MinUiShaper";
import DefaultTheme from "./DefaultTheme";

export default class MinUi {
  private static _instance: MinUi;

  private _idx = 0;
  private _theme: MinUiTheme = DefaultTheme;
  private _aggregate: CssAggregate = {
    keyframes: { keyword: "@keyframes ", method: this.QueryToString },
    media: { keyword: "@media ", method: this.QueryToString },
    class: { keyword: ".", method: this.StylesToString },
    id: { keyword: "#", method: this.StylesToString },
    global: { keyword: "", method: this.StylesToString },
  };

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
    this._theme = this.DeepMerge(DefaultTheme, theme);
  }

  /**
   * Simple object check.
   * @param item
   * @returns {boolean}
   */
  private isObject = (obj: any) => obj && typeof obj === "object";

  /**
   * Performs a deep merge of `source` into `target`.
   * Mutates `target` only but not its objects and arrays.
   */
  private DeepMerge(...objects: any[]) {
    const deepMergeInner = (target: any, source: any) => {
      Object.keys(source).forEach((key: string) => {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          target[key] = targetValue.concat(sourceValue);
        } else if (this.isObject(targetValue) && this.isObject(sourceValue)) {
          target[key] = deepMergeInner(
            Object.assign({}, targetValue),
            sourceValue
          );
        } else {
          target[key] = sourceValue;
        }
      });

      return target;
    };

    if (objects.length < 2) {
      throw new Error(
        "deepMerge: this function expects at least 2 objects to be provided"
      );
    }

    if (objects.some((object) => !this.isObject(object))) {
      throw new Error('deepMerge: all values should be of type "object"');
    }

    const target = objects.shift();
    let source: any;

    while ((source = objects.shift())) {
      deepMergeInner(target, source);
    }

    return target;
  }

  /**
   * Stringify a keyframe object
   * @param frames keyframes object
   * @param rule keyframe rule object
   */
  private QueryToString(
    frames: CssKeyFramesAtValues,
    rule: { [name: string]: string } = {}
  ) {
    Object.keys(frames).map((frame) => {
      // can't reuse stringifyStyles!?
      rule[frame] = Object.keys(frames[frame]).reduce((prev, curr) => {
        return `${(prev += curr
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase())}:${frames[frame][curr]};`;
      }, "");
    });

    return Object.keys(rule).reduce((prev, curr) => {
      return `${(prev += curr)}{${rule[curr]}}`;
    }, "");
  }

  /**
   * Stringify styles
   * @param cssObj css object
   */
  private StylesToString(cssObj: CssStyles) {
    return Object.keys(cssObj).reduce((prev, curr) => {
      return `${(prev += curr
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase())}:${cssObj[curr]};`;
    }, "");
  }

  /**
   * Apply the measures to the style object
   * @param keyword "class" | "id" | "global" | "keyframes" | "media"
   * @param measureAdder simple callback that applies a theme returns a Style object
   */
  public Size<K extends keyof CssAggregate, T>(
    keyword: K,
    measureAdder: (
      measures: MinUiSizes
    ) => K extends "class" | "id" | "global"
      ? CssStyleSheet
      : K extends "keyframes" | "media"
      ? CssQueries
      : T
  ): { [i in keyof T]?: string | undefined } {
    return this.Use(keyword, measureAdder);
  }

  /**
   * Apply the measures to the style object
   * @param keyword "class" | "id" | "global" | "keyframes" | "media"
   * @param colorAdder simple callback that applies a theme returns a Style object
   */
  public Paint<K extends keyof CssAggregate, T>(
    keyword: K,
    colorAdder: (
      measures: MinUiColors
    ) => K extends "class" | "id" | "global"
      ? CssStyleSheet
      : K extends "keyframes" | "media"
      ? CssQueries
      : T
  ): { [i in keyof T]?: string | undefined } {
    return this.Use(keyword, colorAdder);
  }

  /**
   * Merge the charts to the style object
   * @param keyword "class" | "id" | "global" | "keyframes" | "media"
   * @param themeAdder simple callback that applies a theme returns a Style object
   */
  public Use<K extends keyof CssAggregate, T>(
    keyword: K,
    themeAdder: (
      colors: MinUiTheme
    ) => K extends "class" | "id" | "global"
      ? CssStyleSheet
      : K extends "keyframes" | "media"
      ? CssQueries
      : T
  ): { [i in keyof T]?: string | undefined } {
    const lcssObj = themeAdder(this._theme);

    const lformatter = new MinUiShaper(lcssObj as T, keyword, this._idx);

    MinUiBuilder.Css.Build(lformatter.Css, this._aggregate[keyword]);

    this._idx++;
    return lformatter.Names;
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
    const formatter = new MinUiShaper(cssObj as T, keyword, this._idx);
    MinUiBuilder.Css.Build(formatter.Css, this._aggregate[keyword]);

    this._idx++;
    return formatter.Names;
  }
}
