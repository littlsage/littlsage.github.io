import { IContentFrameProps } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconsWithLabelsProps } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IThemeClasses } from "@app/types/theme";

export enum ContentFrameWithIconsVariant {
  Full,
  Limited,
}

export interface IContentFrameWithIconsProps {
  iconsWithLabels: IIconWithLabelProps[];
  title: string;
  variant?: ContentFrameWithIconsVariant;
}

export interface IContentFrameWithIconsThemeClasses {
  contentFrame: IContentFrameProps["themeClasses"];
  iconsWithLabels: IIconsWithLabelsProps["themeClasses"];
  iconsWrapper: IThemeClasses;
}
