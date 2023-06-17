import {
  IIconWithLabelProps,
  IconWithLabelSize,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export enum OutstandingVerticalIconsWithLabelsVariant {
  Blue,
  Dark,
}

export interface IOutstandingVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "href" | "iconName" | "label">[];
  size?: IconWithLabelSize;
  themeClasses?: IThemeClasses;
  variant?: OutstandingVerticalIconsWithLabelsVariant;
}
