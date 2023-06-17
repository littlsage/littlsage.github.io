import {
  CompanyFormat,
  CompanyVariant,
} from "@app/components/organisms/Company/@types/Company";
import { ExperienceContainerFormat } from "@app/containers/experience/@types/ExperienceContainer";

export const mapExperienceContainerFormatToCompanyVariant: Record<
  ExperienceContainerFormat,
  CompanyVariant
> = {
  [ExperienceContainerFormat.Web]: CompanyVariant.Blue,
  [ExperienceContainerFormat.Pdf]: CompanyVariant.Dark,
};

export const mapExperienceContainerFormatToCompanyFormat: Record<
  ExperienceContainerFormat,
  CompanyFormat
> = {
  [ExperienceContainerFormat.Web]: CompanyFormat.Web,
  [ExperienceContainerFormat.Pdf]: CompanyFormat.Pdf,
};
