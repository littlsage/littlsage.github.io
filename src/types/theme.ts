/* eslint-disable import/exports-last */
import tailwindConfig from "@app/../tailwind.config";

const theme = tailwindConfig.theme;

type TAnimationValues = keyof typeof theme.animation;
type TBackgroundImageValues = keyof typeof theme.backgroundImage;
type TBorderRadiusValues = keyof typeof theme.borderRadius;
type TBorderWidthValues = keyof typeof theme.borderWidth;
type TBoxShadowValues = keyof typeof theme.boxShadow;
type TClipPathValues = keyof typeof theme.clipPath;
type TColorValues = keyof typeof theme.colors;
type TDropShadowValues = keyof typeof theme.dropShadow;
type TFontFamilyValues = keyof typeof theme.fontFamily;
type TFontSizeValues = keyof typeof theme.fontSize;
type TFontWeightValues = keyof typeof theme.fontWeight;
type TLineHeightValues = keyof typeof theme.lineHeight;
type TScreensValues = keyof typeof theme.screens;
type TSpacingValues = keyof typeof theme.spacing;
type TTransitionDurationValues = keyof typeof theme.transitionDuration;
type TTransitionTimingFunctionValues =
  keyof typeof theme.transitionTimingFunction;
type TZIndexValues = keyof typeof theme.zIndex;

type TUtility<
  TPrefix extends string,
  TSuffix,
  TSign extends string = "-",
> = `${TPrefix}${TSign}${TSuffix extends string | number ? TSuffix : never}`;

type TUtilityWithArbitraryValues<
  TPrefix extends string,
  TSuffix,
  TSign extends string = "-",
> =
  | TUtility<TPrefix, TSuffix, TSign>
  | `${TPrefix}${TSign}[${string | number}]`;

type TUtilityWithTransparency<TPrefix extends string, TSuffix> =
  | TUtility<TPrefix, TSuffix>
  | TUtility<
      TPrefix,
      TSuffix extends string | number
        ? `${TSuffix}/${number | `[${number}]`}`
        : string
    >;

type TBgColor = TUtilityWithArbitraryValues<
  "bg",
  | TColorValues
  | `${TColorValues}/${number}`
  | `${TColorValues}/[.${number}]`
  | `[${string}]`
  | `gradient-to-${string}`
>;

type TBg = TUtilityWithArbitraryValues<
  "bg",
  | TBackgroundImageValues
  | `[url(${string})]`
  | "bottom"
  | "center"
  | "left"
  | "left-bottom"
  | "left-top"
  | "right"
  | "right-bottom"
  | "right-top"
  | "top"
  | "repeat-space"
  | `[length:${string}]`
>;

type TFill = TUtility<"fill", TColorValues>;

type TTextColor = TUtility<"text", TColorValues>;
type TTextFontSize = TUtilityWithArbitraryValues<"text", TFontSizeValues>;
type TTextFontFamily = TUtility<"font", TFontFamilyValues>;
type TTextFontWeight = TUtility<"font", TFontWeightValues>;
type TTextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end";
type TTextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";
type TTextOverflow = TUtility<"text", "ellipsis" | "clip">;

type TWhitespace = TUtility<
  "whitespace",
  "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap"
>;

type TLeading = TUtilityWithArbitraryValues<"leading", TLineHeightValues>;

type TMarginBottom = TUtilityWithArbitraryValues<"mb", TSpacingValues>;
type TMarginLeft = TUtilityWithArbitraryValues<"ml", TSpacingValues>;
type TMarginRight = TUtilityWithArbitraryValues<"mr", TSpacingValues>;
type TMarginTop = TUtilityWithArbitraryValues<"mt", TSpacingValues>;
type TMarginX = TUtilityWithArbitraryValues<"mx", TSpacingValues>;
type TMarginY = TUtilityWithArbitraryValues<"my", TSpacingValues>;

type TPaddingBottom = TUtilityWithArbitraryValues<"pb", TSpacingValues>;
type TPaddingLeft = TUtilityWithArbitraryValues<"pl", TSpacingValues>;
type TPaddingRight = TUtilityWithArbitraryValues<"pr", TSpacingValues>;
type TPaddingTop = TUtilityWithArbitraryValues<"pt", TSpacingValues>;
type TPaddingX = TUtilityWithArbitraryValues<"px", TSpacingValues>;
type TPaddingY = TUtilityWithArbitraryValues<"py", TSpacingValues>;

type TPadding = TUtilityWithArbitraryValues<"p", TSpacingValues>;

type TBottom = TUtilityWithArbitraryValues<"bottom", TSpacingValues>;
type TLeft = TUtilityWithArbitraryValues<"left", TSpacingValues>;
type TRight = TUtilityWithArbitraryValues<"right", TSpacingValues>;
type TTop = TUtilityWithArbitraryValues<"top", TSpacingValues>;

