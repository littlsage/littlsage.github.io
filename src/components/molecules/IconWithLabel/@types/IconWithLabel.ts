import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelContentProps } from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

export enum IconWithLabelSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export enum IconWithLabelVariant {
  Blue,
  Dark,
  White,
}

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  iconVariant?: IIconStaticProps["variant"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  size?: IconWithLabelSize;
  themeClasses?: {
    content?: IIconWithLabelContentProps["themeClasses"];
  };
  variant?: IconWithLabelVariant;
}
