import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const languagesCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.JavaScript,
      IconStaticName.TypeScript,
      IconStaticName.CoffeeScript,
      IconStaticName.Ruby,
    ].includes(iconName),
  ),
  title: "Languages",
};
