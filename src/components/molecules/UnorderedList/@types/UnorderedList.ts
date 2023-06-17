import { IListItemProps } from "@app/components/atoms/ListItem/@types/ListItem";

export enum UnorderedListVariant {
  Blue,
  Dark,
}

export enum UnorderedListSize {
  Medium,
  Large,
}

export interface IUnorderedListProps {
  items: Array<IListItemProps["children"]>;
  size?: UnorderedListSize;
  variant?: UnorderedListVariant;
}
