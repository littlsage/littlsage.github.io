import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export interface IDashboardInnerContainerProps {
  children: TChildren;
  themeClasses?: Pick<IThemeClasses, "height" | "marginBottom" | "marginTop">;
}
