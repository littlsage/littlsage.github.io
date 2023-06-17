import { IThemeClasses } from "@app/types/theme";

export const typingAnimationDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  position: "relative",
};

export const typingAnimationCodeDefaultThemeClasses: IThemeClasses = {
  after: [
    "after:animate-blink-default",
    "after:bg-blue100",
    "after:content-['']",
    "after:inline-block",
    "after:h-8",
    "after:w-4",
    "after:ml-4",
    "after:translate-y-1",
  ],
  bottom: "bottom-0",
  color: "text-blue300",
  fontFamily: "font-anonymousPro",
  fontSize: "text-8",
  left: "left-0",
  lineHeight: "leading-12",
  minHeight: "min-h-100%",
  position: "absolute",
  right: "right-0",
};
