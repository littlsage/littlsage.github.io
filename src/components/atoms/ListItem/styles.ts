import {
  ListItemSize,
  ListItemVariant,
} from "@app/components/atoms/ListItem/@types/ListItem";
import { IThemeClasses } from "@app/types/theme";

export const mapListItemVariantToStyles: Record<
  ListItemVariant,
  IThemeClasses
> = {
  [ListItemVariant.Blue]: {
    color: "text-blue300",
    pseudoClasses: ["childrenStrong:text-blue100"],
  },
  [ListItemVariant.Dark]: {
    color: "text-blue600",
    pseudoClasses: ["childrenStrong:text-blue400"],
  },
};

export const mapListItemSizeToStyles: Record<ListItemSize, IThemeClasses> = {
  [ListItemSize.Medium]: {
    fontSize: "text-12",
    lineHeight: "leading-16",
  },
  [ListItemSize.Large]: {
    fontSize: "text-20",
    lineHeight: "leading-28",
  },
};
