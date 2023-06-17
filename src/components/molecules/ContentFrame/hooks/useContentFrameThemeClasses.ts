import { calculateChildrenHeight } from "@app/components/molecules/ContentFrame/helpers/calculateChildrenHeight";
import {
  contentFrameChildrenOuterContainerDefaultThemeClasses,
  contentFrameDefaultThemeClasses,
  contentFrameTitleDefaultThemeClasses,
  mapTitleVariantToTitleStyles,
} from "@app/components/molecules/ContentFrame/styles";
import { ITypographyProps } from "@app/components/atoms/Typography/@types/Typography";
import { IThemeClasses } from "@app/types/theme";
import {
  ContentFrameTitleVariant,
  ContentFrameVariant,
  IContentFrameProps,
} from "@app/components/molecules/ContentFrame/@types/ContentFrame";

const useContentFrameThemeClasses = ({
  description,
  themeClasses,
  titleVariant = ContentFrameTitleVariant.SmallDarkBlue,
  variant = ContentFrameVariant.Empty,
}: Pick<
  IContentFrameProps,
  "description" | "themeClasses" | "titleVariant" | "variant"
>) => {
  const contentFrameThemeClasses: IThemeClasses = {
    ...contentFrameDefaultThemeClasses,
    ...themeClasses?.container,
  };

  const contentFrameTitleThemeClasses: ITypographyProps["themeClasses"] = {
    ...contentFrameTitleDefaultThemeClasses,
    ...mapTitleVariantToTitleStyles[titleVariant],
    ...themeClasses?.title,
  };

  const contentFrameChildrenOuterWrapperThemeClasses: IThemeClasses = {
    height: calculateChildrenHeight({ description }),
    marginTop:
      contentFrameTitleThemeClasses.fontSize === "text-28" ? "mt-8" : "mt-0",
  };

  const contentFrameChildrenOuterContainerThemeClasses: IThemeClasses = {
    ...contentFrameChildrenOuterContainerDefaultThemeClasses,
    ...(variant === ContentFrameVariant.Border ||
    variant === ContentFrameVariant.CornersWithBorder
      ? {
          borderColor: "border-blue300",
          borderStyle: "border-solid",
          borderWidth: "border-thin",
        }
      : {}),
    ...(variant !== ContentFrameVariant.Empty && {
      background: [
        "bg-crossImg",
        "bg-center",
        "bg-repeat-space",
        "bg-[length:3.2rem_3.2rem]",
      ],
    }),
    ...themeClasses?.children,
  };

  return {
    contentFrameChildrenOuterContainerThemeClasses,
    contentFrameChildrenOuterWrapperThemeClasses,
    contentFrameThemeClasses,
    contentFrameTitleThemeClasses,
  };
};

export { useContentFrameThemeClasses };
