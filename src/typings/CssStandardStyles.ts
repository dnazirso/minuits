import CssCommonValues from "./CssCommonValues";
import CssDisplayValues from "./CssDisplayValues";
import CssPositionValues from "./CssPositionValues";

/**
 * @description CSS3 properties
 */
interface CssStandardStyles {
  /**
   * @description 'The <code>animation</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand property for <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-name">animation-name</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-duration">animation-duration</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-timing-function">animation-timing-function</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-delay">animation-delay</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-iteration-count">animation-iteration-count</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/animation-direction">animation-direction</a></code>\n.'
   */
  animation?: string;

  /**
   * @description 'The <code>animation-delay</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies when the animation should start. This lets the animation sequence begin some time after it\'s applied to an element.'
   */
  animationDelay?: string;

  /**
   * @description "The <code>animation-direction</code> CSS property indicates whether the animation should play in reverse on alternate cycles."
   */
  animationDirection?: string;

  /**
   * @description "The <code>animation-duration</code> CSS property specifies the length of time that an animation should take to complete one cycle."
   */
  animationDuration?: string;

  /**
   * @description 'The <code>animation-iteration-count</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property defines the number of times an animation cycle should be played before stopping.'
   */
  animationIterationCount?: string;

  /**
   * @description 'The <code>animation-name</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies a list of animations that should be applied to the selected element. Each name indicates a <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/@keyframes">@keyframes</a></code>\n at-rule that defines the property values for the animation sequence.'
   */
  animationName?: string;

  /**
   * @descriptio 'The <code>animation-play-state</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines whether an animation is running or paused. You can query this property\'s value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.'
   */
  animationPlayState?: string;

  /**
   * @description'The <code>animation-timing-function</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <span class="lang lang-en"><code><a rel="custom" href="https://developer.mozilla.org/en/CSS/timing-function">&lt;timing-function&gt;</a></code>\n </span>.'
   */
  animationTimingFunction?: string;

  /**
   * @description "In combination with<code> elevation</code>, <code>azimuth</code> enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage."
   */
  azimuth?: string;

  /**
   * @description 'The <code>backface-visibility</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.'
   */
  backfaceVisibility?: string;

  /**
   * @description 'The<code> background </code>CSS property is a shorthand for setting the individual background values in a single place in the style sheet.<code> background </code>can be used to set the values for one or more of: <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-color">background-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-image">background-image</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-position">background-position</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-repeat">background-repeat</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-size">background-size</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-attachment">background-attachment</a></code>\n.'
   */
  background?: string;

  /**
   * @description 'If a <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-image">background-image</a></code>\n is specified, the <code>background-attachment</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines whether that image\'s position is fixed within the viewport, or scrolls along with its containing block.'
   */
  backgroundAttachment?: string;

  /**
   * @description "The<code> background-clip </code>CSS property specifies whether an element's background, either the color or image, extends underneath its border."
   */
  backgroundClip?: string;

  /**
   * @description 'The <code>background-color</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the background color of an element, either through a color value or the keyword <code>transparent</code>.'
   */
  backgroundColor?: string;

  /**
   * @description 'The<code> background-image </code>CSS property sets the background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The <a title="border" rel="internal" href="https://developer.mozilla.org/cn/CSS/border">borders</a> of the element are then drawn on top of them, and the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-color">background-color</a></code>\n is drawn beneath them.'
   */
  backgroundImage?: string;

  /**
   * @description 'The<code> background-origin </code>CSS property determines the background positioning area, that is the position of the origin of an image specified using the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-image">background-image</a></code>\n CSS property.'
   */
  backgroundOrigin?: string;

  /**
   * @description 'The<code> background-position </code>CSS property sets the initial position, relative to the background position layer defined by <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/background-origin">background-origin</a></code>\n for each defined background image.'
   */
  backgroundPosition?: string;

  /**
   * @description 'The <code>background-repeat</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both, or not repeated at all. When the repetition of the image tiles doesn\'t let them exactly cover the background, the way adjustments are done can be controlled by the author: by default, the last image is clipped, but the different tiles can instead be re-sized, or space can be inserted between the tiles.'
   */
  backgroundRepeat?: string;

  /**
   * @description "The<code> background-size </code>CSS property specifies the size of the background images."
   */
  backgroundSize?: string;

  /**
   * @description "This property specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled."
   */
  bleed?: string;

