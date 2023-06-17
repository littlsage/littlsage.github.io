import { ReactElementLike, ReactNodeArray } from "prop-types";

export type TChildren =
  | string
  | number
  | boolean
  | ReactElementLike
  | ReactNodeArray
  | null;
