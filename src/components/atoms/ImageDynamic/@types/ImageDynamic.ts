import { CSSProperties, FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "@app/types/theme";

export type SVGImage = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export enum ImageDynamicName {
  Earth = "earth",
  Flux = "flux",
  Hexagon = "hexagon",
  HexagonWithPattern = "hexagonWithPattern",
  Logo = "logo",
  LogoShortcut = "logoShortcut",
}

export interface IImageDynamicProps {
  imageName: ImageDynamicName;
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  style?: CSSProperties;
  themeClasses?: IThemeClasses;
}

export type TImageDynamicComponents = Record<
  IImageDynamicProps["imageName"],
  SVGImage
>;
