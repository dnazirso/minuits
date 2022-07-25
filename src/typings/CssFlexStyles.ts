export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexFlow = "column" | "wrap";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right"
  | "safe"
  | "unsafe";

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "self-start"
  | "self-end"
  | "baseline"
  | "start"
  | "end"
  | "safe"
  | "unsafe";

type AlignContent =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "start"
  | "end"
  | "baseline"
  | "first baseline"
  | "last baseline";

type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

type VerticalAlign =
  | "baseline"
  | "top"
  | "bottom"
  | "middle"
  | "text-top"
  | "text-bottom"
  | "sub"
  | "super"
  | "length";

/**
 * @description CSS3 properties
 */
interface CssFlexStyles {
  flexDirection?: FlexDirection;
  flexFlow?: FlexFlow;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: "auto" | number;
  flex?: string | number;
  alignSelf?: AlignSelf;

  /**
   * @description 'The <code>vertical-align</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies the vertical alignment of an inline or table-cell element.'
   */
  verticalAlign?: VerticalAlign;
}

export default CssFlexStyles;
