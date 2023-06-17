import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { VerticalIconsWithLabels } from "@app/components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import { mainIconsWithLabels } from "@app/containers/sidebarPdf/config";
import { sidebarPdfContainerMainIconsDefaultThemeClasses } from "@app/containers/sidebarPdf/styles";

const SidebarPdfContainerMainIconsSection: React.FC = () => (
  <VerticalIconsWithLabels
    iconsWithLabels={mainIconsWithLabels}
    size={IconWithLabelSize.Small}
    themeClasses={sidebarPdfContainerMainIconsDefaultThemeClasses}
    variant={IconWithLabelVariant.White}
  />
);

export { SidebarPdfContainerMainIconsSection };
