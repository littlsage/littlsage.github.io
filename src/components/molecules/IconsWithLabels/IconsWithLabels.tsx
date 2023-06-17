import { IconWithLabel } from "@app/components/molecules/IconWithLabel/IconWithLabel";
import { VerticalIconsWithLabels } from "@app/components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";

import {
  IconsWithLabelsPosition,
  IIconsWithLabelsProps,
} from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { useIconsWithLabelsThemeClasses } from "@app/components/molecules/IconsWithLabels/hooks/useIconsWithLabelsThemeClasses";

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  position = IconsWithLabelsPosition.Vertical,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant,
}) => {
  const { iconsWithLabelsThemeClasses } = useIconsWithLabelsThemeClasses({
    position,
    size,
    themeClasses,
  });

  return (
    <LayoutContainer themeClasses={iconsWithLabelsThemeClasses}>
      {position === IconsWithLabelsPosition.Horizontal ? (
        iconsWithLabels &&
        iconsWithLabels.map(({ iconName, iconVariant, label }) => (
          <IconWithLabel
            iconName={iconName}
            iconVariant={iconVariant}
            key={label}
            label={label}
            size={size}
            themeClasses={themeClasses?.iconWithLabel}
            variant={variant}
          />
        ))
      ) : (
        <VerticalIconsWithLabels
          themeClasses={themeClasses?.iconWithLabel?.content}
          iconsWithLabels={iconsWithLabels}
          size={size}
          variant={variant}
        />
      )}
    </LayoutContainer>
  );
};

export { IconsWithLabels };
