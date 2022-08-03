import CssFlexStyles from "./CssFlexStyles";
import CssGridStyles from "./CssGridStyles";
import CssPseudoClasses from "./CssPseudoClasses";
import CssStandardStyles from "./CssStandardStyles";
import Indexable from "./Indexable";

interface CssStyles
  extends CssStandardStyles,
    CssFlexStyles,
    CssPseudoClasses,
    CssGridStyles,
    Indexable {}

export default CssStyles;
