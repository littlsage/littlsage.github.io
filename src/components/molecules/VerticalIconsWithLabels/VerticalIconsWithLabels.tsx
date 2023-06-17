import { Typography } from "@app/components/atoms/Typography/Typography";

import { IVerticalIconsWithLabelsProps } from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IconStatic } from "@app/components/atoms/IconStatic/IconStatic";
import { verticalIconsWithLabelsDefaultThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/styles";
import { useVerticalIconsWithLabelsThemeClasses } from "@app/components/molecules/VerticalIconsWithLabels/hooks/useVerticalIconsWithLabelsThemeClasses";
import { Link } from "@app/components/molecules/Link/Link";

const VerticalIconsWithLabels: React.FC<IVerticalIconsWithLabelsProps> = ({
  iconsWithLabels,
  size = IconWithLabelSize.Medium,
  themeClasses,
  variant = IconWithLabelVariant.Blue,
}) => {
  const { verticalIconsWithLabelsThemeClasses } =
    useVerticalIconsWithLabelsThemeClasses({ size, themeClasses, variant });

  return (
    <LayoutContainer
      themeClasses={{
        ...verticalIconsWithLabelsDefaultThemeClasses.wrapper,
        ...themeClasses?.wrapper,
      }}
    >
      <LayoutContainer
        themeClasses={verticalIconsWithLabelsThemeClasses.iconsWrapper}
      >
        {iconsWithLabels.map(
          ({ iconName }: IIconWithLabelProps, index: number): JSX.Element => (
            <LayoutContainer
              key={iconName + index}
              themeClasses={verticalIconsWithLabelsThemeClasses.iconContainer}
            >
              <IconStatic
                themeClasses={verticalIconsWithLabelsThemeClasses.icon}
                iconName={iconName}
              />
            </LayoutContainer>
          ),
        )}
      </LayoutContainer>
      <LayoutContainer
        themeClasses={verticalIconsWithLabelsThemeClasses.labelsWrapper}
      >
        {iconsWithLabels.map(
          ({ href, isExternal, label }: IIconWithLabelProps): JSX.Element => (
            <LayoutContainer
              key={label}
              themeClasses={verticalIconsWithLabelsThemeClasses.labelContainer}
            >
              {href ? (
                <Link href={href} isExternal={isExternal}>
                  <Typography
                    ellipsis
                    themeClasses={verticalIconsWithLabelsThemeClasses.label}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  ellipsis
                  themeClasses={verticalIconsWithLabelsThemeClasses.label}
                >
                  {label}
                </Typography>
              )}
            </LayoutContainer>
          ),
        )}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { VerticalIconsWithLabels };
