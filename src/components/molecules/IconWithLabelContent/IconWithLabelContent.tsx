import { IconStatic } from "@app/components/atoms/IconStatic/IconStatic";
import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
  IIconWithLabelContentProps,
} from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { useIconWithLabelContentThemeClasses } from "@app/components/molecules/IconWithLabelContent/hooks/useIconWithLabelContentThemeClasses";
import { iconWithLabelContentDefaultThemeClasses } from "@app/components/molecules/IconWithLabelContent/styles";

const IconWithLabelContent: React.FC<IIconWithLabelContentProps> = ({
  iconName,
  iconVariant,
  isHoverable,
  label,
  size = IconWithLabelContentSize.Medium,
  themeClasses,
  variant = IconWithLabelContentVariant.Blue,
}) => {
  const {
    iconWithLabelContentIconThemeClasses,
    iconWithLabelContentIconWrapperThemeClasses,
    iconWithLabelContentLabelThemeClasses,
  } = useIconWithLabelContentThemeClasses({ size, themeClasses, variant });

  return (
    <LayoutContainer
      themeClasses={{
        ...iconWithLabelContentDefaultThemeClasses,
        ...themeClasses?.wrapper,
      }}
    >
      <LayoutContainer
        themeClasses={iconWithLabelContentIconWrapperThemeClasses}
      >
        <IconStatic
          themeClasses={iconWithLabelContentIconThemeClasses}
          iconName={iconName}
          variant={iconVariant}
        />
      </LayoutContainer>

      <Typography
        isHoverable={isHoverable}
        themeClasses={iconWithLabelContentLabelThemeClasses}
      >
        {label}
      </Typography>
    </LayoutContainer>
  );
};

export { IconWithLabelContent };
