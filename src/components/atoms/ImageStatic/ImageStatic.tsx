import { IImageStaticProps } from "@app/components/atoms/ImageStatic/@types/ImageStatic";
import { imageStaticDefaultThemeClasses } from "@app/components/atoms/ImageStatic/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";
import Image from "next/legacy/image";

const ImageStatic: React.FC<IImageStaticProps> = ({
  alt = "",
  blurDataURL,
  className,
  height,
  id,
  quality = 100,
  src,
  style,
  themeClasses,
  width,
}) => {
  const imageStaticThemeClasses: IThemeClasses = {
    ...imageStaticDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Image
      alt={alt}
      blurDataURL={blurDataURL}
      height={height}
      className={`${convertObjectValuesToString(
        imageStaticThemeClasses,
      )} ${className}`}
      id={id}
      quality={quality}
      placeholder="blur"
      src={src}
      style={style}
      width={width}
    />
  );
};

export { ImageStatic };
