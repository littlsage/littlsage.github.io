import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum SectionTitleVariant {
  Blue,
  Dark,
  Light,
}

export enum SectionTitleSize {
  Large,
  Small,
}

export interface ISectionTitleProps {
  children: TChildren;
  size?: SectionTitleSize;
  themeClasses?: {
    title?: Pick<IThemeClasses, "fontSize" | "lineHeight" | "color">;
    wrapper?: Pick<IThemeClasses, "marginBottom">;
  };
  variant?: SectionTitleVariant;
}
