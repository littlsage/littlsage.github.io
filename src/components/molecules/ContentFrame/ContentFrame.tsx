import React from "react";

import { Typography } from "@app/components/atoms/Typography/Typography";
import { Corners } from "@app/components/molecules/Corners/Corners";

import {
  ContentFrameTitleVariant,
  ContentFrameVariant,
  IContentFrameProps,
} from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  contentFrameChildrenCornersContainerDefaultThemeClasses,
  contentFrameChildrenInnerWrapperDefaultThemeClasses,
  contentFrameDescriptionDefaultThemeClasses,
  contentFrameDescriptionWrapperDefaultThemeClasses,
} from "@app/components/molecules/ContentFrame/styles";
import { useContentFrameThemeClasses } from "@app/components/molecules/ContentFrame/hooks/useContentFrameThemeClasses";

const ContentFrame: React.FC<IContentFrameProps> = ({
  children,
  description,
  themeClasses,
  title,
  titleVariant = ContentFrameTitleVariant.SmallDarkBlue,
  variant = ContentFrameVariant.Empty,
}) => {
  const {
    contentFrameChildrenOuterContainerThemeClasses,
    contentFrameChildrenOuterWrapperThemeClasses,
    contentFrameThemeClasses,
    contentFrameTitleThemeClasses,
  } = useContentFrameThemeClasses({
    description,
    themeClasses,
    titleVariant,
    variant,
  });

  const shouldDisplayCorners =
    variant === ContentFrameVariant.Corners ||
    variant === ContentFrameVariant.CornersWithBorder;

  return (
    <LayoutContainer themeClasses={contentFrameThemeClasses}>
      {title ? (
        <Typography ellipsis themeClasses={contentFrameTitleThemeClasses}>
          {title}
        </Typography>
      ) : null}

      {description ? (
        <LayoutContainer
          themeClasses={contentFrameDescriptionWrapperDefaultThemeClasses}
        >
          <Typography themeClasses={contentFrameDescriptionDefaultThemeClasses}>
            {description}
          </Typography>
        </LayoutContainer>
      ) : null}

      <LayoutContainer
        themeClasses={contentFrameChildrenOuterWrapperThemeClasses}
      >
        <LayoutContainer
          themeClasses={contentFrameChildrenInnerWrapperDefaultThemeClasses}
        >
          {shouldDisplayCorners && <Corners />}

          <LayoutContainer
            themeClasses={contentFrameChildrenOuterContainerThemeClasses}
          >
            {shouldDisplayCorners ? (
              <LayoutContainer
                themeClasses={
                  contentFrameChildrenCornersContainerDefaultThemeClasses
                }
              >
                {children}
              </LayoutContainer>
            ) : (
              children
            )}
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { ContentFrame };
