import MinUiBuilder from "./MinUiBuilder";
import MinUiShaper from "./MinUiShaper";
import LightDefaultTheme from "./DefaultTheme";
import DarkDefaultTheme from "./DarkDefaultTheme";

export default class MinUi {
  private static _instance: MinUi;

  private _idx: number = 0;
  private _light: MinUiTheme = LightDefaultTheme;
  private _dark: MinUiTheme = DarkDefaultTheme;
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
  public set Light(light: MinUiTheme) {
    this._light = this.DeepMerge(LightDefaultTheme, light);
  }

  /**
   * Theme
   */
  public set Dark(dark: MinUiTheme) {
    this._light = this.DeepMerge(DarkDefaultTheme, dark);
  }

  /**
   * Theme
   */
  public set Measures(measures: MinUiSizes) {
    this._light = this.DeepMerge(DarkDefaultTheme, this._light, measures);
    this._light = this.DeepMerge(LightDefaultTheme, this._dark, measures);
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
   * @param f keyframe rule object
   */
  private QueryToString(
    frames: CssKeyFramesAtValues,
    f: { [name: string]: string } = {}
  ) {
    Object.keys(frames).map((frame) => {
      // can't reuse stringifyStyles!?
      f[frame] = Object.keys(frames[frame]).reduce((prev, curr) => {
        return `${(prev += curr
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase())}:${frames[frame][curr]};`;
      }, "");
    });

    return Object.keys(f).reduce((prev, curr) => {
      return `${(prev += curr)}{${f[curr]}}`;
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
   * @param measureAdder simple callback that returns a Style object
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
   * @param colorAdder simple callback that returns a Style object
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
   * @param themeAdder simple callback that returns a Style object
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
    const lcssObj = themeAdder(this._light);
    const dcssObj = themeAdder(this._dark);

    const lformatter = new MinUiShaper(lcssObj as T, keyword, this._idx);
    const dformatter = new MinUiShaper(dcssObj as T, keyword, this._idx);

    MinUiBuilder.Css.Build(lformatter.Css, this._aggregate[keyword]);
    MinUiBuilder.Css.Build(dformatter.Css, this._aggregate[keyword], true);

    this._idx++;
    return lformatter.Names;
  }

  /**
   * Add css object to the stylesheet
   * @param keyword "class" "keyframe"
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
