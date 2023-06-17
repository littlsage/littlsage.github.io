import { Section } from "@app/components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "@app/containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "@app/containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "@app/containers/dashboard/screens/DashboardContainerMobile";
import {
  DashboardContainerFormat,
  IDashboardContainerProps,
} from "@app/containers/dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "@app/containers/dashboard/screens/DashboardContainerPdf";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = DashboardContainerFormat.Web,
}) => (
  <Section
    id="dashboard"
    themeClasses={{
      paddingTop: "pt-0",
    }}
  >
    {format === DashboardContainerFormat.Web && (
      <>
        <DashboardContainerTvAndDesktop />
        <DashboardContainerTablet />
        <DashboardContainerMobile />
      </>
    )}
    {format === DashboardContainerFormat.Pdf && <DashboardContainerPdf />}
  </Section>
);

export { DashboardContainer };
