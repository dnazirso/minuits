import CssFlexStyles from "./CssFlexStyles";
import CssGridStyles from "./CssGridStyles";
import CssPeudoClasses from "./CssPseudoClasses";
import CssStandardStyles from "./CssStandardStyles";
import Indexable from "./Indexable";

interface CssStyles
  extends CssStandardStyles,
    CssFlexStyles,
    CssPeudoClasses,
    CssGridStyles,
    Indexable {}

export default CssStyles;
