export enum CompanyNameFormat {
  Mobile,
  Pdf,
  TvDesktopAndTablet,
}

export enum CompanyNameVariant {
  Dark,
  Light,
}

export enum CompanyNameSize {
  Medium,
  Large,
}

export interface ICompanyNameProps {
  children: string;
  format: CompanyNameFormat;
  size?: CompanyNameSize;
  variant?: CompanyNameVariant;
}
