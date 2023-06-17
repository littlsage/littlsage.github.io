export enum LineDirection {
  Left,
  Right,
}

export interface ILineProps {
  direction: LineDirection;
  isActive?: boolean;
}
