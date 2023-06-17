import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum CompanyDescriptionSectionVariant {
  Blue,
  Dark,
}

export enum CompanyDescriptionSectionSize {
  Medium,
  Large,
}

export interface ICompanyDescriptionSectionProps {
  children: TChildren;
  size?: CompanyDescriptionSectionSize;
  themeClasses?: IThemeClasses;
  title: string;
  variant?: CompanyDescriptionSectionVariant;
}
