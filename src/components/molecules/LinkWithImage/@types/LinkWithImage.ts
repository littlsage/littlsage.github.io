import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { IThemeClasses } from "@app/types/theme";

export interface ILinkWithImageProps {
  href: ILinkProps["href"];
  imageName: IImageDynamicProps["imageName"];
  isExternal?: ILinkProps["isExternal"];
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
}
