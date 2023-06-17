import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
} from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const iconWithLabelContentDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  group: "group",
  height: "h-100%",
  justifyContent: "justify-start",
};

export const mapSizeToIconWrapperStyles: Record<
  IconWithLabelContentSize,
  IThemeClasses
> = {
  [IconWithLabelContentSize.ExtraSmall]: {
    flex: "flex-[0_0_2.4rem]",
    marginRight: "mr-4",
    width: "w-24",
  },
  [IconWithLabelContentSize.Large]: {
    paddingRight: "pr-12",
  },
  [IconWithLabelContentSize.Medium]: {
    paddingRight: "pr-12",
  },
  [IconWithLabelContentSize.Small]: {
    paddingRight: "pr-8",
  },
};

export const mapSizeToIconStyles: Record<
  IconWithLabelContentSize,
  IThemeClasses
> = {
  [IconWithLabelContentSize.ExtraSmall]: {
    width: "w-24",
  },
  [IconWithLabelContentSize.Large]: {
    width: isIE11() ? "w-32" : "w-auto",
  },
  [IconWithLabelContentSize.Medium]: {
    width: isIE11() ? "w-32" : "w-auto",
  },
  [IconWithLabelContentSize.Small]: {
    width: isIE11() ? "w-32" : "w-auto",
  },
};

export const mapSizeToIconHeight: Record<
  IconWithLabelContentSize,
  IThemeClasses["height"]
> = {
  [IconWithLabelContentSize.ExtraSmall]: "h-24",
  [IconWithLabelContentSize.Large]: "h-40",
  [IconWithLabelContentSize.Medium]: "h-32",
  [IconWithLabelContentSize.Small]: "h-28",
};

export const mapSizeToTextFontSize: Record<
  IconWithLabelContentSize,
  IThemeClasses["fontSize"]
> = {
  [IconWithLabelContentSize.ExtraSmall]: "text-12",
  [IconWithLabelContentSize.Large]: "text-24",
  [IconWithLabelContentSize.Medium]: "text-20",
  [IconWithLabelContentSize.Small]: "text-16",
};

export const mapIconWithLabelContentVariantToLabelStyles: Record<
  IconWithLabelContentVariant,
  IThemeClasses
> = {
  [IconWithLabelContentVariant.Blue]: {
    color: "text-blue100",
  },
  [IconWithLabelContentVariant.Dark]: {
    color: "text-blue600",
  },
  [IconWithLabelContentVariant.White]: {
    color: "text-white",
  },
};
