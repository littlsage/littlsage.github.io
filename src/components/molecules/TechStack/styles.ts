import { TechStackSize } from "@app/components/molecules/TechStack/@types/TechStack";
import { IThemeClasses } from "@app/types/theme";

export const mapTechStackSizeToStyles: Record<TechStackSize, IThemeClasses> = {
  [TechStackSize.Medium]: {
    marginBottom: "mb-16",
  },
  [TechStackSize.Large]: {
    marginBottom: "mb-32",
  },
};
