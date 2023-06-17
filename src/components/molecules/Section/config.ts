import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import {
  SectionTitleSize,
  SectionTitleVariant,
} from "@app/components/molecules/SectionTitle/@types/SectionTitle";

export const mapSectionVariantToSectionTitleVariant: Record<
  SectionVariant,
  SectionTitleVariant
> = {
  [SectionVariant.Blue]: SectionTitleVariant.Blue,
  [SectionVariant.Dark]: SectionTitleVariant.Dark,
  [SectionVariant.Light]: SectionTitleVariant.Light,
};

export const mapSectionSizeToSectionTitleSize: Record<
  SectionSize,
  SectionTitleSize
> = {
  [SectionSize.Large]: SectionTitleSize.Large,
  [SectionSize.Small]: SectionTitleSize.Small,
};
