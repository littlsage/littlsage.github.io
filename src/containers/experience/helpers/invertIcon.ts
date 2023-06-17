import {
  IconStaticName,
  IconStaticVariant,
} from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { CompanyFormat } from "@app/components/organisms/Company/@types/Company";

export const invertIcon =
  (invertedIcons: IconStaticName[], format?: CompanyFormat) =>
  ({ iconName, label }: Pick<IIconWithLabelProps, "iconName" | "label">) => ({
    iconName,
    iconVariant:
      invertedIcons.includes(iconName) && format === CompanyFormat.Pdf
        ? IconStaticVariant.Inverted
        : IconStaticVariant.Default,
    label,
  });
