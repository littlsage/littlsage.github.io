import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  Device,
  IResponsiveProps,
} from "@app/components/layout/Responsive/@types/Responsive";
import { responsiveDefaultThemeClasses } from "@app/components/layout/Responsive/styles";
import { IThemeClasses } from "@app/types/theme";

const Responsive: React.FC<IResponsiveProps> = ({ children, devices }) => {
  const responsiveThemeClasses: IThemeClasses = {
    ...responsiveDefaultThemeClasses,
    pseudoClasses: [
      ...(devices.includes(Device.Tv) ? ["screenLg:block"] : []),
      ...(devices.includes(Device.Desktop) ? ["screenMdLg:block"] : []),
      ...(devices.includes(Device.Tablet) ? ["screenSmMd:block"] : []),
      ...(devices.includes(Device.Mobile) ? ["screenMaxSm:block"] : []),
    ],
  };

  return (
    <LayoutContainer themeClasses={responsiveThemeClasses}>
      {children}
    </LayoutContainer>
  );
};

export { Responsive };
