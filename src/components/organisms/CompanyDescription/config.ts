import {
  CompanyResponsibilitiesSize,
  CompanyResponsibilitiesVariant,
} from "@app/components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import {
  CompanyDescriptionTitleSize,
  CompanyDescriptionTitleVariant,
} from "@app/components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  TechStackSize,
  TechStackVariant,
} from "@app/components/molecules/TechStack/@types/TechStack";
import {
  CompanyDescriptionSize,
  CompanyDescriptionVariant,
} from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";
import { OutstandingVerticalIconsWithLabelsVariant } from "@app/components/molecules/OutstandingVerticalIconsWithLabels/@types/OutstandingVerticalIconsWithLabels";

export const mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant: Record<
  CompanyDescriptionVariant,
  CompanyDescriptionTitleVariant
> = {
  [CompanyDescriptionVariant.Blue]: CompanyDescriptionTitleVariant.Light,
  [CompanyDescriptionVariant.Dark]: CompanyDescriptionTitleVariant.Dark,
};

export const mapCompanyDescriptionVariantToOutstandingVerticalIconsWithLabelsVariant: Record<
  CompanyDescriptionVariant,
  OutstandingVerticalIconsWithLabelsVariant
> = {
  [CompanyDescriptionVariant.Blue]:
    OutstandingVerticalIconsWithLabelsVariant.Blue,
  [CompanyDescriptionVariant.Dark]:
    OutstandingVerticalIconsWithLabelsVariant.Dark,
};

export const mapCompanyDescriptionVariantToTechStackVariant: Record<
  CompanyDescriptionVariant,
  TechStackVariant
> = {
  [CompanyDescriptionVariant.Blue]: TechStackVariant.Blue,
  [CompanyDescriptionVariant.Dark]: TechStackVariant.Dark,
};

export const mapCompanyDescriptionVariantToCompanyResponsibilitiesVariant: Record<
  CompanyDescriptionVariant,
  CompanyResponsibilitiesVariant
> = {
  [CompanyDescriptionVariant.Blue]: CompanyResponsibilitiesVariant.Blue,
  [CompanyDescriptionVariant.Dark]: CompanyResponsibilitiesVariant.Dark,
};

export const mapCompanyDescriptionSizeToCompanyDescriptionTitleSize: Record<
  CompanyDescriptionSize,
  CompanyDescriptionTitleSize
> = {
  [CompanyDescriptionSize.Medium]: CompanyDescriptionTitleSize.Medium,
  [CompanyDescriptionSize.Large]: CompanyDescriptionTitleSize.Large,
};

export const mapCompanyDescriptionSizeToIconWithLabelSize: Record<
  CompanyDescriptionSize,
  IconWithLabelSize
> = {
  [CompanyDescriptionSize.Medium]: IconWithLabelSize.ExtraSmall,
  [CompanyDescriptionSize.Large]: IconWithLabelSize.Medium,
};

export const mapCompanyDescriptionSizeToTechStackSize: Record<
  CompanyDescriptionSize,
  TechStackSize
> = {
  [CompanyDescriptionSize.Medium]: TechStackSize.Medium,
  [CompanyDescriptionSize.Large]: TechStackSize.Large,
};

export const mapCompanyDescriptionSizeToCompanyResponsibilitiesSize: Record<
  CompanyDescriptionSize,
  CompanyResponsibilitiesSize
> = {
  [CompanyDescriptionSize.Medium]: CompanyResponsibilitiesSize.Medium,
  [CompanyDescriptionSize.Large]: CompanyResponsibilitiesSize.Large,
};
