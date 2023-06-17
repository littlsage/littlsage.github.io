import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
  IIconWithLabelContentProps,
} from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import {
  mapIconWithLabelContentVariantToLabelStyles,
  mapSizeToIconHeight,
  mapSizeToIconStyles,
  mapSizeToIconWrapperStyles,
  mapSizeToTextFontSize,
} from "@app/components/molecules/IconWithLabelContent/styles";
import { IThemeClasses } from "@app/types/theme";

const useIconWithLabelContentThemeClasses = ({
  size = IconWithLabelContentSize.Medium,
  themeClasses,
  variant = IconWithLabelContentVariant.Blue,
}: Pick<IIconWithLabelContentProps, "size" | "themeClasses" | "variant">) => {
  const iconWithLabelContentIconWrapperThemeClasses: IThemeClasses = {
    ...mapSizeToIconWrapperStyles[size],
  };

  const iconWithLabelContentIconThemeClasses: IThemeClasses = {
    ...mapSizeToIconStyles[size],
    height: mapSizeToIconHeight[size],
  };

  const iconWithLabelContentLabelThemeClasses: IThemeClasses = {
    ...mapIconWithLabelContentVariantToLabelStyles[variant],
    fontSize: mapSizeToTextFontSize[size],
    ...themeClasses?.label,
  };

  return {
    iconWithLabelContentIconThemeClasses,
    iconWithLabelContentIconWrapperThemeClasses,
    iconWithLabelContentLabelThemeClasses,
  };
};

export { useIconWithLabelContentThemeClasses };
