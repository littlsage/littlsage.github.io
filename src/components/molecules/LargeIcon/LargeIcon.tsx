import { IconDynamic } from "@app/components/atoms/IconDynamic/IconDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ILargeIconProps } from "@app/components/molecules/LargeIcon/@types/LargeIcon";
import {
  largeIconDefaultThemeClasses,
  largeIconDynamicIconDefaultThemeClasses,
  largeIconWrapperDefaultThemeClasses,
} from "@app/components/molecules/LargeIcon/styles";

const LargeIcon: React.FC<ILargeIconProps> = ({ iconName }) => (
  <LayoutContainer themeClasses={largeIconDefaultThemeClasses}>
    <LayoutContainer themeClasses={largeIconWrapperDefaultThemeClasses}>
      <IconDynamic
        themeClasses={largeIconDynamicIconDefaultThemeClasses}
        iconName={iconName}
        isResponsive
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { LargeIcon };
