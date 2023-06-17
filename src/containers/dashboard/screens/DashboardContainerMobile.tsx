import { ConsoleMobile } from "@app/components/molecules/Console/screens/ConsoleMobile";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { catchPhrase } from "@app/containers/dashboard/config";

const DashboardContainerMobile: React.FC = () => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer
      themeClasses={{
        paddingTop: "pt-96",
      }}
    >
      <ConsoleMobile>{catchPhrase}</ConsoleMobile>
    </LayoutContainer>
  </Responsive>
);

export { DashboardContainerMobile };
