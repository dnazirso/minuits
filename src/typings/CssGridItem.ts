import CssCommonValues from "./CssCommonValues";

type PlaceSelf =
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

type JustifySelf = "left" | "right";

interface CssGridItem {
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
  gridColumn?: string;
  gridRow?: string;
  gridArea?: string;
  justifySelf?: CssCommonValues | PlaceSelf | JustifySelf;
  placeSelf?: CssCommonValues | PlaceSelf;
}

export default CssGridItem;
