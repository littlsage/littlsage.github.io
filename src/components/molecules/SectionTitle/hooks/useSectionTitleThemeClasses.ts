import {
  ISectionTitleProps,
  SectionTitleSize,
  SectionTitleVariant,
} from "@app/components/molecules/SectionTitle/@types/SectionTitle";
import {
  mapSizeToTypographyStyles,
  mapSizeToWrapperStyles,
  mapVariantToTypographyStyles,
  sectionTitleTypographyDefaultThemeClasses,
} from "@app/components/molecules/SectionTitle/styles";

const useSectionTitleThemeClasses = ({
  size = SectionTitleSize.Large,
  themeClasses,
  variant = SectionTitleVariant.Blue,
}: Pick<ISectionTitleProps, "size" | "themeClasses" | "variant">) => {
  const sectionTitleMobileThemeClasses: ISectionTitleProps["themeClasses"] = {
    title: {
      ...sectionTitleTypographyDefaultThemeClasses,
      ...mapSizeToTypographyStyles[size]["mobile"],
      ...mapVariantToTypographyStyles[variant],
      ...themeClasses?.title,
    },
    wrapper: {
      ...mapSizeToWrapperStyles[size]["mobile"],
      ...themeClasses?.wrapper,
    },
  };

  const sectionTitleTvDesktopTabletThemeClasses: ISectionTitleProps["themeClasses"] =
    {
      title: {
        ...sectionTitleTypographyDefaultThemeClasses,
        ...mapSizeToTypographyStyles[size]["tvDesktopAndTablet"],
        ...mapVariantToTypographyStyles[variant],
        ...themeClasses?.title,
      },
      wrapper: {
        ...mapSizeToWrapperStyles[size]["tvDesktopAndTablet"],
        ...themeClasses?.wrapper,
      },
    };

  return {
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses,
  };
};

export { useSectionTitleThemeClasses };
