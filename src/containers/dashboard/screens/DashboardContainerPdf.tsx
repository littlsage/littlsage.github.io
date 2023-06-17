import { ConsolePdf } from "@app/components/molecules/Console/screens/ConsolePdf";
import { PdfTitle } from "@app/components/molecules/PdfTitle/PdfTitle";
import { catchPhrase } from "@app/containers/dashboard/config";

const DashboardContainerPdf: React.FC = () => (
  <>
    <PdfTitle>Curriculum Vitae</PdfTitle>
    <ConsolePdf>{catchPhrase}</ConsolePdf>
  </>
);

export { DashboardContainerPdf };