  /**
   * @description 'The <code>border</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand property for setting the individual border property values in a single place in the style sheet. <code>border</code> can be used to set the values for one or more of: <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-width">border-width</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-style">border-style</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-color">border-color</a></code>\n.'
   */
  border?: string;

  /**
   * @description 'The <code>border-bottom</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand that sets the values of <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-bottom-color">border-bottom-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-bottom-style">border-bottom-style</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-bottom-width">border-bottom-width</a></code>\n. These properties describe the bottom border of elements.'
   */
  borderBottom?: number | string;

  /**
   * @description 'The<code> border-bottom-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-color">border-color</a></code>\n or <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-bottom">border-bottom</a></code>\n are more convenient and preferable.'
   */
  borderBottomColor?: string;

  /**
   * @description "The <code>border-bottom-left-radius</code> CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square."
   */
  borderBottomLeftRadius?: number | string;

  /**
   * @description "The <code>border-bottom-right-radius</code> CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square."
   */
  borderBottomRightRadius?: number | string;

  /**
   * @description 'The <code>border-bottom-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the line style of the bottom border of a box.'
   */
  borderBottomStyle?: string;

  /**
   * @description 'The <code>border-bottom-width</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the width of the bottom border of a box.'
   */
  borderBottomWidth?: number | string;

  /**
   * @description "The<code> border-collapse </code>CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
   */
  borderCollapse?: string;

  /**
   * @description 'The<code> border-color </code>CSS property is a shorthand for setting the color of the four sides of an element\'s border: <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-top-color">border-top-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-right-color">border-right-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-bottom-color">border-bottom-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-left-color">border-left-color</a></code>\n'
   */
  borderColor?: string;

  /**
   * @description "The<code> border-image </code>CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."
   */
  borderImage?: string;

  /**
   * @description 'The <code>border-image-outset </code>property describes, by which amount <dfn id="border-image-area">border image area</dfn> extends beyond the border box.'
   */
  borderImageOutset?: string;

  /**
   * @description "The <code>border-image-repeat</code> CSS property defines how the middle part of a border image is handled to match the size of the border. It has a one-value syntax which describes the behavior for all sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior."
   */
  borderImageRepeat?: string;

  /**
   * @description 'The <code>border-image-source</code> CSS property defines the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/image">&lt;image&gt;</a></code>\n to use instead of the style of the border. If this property is set to <code>none</code>, the style defined by <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-style">border-style</a></code>\n is used instead.'
   */
  borderImageSource?: string;

  /**
   * @description "The <code>border-image-width</code> CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom and right edges."
   */
  borderImageWidth?: number | string;

  /**
   * @description 'The <code>border-left</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand that sets the values of <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-left-color">border-left-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-left-style">border-left-style</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-left-width">border-left-width</a></code>\n. These properties describe the left border of elements.'
   */
  borderLeft?: number | string;

  /**
   * @description 'The<code> border-left-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-color">border-color</a></code>\n or <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-left">border-left</a></code>\n are more convenient and preferable.'
   */
  borderLeftColor?: string;

  /**
   * @description 'The <code>border-left-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the line style of the left border of a box.'
   */
  borderLeftStyle?: string;

  /**
   * @description 'The <code>border-left-width</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the width of the left border of a box.'
   */
  borderLeftWidth?: number | string;

  /**
   * @description "The <code>border-radius</code> CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."
   */
  borderRadius?: number | string;

  /**
   * @description 'The <code>border-right</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand that sets the values of <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-right-color">border-right-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-right-style">border-right-style</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-right-width">border-right-width</a></code>\n. These properties describe the right border of elements.'
   */
  borderRight?: number | string;

  /**
   * @description 'The<code> border-right-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-color">border-color</a></code>\n or <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-right">border-right</a></code>\n are more convenient and preferable.'
   */
  borderRightColor?: string;

  /**
   * @description 'The <code>border-right-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the line style of the right border of a box.'
   */
  borderRightStyle?: string;

  /**
   * @description 'The <code>border-right-width</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the width of the right border of a box.'
   */
  borderRightWidth?: number | string;

  /**
   * @description 'The <code>border-spacing</code> CSS property specifies the distance between the borders of adjacent cells (only for the <a title="en/CSS/border-collapse" rel="internal" href="https://developer.mozilla.org/en/CSS/border-collapse">separated borders model</a>). This is equivalent to the <code>cellspacing</code> attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.'
   */
  borderSpacing?: number | string;

