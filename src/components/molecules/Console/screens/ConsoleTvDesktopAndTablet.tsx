import {
  ConsoleTextVariant,
  IConsoleTextProps,
} from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "@app/components/atoms/ConsoleText/ConsoleText";
import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  consoleTvDesktopAndTabletDefaultThemeClasses,
  consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses,
  consoleTvDesktopAndTabletLabelDefaultThemeClasses,
  consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses,
} from "@app/components/molecules/Console/styles";

const ConsoleTvDesktopAndTablet: React.FC<
  Pick<IConsoleTextProps, "children">
> = ({ children }) => (
  <LayoutContainer themeClasses={consoleTvDesktopAndTabletDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={consoleTvDesktopAndTabletOuterWrapperDefaultThemeClasses}
    >
      <LayoutContainer
        themeClasses={consoleTvDesktopAndTabletInnerWrapperDefaultThemeClasses}
      >
        <Typography
          themeClasses={consoleTvDesktopAndTabletLabelDefaultThemeClasses}
        >
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
        </Typography>
      </LayoutContainer>

      <ConsoleText variant={ConsoleTextVariant.TvDesktopAndTablet}>
        {children}
      </ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleTvDesktopAndTablet };
