import {
  ListItemSize,
  ListItemVariant,
} from "@app/components/atoms/ListItem/@types/ListItem";
import {
  UnorderedListSize,
  UnorderedListVariant,
} from "@app/components/molecules/UnorderedList/@types/UnorderedList";

export const mapUnorderedListVariantToListItemVariant: Record<
  UnorderedListVariant,
  ListItemVariant
> = {
  [UnorderedListVariant.Blue]: ListItemVariant.Blue,
  [UnorderedListVariant.Dark]: ListItemVariant.Dark,
};

export const mapUnorderedListSizeToListItemSize: Record<
  UnorderedListSize,
  ListItemSize
> = {
  [UnorderedListSize.Medium]: ListItemSize.Medium,
  [UnorderedListSize.Large]: ListItemSize.Large,
};
