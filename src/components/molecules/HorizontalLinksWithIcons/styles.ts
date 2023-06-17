import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const horizontalLinksWithIconsIconDefaultThemeClasses: IThemeClasses = {
  height: "h-48",
  width: isIE11() ? "w-48" : "w-auto",
};
