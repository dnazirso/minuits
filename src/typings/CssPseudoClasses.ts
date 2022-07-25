import CssStyles from "./CssStyles";

export interface CssPseudoStyle extends CssStyles {
  isPseudo: boolean;
}

interface CssPeudoClasses {
  active?: CssPseudoStyle;
  anyLink?: CssPseudoStyle;
  blank?: CssPseudoStyle;
  checked?: CssPseudoStyle;
  current?: CssPseudoStyle;
  default?: CssPseudoStyle;
  defined?: CssPseudoStyle;
  dir?: CssPseudoStyle;
  disabled?: CssPseudoStyle;
  drop?: CssPseudoStyle;
  empty?: CssPseudoStyle;
  enabled?: CssPseudoStyle;
  first?: CssPseudoStyle;
  firstChild?: CssPseudoStyle;
  firstOfType?: CssPseudoStyle;
  fullscreen?: CssPseudoStyle;
  future?: CssPseudoStyle;
  focus?: CssPseudoStyle;
  focusVisible?: CssPseudoStyle;
  focusWithin?: CssPseudoStyle;
  has?: CssPseudoStyle;
  host?: CssPseudoStyle;
  hostContext?: CssPseudoStyle;
  hover?: CssPseudoStyle;
  indeterminate?: CssPseudoStyle;
  inRange?: CssPseudoStyle;
  invalid?: CssPseudoStyle;
  is?: CssPseudoStyle;
  lang?: CssPseudoStyle;
  lastChild?: CssPseudoStyle;
  lastOfType?: CssPseudoStyle;
  link?: CssPseudoStyle;
  localLink?: CssPseudoStyle;
  not?: CssPseudoStyle;
  nthChild?: CssPseudoStyle;
  nthCol?: CssPseudoStyle;
  nthLastChild?: CssPseudoStyle;
  nthLastCol?: CssPseudoStyle;
  nthLastOfType?: CssPseudoStyle;
  nthOfType?: CssPseudoStyle;
  onlyChild?: CssPseudoStyle;
  onlyOfType?: CssPseudoStyle;
  optional?: CssPseudoStyle;
  outOfRange?: CssPseudoStyle;
  past?: CssPseudoStyle;
  placeholderShown?: CssPseudoStyle;
  readOnly?: CssPseudoStyle;
  readWrite?: CssPseudoStyle;
  required?: CssPseudoStyle;
  root?: CssPseudoStyle;
  scope?: CssPseudoStyle;
  state?: CssPseudoStyle;
  target?: CssPseudoStyle;
  targetWithin?: CssPseudoStyle;
  userInvalid?: CssPseudoStyle;
  valid?: CssPseudoStyle;
  visited?: CssPseudoStyle;
  where?: CssPseudoStyle;
}

export default CssPeudoClasses;
