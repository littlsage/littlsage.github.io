import { IThemeClasses } from "@app/types/theme";

export const linkDefaultThemeClasses: IThemeClasses = {
  display: "block",
  group: "group",
  height: "h-unset",
  lineHeight: "leading-[1]",
  pseudoClasses: [
    "hoverChildrenLine:opacity-100",
    "hoverChildrenLine:visible",
    "hoverChildrenLine:w-50%",
    "focusChildrenLine:opacity-100",
    "focusChildrenLine:visible",
    "focusChildrenLine:w-50%",
    "activeChildrenLine:opacity-100",
    "activeChildrenLine:visible",
    "activeChildrenLine:w-50%",
    "focusChildrenSvg:drop-shadow-lg",
    "activeChildrenSvg:drop-shadow-lg",
  ],
  width: "w-unset",
};
