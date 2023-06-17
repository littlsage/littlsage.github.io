import { IHexagonWithDescriptionContentProps } from "@app/components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";
import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const hexagonWithDescriptionDefaultThemeClasses: IThemeClasses = {
  marginX: "mx-auto",
  maxWidth: "max-w-1056",
};

export const hexagonWithDescriptionTvDesktopDescriptionContentDefaultThemeClasses: IHexagonWithDescriptionContentProps["themeClasses"] =
  {
    description: {
      width: "w-50%",
    },
    hexagonContainer: {
      marginRight: "mr-48",
      width: "w-50%",
    },
    wrapper: {
      flexFlow: "flex-row-nowrap",
    },
  };

export const hexagonWithDescriptionTabletDescriptionContentDefaultThemeClasses: IHexagonWithDescriptionContentProps["themeClasses"] =
  {
    description: {
      width: "w-80%",
    },
    hexagonContainer: {
      marginBottom: "mb-48",
      width: isIE11() ? "w-auto" : "w-[60%]",
    },
    wrapper: {
      flexFlow: "flex-col-nowrap",
    },
  };

export const hexagonWithDescriptionMobileDescriptionContentDefaultThemeClasses: IHexagonWithDescriptionContentProps["themeClasses"] =
  {
    description: {
      lineHeight: "leading-28",
    },
    hexagonContainer: {
      marginBottom: "mb-48",
      width: isIE11() ? "w-auto" : "w-100%",
    },
    wrapper: {
      flexFlow: "flex-col-nowrap",
    },
  };
