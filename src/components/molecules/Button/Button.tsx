import React from "react";

import { IconDynamic } from "@app/components/atoms/IconDynamic/IconDynamic";
import { ButtonText } from "@app/components/molecules/ButtonText/ButtonText";
import { Corners } from "@app/components/molecules/Corners/Corners";

import {
  ButtonSize,
  IButtonProps,
} from "@app/components/molecules/Button/@types/Button";

import { isIE11 } from "@app/helpers/browser/isIE11";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  buttonChildrenWrapperDefaultThemeClasses,
  buttonInnerContainerDefaultThemeClasses,
} from "@app/components/molecules/Button/styles";
import { useButtonThemeClasses } from "@app/components/molecules/Button/hooks/useButtonThemeClasses";
import { useButtonHandlers } from "@app/components/molecules/Button/hooks/useButtonHandlers";

const Button: React.FC<IButtonProps> = ({
  children,
  iconName,
  iconWidth,
  onClick,
  size = ButtonSize.Medium,
  tabIndex,
  type = "primary",
  themeClasses,
}) => {
  const {
    handleButtonClick,
    handleKeyUp,
    handleMouseEnter,
    handleMouseLeave,
    isActive,
  } = useButtonHandlers({ onClick });

  const {
    buttonChildrenOuterWrapperThemeClasses,
    buttonClassNames,
    iconThemeClasses,
  } = useButtonThemeClasses({
    iconWidth,
    size,
    themeClasses,
    type,
  });

  return (
    <button
      aria-label="Button"
      className={buttonClassNames.join(" ")}
      name="Button"
      onKeyUp={handleKeyUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleButtonClick}
      onTouchMove={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      tabIndex={tabIndex}
    >
      {!isIE11() && <Corners isActive={isActive} />}

      <LayoutContainer themeClasses={buttonInnerContainerDefaultThemeClasses}>
        <LayoutContainer themeClasses={buttonChildrenOuterWrapperThemeClasses}>
          <LayoutContainer
            themeClasses={buttonChildrenWrapperDefaultThemeClasses}
          >
            <ButtonText hasMargin={!!iconName} size={size}>
              {children}
            </ButtonText>

            {iconName && (
              <IconDynamic
                themeClasses={iconThemeClasses}
                iconName={iconName}
                isHeightResponsive
              />
            )}
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </button>
  );
};

export { Button };
