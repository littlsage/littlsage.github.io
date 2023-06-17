import { IThemeClasses } from "@app/types/theme";

export const spinnerDefaultThemeClasses: IThemeClasses = {
  animate: "animate-rotate-slow",
  borderBottomColor: "border-b-blue300",
  borderLeftColor: "border-l-transparent",
  borderRadius: "rounded-full",
  borderRightColor: "border-r-transparent",
  borderStyle: "border-solid",
  borderTopColor: "border-t-blue300",
  borderWidth: "border-[0.25rem]",
  display: "inline-block",
  height: "h-100",
  transform: "transform-gpu",
  translate: ["translate-x-[-50%]", "translate-y-[-50%]"],
  width: "w-100",
};
