import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const frameworksCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.React,
      IconStaticName.NextJs,
      IconStaticName.ReactNative,
      IconStaticName.NodeJs,
      IconStaticName.NestJs,
      IconStaticName.Prisma,
      IconStaticName.Express,
      IconStaticName.Ember,
      IconStaticName.Prestashop,
      IconStaticName.JQuery,
      IconStaticName.RubyOnRails,
      IconStaticName.Sinatra,
    ].includes(iconName),
  ),
  title: "Frameworks",
};
