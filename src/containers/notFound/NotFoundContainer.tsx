"use client";
import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { Error } from "@app/components/molecules/Error/Error";
import { LazyLoadingWrapper } from "@app/components/layout/LazyLoadingWrapper/LazyLoadingWrapper";
import { lazy } from "react";

const ImageDynamic = lazy(() =>
  import("@app/components/atoms/ImageDynamic/ImageDynamic").then((module) => ({
    default: module.ImageDynamic,
  })),
);

const LayoutContainer = lazy(() =>
  import("@app/components/layout/LayoutContainer/LayoutContainer").then(
    (module) => ({
      default: module.LayoutContainer,
    }),
  ),
);

const NotFoundContainer: React.FC = () => (
  <LazyLoadingWrapper>
    <ImageDynamic
      imageName={ImageDynamicName.Logo}
      themeClasses={{
        width: "w-100%",
      }}
    />

    <LayoutContainer
      themeClasses={{
        marginY: "my-32",
        width: "w-100%",
      }}
    >
      <ContentFrame
        themeClasses={{
          container: {
            flex: "flex-[1_1_100%]",
          },
        }}
        variant={ContentFrameVariant.Corners}
      >
        <Error title="404" description="Page not found" />
      </ContentFrame>
    </LayoutContainer>
  </LazyLoadingWrapper>
);

export { NotFoundContainer };
