import { LineDirection } from "@app/components/atoms/Line/@types/Line";
import { Line } from "@app/components/atoms/Line/Line";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { linkDefaultThemeClasses } from "@app/components/molecules/Link/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";
import NextLink from "next/link";

const Link: React.FC<ILinkProps> = ({
  children,
  href,
  isExternal = false,
  isHoverable = false,
  themeClasses,
}) => {
  const linkThemeClasses: IThemeClasses = {
    ...linkDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <NextLink
      aria-label={href}
      href={href}
      className={convertObjectValuesToString(linkThemeClasses)}
      tabIndex={0}
      target={isExternal ? "_blank" : "_self"}
      passHref
    >
      {children}

      {isHoverable && (
        <LayoutContainer
          themeClasses={{
            position: "relative",
            width: "w-auto",
          }}
        >
          <Line direction={LineDirection.Left} />
          <Line direction={LineDirection.Right} />
        </LayoutContainer>
      )}
    </NextLink>
  );
};

export { Link };
