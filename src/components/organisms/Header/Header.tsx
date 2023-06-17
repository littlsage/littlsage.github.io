"use client";
import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { LinkWithImage } from "@app/components/molecules/LinkWithImage/LinkWithImage";
import { IHeaderProps } from "@app/components/organisms/Header/@types/Header";
import { useHeaderState } from "@app/components/organisms/Header/hooks/useHeaderState";
import { useHeaderThemeClasses } from "@app/components/organisms/Header/hooks/useHeaderThemeClasses";
import {
  headerOuterWrapperDefaultThemeClasses,
  headerInnerWrapperDefaultThemeClasses,
  headerOuterContainerDefaultThemeClasses,
  headerInnerContainerDefaultThemeClasses,
  headerLinkWithImageDefaultThemeClasses,
  headerMobileLinkWithImageDefaultThemeClasses,
} from "@app/components/organisms/Header/styles";

const Header: React.FC<IHeaderProps> = ({ children, themeClasses }) => {
  const { isMenuVisible, toggleMenuVisibility } = useHeaderState();

  const { headerContainerThemeClasses } = useHeaderThemeClasses({
    themeClasses,
  });

  return (
    <LayoutContainer id="header" themeClasses={headerContainerThemeClasses}>
      <LayoutContainer
        as="header"
        themeClasses={headerOuterWrapperDefaultThemeClasses}
      >
        <LayoutContainer themeClasses={headerInnerWrapperDefaultThemeClasses}>
          <LayoutContainer
            themeClasses={headerOuterContainerDefaultThemeClasses}
          >
            <LayoutContainer
              themeClasses={headerInnerContainerDefaultThemeClasses}
            >
              <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
                <LinkWithImage
                  href="/"
                  imageName={ImageDynamicName.Logo}
                  themeClasses={headerLinkWithImageDefaultThemeClasses}
                />
              </Responsive>

              <Responsive devices={[Device.Mobile]}>
                <LinkWithImage
                  href="/"
                  imageName={ImageDynamicName.LogoShortcut}
                  themeClasses={headerMobileLinkWithImageDefaultThemeClasses}
                />
              </Responsive>

              {children({ isMenuVisible, toggleMenuVisibility })}
            </LayoutContainer>
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { Header };
