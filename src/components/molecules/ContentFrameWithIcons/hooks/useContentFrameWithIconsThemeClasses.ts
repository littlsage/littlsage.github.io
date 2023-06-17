import {
  IContentFrameWithIconsProps,
  ContentFrameWithIconsVariant,
  IContentFrameWithIconsThemeClasses,
} from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import {
  mapContentFrameWithIconsVariantToContentFrameStyles,
  mapContentFrameWithIconsVariantToIconsWithLabelsStyles,
  mapContentFrameWithIconsVariantIconsWrapperStyles,
} from "@app/components/molecules/ContentFrameWithIcons/styles";

const useContentFrameWithIconsThemeClasses = ({
  variant = ContentFrameWithIconsVariant.Full,
}: Pick<IContentFrameWithIconsProps, "variant">) => {
  const contentFrameWithIconsThemeClasses: IContentFrameWithIconsThemeClasses =
    {
      contentFrame:
        mapContentFrameWithIconsVariantToContentFrameStyles[variant],
      iconsWithLabels:
        mapContentFrameWithIconsVariantToIconsWithLabelsStyles[variant],
      iconsWrapper: mapContentFrameWithIconsVariantIconsWrapperStyles[variant],
    };

  return {
    contentFrameWithIconsThemeClasses,
  };
};

export { useContentFrameWithIconsThemeClasses };
