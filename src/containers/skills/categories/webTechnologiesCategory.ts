import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const webTechnologiesCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [IconStaticName.HTML, IconStaticName.CSS].includes(iconName),
  ),
  title: "Web Technologies",
};
