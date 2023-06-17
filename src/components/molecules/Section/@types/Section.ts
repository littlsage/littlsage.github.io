import { IThemeClasses } from "@app/types/theme";
import { TChildren } from "@app/types/props";

export enum SectionVariant {
  Blue,
  Dark,
  Light,
}

export enum SectionSize {
  Large,
  Small,
}

export interface ISectionProps {
  children: TChildren;
  id: string;
  size?: SectionSize;
  themeClasses?: Pick<
    IThemeClasses,
    "marginBottom" | "minHeight" | "paddingTop"
  >;
  title?: string;
  variant?: SectionVariant;
}
