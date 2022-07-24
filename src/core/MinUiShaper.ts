/**
 * Represent a CSS formatter the rearrange a css object to a
 * stringyfiable version of it
 */
export default class MinUiShaper<T extends { [x: string]: any }> {
  private _names: { [i in keyof T]?: string } = {};
  private _formattedCss: { [x: string]: any } = {};

  /**
   * Constructor
   * @param cssObj css object
   */
  constructor(cssObj: T, keyword: keyof CssAggregate, idx: number) {
    this.FormatCss(cssObj, keyword, idx);
  }

  /**
   * Formatted css object
   */
  public get Css(): { [x: string]: any } {
    return this._formattedCss;
  }

  /**
   * Css object names
   */
  public get Names(): { [i in keyof T]?: string | undefined } {
    return this._names;
  }

  /**
   * Format a style property
   * @param style style rules object
   * @param styleProp style property string
   */
  private FormatStyleProp(style: CssStyles, styleProp: string) {
    if (
      needPxList.includes(styleProp) &&
      typeof style[styleProp] === "number"
    ) {
      return `${style[styleProp]}px`;
    }
    return style[styleProp];
  }

  /**
   * Format a style object
   * @param style css style rules object
   */
  private FormatStyles(style: CssStyles) {
    const restyled: CssStyles = {};

    Object.keys(style).map((k) => {
      restyled[k] = this.FormatStyleProp(style, k);
    });

    return restyled;
  }

  /**
   * Type guard to detect pseudo classes
   * @param toBeDetermined unknown object
   */
  private IsPseudoClass<T extends { [x: string]: any }>(
    toBeDetermined: any,
    keytocheck: string
  ): toBeDetermined is T {
    return (toBeDetermined as T)[keytocheck];
  }

  /**
   * Format css object to obtain a stringyfiable version of it
   * @param cssObj css object
   */
  private FormatCss(cssObj: T, keyword: keyof CssAggregate, idx: number) {
    // pass references of cssObj to tempCssObj in order
    // to avoid loosing it while working on cssObj
    this._formattedCss = cssObj;
    Object.keys(cssObj)
      .filter((v, i, a) => {
        return a.indexOf(v) === i;
      })
      .map((name: keyof T, i) => {
        const _clsName = `m${idx}_${i}`;
        this._names[name] = _clsName;
        const _class: { [x: string]: any } = {};
        Object.keys(cssObj[name]).map((cssProperty) => {
          if (typeof cssObj[name][cssProperty] === "object") {
            if (this.IsPseudoClass(cssObj[name][cssProperty], "isPseudo")) {
              delete cssObj[name][cssProperty]["isPseudo"];
              this._formattedCss[`${_clsName}:${cssProperty}`] =
                this.FormatStyles(cssObj[name][cssProperty]);
            } else {
              _class[cssProperty] = this.FormatStyles(
                cssObj[name][cssProperty]
              );
            }
          } else {
            _class[cssProperty] = this.FormatStyleProp(
              cssObj[name],
              cssProperty
            );
          }
        });
        if (keyword === "media" || keyword === "global") {
          this._formattedCss[name.toString()] = _class;
          return;
        }
        this._formattedCss[_clsName] = _class;
        delete cssObj[name];
      });
  }
}

const needPxList = [
  "borderRadius",
  "borderWidth",
  "borderTop",
  "borderBottom",
  "borderLeft",
  "borderRight",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "gap",
  "gridGap",
  "padding",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "margin",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "width",
  "height",
  "maxWidth",
  "maxHeight",
  "minWidth",
  "minHeight",
  "top",
  "bottom",
  "left",
  "right",
];
