import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const stateManagementCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.ReactQuery,
      IconStaticName.Apollo,
      IconStaticName.Redux,
    ].includes(iconName),
  ),
  title: "State Management",
};
