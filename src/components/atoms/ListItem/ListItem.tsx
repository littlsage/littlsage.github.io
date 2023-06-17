import {
  IListItemProps,
  ListItemSize,
  ListItemVariant,
} from "@app/components/atoms/ListItem/@types/ListItem";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  mapListItemSizeToStyles,
  mapListItemVariantToStyles,
} from "@app/components/atoms/ListItem/styles";
import { IThemeClasses } from "@app/types/theme";

const ListItem: React.FC<IListItemProps> = ({
  children,
  size = ListItemSize.Large,
  variant = ListItemVariant.Blue,
}) => {
  const listItemThemeClasses: IThemeClasses = {
    ...mapListItemVariantToStyles[variant],
    ...mapListItemSizeToStyles[size],
  };

  return (
    <li className={convertObjectValuesToString(listItemThemeClasses)}>
      {children}
    </li>
  );
};

export { ListItem };
