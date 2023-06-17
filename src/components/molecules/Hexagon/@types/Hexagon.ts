import { CSSProperties } from "react";
import { TChildren } from "@app/types/props";
import { IThemeClasses } from "@app/types/theme";

export enum HexagonFill {
  None,
  Solid,
  Pattern,
}

export interface IHexagonProps {
  children?: TChildren;
  fill?: HexagonFill;
  themeClasses?: { children?: Pick<IThemeClasses, "width"> };
}

export type THexagonBorderDimensionsProps = CSSProperties;

export type TGetHexagonImagePropsArgs = Pick<IHexagonProps, "fill"> & {
  hexagonBorderDimensions: THexagonBorderDimensionsProps;
};
