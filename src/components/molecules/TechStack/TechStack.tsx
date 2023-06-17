import { IconsWithLabels } from "@app/components/molecules/IconsWithLabels/IconsWithLabels";
import {
  ITechStackProps,
  TechStackSize,
  TechStackVariant,
} from "@app/components/molecules/TechStack/@types/TechStack";
import { IconsWithLabelsPosition } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  mapTechStackSizeToCompanyDescriptionSectionSize,
  mapTechStackSizeToIconsWithLabelsSize,
  mapTechStackVariantToCompanyDescriptionSectionVariant,
  mapTechStackVariantToIconsWithLabelsVariant,
} from "@app/components/molecules/TechStack/config";
import { CompanyDescriptionSection } from "@app/components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import { mapTechStackSizeToStyles } from "@app/components/molecules/TechStack/styles";

const TechStack: React.FC<ITechStackProps> = ({
  iconsWithLabels,
  size = TechStackSize.Large,
  variant = TechStackVariant.Blue,
}) => {
  const techStackThemeClasses = mapTechStackSizeToStyles[size];

  return (
    <CompanyDescriptionSection
      size={mapTechStackSizeToCompanyDescriptionSectionSize[size]}
      themeClasses={techStackThemeClasses}
      title="Tech stack"
      variant={mapTechStackVariantToCompanyDescriptionSectionVariant[variant]}
    >
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position={IconsWithLabelsPosition.Horizontal}
        size={mapTechStackSizeToIconsWithLabelsSize[size]}
        variant={mapTechStackVariantToIconsWithLabelsVariant[variant]}
      />
    </CompanyDescriptionSection>
  );
};

export { TechStack };
