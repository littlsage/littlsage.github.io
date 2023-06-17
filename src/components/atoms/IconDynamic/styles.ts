import { IIconDynamicProps } from "@app/components/atoms/IconDynamic/@types/IconDynamic";

const iconDynamicDefaultThemeClasses: IIconDynamicProps["themeClasses"] = {
  height: "h-full",
  overflow: "overflow-visible",
  pseudoClasses: ["childrenSvg:animate-glow-slow", "childrenSvg:duration-slow"],
  width: "w-auto",
};

export { iconDynamicDefaultThemeClasses };
