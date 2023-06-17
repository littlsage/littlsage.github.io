import { Typography } from "@app/components/atoms/Typography/Typography";

import { IErrorProps } from "@app/components/molecules/Error/@types/Error";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  errorContainerDefaultThemeClasses,
  errorDefaultThemeClasses,
  errorDescriptionDefaultThemeClasses,
  errorIconDefaultThemeClasses,
  errorTitleDefaultThemeClasses,
} from "@app/components/molecules/Error/styles";
import { IconDynamic } from "@app/components/atoms/IconDynamic/IconDynamic";
import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";

const Error: React.FC<IErrorProps> = ({ description, title }) => (
  <LayoutContainer themeClasses={errorDefaultThemeClasses}>
    <LayoutContainer themeClasses={errorContainerDefaultThemeClasses}>
      <IconDynamic
        iconName={IconDynamicName.Warning}
        isHeightResponsive
        shouldDisplayGlowAnimation
        themeClasses={errorIconDefaultThemeClasses}
      />
      <Typography themeClasses={errorTitleDefaultThemeClasses}>
        {title}
      </Typography>
      <Typography themeClasses={errorDescriptionDefaultThemeClasses}>
        {description}
      </Typography>
    </LayoutContainer>
  </LayoutContainer>
);

export { Error };
