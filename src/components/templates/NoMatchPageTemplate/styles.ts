import { IThemeClasses } from "@app/types/theme";

export const noMatchPageTemplateDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-col-nowrap",
  justifyContent: "justify-center",
  marginX: "mx-auto",
  marginY: "my-0",
  mediaQuery: [
    "screenSmMd:min-w-50%",
    "screenMaxSm:min-h-initial",
    "screenMaxSm:p-28",
    "screenMaxSm:w-100%",
  ],
  minHeight: "min-h-100vh",
  padding: "p-48",
  width: "w-[45.2rem]",
};