  /**
   * @description 'The <code>border-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand property for setting the line style for all four sides of the elements border.'
   */
  borderStyle?: string;

  /**
   * @description 'The <code>border-top</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand that sets the values of <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-top-color">border-top-color</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-top-style">border-top-style</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-top-width">border-top-width</a></code>\n. These properties describe the top border of elements.'
   */
  borderTop?: number | string;

  /**
   * @description 'The<code> border-top-color </code>CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-color">border-color</a></code>\n or <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-top">border-top</a></code>\n are more convenient and preferable.'
   */
  borderTopColor?: string;

  /**
   * @description "The <code>border-top-left-radius</code> CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square."
   */
  borderTopLeftRadius?: number | string;

  /**
   * @description "The <code>border-top-right-radius</code> CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square."
   */
  borderTopRightRadius?: number | string;

  /**
   * @description 'The <code>border-top-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the line style of the top border of a box.'
   */
  borderTopStyle?: string;

  /**
   * @description 'The <code>border-top-width</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property sets the width of the top border of a box.'
   */
  borderTopWidth?: number | string;

  /**
   * @description 'The<code> border-width </code>CSS property sets the width of the border of a box. Using the shorthand property <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border">border</a></code>\n is often more convenient.'
   */
  borderWidth?: number | string;

  /**
   * @description 'The <code>bottom</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property participates in specifying the position of <em>positioned elements</em>.'
   */
  bottom?: number | string;

  /**
   * @description 'The <code>box-shadow</code> CSS property accepts one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/border-radius">border-radius</a></code>\n is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple <a title="text-shadow" rel="internal" href="https://developer.mozilla.org/en/CSS/text-shadow">text shadows</a> (the first specified shadow is on top).'
   */
  boxShadow?: string;

  /**
   * @description "The<code> box-sizing </code>CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification."
   */
  boxSizing?: string;

  /**
   * @description 'The <code>caption-side</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property positions the content of a table\'s <code><a rel="custom" href="https://developer.mozilla.org/en/HTML/Element/caption">&lt;caption&gt;</a></code>\n on the specified side.'
   */
  captionSide?: string;

  /**
   * @description 'The <code>clear</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies whether an element can be next to <a title="en/CSS/float" rel="internal" href="https://developer.mozilla.org/en/CSS/float">floating</a> elements that precede it or must be moved down (cleared) below them.'
   */
  clear?: string;

  /**
   * @description 'The <code>clip</code> CSS property defines what portion of an element is visible. The <code>clip</code> property applies only to elements with <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/position">position:absolute</a></code>\n.'
   */
  clip?: string;

  /**
   * @description "The <code>color</code> CSS property sets the foreground color of an element's text content"
   */
  color?: string;

  /**
   * @description "The <code>column-count </code>CSS property describes the number of columns of the element."
   */
  columnCount?: string;

  /**
   * @description "The <code>column-fill</code> CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using <code>auto</code>, just take up the room the content needs."
   */
  columnFill?: string;

  /**
   * @description "The <code>column-gap</code> CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element."
   */
  columnGap?: string;

  /**
   * @description 'In multi-column layouts, the <code>column-rule</code> CSS property specifies a straight line, or "rule", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual <code>column-rule-*</code> properties separately : <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-rule-width">column-rule-width</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-rule-style">column-rule-style</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-rule-color">column-rule-color</a></code>\n.'
   */
  columnRule?: string;

  /**
   * @description "The<code> column-rule-color </code>CSS property lets you set the color of the rule drawn between columns in multi-column layouts."
   */
  columnRuleColor?: string;

  /**
   * @description "The<code> column-rule-style </code>CSS property lets you set the style of the rule drawn between columns in multi-column layouts."
   */
  columnRuleStyle?: string;

  /**
   * @description "The<code> column-rule-width </code>CSS property lets you set the width of the rule drawn between columns in multi-column layouts."
   */
  columnRuleWidth?: string;

  /**
   * @description "The <code>column-span</code> CSS property makes it possible for an element to span across all columns when its value is set to <code>all</code>. An element that spans more than one column is called a <strong>spanning element</strong>."
   */
  columnSpan?: string;

  /**
   * @description 'The <code>column-width</code> CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-count">column-count</a></code>\n CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/width">width</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-width">column-width</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-gap">column-gap</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-rule-width">column-rule-width</a></code>\n.'
   */
  columnWidth?: string;

