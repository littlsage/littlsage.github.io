import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "@app/types/theme";

export enum IconWithLabelContentVariant {
  Blue,
  Dark,
  White,
}

export enum IconWithLabelContentSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export interface IIconWithLabelContentProps {
  iconName: IIconStaticProps["iconName"];
  iconVariant?: IIconStaticProps["variant"];
  isHoverable?: boolean;
  label: string;
  size?: IconWithLabelContentSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "groupHover" | "color">;
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelContentVariant;
}
