import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  earthDefaultThemeClasses,
  earthImageContainerDefaultThemeClasses,
  earthImageDefaultThemeClasses,
} from "@app/components/molecules/Earth/styles";

const Earth: React.FC = () => (
  <LayoutContainer themeClasses={earthDefaultThemeClasses}>
    <LayoutContainer themeClasses={earthImageContainerDefaultThemeClasses}>
      <ImageDynamic
        imageName={ImageDynamicName.Earth}
        isResponsive
        themeClasses={earthImageDefaultThemeClasses}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Earth };
