import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";

import { Link } from "@app/components/molecules/Link/Link";
import { IconWithLabelContent } from "@app/components/molecules/IconWithLabelContent/IconWithLabelContent";
import { IIconWithLabelContentProps } from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import {
  mapIconWithLabelSizeToIconWithLabelContentSize,
  mapIconWithLabelVariantToIconWithLabelContentVariant,
} from "@app/components/molecules/IconWithLabel/config";
import { mapSizeToIconHeight } from "@app/components/molecules/IconWithLabelContent/styles";
import { useIconWithLabelThemeClasses } from "@app/components/molecules/IconWithLabel/hooks/useIconWithLabelThemeClasses";

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  href,
  iconName,
  iconVariant,
  isExternal,
  label,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue,
}) => {
  const { iconWithLabelContentThemeClasses } = useIconWithLabelThemeClasses({
    href,
    themeClasses,
  });

  const iconWithLabelContentProps: IIconWithLabelContentProps = {
    iconName,
    iconVariant,
    isHoverable: !!href,
    label,
    size: mapIconWithLabelSizeToIconWithLabelContentSize[size],
    themeClasses: iconWithLabelContentThemeClasses,
    variant: mapIconWithLabelVariantToIconWithLabelContentVariant[variant],
  };

  return href ? (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={{
        height: mapSizeToIconHeight[size],
      }}
    >
      <IconWithLabelContent {...iconWithLabelContentProps} />
    </Link>
  ) : (
    <IconWithLabelContent {...iconWithLabelContentProps} />
  );
};

export { IconWithLabel };
