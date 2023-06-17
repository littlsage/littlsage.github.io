import { CompanyNameVariant } from "@app/components/molecules/CompanyName/@types/CompanyName";
import { CompanyVariant } from "@app/components/organisms/Company/@types/Company";
import { CompanyDescriptionVariant } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";

export const mapCompanyVariantToCompanyNameVariant: Record<
  CompanyVariant,
  CompanyNameVariant
> = {
  [CompanyVariant.Blue]: CompanyNameVariant.Light,
  [CompanyVariant.Dark]: CompanyNameVariant.Dark,
};

export const mapCompanyVariantToCompanyDescriptionVariant: Record<
  CompanyVariant,
  CompanyDescriptionVariant
> = {
  [CompanyVariant.Blue]: CompanyDescriptionVariant.Blue,
  [CompanyVariant.Dark]: CompanyDescriptionVariant.Dark,
};
