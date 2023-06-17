import {
  CornerPosition,
  ICornerProps,
} from "@app/components/atoms/Corner/@types/Corner";

export const cornersPositions: Pick<ICornerProps, "position">[] = [
  {
    position: CornerPosition.TopLeft,
  },
  {
    position: CornerPosition.TopRight,
  },
  {
    position: CornerPosition.BottomLeft,
  },
  {
    position: CornerPosition.BottomRight,
  },
];