  /**
   * @description 'The <code>columns</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand property allowing to set both the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-width">column-width</a></code>\n and the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/column-count">column-count</a></code>\n properties at the same time.'
   */
  columns?: string;

  /**
   * @description 'The<code> content </code>CSS property is used with the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/%3Abefore">:before</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/%3Aafter">:after</a></code>\n pseudo-elements to generate content in an element.'
   */
  content?: string;

  /**
   * @description 'The <code>counter-increment</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is used to increase the value of <a title="en/CSS_Counters" rel="internal" href="https://developer.mozilla.org/en/CSS_Counters">CSS Counters</a> by a given value. The counter\'s value can be reset using the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/counter-reset">counter-reset</a></code>\n CSS property.'
   */
  counterIncrement?: string;

  /**
   * @description 'The <code>counter-reset</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is used to reset <a title="en/CSS_Counters" rel="internal" href="https://developer.mozilla.org/en/CSS_Counters">CSS Counters</a> to a given value.'
   */
  counterReset?: string;

  /**
   * @description "The<code> cursor </code>CSS property specifies the mouse cursor displayed when the mouse pointer is over an element."
   */
  cursor?: string;

  /**
   * @description "The <code>direction</code> CSS property should be set to match the direction of the text: <code>rtl</code> for Hebrew or Arabic text and <code>ltr</code> for other scripts. This should normally be done as part of the document (e.g., using the <code>dir</code> attribute in HTML) rather than through direct use of CSS."
   */
  direction?: string;

  /**
   * @description "The <code>display</code> CSS property specifies the type of rendering box used for an element. In HTML, default <code>display</code> property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is <code>inline</code>."
   */
  display?: CssDisplayValues;

  /**
   * @description "The <code>empty-cells </code>CSS property specifies how user agent should render borders and backgrounds around cells that have no visible content."
   */
  emptyCells?: string;

  /**
   * @description "The <code>float</code> CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it."
   */
  float?: string;

  /**
   * @description 'The <code>font</code> CSS property is either a shorthand property for setting <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-style">font-style</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-variant">font-variant</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-weight">font-weight</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-size">font-size</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/line-height">line-height</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-family">font-family</a></code>\n, or a way to set the element\'s font to a system font, using specific keywords.'
   */
  font?: string;

  /**
   * @description  'The<code> font-family </code>CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/@font-face">@font-face</a></code>\n at-rule.'
   */
  fontFamily?: string;

  /**
   * @description  'The <code>font-size</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies the size of the font. The font size may, in turn, change the size of other items, since it is used to compute the value of <code>em</code> and <code>ex</code> length units.'
   */
  fontSize?: string;

  /**
   * @description "The<code> font-size-adjust </code>CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters."
   */
  fontSizeAdjust?: string;

  /**
   * @description "The<code> font-stretch </code>CSS property selects a normal, condensed, or extended face from a font family."
   */
  fontStretch?: string;

  /**
   * @description 'The<code> font-style </code>CSS property allows<code> italic </code>or<code> oblique </code>faces to be selected within a <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-family">font-family</a></code>\n.<br> '
   */
  fontStyle?: string;

  /**
   * @description 'The<code> font-variant </code>CSS property selects a<code> normal</code>, or<code> small-caps </code>face from a font family. Setting<code> font-variant </code>is also possible by using the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font">font</a></code>\n shorthand.'
   */
  fontVariant?: string;

  /**
   * @description 'The <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/font-weight">font-weight</a></code>\n <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on <code>normal</code> and <code>bold</code>.'
   */
  fontWeight?: number | string;

  /**
   * @description 'The<code> height </code>CSS property specifies the height of the content area of an element. The <a title="en/CSS/Box_model#content" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#content">content area</a> is <em>inside</em> the padding, border, and margin of the element.'
   */
  height?: number | string;

  /**
   * @description 'The <code>hyphens</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.'
   */
  hyphens?: string;

  /**
   * @description 'The <code>image-rendering</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property provides a hint to the user agent about how to handle its image rendering.<br> <code>image-rendering </code>applies to scaled images (and other elements, see below). For example, if the natural size of the image is<em> 100×100px </em>but the page author specifies the dimensions to <code>200×200px</code> (or<code>50×50px</code>), then the image will be upscaled (or downscaled) to the new dimensions using the specified algorithm. Scaling may also apply due to user interaction (zooming).'
   */
  imageRendering?: string;

