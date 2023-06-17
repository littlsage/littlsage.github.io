import { ITypographyProps } from "@app/components/atoms/Typography/@types/Typography";
import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export interface IHexagonWithDescriptionContentProps {
  children: TChildren;
  description: ITypographyProps["children"];
  themeClasses?: {
    description?: Pick<IThemeClasses, "lineHeight" | "width">;
    hexagonContainer?: Pick<
      IThemeClasses,
      "marginBottom" | "marginRight" | "width"
    >;
    wrapper?: Pick<IThemeClasses, "flexFlow">;
  };
}
