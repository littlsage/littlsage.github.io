import {
  TMapSizeToButtonContainerProps,
  IMapTypeToButtonContainerProps,
  ButtonSize,
} from "@app/components/molecules/Button/@types/Button";
import { IThemeClasses } from "@app/types/theme";

export const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  primary: {
    backgroundColor: "bg-blue500",
    borderStyle: "border-none",
  },
  secondary: {
    backgroundColor: "bg-transparent",
    borderColor: "border-blue500",
    borderStyle: "border-solid",
    borderWidth: "border-1",
  },
};

export const mapSizeToButtonContainerProps: TMapSizeToButtonContainerProps = {
  [ButtonSize.Large]: {
    height: "h-56",
  },
  [ButtonSize.Medium]: {
    height: "h-48",
  },
  [ButtonSize.Small]: {
    height: "h-40",
  },
};

export const buttonDefaultThemeClasses: IThemeClasses = {
  active: "active:shadow-activeButton",
  color: "text-white",
  cursor: "cursor-pointer",
  focus: "focus:shadow-activeButton",
  hover: "hover:shadow-activeButton",
  outline: "outline-0",
  position: "relative",
  textTransform: "lowercase",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  userSelect: "select-none",
  width: "w-auto",
};

export const buttonInnerContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  height: "h-full",
  justifyContent: "justify-center",
  overflow: "overflow-hidden",
  position: "relative",
};

export const buttonChildrenOuterWrapperDefaultThemeClasses: IThemeClasses = {
  width: "w-full",
};

export const buttonChildrenWrapperDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  justifyContent: "justify-center",
};
