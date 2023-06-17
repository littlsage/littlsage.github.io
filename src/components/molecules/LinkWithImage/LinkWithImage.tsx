import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { Link } from "@app/components/molecules/Link/Link";
import { ILinkWithImageProps } from "@app/components/molecules/LinkWithImage/@types/LinkWithImage";
import {
  linkWithImageDefaultThemeClasses,
  linkWithImageDynamicImageDefaultThemeClasses,
} from "@app/components/molecules/LinkWithImage/styles";
import { IThemeClasses } from "@app/types/theme";

const LinkWithImage: React.FC<ILinkWithImageProps> = ({
  href,
  imageName,
  isExternal = false,
  themeClasses,
}) => {
  const linkWithImageThemeClasses: IThemeClasses = {
    ...linkWithImageDefaultThemeClasses,
    ...themeClasses,
  };

  const linkWithImageDynamicImageThemeClasses: IThemeClasses = {
    ...linkWithImageDynamicImageDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Link
      href={href}
      isExternal={isExternal}
      themeClasses={linkWithImageThemeClasses}
    >
      <ImageDynamic
        themeClasses={linkWithImageDynamicImageThemeClasses}
        isHeightResponsive
        imageName={imageName}
        shouldGlowOnHover
      />
    </Link>
  );
};

export { LinkWithImage };
