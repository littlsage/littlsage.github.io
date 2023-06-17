import { TChildren } from "@app/types/props";

export enum ListItemVariant {
  Blue,
  Dark,
}
export enum ListItemSize {
  Medium,
  Large,
}

export interface IListItemProps {
  children: TChildren;
  size?: ListItemSize;
  variant?: ListItemVariant;
}
