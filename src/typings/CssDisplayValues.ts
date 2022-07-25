import CssCommonValues from "./CssCommonValues";

type DisplayOutside = "block" | "inline" | "run-in";
type DisplayInside = "flow" | "flow-root" | "table" | "flex" | "grid" | "ruby";
type DisplayListitem = "flow" | "flow-root" | "list-item";
type DisplayInternal =
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container";
type DisplayBox = "contents" | "none";
type DisplayLegacy =
  | "inline-block"
  | "inline-list-item"
  | "inline-table"
  | "inline-flex"
  | "inline-grid";

type CssDisplayValues =
  | DisplayOutside
  | DisplayInside
  | DisplayListitem
  | DisplayInternal
  | DisplayBox
  | DisplayLegacy
  | CssCommonValues;

export default CssDisplayValues;