type THeight = TUtilityWithArbitraryValues<"h", TSpacingValues>;
type TMinHeight = TUtilityWithArbitraryValues<"min-h", TSpacingValues>;
type TMaxHeight = TUtilityWithArbitraryValues<"max-h", TSpacingValues>;
type TWidth = TUtilityWithArbitraryValues<"w", TSpacingValues>;
type TMaxWidth = TUtilityWithArbitraryValues<"max-w", TSpacingValues>;

type TBoxShadow = TUtility<"shadow", TBoxShadowValues>;
type TDropShadow = TUtility<"drop-shadow", TDropShadowValues>;

type TBorderWidth = TUtilityWithArbitraryValues<
  "border" | "border-l" | "border-r" | "border-t" | "border-b",
  TBorderWidthValues
>;
type TBorderColor =
  | TUtilityWithArbitraryValues<"border", TColorValues>
  | TUtilityWithTransparency<"border", TColorValues>;
type TBorderLeftColor =
  | TUtilityWithArbitraryValues<"border-l", TColorValues>
  | TUtilityWithTransparency<"border-l", TColorValues>;
type TBorderRightColor =
  | TUtilityWithArbitraryValues<"border-r", TColorValues>
  | TUtilityWithTransparency<"border-r", TColorValues>;
type TBorderBottomColor =
  | TUtilityWithArbitraryValues<"border-b", TColorValues>
  | TUtilityWithTransparency<"border-b", TColorValues>;
type TBorderTopColor =
  | TUtilityWithArbitraryValues<"border-t", TColorValues>
  | TUtilityWithTransparency<"border-t", TColorValues>;

type TBorderRadius = TUtilityWithArbitraryValues<
  "rounded",
  TBorderRadiusValues
>;

type TBorderStyle = TUtility<
  "border",
  "solid" | "dashed" | "dotted" | "double" | "none"
>;

type TZIndex = TUtilityWithArbitraryValues<"z", TZIndexValues>;

type TDisplay =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "flow-root"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "hidden";

type TFlex =
  | `flex-[${number}_${number}_${number}%]`
  | `flex-[${number}_${number}_${number}rem]`
  | `flex-[${number}_${number}_${number}px]`
  | `flex-[${number}_${number}_${string}]`;

type TAlignItems = TUtility<
  "items",
  "start" | "end" | "center" | "stretch" | "baseline"
>;

type TAlignSelf = TUtility<
  "self",
  "auto" | "start" | "end" | "center" | "stretch"
>;

type TJustifyContent = TUtility<
  "justify",
  "start" | "end" | "center" | "between" | "around" | "evenly"
>;

type TOrder =
  | `-order-${number}`
  | `order-${number}`
  | "order-first"
  | "order-last"
  | "order-none";

export type TGap = TUtilityWithArbitraryValues<"gap", TSpacingValues>;

type TOverflow = TUtility<
  "overflow",
  | "auto"
  | "hidden"
  | "visible"
  | "scroll"
  | "x-auto"
  | "x-hidden"
  | "x-visible"
  | "x-scroll"
  | "y-auto"
  | "y-hidden"
  | "y-visible"
  | "y-scroll"
>;

type TPosition = "static" | "relative" | "absolute" | "fixed" | "sticky";

type TTransition =
  | "default"
  | "transition-all"
  | "transition-colors"
  | "transition-opacity"
  | "transition-shadow"
  | "transition-shadow"
  | "transition-transform"
  | "transition-none";
type TTransitionDuration = TUtility<"duration", TTransitionDurationValues>;
type TTransitionTiming = TUtility<"ease", TTransitionTimingFunctionValues>;

type TColorProperties =
  | TBgColor
  | TBorderBottomColor
  | TBorderColor
  | TBorderLeftColor
  | TBorderRightColor
  | TBorderTopColor
  | TTextColor
  | TFill;

type TGroupHover = TUtility<"group-hover", TColorProperties, ":">;

type THover = TUtility<
  "hover",
  TColorProperties | TBoxShadow | TDropShadow,
  ":"
>;

type TActive = TUtility<
  "active",
  TColorProperties | TBoxShadow | TDropShadow,
  ":"
>;

type TFocus = TUtility<
  "focus",
  TColorProperties | TBoxShadow | TDropShadow,
  ":"
>;

type TTransform = "transform" | "transform-gpu" | "transform-none";

type TTranslate = TUtilityWithArbitraryValues<
  `translate-${"x" | "y" | "z"}`,
  TSpacingValues
>;

type TRotate =
  | `rotate-${number}`
  | `-rotate-${number}`
  | `rotate-[${number}deg]`;

