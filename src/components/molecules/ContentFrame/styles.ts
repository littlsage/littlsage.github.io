import { ContentFrameTitleVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { IThemeClasses } from "@app/types/theme";

export const contentFrameDefaultThemeClasses: IThemeClasses = {
  alignSelf: "self-auto",
  order: "order-0",
  overflow: "overflow-visible",
};

export const contentFrameTitleDefaultThemeClasses: IThemeClasses = {
  fontFamily: "font-anonymousPro",
  paddingLeft: "pl-2",
};

export const mapTitleVariantToTitleStyles: Record<
  ContentFrameTitleVariant,
  IThemeClasses
> = {
  [ContentFrameTitleVariant.SmallDarkBlue]: {
    color: "text-blue300",
    fontSize: "text-16",
    lineHeight: "leading-36",
    textTransform: "uppercase",
  },
  [ContentFrameTitleVariant.MediumWhite]: {
    color: "text-white",
    fontSize: "text-20",
    lineHeight: "leading-28",
    marginBottom: "mb-12",
    textTransform: "normal-case",
  },
  [ContentFrameTitleVariant.LargeLightBlue]: {
    color: "text-blue100",
    fontSize: "text-28",
    lineHeight: "leading-36",
    textTransform: "uppercase",
  },
};

export const contentFrameDescriptionWrapperDefaultThemeClasses: IThemeClasses =
  {
    height: "h-24",
    marginBottom: "mb-28",
  };

export const contentFrameDescriptionDefaultThemeClasses: IThemeClasses = {
  color: "text-blue300",
  fontSize: "text-8",
  lineHeight: "leading-12",
  maxHeight: "max-h-36",
  overflow: "overflow-hidden",
  textTransform: "uppercase",
};

export const contentFrameChildrenInnerWrapperDefaultThemeClasses: IThemeClasses =
  {
    height: "h-100%",
    position: "relative",
  };

export const contentFrameChildrenOuterContainerDefaultThemeClasses: IThemeClasses =
  {
    height: "h-100%",
  };

export const contentFrameChildrenCornersContainerDefaultThemeClasses: IThemeClasses =
  {
    height: "h-100%",
    padding: "p-8",
  };
