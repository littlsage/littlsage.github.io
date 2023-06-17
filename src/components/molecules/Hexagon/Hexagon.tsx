"use client";
import {
  HexagonFill,
  IHexagonProps,
} from "@app/components/molecules/Hexagon/@types/Hexagon";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import { IThemeClasses } from "@app/types/theme";
import { useHexagonState } from "@app/components/molecules/Hexagon/hooks/useHexagonState";
import {
  hexagonContentDefaultThemeClasses,
  hexagonDefaultThemeClasses,
} from "@app/components/molecules/Hexagon/styles";
import { getHexagonImageProps } from "@app/components/molecules/Hexagon/helpers/getHexagonImageProps";

const Hexagon: React.FC<IHexagonProps> = ({
  children,
  fill = HexagonFill.None,
  themeClasses,
}) => {
  const { hexagonBorderDimensions, hexagonBorderRef } = useHexagonState({
    fill,
  });

  const hexagonContentThemeClasses: IThemeClasses = {
    ...hexagonContentDefaultThemeClasses,
    ...themeClasses?.children,
  };

  const hexagonImageProps = getHexagonImageProps({
    fill,
    hexagonBorderDimensions,
  });

  return (
    <LayoutContainer themeClasses={hexagonDefaultThemeClasses}>
      <ImageDynamic
        {...hexagonImageProps}
        ref={fill === HexagonFill.None ? hexagonBorderRef : undefined}
      />

      {children && (
        <LayoutContainer themeClasses={hexagonContentThemeClasses}>
          {children}
        </LayoutContainer>
      )}
    </LayoutContainer>
  );
};

export { Hexagon };
