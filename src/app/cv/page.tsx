import { PdfTemplate } from "@app/components/templates/PdfTemplate/PdfTemplate";
import { DashboardContainerFormat } from "@app/containers/dashboard/@types/DashboardContainer";
import { DashboardContainer } from "@app/containers/dashboard/DashboardContainer";
import { DisclaimerContainer } from "@app/containers/disclaimer/DisclaimerContainer";
import { EducationContainer } from "@app/containers/education/EducationContainer";
import { ExperienceContainerFormat } from "@app/containers/experience/@types/ExperienceContainer";
import { ExperienceContainer } from "@app/containers/experience/ExperienceContainer";
import { SidebarPdfContainer } from "@app/containers/sidebarPdf/SidebarPdfContainer";

const metadata = {
  description: "Alan Hadyk's Portfolio",
  title: "Alan Hadyk - Portfolio",
};

const CvPage: React.FC = () => (
  <PdfTemplate sidebar={<SidebarPdfContainer />}>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    <EducationContainer />
    <DisclaimerContainer />
  </PdfTemplate>
);

export { metadata };
export default CvPage;
