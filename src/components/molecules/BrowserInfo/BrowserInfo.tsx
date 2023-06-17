import { detect } from "detect-browser";

import { IconDynamic } from "@app/components/atoms/IconDynamic/IconDynamic";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useEffect, useState } from "react";
import {
  browserInfoDefaultThemeClasses,
  browserInfoIconDefaultThemeClasses,
  browserInfoIconWrapperActiveIconDefaultThemeClasses,
  browserInfoIconWrapperDefaultThemeClasses,
  browserInfoIconWrapperInactiveIconDefaultThemeClasses,
  browserInfoInnerContainerDefaultThemeClasses,
  browserInfoOuterContainerDefaultThemeClasses,
} from "@app/components/molecules/BrowserInfo/styles";
import { browserIcons } from "@app/components/molecules/BrowserInfo/config";
import { TActiveIcon } from "@app/components/molecules/BrowserInfo/@types/BrowserInfo";
import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";

const BrowserInfo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<TActiveIcon>();
  const browserInfo = detect();
  const { name } = browserInfo || {};

  useEffect(() => {
    setActiveIcon(name);
  }, [name]);

  return (
    <LayoutContainer themeClasses={browserInfoDefaultThemeClasses}>
      <LayoutContainer
        themeClasses={browserInfoOuterContainerDefaultThemeClasses}
      >
        <LayoutContainer
          themeClasses={browserInfoInnerContainerDefaultThemeClasses}
        >
          {browserIcons.map((icon) => {
            const isIconUnknown = !browserIcons.find(
              (icon) => icon === activeIcon,
            );
            const isIconActive =
              icon === IconDynamicName.IE
                ? activeIcon === IconDynamicName.IE || activeIcon === "edge"
                : activeIcon === icon;

            return (
              <LayoutContainer
                key={icon}
                themeClasses={{
                  ...browserInfoIconWrapperDefaultThemeClasses,
                  mediaQuery: isIconActive
                    ? browserInfoIconWrapperActiveIconDefaultThemeClasses
                    : browserInfoIconWrapperInactiveIconDefaultThemeClasses,
                }}
              >
                <IconDynamic
                  themeClasses={browserInfoIconDefaultThemeClasses}
                  iconName={icon}
                  isActive={isIconActive || isIconUnknown}
                  isResponsive
                  shouldDisplayGlowAnimation={isIconActive || isIconUnknown}
                />
              </LayoutContainer>
            );
          })}
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { BrowserInfo };
