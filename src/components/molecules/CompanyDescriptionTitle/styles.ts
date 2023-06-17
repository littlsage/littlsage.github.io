import {
  CompanyDescriptionTitleSize,
  CompanyDescriptionTitleVariant,
} from "@app/components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { IThemeClasses } from "@app/types/theme";

export const companyDescriptionTitleDefaultThemeClasses: IThemeClasses = {
  fontFamily: "font-anonymousPro",
  textAlign: "text-left",
};

export const mapCompanyDescriptionTitleVariantToStyles: Record<
  CompanyDescriptionTitleVariant,
  IThemeClasses
> = {
  [CompanyDescriptionTitleVariant.Dark]: {
    color: "text-blue600",
  },
  [CompanyDescriptionTitleVariant.Light]: {
    color: "text-white",
  },
};

export const mapCompanyDescriptionTitleSizeToStyles: Record<
  CompanyDescriptionTitleSize,
  IThemeClasses
> = {
  [CompanyDescriptionTitleSize.Medium]: {
    fontSize: "text-24",
    lineHeight: "leading-28",
  },
  [CompanyDescriptionTitleSize.Large]: {
    fontSize: "text-36",
    lineHeight: "leading-56",
  },
};
