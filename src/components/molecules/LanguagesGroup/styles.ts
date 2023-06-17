import { IThemeClasses } from "@app/types/theme";

export const languagesGroupDefaultThemeClasses: Record<
  "wrapper" | "languageWrapper" | "level" | "name",
  IThemeClasses
> = {
  languageWrapper: {
    display: "flex",
    flex: "flex-[0_0_calc(50%-0.4rem)]",
    flexFlow: "flex-row-nowrap",
    gap: "gap-8",
  },
  level: {
    alignItems: "items-center",
    backgroundColor: "bg-blue500",
    boxShadow: "shadow-activeButton",
    color: "text-white",
    display: "flex",
    fontSize: "text-16",
    height: "h-36",
    justifyContent: "justify-center",
    position: "relative",
    width: "w-36",
  },
  name: {
    color: "text-white",
    fontSize: "text-16",
    lineHeight: "leading-36",
  },
  wrapper: {
    display: "flex",
    flexFlow: "flex-row-wrap",
    gap: "gap-8",
    width: "w-full",
  },
};
