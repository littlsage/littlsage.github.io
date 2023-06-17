import { CompanyResponsibilitiesSize } from "@app/components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import { IThemeClasses } from "@app/types/theme";

export const mapCompanyResponsibilitiesSizeToStyles: Record<
  CompanyResponsibilitiesSize,
  IThemeClasses
> = {
  [CompanyResponsibilitiesSize.Medium]: {
    paddingBottom: "pb-32",
  },
  [CompanyResponsibilitiesSize.Large]: {
    paddingBottom: "pb-68",
  },
};
