import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export const verticalIconsWithLabelsDefaultThemeClasses: Record<
  "wrapper" | "iconsWrapper" | "labelsWrapper",
  IThemeClasses
> = {
  iconsWrapper: {
    alignItems: "items-center",
    display: "flex",
    flexFlow: "flex-col-nowrap",
  },
  labelsWrapper: {
    alignItems: "items-start",
    display: "flex",
    flexFlow: "flex-col-nowrap",
  },
  wrapper: {
    alignItems: "items-center",
    display: "flex",
    flexFlow: "flex-row-nowrap",
    height: "h-100%",
    justifyContent: "justify-center",
    width: "w-100%",
  },
};

export const mapSizeToWrapperStyles: Record<IconWithLabelSize, IThemeClasses> =
  {
    [IconWithLabelSize.ExtraSmall]: {
      gap: "gap-0",
    },
    [IconWithLabelSize.Large]: {
      gap: "gap-12",
    },
    [IconWithLabelSize.Medium]: {
      gap: "gap-12",
    },
    [IconWithLabelSize.Small]: {
      gap: "gap-0",
    },
  };

export const mapSizeToIconsWrapperStyles: Record<
  IconWithLabelSize,
  IThemeClasses
> = {
  [IconWithLabelSize.ExtraSmall]: {
    flex: "flex-[0_0_2.4rem]",
  },
  [IconWithLabelSize.Large]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [IconWithLabelSize.Medium]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [IconWithLabelSize.Small]: {
    alignItems: "items-start",
    flex: "flex-[0_0_12.5%]",
  },
};

export const mapSizeToIconStyles: Record<IconWithLabelSize, IThemeClasses> = {
  [IconWithLabelSize.ExtraSmall]: {},
  [IconWithLabelSize.Large]: {},
  [IconWithLabelSize.Medium]: {},
  [IconWithLabelSize.Small]: {
    maxWidth: "max-w-16",
  },
};

export const mapSizeToLabelsWrapperStyles: Record<
  IconWithLabelSize,
  IThemeClasses
> = {
  [IconWithLabelSize.ExtraSmall]: {
    flex: "flex-[1_0_auto]",
  },
  [IconWithLabelSize.Large]: {
    flex: "flex-[0_0_75%]",
  },
  [IconWithLabelSize.Medium]: {
    flex: "flex-[0_0_75%]",
  },
  [IconWithLabelSize.Small]: {
    flex: "flex-[0_0_87.5%]",
  },
};

export const mapSizeToLabelStyles: Record<IconWithLabelSize, IThemeClasses> = {
  [IconWithLabelSize.ExtraSmall]: {
    lineHeight: "leading-24",
  },
  [IconWithLabelSize.Large]: {
    lineHeight: "leading-40",
  },
  [IconWithLabelSize.Medium]: {
    lineHeight: "leading-32",
  },
  [IconWithLabelSize.Small]: {
    lineHeight: "leading-28",
  },
};
