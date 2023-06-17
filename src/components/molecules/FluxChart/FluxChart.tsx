import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  fluxChartDefaultThemeClasses,
  fluxChartImageContainerDefaultThemeClasses,
  fluxChartImageDefaultThemeClasses,
} from "@app/components/molecules/FluxChart/styles";

const FluxChart: React.FC = () => (
  <LayoutContainer themeClasses={fluxChartDefaultThemeClasses}>
    <LayoutContainer themeClasses={fluxChartImageContainerDefaultThemeClasses}>
      <ImageDynamic
        imageName={ImageDynamicName.Flux}
        isResponsive
        themeClasses={fluxChartImageDefaultThemeClasses}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { FluxChart };
