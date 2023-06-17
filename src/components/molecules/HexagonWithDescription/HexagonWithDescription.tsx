import { HexagonWithDescriptionContent } from "@app/components/molecules/HexagonWithDescriptionContent/HexagonWithDescriptionContent";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { IHexagonWithDescriptionProps } from "@app/components/molecules/HexagonWithDescription/@types/HexagonWithDescription";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import {
  hexagonWithDescriptionDefaultThemeClasses,
  hexagonWithDescriptionMobileDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionTabletDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionTvDesktopDescriptionContentDefaultThemeClasses,
} from "@app/components/molecules/HexagonWithDescription/styles";

const HexagonWithDescription: React.FC<IHexagonWithDescriptionProps> = ({
  children,
  description,
  id,
}) => (
  <LayoutContainer
    id={id}
    themeClasses={hexagonWithDescriptionDefaultThemeClasses}
  >
    <Responsive devices={[Device.Tv, Device.Desktop]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionTvDesktopDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={[Device.Tablet]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionTabletDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>

    <Responsive devices={[Device.Mobile]}>
      <HexagonWithDescriptionContent
        description={description}
        themeClasses={
          hexagonWithDescriptionMobileDescriptionContentDefaultThemeClasses
        }
      >
        {children}
      </HexagonWithDescriptionContent>
    </Responsive>
  </LayoutContainer>
);

export { HexagonWithDescription };
