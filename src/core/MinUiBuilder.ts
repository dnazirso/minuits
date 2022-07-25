/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Isomorphic class in charge of reading the code and editing the css as needed
 */
export default class MinUiBuilder {
  private static _instance: MinUiBuilder;
  private _cssString = "";
  private _elmt: HTMLStyleElement | undefined;

  private constructor() {
    if (typeof window !== "undefined") {
      this._elmt = this.CreateStyleElement();
    }
  }

  /**
   * @see MinUiBuilder instance
   */
  public static get Css(): MinUiBuilder {
    return this._instance || (this._instance = new this());
  }

  /**
   * Retrieve the CSS string for server side purpose
   */
  public get String(): string {
    return this._cssString;
  }

  /**
   * Create an html style element if client side
   */
  private CreateStyleElement() {
    let style: HTMLStyleElement | null =
      document.head.querySelector("#MinUiTScssId");
    if (style != null) {
      this._cssString = style.innerText;
      return style;
    }
    style = document.createElement("style");
    style.id = "MinUiTScssId";
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style;
  }

  /**
   * stringify a json into a valid css keyframe and return a string
   * for server side rendering. if client side, push css in a style tag
   * @param cssObj contains css class objects
   */
  public Build<T extends { [x: string]: any }>(
    cssObj: T,
    keyworkMethod: CssKeywordMethod
  ): void {
    Object.keys(cssObj).forEach((name) => {
      const s = `${keyworkMethod.keyword}${name}{${keyworkMethod.method(
        cssObj[name]
      )}}`;
      const i = this._cssString.indexOf(s);
      if (i < 0) {
        this._cssString += s;
        this._elmt?.appendChild(document.createTextNode(s));
      }
    });
  }
}