  /**
   * @description "The <code>left</code> CSS property specifies part of the position of positioned elements."
   */
  left?: number | string;

  /**
   * @description "The<code> letter-spacing </code>CSS property specifies spacing behavior between text characters."
   */
  letterSpacing?: string;

  /**
   * @description "On inline elements, the<code> line-height </code>CSS property specifies the height that is used in the calculation of the line box height.<br>\nOn block level elements,<code> line-height </code>specifies the minimal height of line boxes within the element."
   */
  lineHeight?: number | string;

  /**
   * @description 'The<code> list-style </code>CSS property is a shorthand property for setting <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/list-style-type">list-style-type</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/list-style-image">list-style-image</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/list-style-position">list-style-position</a></code>\n.'
   */
  listStyle?: string;

  /**
   * @description 'The<code> list-style-image </code>CSS property sets the image that will be used as the list item marker. It is often more convenient to use the shortcut <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/list-style">list-style</a></code>\n.'
   */
  listStyleImage?: string;

  /**
   * @description 'The<code> list-style-position </code>CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut <span class="lang lang-en"><code><a rel="custom" href="https://developer.mozilla.org/en/CSS/list-style">list-style</a></code>\n</span>.'
   */
  listStylePosition?: string;

  /**
   * @description 'The<code> list-style-type </code>CSS property specifies appearance of a list item element. As it is the only one who defaults to <code>display:list-item</code>, this is usually a <code><a rel="custom" href="https://developer.mozilla.org/en/HTML/Element/li">&lt;li&gt;</a></code>\n element, but can be any element with this <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/display">display</a></code>\n value.'
   */
  listStyleType?: string;

  /**
   * @description 'The<code> margin </code>CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties:<br>\n<code><a rel="custom" href="https://developer.mozilla.org/en/CSS/margin-top">margin-top</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/margin-right">margin-right</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/margin-bottom">margin-bottom</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/margin-left">margin-left</a></code>\n.<br>\nNegative value are also allowed.'
   */
  margin?: number | string;

  /**
   * @description 'The <code>margin-bottom</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.'
   */
  marginBottom?: number | string;

  /**
   * @descriptio 'The <code>margin-left</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the margin space required on the left side of an element. A negative value is also allowed.'n
   */
  marginLeft?: number | string;

  /**
   * @description 'The <code>margin-right</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the margin space required on the right side of an element. A negative value is also allowed.'
   */
  marginRight?: number | string;

  /**
   * @description "The<code> margin-top </code>CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed."
   */
  marginTop?: number | string;

  /**
   * @description "&nbsp;"
   */
  markerOffset?: string;

  /**
   * @description 'The <code>marks</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property adds crop and/or cross marks to the presentation of the document. <em>Crop marks</em> indicate where the page should be cut. <em>Cross marks</em> are used to align sheets.'
   */
  marks?: string;

  /**
   * @description 'The<code> max-height </code>CSS property is used to set the maximum height of a given element. It prevents the used value of the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/height">height</a></code>\n property from becoming larger than the value specified for<code> max-height</code>.'
   */
  maxHeight?: number | string;

  /**
   * @description 'The<code> max-width </code>CSS property is used to set the maximum width of a given element. It prevents the used value of the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/width">width</a></code>\n property from becoming larger than the value specified for<code> max-width</code>.'
   */
  maxWidth?: number | string;

  /**
   * @description 'The<code> min-height </code>CSS property is used to set the minimum height of a given element. It prevents the used value of the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/height">height</a></code>\n property from becoming smaller than the value specified for<code> min-height</code>.'
   */
  minHeight?: number | string;

  /**
   * @description 'The<code> min-width </code>CSS property is used to set the minimum width of a given element. It prevents the used value of the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/width">width</a></code>\n property from becoming smaller than the value specified for<code> min-width</code>.'
   */
  minWidth?: number | string;

  /**
   * @description "The <code>opacity</code> CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid."
   */
  opacity?: number | CssCommonValues;

  /**
   * @description 'The <code>orphans</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property refers to the <em>minimum</em> number of lines in a block container that must be left at the bottom of the page.&nbsp; This property is normally used to control how page breaks occur.'
   */
  orphans?: string;

