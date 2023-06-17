import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum CompanyDescriptionTitleVariant {
  Dark,
  Light,
}

export enum CompanyDescriptionTitleSize {
  Medium,
  Large,
}

export interface ICompanyDescriptionTitleProps {
  children: TChildren;
  size?: CompanyDescriptionTitleSize;
  themeClasses?: Pick<IThemeClasses, "textAlign">;
  variant?: CompanyDescriptionTitleVariant;
}
