import { IconDynamic } from "@app/components/atoms/IconDynamic/IconDynamic";
import { Link } from "@app/components/molecules/Link/Link";
import { ILinkWithIconProps } from "@app/components/molecules/LinkWithIcon/@types/LinkWithIcon";
import {
  linkWithIconDefaultThemeClasses,
  linkWithIconDynamicIconDefaultThemeClasses,
} from "@app/components/molecules/LinkWithIcon/styles";
import { IThemeClasses } from "@app/types/theme";

const LinkWithIcon: React.FC<ILinkWithIconProps> = ({
  href,
  iconName,
  isExternal = false,
  themeClasses,
}) => {
  const linkWithIconThemeClasses: IThemeClasses = {
    ...linkWithIconDefaultThemeClasses,
    ...themeClasses,
  };

  const linkWithIconDynamicIconThemeClasses: IThemeClasses = {
    ...linkWithIconDynamicIconDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithIconThemeClasses}
    >
      <IconDynamic
        themeClasses={linkWithIconDynamicIconThemeClasses}
        isHeightResponsive
        iconName={iconName}
        shouldGlowOnHover
      />
    </Link>
  );
};

export { LinkWithIcon };
