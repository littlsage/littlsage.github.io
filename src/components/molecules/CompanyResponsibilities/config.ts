import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant,
} from "@app/components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import {
  CompanyResponsibilitiesSize,
  CompanyResponsibilitiesVariant,
} from "@app/components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import {
  UnorderedListSize,
  UnorderedListVariant,
} from "@app/components/molecules/UnorderedList/@types/UnorderedList";

export const mapCompanyResponsibilitiesVariantToUnorderedListVariant: Record<
  CompanyResponsibilitiesVariant,
  UnorderedListVariant
> = {
  [CompanyResponsibilitiesVariant.Blue]: UnorderedListVariant.Blue,
  [CompanyResponsibilitiesVariant.Dark]: UnorderedListVariant.Dark,
};

export const mapCompanyResponsibilitiesVariantToCompanyDescriptionSectionVariant: Record<
  CompanyResponsibilitiesVariant,
  CompanyDescriptionSectionVariant
> = {
  [CompanyResponsibilitiesVariant.Blue]: CompanyDescriptionSectionVariant.Blue,
  [CompanyResponsibilitiesVariant.Dark]: CompanyDescriptionSectionVariant.Dark,
};

export const mapCompanyResponsibilitiesSizeToCompanyDescriptionSectionSize: Record<
  CompanyResponsibilitiesSize,
  CompanyDescriptionSectionSize
> = {
  [CompanyResponsibilitiesSize.Medium]: CompanyDescriptionSectionSize.Medium,
  [CompanyResponsibilitiesSize.Large]: CompanyDescriptionSectionSize.Large,
};

export const mapCompanyResponsibilitiesSizeToUnorderedListSize: Record<
  CompanyResponsibilitiesSize,
  UnorderedListSize
> = {
  [CompanyResponsibilitiesSize.Medium]: UnorderedListSize.Medium,
  [CompanyResponsibilitiesSize.Large]: UnorderedListSize.Large,
};
