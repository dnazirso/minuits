import CssCommonValues from "./CssCommonValues";

type ItemsModifier =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "self-start"
  | "self-end"
  | "baseline"
  | "revert"
  | "stretch"
  | "end"
  | "start";

type ContentModifier =
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

type GridAutoFlow = "row" | "column" | "row dense" | "column dense";

interface CssGridContainer {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridTemplate?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  gap?: number | string;
  gridGap?: number | string;
  justifyItems?: CssCommonValues | ItemsModifier;
  placeItems?: CssCommonValues | ItemsModifier;
  placeContent?: CssCommonValues | ContentModifier;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridAutoFlow?: GridAutoFlow;
  grid?: string;
}

export default CssGridContainer;
