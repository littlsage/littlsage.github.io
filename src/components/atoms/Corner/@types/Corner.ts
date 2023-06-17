import { IThemeClasses } from "@app/types/theme";

interface ICornerContainerProps {
  left: IThemeClasses["left"];
  opacity?: IThemeClasses["opacity"];
  rotate: IThemeClasses["rotate"];
  top: IThemeClasses["top"];
}

export enum CornerPosition {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
}

export enum CornerVariant {
  Dark,
  Light,
}

export interface ICornerProps {
  isActive?: boolean;
  position: CornerPosition;
  variant?: CornerVariant;
}
export type TMapPositionToCornerProps = Record<
  CornerPosition,
  ICornerContainerProps
>;
