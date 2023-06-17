import { IconsWithLabels } from "@app/components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";

import {
  IContentFrameWithIconsProps,
  ContentFrameWithIconsVariant,
} from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useContentFrameWithIconsThemeClasses } from "@app/components/molecules/ContentFrameWithIcons/hooks/useContentFrameWithIconsThemeClasses";
import {
  mapContentFrameWithIconsVariantToContentFrameProps,
  mapContentFrameWithIconsVariantToIconsWithLabelsProps,
} from "@app/components/molecules/ContentFrameWithIcons/config";

const ContentFrameWithIcons: React.FC<IContentFrameWithIconsProps> = ({
  iconsWithLabels,
  title,
  variant = ContentFrameWithIconsVariant.Full,
}) => {
  const { contentFrameWithIconsThemeClasses } =
    useContentFrameWithIconsThemeClasses({
      variant,
    });

  return (
    <ContentFrame
      title={title}
      themeClasses={contentFrameWithIconsThemeClasses.contentFrame}
      {...mapContentFrameWithIconsVariantToContentFrameProps[variant]}
    >
      <LayoutContainer
        themeClasses={contentFrameWithIconsThemeClasses.iconsWrapper}
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          themeClasses={contentFrameWithIconsThemeClasses.iconsWithLabels}
          {...mapContentFrameWithIconsVariantToIconsWithLabelsProps[variant]}
        />
      </LayoutContainer>
    </ContentFrame>
  );
};

export { ContentFrameWithIcons };
