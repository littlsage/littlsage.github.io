import {
  ISectionProps,
  SectionSize,
} from "@app/components/molecules/Section/@types/Section";
import { sectionDefaultThemeClasses } from "@app/components/molecules/Section/styles";
import { IThemeClasses } from "@app/types/theme";

const useSectionThemeClasses = ({
  size = SectionSize.Large,
  themeClasses,
  title,
}: Pick<ISectionProps, "size" | "themeClasses" | "title">) => {
  const sectionThemeClasses: IThemeClasses = {
    ...sectionDefaultThemeClasses,
    ...(title && size === SectionSize.Large
      ? {
          marginTop: "mt-1",
          paddingTop: "pt-96",
        }
      : {
          paddingTop: "pt-48",
        }),
    ...themeClasses,
  };

  return {
    sectionThemeClasses,
  };
};

export { useSectionThemeClasses };
