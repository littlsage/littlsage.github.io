import { LinkWithIcon } from "@app/components/molecules/LinkWithIcon/LinkWithIcon";

import { horizontalLinksWithIconsIconDefaultThemeClasses } from "@app/components/molecules/HorizontalLinksWithIcons/styles";
import { IHorizontalLinksWithIconsProps } from "@app/components/molecules/HorizontalLinksWithIcons/@types/HorizontalLinksWithIcons";

const HorizontalLinksWithIcons: React.FC<IHorizontalLinksWithIconsProps> = ({
  icons,
}) => (
  <>
    {icons.map(({ href, iconName, isExternal }) => (
      <LinkWithIcon
        href={href}
        iconName={iconName}
        isExternal={isExternal}
        key={iconName}
        themeClasses={horizontalLinksWithIconsIconDefaultThemeClasses}
      />
    ))}
  </>
);

export { HorizontalLinksWithIcons };