type TCursor = TUtility<
  "cursor",
  | "auto"
  | "default"
  | "pointer"
  | "wait"
  | "text"
  | "move"
  | "help"
  | "not-allowed"
>;

type TListStyleType = TUtility<"list", "none" | "disc" | "decimal">;

type TUserSelect = TUtility<"select", "none" | "text" | "all" | "auto">;

type TFlexFlowValues =
  | "flex-row-wrap"
  | "flex-row-reverse-wrap"
  | "flex-col-wrap"
  | "flex-col-reverse-wrap"
  | "flex-row-wrap-reverse"
  | "flex-row-reverse-wrap-reverse"
  | "flex-col-wrap-reverse"
  | "flex-col-reverse-wrap-reverse"
  | "flex-row-nowrap"
  | "flex-row-reverse-nowrap"
  | "flex-col-nowrap"
  | "flex-col-reverse-nowrap";

type TAfter = TUtilityWithArbitraryValues<"after", string, ":">;

type TOpacity = `opacity-${number}`;

type TColumns = `columns-${number}`;

type TOutline = `outline-${number}`;

type TMixBlendMode = TUtility<
  "mix-blend",
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"
  | "plus-lighter"
>;

export type TMediaQuery = TUtilityWithArbitraryValues<
  TScreensValues,
  string,
  ":"
>;

export type TPseudoClasses = `${string}:${string}`[] | string[];

export type TClassStyleUtility = `${string}-${string}` | string;

type TClipPath = TUtility<
  "clip-path",
  | "none"
  | "margin"
  | "padding"
  | "content"
  | "fill"
  | "stroke"
  | "view"
  | "inset"
  | "circle"
  | "ellipse"
  | "polygon"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"
  | TClipPathValues
>;

type TAnimate = TUtility<"animate", TAnimationValues>;

export interface IThemeClasses {
  active?: TActive | TActive[];
  after?: TAfter | TAfter[];
  alignItems?: TAlignItems;
  alignSelf?: TAlignSelf;
  animate?: TAnimate;
  background?: TBg | TBg[];
  backgroundColor?: TBgColor;
  borderBottomColor?: TBorderBottomColor;
  borderColor?: TBorderColor;
  borderLeftColor?: TBorderLeftColor;
  borderRadius?: TBorderRadius;
  borderRightColor?: TBorderRightColor;
  borderStyle?: TBorderStyle;
  borderTopColor?: TBorderTopColor;
  borderWidth?: TBorderWidth | TBorderWidth[];
  bottom?: TBottom;
  boxShadow?: TBoxShadow;
  className?: string;
  clipPath?: TClipPath;
  color?: TTextColor;
  columns?: TColumns;
  cursor?: TCursor;
  display?: TDisplay;
  dropShadow?: TDropShadow;
  flex?: TFlex;
  flexFlow?: TFlexFlowValues;
  focus?: TFocus | TFocus[];
  fontFamily?: TTextFontFamily;
  fontSize?: TTextFontSize;
  fontWeight?: TTextFontWeight;
  gap?: TGap;
  group?: "group";
  groupHover?: TGroupHover | TGroupHover[];
  height?: THeight;
  hover?: THover | THover[];
  justifyContent?: TJustifyContent;
  left?: TLeft;
  lineHeight?: TLeading;
  listStyleType?: TListStyleType;
  marginBottom?: TMarginBottom;
  marginLeft?: TMarginLeft;
  marginRight?: TMarginRight;
  marginTop?: TMarginTop;
  marginX?: TMarginX;
  marginY?: TMarginY;
  maxHeight?: TMaxHeight;
  maxWidth?: TMaxWidth;
  mediaQuery?: TMediaQuery | TMediaQuery[];
  minHeight?: TMinHeight;
  mixBlendMode?: TMixBlendMode;
  opacity?: TOpacity;
  order?: TOrder;
  outline?: TOutline;
  overflow?: TOverflow;
  padding?: TPadding;
  paddingBottom?: TPaddingBottom;
  paddingLeft?: TPaddingLeft;
  paddingRight?: TPaddingRight;
  paddingTop?: TPaddingTop;
  paddingX?: TPaddingX;
  paddingY?: TPaddingY;
  position?: TPosition;
  pseudoClasses?: TPseudoClasses;
  right?: TRight;
  rotate?: TRotate;
  textAlign?: TTextAlign;
  textOverflow?: TTextOverflow;
  textTransform?: TTextTransform;
  top?: TTop;
  transform?: TTransform;
  transition?: TTransition;
  transitionDuration?: TTransitionDuration;
  transitionTiming?: TTransitionTiming;
  translate?: TTranslate | TTranslate[];
  userSelect?: TUserSelect;
  whitespace?: TWhitespace;
  width?: TWidth;
  zIndex?: TZIndex;
}
