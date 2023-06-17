import { Typography } from "@app/components/atoms/Typography/Typography";

import { IButtonTextProps } from "@app/components/molecules/ButtonText/@types/ButtonText";
import { IThemeClasses } from "@app/types/theme";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  buttonTextTypographyDefaultThemeClasses,
  mapSizeToButtonTextProps,
} from "@app/components/molecules/ButtonText/styles";
import { getButtonTextMarginRight } from "@app/components/molecules/ButtonText/helpers/getButtonTextMarginRight";
import { isIE11 } from "@app/helpers/browser/isIE11";

const ButtonText: React.FC<IButtonTextProps> = ({
  children,
  hasMargin = true,
  size,
  themeClasses,
}) => {
  const buttonTextThemeClasses: IThemeClasses = {
    marginRight: getButtonTextMarginRight({ hasMargin, size }),
  };

  const buttonTextTypographyThemeClasses: IThemeClasses = {
    ...buttonTextTypographyDefaultThemeClasses,
    fontFamily: isIE11() ? "font-anonymousPro" : "font-exan",
    textTransform: isIE11() ? "uppercase" : "lowercase",
    ...mapSizeToButtonTextProps[size],
    ...themeClasses,
  };

  return (
    <LayoutContainer themeClasses={buttonTextThemeClasses}>
      <Typography themeClasses={buttonTextTypographyThemeClasses}>
        {children}
      </Typography>
    </LayoutContainer>
  );
};

export { ButtonText };