  /**
   * @description 'The<code> outline </code>CSS property is a shorthand property for setting one or more of the individual outline properties <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/outline-style">outline-style</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/outline-width">outline-width</a></code>\n and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/outline-color">outline-color</a></code>\n in a single rule. In most cases the use of this shortcut is preferable and more convenient.'
   */
  outline?: number | string;

  /**
   * @description "The<code> outline-color </code>CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out."
   */
  outlineColor?: string;

  /**
   * @description 'The<code> outline-offset </code>CSS property is used to set space between an <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/outline">outline</a></code>\n and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.'
   */
  outlineOffset?: string;

  /**
   * @description "The<code> outline-style </code>CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out."
   */
  outlineStyle?: string;

  /**
   * @description "The<code> outline-width </code>CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:"
   */
  outlineWidth?: number | string;

  /**
   * @description "The<code> overflow </code>CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element."
   */
  overflow?: string;

  /**
   * @description  'The <code>overflow-x </code><a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.'
   */
  overflowX?: string;

  /**
   * @description  'The <code>overflow-y </code><a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.'
   */
  overflowY?: string;

  /**
   * @description 'The<code> padding </code>CSS property sets the required padding space on all sides of an element. The <a title="http://developer.mozilla.org/en/CSS/Box_model#padding" rel="internal" href="https://developer.mozilla.org/en/CSS/Box_model#padding">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.'
   */
  padding?: number | string;

  /**
   * @description 'The <code>padding-bottom</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the padding space required on the bottom of an element. The <a title="http://developer.mozilla.org/en/CSS/Box_model#padding" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#padding">padding area</a> is the space between the content of the element and it\'s border. A negative value is not allowed.'
   */
  paddingBottom?: number | string;

  /**
   * @description 'The <code>padding-left</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the padding space required on the left side of an element. The <a title="http://developer.mozilla.org/en/CSS/Box_model#padding" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#padding">padding area</a> is the space between the content of the element and it\'s border. A negative value is not allowed.'
   */
  paddingLeft?: number | string;

  /**
   * @description 'The <code>padding-right</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the padding space required on the right side of an element. The <a title="http://developer.mozilla.org/en/CSS/Box_model#padding" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#padding">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.'
   */
  paddingRight?: number | string;

  /**
   * @description 'The <code>padding-top</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property of an element sets the padding space required on the top of an element. The <a title="http://developer.mozilla.org/en/CSS/Box_model#padding" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#padding">padding area</a> is the space between the content of the element and it\'s border. A negative values is not allowed.'
   */
  paddingTop?: number | string;

  /**
   * @description "The <code>page-break-after</code> CSS property adjusts page breaks <em>after</em> the current element."
   */
  pageBreakAfter?: string;

  /**
   * @description "The <code>page-break-before</code> CSS property adjusts page breaks <em>before</em> the current element."
   */
  pageBreakBefore?: string;

  /**
   * @description "The <code>page-break-inside</code> CSS property adjusts page breaks <em>inside</em> the current element."
   */
  pageBreakInside?: string;

  /**
   * @description 'The <code>perspective</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element that is placed between the z=0 and the user is enlarged, each 3D-element with z&lt;0 is shrinked. How much deformation is defined by the value of this property.'
   */
  perspective?: string;

  /**
   * @description 'The <code>perspective-origin</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines the position the viewer is looking at. It is used as the <em>vanishing point</em> by the <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/perspective">perspective</a></code>\n property.'
   */
  perspectiveOrigin?: string;

  /**
   * @description "The<code> position </code>CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
   */
  position?: CssPositionValues;

  /**
   * @description 'The <code>quotes</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property indicates how user agents should render quotation marks.'
   */
  quotes?: string;

  /**
   * @description "The <code>resize</code> CSS property lets you control the resizability of an element."
   */
  resize?: string;

  /**
   * @description 'The <code>right</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies part of the position of positioned elements.'
   */
  right?: number | string;

  /**
   * @description "The <code>tab-size</code> CSS property is used to customize the width of a tab (<code>U+0009</code>) character."
   */
  tabSize?: string;

  /**
   * @description "The <code>table-layout</code> CSS property defines the algorithm to be used to layout the table cells, rows, and columns."
   */
  tableLayout?: string;

  /**
   * @description "The<code> text-align </code>CSS property describes how inline content like text is aligned in its parent block element.<code> text-align </code>does not control the alignment of block elements itself, only their inline content."
   */
  textAlign?: string;

