import { Button } from "@app/components/molecules/Button/Button";
import { HorizontalLinksWithIcons } from "@app/components/molecules/HorizontalLinksWithIcons/HorizontalLinksWithIcons";
import { Nav } from "@app/components/molecules/Nav/Nav";

import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { isIE11 } from "@app/helpers/browser/isIE11";

import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerTvProps } from "@app/containers/header/@types/HeaderContainerTv";
import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "@app/components/molecules/Button/@types/Button";
import { icons, navItems } from "@app/containers/header/config";
import { headerContainerTvDefaultThemeClasses } from "@app/containers/header/styles";

const HeaderContainerTv: React.FC<IHeaderContainerTvProps> = ({
  onCVButtonClick,
}) => (
  <Responsive devices={[Device.Tv]}>
    <LayoutContainer themeClasses={headerContainerTvDefaultThemeClasses}>
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
        <Nav navItems={navItems} />
      </LayoutContainer>

      <Button
        iconName={IconDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size={ButtonSize.Medium}
        tabIndex={0}
      >
        cv
      </Button>

      <HorizontalLinksWithIcons icons={icons} />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerTv };
