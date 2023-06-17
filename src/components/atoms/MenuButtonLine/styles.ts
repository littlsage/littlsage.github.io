import { IThemeClasses } from "@app/types/theme";

export const menuButtonLineDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-white",
  height: "h-2",
  left: "left-0",
  position: "absolute",
  pseudoClasses: [
    "first:top-0",
    "secondChild:top-14",
    "thirdChild:top-14",
    "fourthChild:top-28",
  ],
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  width: "w-full",
};
