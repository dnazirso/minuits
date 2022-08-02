/* eslint-disable @typescript-eslint/no-explicit-any */

import { CssKeywordMethod } from "../typings/CssAggregate";

/**
 * Isomorphic class in charge of reading the code and editing the css as needed
 */
export default class MinUiBuilder {
  private static _instance: MinUiBuilder;
  private _cssString = "";
  private _minuiCssClasses: HTMLStyleElement;
  private _minuiCssVars: HTMLStyleElement;
  private _CssVarsObj: { [index: string]: string };

  private constructor() {
    this._minuiCssVars = this.CreateStyleElement("MinUiTScssVarsId");
    this._minuiCssClasses = this.CreateStyleElement("MinUiTScssId");
    this._CssVarsObj = {};
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
  private CreateStyleElement(name: string) {
    let style: HTMLStyleElement | null = document.head.querySelector(
      `#${name}`
    );
    if (style != null) {
      this._cssString = style.innerText;
      return style;
    }
    style = document.createElement("style");
    style.id = name;
    style.appendChild(document.createTextNode(":root{}"));
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
        this._minuiCssClasses.innerHTML += ` ${s}`;
      }
    });
  }

  public addCssVar(name: string, value: string) {
    this._CssVarsObj = { ...this._CssVarsObj, [name]: value };
    const cssVarsStr = this.stringifyCssVars();
    this._minuiCssVars.innerHTML = cssVarsStr;
  }

  private stringifyCssVars(): string {
    let cssVarString = "";
    for (const cssVar in this._CssVarsObj) {
      if (Object.prototype.hasOwnProperty.call(this._CssVarsObj, cssVar)) {
        cssVarString += `--${[cssVar]}:${this._CssVarsObj[cssVar]};`;
      }
    }
    return `:root{${cssVarString}}`;
  }
}
