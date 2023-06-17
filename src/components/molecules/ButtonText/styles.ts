import { ButtonSize } from "@app/components/molecules/Button/@types/Button";
import { TMapSizeToButtonTextProps } from "@app/components/molecules/ButtonText/@types/ButtonText";
import { IThemeClasses } from "@app/types/theme";

export const mapSizeToButtonTextProps: TMapSizeToButtonTextProps = {
  [ButtonSize.Large]: { fontSize: "text-28" },
  [ButtonSize.Medium]: { fontSize: "text-24" },
  [ButtonSize.Small]: { fontSize: "text-20" },
};

export const buttonTextTypographyDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: "font-exan",
  textTransform: "lowercase",
};
