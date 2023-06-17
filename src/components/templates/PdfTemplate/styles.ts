import { IThemeClasses } from "@app/types/theme";

export const pdfTemplateDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-white",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-[fit-content]",
  marginX: "mx-auto",
  marginY: "my-0",
  width: "w-full",
};

export const pdfTemplateChildrenDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[0_0_65%]",
  paddingBottom: "pb-28",
  paddingTop: "pt-0",
  paddingX: "px-16",
};

export const pdfTemplateSidebarDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-blue600",
  display: "flex",
  flex: "flex-[0_0_35%]",
  flexFlow: "flex-col-nowrap",
  paddingBottom: "pb-16",
  paddingTop: "pt-40",
  paddingX: "px-24",
};
