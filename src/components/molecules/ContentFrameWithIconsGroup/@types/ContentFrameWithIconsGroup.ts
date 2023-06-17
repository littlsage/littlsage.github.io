import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { IContentFrameWithIconsProps } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { IThemeClasses } from "@app/types/theme";

export interface IContentFrameWithIconsGroupProps {
  columnCount?: `columns-${number}`;
  device?: Device;
  items: IContentFrameWithIconsProps[];
}

export interface IContentFrameWithIconsGroupThemeClasses {
  wrapper: IThemeClasses;
}
