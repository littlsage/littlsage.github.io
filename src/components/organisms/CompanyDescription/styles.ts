import { CompanyDescriptionSize } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";
import { IThemeClasses } from "@app/types/theme";

export const companyDescriptionDefaultThemeClasses: Record<
  "container" | "outstandingIcons",
  IThemeClasses
> = {
  container: {
    mediaQuery: ["msHighContrastNone:w-100%", "msHighContrastActive:w-100%"],
  },
  outstandingIcons: {
    display: "flex",
    flexFlow: "flex-col-nowrap",
    gap: "gap-16",
    marginY: "my-32",
  },
};

export const mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles: Record<
  CompanyDescriptionSize,
  IThemeClasses
> = {
  [CompanyDescriptionSize.Medium]: {
    gap: "gap-8",
    marginY: "my-16",
  },
  [CompanyDescriptionSize.Large]: {
    gap: "gap-16",
    marginY: "my-32",
  },
};
