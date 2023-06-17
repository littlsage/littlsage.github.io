import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  IIconWithLabelProps,
  IconWithLabelSize,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "@app/components/molecules/IconWithLabel/IconWithLabel";
import {
  IOutstandingVerticalIconsWithLabelsProps,
  OutstandingVerticalIconsWithLabelsVariant,
} from "@app/components/molecules/OutstandingVerticalIconsWithLabels/@types/OutstandingVerticalIconsWithLabels";

const OutstandingVerticalIconsWithLabels: React.FC<
  IOutstandingVerticalIconsWithLabelsProps
> = ({
  iconsWithLabels,
  themeClasses,
  size = IconWithLabelSize.Medium,
  variant = OutstandingVerticalIconsWithLabelsVariant.Blue,
}) => {
  const iconWithLabelThemeClasses: IIconWithLabelProps["themeClasses"] = {
    content: {
      label: {
        color:
          variant === OutstandingVerticalIconsWithLabelsVariant.Blue
            ? "text-blue300"
            : "text-blue600",
      },
    },
  };

  return (
    <LayoutContainer themeClasses={themeClasses}>
      {iconsWithLabels.map((icon, index) => (
        <IconWithLabel
          {...icon}
          isExternal
          key={icon.label + index}
          size={size}
          themeClasses={iconWithLabelThemeClasses}
        />
      ))}
    </LayoutContainer>
  );
};

export { OutstandingVerticalIconsWithLabels };
