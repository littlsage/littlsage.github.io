import { CSSProperties } from "react";
import { IThemeClasses } from "@app/types/theme";
import { ImageProps } from "next/image";

export interface IImageStaticProps {
  alt?: string;
  blurDataURL?: ImageProps["blurDataURL"];
  className?: string;
  height: number;
  id?: string;
  quality?: ImageProps["quality"];
  src: ImageProps["src"];
  style?: CSSProperties;
  themeClasses?: IThemeClasses;
  width: number;
}
