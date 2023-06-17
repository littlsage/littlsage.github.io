import { IIconDynamicProps } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import {
  ButtonSize,
  IButtonProps,
} from "@app/components/molecules/Button/@types/Button";
import {
  buttonDefaultThemeClasses,
  mapSizeToButtonContainerProps,
  mapTypeToButtonContainerProps,
  buttonChildrenOuterWrapperDefaultThemeClasses,
} from "@app/components/molecules/Button/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";

const useButtonThemeClasses = ({
  iconWidth,
  size = ButtonSize.Medium,
  themeClasses,
  type = "primary",
}: Pick<IButtonProps, "iconWidth" | "size" | "type" | "themeClasses">) => {
  const buttonThemeClasses: IThemeClasses = {
    ...buttonDefaultThemeClasses,
    ...mapSizeToButtonContainerProps[size],
    ...mapTypeToButtonContainerProps[type],
    ...themeClasses,
  };

  const buttonClassNames = [convertObjectValuesToString(buttonThemeClasses)];

  const buttonChildrenOuterWrapperThemeClasses: IThemeClasses = {
    ...buttonChildrenOuterWrapperDefaultThemeClasses,
    paddingX: size === ButtonSize.Small ? "px-16" : "px-24",
  };

  const iconThemeClasses: IIconDynamicProps["themeClasses"] = {
    height: size === ButtonSize.Small ? "h-12" : "h-24",
    width: iconWidth,
  };

  return {
    buttonChildrenOuterWrapperThemeClasses,
    buttonClassNames,
    iconThemeClasses,
  };
};

export { useButtonThemeClasses };
