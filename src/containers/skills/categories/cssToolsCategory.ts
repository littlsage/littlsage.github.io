import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const cssToolsCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.WindiCSS,
      IconStaticName.StyledComponents,
      IconStaticName.Tailwind,
      IconStaticName.Chakra,
      IconStaticName.Sass,
      IconStaticName.CSSModules,
      IconStaticName.LESS,
    ].includes(iconName),
  ),
  title: "CSS Tools",
};
