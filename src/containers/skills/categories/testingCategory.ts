import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const testingCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.JEST,
      IconStaticName.AirBnb,
      IconStaticName.ReactTestingLibrary,
      IconStaticName.Cypress,
      IconStaticName.QUnit,
    ].includes(iconName),
  ),
  title: "Testing",
};
