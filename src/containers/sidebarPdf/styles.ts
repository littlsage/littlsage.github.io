import { IVerticalIconsWithLabelsProps } from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import { IThemeClasses } from "@app/types/theme";

export const sidebarPdfContainerLogoDefaultThemeClasses: IThemeClasses = {
  height: "h-auto",
  marginBottom: "mb-8",
};

export const sidebarPdfContainerTitleDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontSize: "text-16",
  lineHeight: "leading-20",
  marginBottom: "mb-16",
};

export const sidebarPdfContainerMainIconsDefaultThemeClasses: IVerticalIconsWithLabelsProps["themeClasses"] =
  {
    wrapper: {
      height: "h-auto",
    },
  };
