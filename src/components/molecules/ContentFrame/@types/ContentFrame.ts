import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

type TOverflow = Extract<
  IThemeClasses["overflow"],
  "overflow-visible" | "overflow-hidden"
>;

export enum ContentFrameVariant {
  Border,
  Corners,
  CornersWithBorder,
  Empty,
}

export enum ContentFrameTitleVariant {
  SmallDarkBlue,
  MediumWhite,
  LargeLightBlue,
}

export interface IContentFrameProps {
  children: TChildren;
  description?: string;
  themeClasses?: {
    children?: {
      overflow?: TOverflow;
    };
    container?: Pick<IThemeClasses, "alignSelf" | "flex" | "order"> & {
      overflow?: TOverflow;
    };
    title?: IThemeClasses;
  };
  title?: string;
  titleVariant?: ContentFrameTitleVariant;
  variant?: ContentFrameVariant;
}
