import { IIconsWithLabelsProps } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";

export enum TechStackVariant {
  Blue,
  Dark,
}

export enum TechStackSize {
  Medium,
  Large,
}

export interface ITechStackProps {
  iconsWithLabels: IIconsWithLabelsProps["iconsWithLabels"];
  size?: TechStackSize;
  variant?: TechStackVariant;
}
