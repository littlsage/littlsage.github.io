/* eslint-disable import/exports-last */
import {
  CompanyNameFormat,
  CompanyNameSize,
  CompanyNameVariant,
} from "@app/components/molecules/CompanyName/@types/CompanyName";
import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const companyTvDesktopAndTabletNameContainerDefaultThemeClasses: IThemeClasses =
  {
    pseudoClasses: isIE11()
      ? [
          "msHighContrastNone:flex-none",
          "msHighContrastNone:w-50%",
          "msHighContrastActive:flex-none",
          "msHighContrastActive:w-50%",
        ]
      : [],
  };

const companyNameCommonThemeClasses: IThemeClasses = {
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
};

export const companyTvDesktopAndTabletNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-56",
  textAlign: "text-right",
};

export const companyMobileNameDefaultThemeClasses: IThemeClasses = {
  ...companyNameCommonThemeClasses,
  lineHeight: "leading-48",
  textAlign: "text-center",
};

export const mapCompanyNameVariantToStyles: Record<
  CompanyNameVariant,
  IThemeClasses
> = {
  [CompanyNameVariant.Dark]: {
    color: "text-blue600",
  },
  [CompanyNameVariant.Light]: {
    color: "text-white",
  },
};

export const mapCompanyNameSizeToNameStyles: Record<
  CompanyNameSize,
  Record<CompanyNameFormat, IThemeClasses>
> = {
  [CompanyNameSize.Medium]: {
    [CompanyNameFormat.Mobile]: {
      fontSize: "text-24",
      lineHeight: "leading-28",
    },
    [CompanyNameFormat.Pdf]: {
      fontSize: "text-24",
      lineHeight: "leading-28",
    },
    [CompanyNameFormat.TvDesktopAndTablet]: {
      fontSize: "text-24",
      lineHeight: "leading-28",
    },
  },
  [CompanyNameSize.Large]: {
    [CompanyNameFormat.Mobile]: {
      fontSize: "text-48",
      lineHeight: "leading-48",
    },
    [CompanyNameFormat.Pdf]: {
      fontSize: "text-48",
      lineHeight: "leading-56",
    },
    [CompanyNameFormat.TvDesktopAndTablet]: {
      fontSize: "text-48",
      lineHeight: "leading-56",
    },
  },
};

export const mapCompanyNameSizeToContainerStyles: Record<
  CompanyNameSize,
  IThemeClasses
> = {
  [CompanyNameSize.Medium]: {
    flex: "flex-[0_0_35%]",
    paddingRight: "pr-20",
  },
  [CompanyNameSize.Large]: {
    flex: "flex-[0_0_50%]",
    paddingRight: "pr-40",
  },
};
