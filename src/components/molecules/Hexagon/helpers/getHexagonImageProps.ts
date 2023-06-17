import {
  IImageDynamicProps,
  ImageDynamicName,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import {
  HexagonFill,
  TGetHexagonImagePropsArgs,
} from "@app/components/molecules/Hexagon/@types/Hexagon";
import { hexagonSolidImageDefaultThemeClasses } from "@app/components/molecules/Hexagon/styles";

const getHexagonImageProps = ({
  fill,
  hexagonBorderDimensions,
}: TGetHexagonImagePropsArgs): IImageDynamicProps => {
  switch (fill) {
    case HexagonFill.Pattern:
      return {
        imageName: ImageDynamicName.HexagonWithPattern,
      };

    case HexagonFill.Solid:
      return {
        imageName: ImageDynamicName.Hexagon,
        isActive: true,
        shouldGlow: true,
        themeClasses: hexagonSolidImageDefaultThemeClasses,
      };

    default:
    case HexagonFill.None:
      return {
        imageName: ImageDynamicName.Hexagon,
        shouldGlow: true,
        style: {
          height: hexagonBorderDimensions.height,
          width: hexagonBorderDimensions.width,
        },
      };
  }
};

export { getHexagonImageProps };
