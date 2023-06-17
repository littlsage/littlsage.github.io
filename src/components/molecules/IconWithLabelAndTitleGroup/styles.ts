import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export const iconWithLabelAndTitleGroupDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexFlow: "flex-col-nowrap",
  gap: "gap-12",
};

export const iconWithLabelAndTitleGroupTitleDefaultThemeClasses: IThemeClasses =
  {
    color: "text-black",
    fontSize: "text-12",
    fontWeight: "font-bold",
    lineHeight: "leading-24",
    marginBottom: "mb-4",
  };

export const iconWithLabelAndTitleGroupIconDefaultThemeClasses: IIconWithLabelProps["themeClasses"] =
  {
    content: {
      label: {
        color: "text-blue600",
      },
    },
  };
