import { ListItem } from "@app/components/atoms/ListItem/ListItem";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

import {
  IUnorderedListProps,
  UnorderedListSize,
  UnorderedListVariant,
} from "@app/components/molecules/UnorderedList/@types/UnorderedList";
import {
  mapUnorderedListSizeToListItemSize,
  mapUnorderedListVariantToListItemVariant,
} from "@app/components/molecules/UnorderedList/config";
import {
  mapUnorderedListSizeToPseudoClasses,
  unorderedListDefaultThemeClasses,
} from "@app/components/molecules/UnorderedList/styles";
import { IThemeClasses } from "@app/types/theme";

const UnorderedList: React.FC<IUnorderedListProps> = ({
  items,
  size = UnorderedListSize.Large,
  variant = UnorderedListVariant.Blue,
}) => {
  const unorderedListThemeClasses: IThemeClasses = {
    ...unorderedListDefaultThemeClasses,
    pseudoClasses: mapUnorderedListSizeToPseudoClasses[size],
  };

  return (
    <LayoutContainer as="ul" themeClasses={unorderedListThemeClasses}>
      {items.map((item, index: number) => (
        <ListItem
          key={index}
          size={mapUnorderedListSizeToListItemSize[size]}
          variant={mapUnorderedListVariantToListItemVariant[variant]}
        >
          {item}
        </ListItem>
      ))}
    </LayoutContainer>
  );
};

export { UnorderedList };
