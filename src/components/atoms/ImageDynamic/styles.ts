import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";

const imageDynamicDefaultThemeClasses: IImageDynamicProps["themeClasses"] = {
  height: "h-full",
  overflow: "overflow-visible",
  pseudoClasses: ["childrenSvg:animate-glow-slow", "childrenSvg:duration-slow"],
  width: "w-auto",
};

export { imageDynamicDefaultThemeClasses };
