import {
  IconsWithLabelsPosition,
  TMapSizeToFlexContainerGap,
} from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export const mapSizeToFlexContainerGap: TMapSizeToFlexContainerGap = {
  [IconsWithLabelsPosition.Horizontal]: {
    [IconWithLabelSize.ExtraSmall]: "gap-8",
    [IconWithLabelSize.Large]: "gap-28",
    [IconWithLabelSize.Medium]: "gap-12",
    [IconWithLabelSize.Small]: "gap-16",
  },
  [IconsWithLabelsPosition.Vertical]: {
    [IconWithLabelSize.ExtraSmall]: "gap-0",
    [IconWithLabelSize.Large]: "gap-0",
    [IconWithLabelSize.Medium]: "gap-0",
    [IconWithLabelSize.Small]: "gap-0",
  },
};

export const iconsWithLabelsDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  height: "h-100%",
};
