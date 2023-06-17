import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses, TGap } from "@app/types/theme";

export enum IconsWithLabelsPosition {
  Horizontal,
  Vertical,
}

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "iconVariant" | "isExternal" | "label"
  >[];
  position?: IconsWithLabelsPosition;
  size?: IIconWithLabelProps["size"];
  themeClasses?: {
    iconWithLabel?: IIconWithLabelProps["themeClasses"];
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelVariant;
}

export type TMapSizeToFlexContainerGap = Record<
  IconsWithLabelsPosition,
  Record<IconWithLabelSize, TGap>
>;
