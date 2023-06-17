import { MenuButton } from "@app/components/molecules/MenuButton/MenuButton";
import { Backdrop } from "@app/components/atoms/Backdrop/Backdrop";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { IHeaderContainerScreenProps } from "@app/containers/header/@types/HeaderContainerScreen";
import { SideMenu } from "@app/components/organisms/SideMenu/SideMenu";
import { icons, navItems } from "@app/containers/header/config";

const HeaderContainerTabletAndMobile: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick,
}) => (
  <Responsive devices={[Device.Tablet, Device.Mobile]}>
    <MenuButton
      id="menu-button-tablet-mobile"
      isOpen={isMenuVisible}
      onClick={onClick}
    />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu
      id="side-menu-tablet-mobile"
      isExpanded={isMenuVisible}
      navItems={navItems}
      onCVButtonClick={onCVButtonClick}
      icons={icons}
    />
  </Responsive>
);

export { HeaderContainerTabletAndMobile };
