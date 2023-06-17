import {
  CompanyDescriptionSize,
  ICompanyDescriptionProps,
} from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles,
  companyDescriptionDefaultThemeClasses,
} from "@app/components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "@app/types/theme";

const useCompanyDescriptionThemeClasses = ({
  size = CompanyDescriptionSize.Large,
}: Pick<ICompanyDescriptionProps, "size">) => {
  const companyDescriptionThemeClasses: Record<
    "outstandingIcons",
    IThemeClasses
  > = {
    outstandingIcons: {
      ...companyDescriptionDefaultThemeClasses.outstandingIcons,
      ...mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles[
        size
      ],
    },
  };

  return {
    companyDescriptionThemeClasses,
  };
};

export { useCompanyDescriptionThemeClasses };
