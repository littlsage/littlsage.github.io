import {
  IImageDynamicProps,
  SVGImage,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicComponents } from "@app/components/atoms/ImageDynamic/config";
import { useImageDynamicThemeClasses } from "@app/components/atoms/ImageDynamic/hooks/useImageDynamicThemeClasses";
import React, { forwardRef } from "react";

const _ImageDynamic: React.ForwardRefRenderFunction<
  HTMLDivElement,
  IImageDynamicProps
> = (
  {
    imageName,
    isActive = false,
    isHeightResponsive = false,
    isResponsive = false,
    shouldGlow = false,
    shouldGlowOnHover = false,
    style,
    themeClasses,
  },
  ref,
) => {
  const { imageComponentClassNames, imageDynamicWrapperClassNames } =
    useImageDynamicThemeClasses({
      isActive,
      isHeightResponsive,
      isResponsive,
      shouldGlow,
      shouldGlowOnHover,
      themeClasses,
    });

  const ImageComponent: SVGImage = imageDynamicComponents[imageName];

  return (
    <div className={imageDynamicWrapperClassNames} ref={ref} style={style}>
      <ImageComponent className={imageComponentClassNames} />
    </div>
  );
};

const ImageDynamic = forwardRef(_ImageDynamic);

export { ImageDynamic };
