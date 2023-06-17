import { DashboardInnerContainer } from "@app/components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "@app/components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "@app/containers/dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerFlux } from "@app/containers/dashboard/sections/DashboardContainerFlux";
import { DashboardContainerCode } from "@app/containers/dashboard/sections/DashboardContainerCode";
import { DashboardContainerCommits } from "@app/containers/dashboard/sections/DashboardContainerCommits";
import { DashboardContainerIp } from "@app/containers/dashboard/sections/DashboardContainerIp";
import { DashboardContainerUserAgent } from "@app/containers/dashboard/sections/DashboardContainerUserAgent";
import { DashboardContainerPoweredBy } from "@app/containers/dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "@app/components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "@app/containers/dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses,
} from "@app/containers/dashboard/styles";

const DashboardContainerTvAndDesktop: React.FC = () => (
  <Responsive devices={[Device.Tv, Device.Desktop]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        themeClasses={dashboardContainerTopInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerTechStack />
        <DashboardContainerFlux />
        <DashboardContainerCode />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet>{catchPhrase}</ConsoleTvDesktopAndTablet>

      <DashboardInnerContainer
        themeClasses={dashboardContainerBottomInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerCommits />
        <DashboardContainerPoweredBy />
        <DashboardContainerUserAgent />
        <DashboardContainerIp />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTvAndDesktop };
