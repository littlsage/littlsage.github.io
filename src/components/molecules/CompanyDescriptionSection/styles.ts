import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant,
} from "@app/components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import { IThemeClasses } from "@app/types/theme";

export const companyDescriptionSectionDefaultThemeClasses: Record<
  "title",
  IThemeClasses
> = {
  title: {
    fontFamily: "font-anonymousPro",
  },
};

export const mapCompanyDescriptionSectionSizeToTitleStyles: Record<
  CompanyDescriptionSectionSize,
  IThemeClasses
> = {
  [CompanyDescriptionSectionSize.Medium]: {
    fontSize: "text-20",
    lineHeight: "leading-24",
  },
  [CompanyDescriptionSectionSize.Large]: {
    fontSize: "text-24",
    fontWeight: "font-bold",
    lineHeight: "leading-32",
  },
};

export const mapCompanyDescriptionSectionVariantToTitleStyles: Record<
  CompanyDescriptionSectionVariant,
  IThemeClasses
> = {
  [CompanyDescriptionSectionVariant.Blue]: {
    color: "text-blue100",
  },
  [CompanyDescriptionSectionVariant.Dark]: {
    color: "text-blue600",
  },
};

export const mapCompanyDescriptionSectionSizeToContentWrapperStyles: Record<
  CompanyDescriptionSectionSize,
  IThemeClasses
> = {
  [CompanyDescriptionSectionSize.Medium]: {
    marginLeft: "ml-8",
    marginTop: "mt-8",
  },
  [CompanyDescriptionSectionSize.Large]: {
    marginLeft: "ml-16",
    marginTop: "mt-16",
  },
};
