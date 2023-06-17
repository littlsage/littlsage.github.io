import {
  SectionTitleSize,
  SectionTitleVariant,
} from "@app/components/molecules/SectionTitle/@types/SectionTitle";
import { isIE11 } from "@app/helpers/browser/isIE11";
import { IThemeClasses } from "@app/types/theme";

export const sectionTitleTypographyDefaultThemeClasses: IThemeClasses = {
  fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
  textAlign: "text-center",
  textTransform: isIE11() ? "uppercase" : "lowercase",
};

export const mapVariantToTypographyStyles: Record<
  SectionTitleVariant,
  IThemeClasses
> = {
  [SectionTitleVariant.Blue]: {
    color: "text-blue100",
  },
  [SectionTitleVariant.Dark]: {
    color: "text-blue600",
  },
  [SectionTitleVariant.Light]: {
    color: "text-white",
  },
};

export const mapSizeToTypographyStyles: Record<
  SectionTitleSize,
  Record<"mobile" | "tvDesktopAndTablet", IThemeClasses>
> = {
  [SectionTitleSize.Large]: {
    mobile: {
      fontSize: "text-48",
      lineHeight: "leading-80",
    },
    tvDesktopAndTablet: {
      fontSize: "text-72",
      lineHeight: "leading-80",
    },
  },
  [SectionTitleSize.Small]: {
    mobile: {
      fontSize: "text-36",
      lineHeight: "leading-44",
    },
    tvDesktopAndTablet: {
      fontSize: "text-36",
      lineHeight: "leading-44",
    },
  },
};

export const mapSizeToWrapperStyles: Record<
  SectionTitleSize,
  Record<"mobile" | "tvDesktopAndTablet", IThemeClasses>
> = {
  [SectionTitleSize.Large]: {
    mobile: {
      marginBottom: "mb-48",
    },
    tvDesktopAndTablet: {
      marginBottom: "mb-96",
    },
  },
  [SectionTitleSize.Small]: {
    mobile: {
      marginBottom: "mb-20",
    },
    tvDesktopAndTablet: {
      marginBottom: "mb-20",
    },
  },
};
