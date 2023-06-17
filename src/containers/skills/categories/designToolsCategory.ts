import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const designToolsCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Photoshop,
      IconStaticName.Sketch,
      IconStaticName.Figma,
      IconStaticName.CorelDraw,
      IconStaticName.AfterEffects,
      IconStaticName.Zeplin,
      IconStaticName.Gallery,
    ].includes(iconName),
  ),
  title: "Design Tools",
};
