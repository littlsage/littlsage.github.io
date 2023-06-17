import { IIconDynamicProps } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { IThemeClasses } from "@app/types/theme";

export interface ILinkWithIconProps {
  href: string;
  iconName: IIconDynamicProps["iconName"];
  isExternal?: boolean;
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
}
