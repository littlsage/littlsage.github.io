import { CompanyDescriptionSection } from "@app/components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import {
  CompanyResponsibilitiesSize,
  CompanyResponsibilitiesVariant,
  ICompanyResponsibilitiesProps,
} from "@app/components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import {
  mapCompanyResponsibilitiesSizeToCompanyDescriptionSectionSize,
  mapCompanyResponsibilitiesSizeToUnorderedListSize,
  mapCompanyResponsibilitiesVariantToCompanyDescriptionSectionVariant,
  mapCompanyResponsibilitiesVariantToUnorderedListVariant,
} from "@app/components/molecules/CompanyResponsibilities/config";
import { mapCompanyResponsibilitiesSizeToStyles } from "@app/components/molecules/CompanyResponsibilities/styles";
import { UnorderedList } from "@app/components/molecules/UnorderedList/UnorderedList";

const CompanyResponsibilities: React.FC<ICompanyResponsibilitiesProps> = ({
  responsibilities,
  size = CompanyResponsibilitiesSize.Large,
  themeClasses,
  variant = CompanyResponsibilitiesVariant.Blue,
}) => {
  const companyResponsibilitiesThemeClasses = {
    ...mapCompanyResponsibilitiesSizeToStyles[size],
    ...themeClasses,
  };

  return (
    <CompanyDescriptionSection
      size={mapCompanyResponsibilitiesSizeToCompanyDescriptionSectionSize[size]}
      themeClasses={companyResponsibilitiesThemeClasses}
      title="Responsibilities"
      variant={
        mapCompanyResponsibilitiesVariantToCompanyDescriptionSectionVariant[
          variant
        ]
      }
    >
      <UnorderedList
        items={responsibilities}
        size={mapCompanyResponsibilitiesSizeToUnorderedListSize[size]}
        variant={
          mapCompanyResponsibilitiesVariantToUnorderedListVariant[variant]
        }
      />
    </CompanyDescriptionSection>
  );
};

export { CompanyResponsibilities };
