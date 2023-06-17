import { Button } from "@app/components/molecules/Button/Button";
import { Nav } from "@app/components/molecules/Nav/Nav";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

import { isIE11 } from "@app/helpers/browser/isIE11";

import { NavItemPosition } from "@app/components/molecules/NavItem/@types/NavItem";
import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "@app/components/molecules/Button/@types/Button";
import { ISideMenuProps } from "@app/components/organisms/SideMenu/@types/SideMenu";
import {
  sideMenuCVButtonDefaultThemeClasses,
  sideMenuMobileNavInnerContainerDefaultThemeClasses,
  sideMenuMobileNavOuterContainerDefaultThemeClasses,
  sideMenuMobileNavWrapperDefaultThemeClasses,
} from "@app/components/organisms/SideMenu/styles";

const SideMenuMobileAndTablet: React.FC<
  Pick<ISideMenuProps, "navItems" | "onCVButtonClick">
> = ({ navItems, onCVButtonClick }) => (
  <LayoutContainer themeClasses={sideMenuMobileNavWrapperDefaultThemeClasses}>
    {navItems && (
      <LayoutContainer
        themeClasses={sideMenuMobileNavOuterContainerDefaultThemeClasses}
      >
        <LayoutContainer
          themeClasses={sideMenuMobileNavInnerContainerDefaultThemeClasses}
        >
          <Nav navItems={navItems} position={NavItemPosition.Vertical} />
        </LayoutContainer>
      </LayoutContainer>
    )}
    <Button
      iconName={IconDynamicName.Download}
      iconWidth={isIE11() ? "w-24" : "w-auto"}
      onClick={onCVButtonClick}
      size={ButtonSize.Medium}
      tabIndex={0}
      themeClasses={sideMenuCVButtonDefaultThemeClasses}
    >
      cv
    </Button>
  </LayoutContainer>
);

export { SideMenuMobileAndTablet };
