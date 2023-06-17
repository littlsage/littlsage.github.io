import {
  CornerPosition,
  ICornerProps,
  TMapPositionToCornerProps,
} from "@app/components/atoms/Corner/@types/Corner";
import { IThemeClasses } from "@app/types/theme";

const mapPositionToCornerProps = (
  isActive: ICornerProps["isActive"],
): TMapPositionToCornerProps => ({
  [CornerPosition.BottomLeft]: {
    left: isActive ? "left-[-8px]" : "left-0",
    rotate: "rotate-[270deg]",
    top: isActive ? "top-full" : "top-[calc(100%-8px)]",
  },
  [CornerPosition.BottomRight]: {
    left: isActive ? "left-full" : "left-[calc(100%-8px)]",
    rotate: "rotate-180",
    top: isActive ? "top-full" : "top-[calc(100%-8px)]",
  },
  [CornerPosition.TopLeft]: {
    left: isActive ? "left-[-8px]" : "left-0",
    rotate: "rotate-0",
    top: isActive ? "top-[-8px]" : "top-0",
  },
  [CornerPosition.TopRight]: {
    left: isActive ? "left-full" : "left-[calc(100%-8px)]",
    rotate: "rotate-90",
    top: isActive ? "top-[-8px]" : "top-0",
  },
});

const cornerDefaultThemeClasses: IThemeClasses = {
  borderStyle: "border-solid",
  borderWidth: ["border-l-thin", "border-t-thin"],
  height: "h-8",
  position: "absolute",
  transform: "transform-gpu",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  width: "w-8",
};

export { cornerDefaultThemeClasses, mapPositionToCornerProps };
