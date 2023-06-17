import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";

export interface IIconWithLabelAndTitleGroupProps {
  iconsWithLabelsGroup: {
    iconWithLabel: Pick<IIconWithLabelProps, "iconName" | "label">;
    title: string;
  }[];
}
