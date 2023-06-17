import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { Typography } from "@app/components/atoms/Typography/Typography";
import {
  sidebarPdfContainerLogoDefaultThemeClasses,
  sidebarPdfContainerTitleDefaultThemeClasses,
} from "@app/containers/sidebarPdf/styles";

const SidebarPdfContainerLogoSection: React.FC = () => (
  <>
    <ImageDynamic
      imageName={ImageDynamicName.Logo}
      themeClasses={sidebarPdfContainerLogoDefaultThemeClasses}
    />

    <Typography themeClasses={sidebarPdfContainerTitleDefaultThemeClasses}>
      Front-End Architect
    </Typography>
  </>
);

export { SidebarPdfContainerLogoSection };
