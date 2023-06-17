import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum CompanyResponsibilitiesVariant {
  Blue,
  Dark,
}

export enum CompanyResponsibilitiesSize {
  Medium,
  Large,
}

export interface ICompanyResponsibilitiesProps {
  responsibilities: TChildren[];
  size?: CompanyResponsibilitiesSize;
  themeClasses?: Pick<IThemeClasses, "paddingBottom">;
  variant?: CompanyResponsibilitiesVariant;
}