  /**
   * @description "The <code>text-align-last</code> CSS property describes how the last line of a block or a line right before a forced line break is aligned."
   */
  textAlignLast?: string;

  /**
   * @description "The<code> text-decoration </code>CSS property is used to set the text formattings <code>underline, overline, line-through</code> and <code>blink</code>."
   */
  textDecoration?: string;

  /**
   * @description 'The <code>text-decoration-color</code> CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/text-decoration-line">text-decoration-line</a></code>\n. This is the preferred way to color these text decorations, rather than using combinations of other HTML&nbsp;elements.'
   */
  textDecorationColor?: string;

  /**
   * @description "The <code>text-decoration-line</code> CSS property sets what kind of line decorations are added to an element."
   */
  textDecorationLine?: string;

  /**
   * @description 'The <code>text-decoration-style</code> CSS property defines the style of the lines specified by <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/text-decoration-line">text-decoration-line</a></code>\n. The style applies to all lines, there is no way to define different style for each of the line defined by <code>text-decoration-line</code>.'
   */
  textDecorationStyle?: string;

  /**
   * @description "The<code> text-indent </code>CSS property specifies how much horizontal space should be left before beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box."
   */
  textIndent?: string;

  /**
   * @description 'The<code> text-shadow </code>CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/text-decoration">text-decorations</a></code>\n of the element.'
   */
  textShadow?: string;

  /**
   * @description "The <code>text-transform</code> CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized."
   */
  textTransform?: string;

  /**
   * @description "The <code>top</code> CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements."
   */
  top?: number | string;

  /**
   * @description "The <code>transform</code> CSS property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set."
   */
  transform?: string;

  /**
   * @description "The <code>transform-origin</code> CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the <code>rotate()</code> function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)"
   */
  transformOrigin?: string;

  /**
   * @description 'The <code>transform-style</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.'
   */
  transformStyle?: string;

  /**
   * @description 'The<code> transition </code><a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is a shorthand property for <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/transition-property">transition-property</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/transition-duration">transition-duration</a></code>\n, <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/transition-timing-function">transition-timing-function</a></code>\n, and <code><a rel="custom" href="https://developer.mozilla.org/en/CSS/transition-delay">transition-delay</a></code>\n.'
   */
  transition?: string;

  /**
   * @description 'The<code> transition-delay </code><a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the <a title="en/CSS/CSS transitions" rel="internal" href="https://developer.mozilla.org/en/CSS/CSS_transitions">transition effect</a>.'
   */
  transitionDelay?: string;

  /**
   * @description 'The<code> transition-duration </code><a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.'
   */
  transitionDuration?: string | number;

  /**
   * @description 'The <code>transition-property</code> CSS property is used to specify the names of CSS properties to which a <a title="en/CSS/CSS transitions" rel="internal" href="https://developer.mozilla.org/en/CSS/CSS_transitions">transition effect</a> should be applied.'
   */
  transitionProperty?: string;

  /**
   * @description 'The<code> transition-timing-function </code>CSS property is used to describe how the intermediate values of the CSS&nbsp;properties being affected by a <a title="en/CSS/CSS transitions" rel="internal" href="https://developer.mozilla.org/en/CSS/CSS_transitions">transition effect</a> are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.'
   */
  transitionTimingFunction?: string;

  /**
   * @description "The<code> visibility </code>CSS property is used for two things:"
   */
  visibility?: string;

  /**
   * @description "The<code> white-space </code>CSS property is used to to describe how whitespace inside the element is handled."
   */
  whiteSpace?: string;

  /**
   * @description "where:"
   */
  widows?: string;

  /**
   * @description 'The<code> width </code>CSS property specifies the width of the content area of an element. The <a title="en/CSS/box_model#content" rel="internal" href="https://developer.mozilla.org/en/CSS/box_model#content">content area</a> is <em>inside</em> the padding, border, and margin of the element.'
   */
  width?: number | string;

  /**
   * @description "The<code> word-spacing </code>CSS property specifies spacing behavior between tags and words."
   */
  wordSpacing?: string;

  /**
   * @description 'The <code>word-wrap</code> <a title="CSS" rel="internal" href="https://developer.mozilla.org/en/CSS">CSS</a> property is used to to specify whether or not the browser is allowed to break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit.'
   */
  wordWrap?: string;

  /**
   * @description "The<code> z-index </code>CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
   */
  zIndex?: number | string;
}

export default CssStandardStyles;
