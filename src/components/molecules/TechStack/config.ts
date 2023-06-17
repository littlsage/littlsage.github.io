import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant,
} from "@app/components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  TechStackSize,
  TechStackVariant,
} from "@app/components/molecules/TechStack/@types/TechStack";

export const mapTechStackVariantToIconsWithLabelsVariant: Record<
  TechStackVariant,
  IconWithLabelVariant
> = {
  [TechStackVariant.Blue]: IconWithLabelVariant.Blue,
  [TechStackVariant.Dark]: IconWithLabelVariant.Dark,
};

export const mapTechStackSizeToIconsWithLabelsSize: Record<
  TechStackSize,
  IconWithLabelSize
> = {
  [TechStackSize.Medium]: IconWithLabelSize.ExtraSmall,
  [TechStackSize.Large]: IconWithLabelSize.Small,
};

export const mapTechStackVariantToCompanyDescriptionSectionVariant: Record<
  TechStackVariant,
  CompanyDescriptionSectionVariant
> = {
  [TechStackVariant.Blue]: CompanyDescriptionSectionVariant.Blue,
  [TechStackVariant.Dark]: CompanyDescriptionSectionVariant.Dark,
};

export const mapTechStackSizeToCompanyDescriptionSectionSize: Record<
  TechStackSize,
  CompanyDescriptionSectionSize
> = {
  [TechStackSize.Medium]: CompanyDescriptionSectionSize.Medium,
  [TechStackSize.Large]: CompanyDescriptionSectionSize.Large,
};
