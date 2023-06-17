import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
} from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

export const mapIconWithLabelVariantToIconWithLabelContentVariant: Record<
  IconWithLabelVariant,
  IconWithLabelContentVariant
> = {
  [IconWithLabelVariant.Blue]: IconWithLabelContentVariant.Blue,
  [IconWithLabelVariant.Dark]: IconWithLabelContentVariant.Dark,
  [IconWithLabelVariant.White]: IconWithLabelContentVariant.White,
};

export const mapIconWithLabelSizeToIconWithLabelContentSize: Record<
  IconWithLabelSize,
  IconWithLabelContentSize
> = {
  [IconWithLabelSize.ExtraSmall]: IconWithLabelContentSize.ExtraSmall,
  [IconWithLabelSize.Large]: IconWithLabelContentSize.Large,
  [IconWithLabelSize.Medium]: IconWithLabelContentSize.Medium,
  [IconWithLabelSize.Small]: IconWithLabelContentSize.Small,
};
