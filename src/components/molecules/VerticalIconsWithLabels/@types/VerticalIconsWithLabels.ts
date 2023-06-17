import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "isExternal" | "label"
  >[];
  size?: IconWithLabelSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelVariant;
}
