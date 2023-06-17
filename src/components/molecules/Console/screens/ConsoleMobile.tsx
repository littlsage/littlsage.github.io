import {
  ConsoleTextVariant,
  IConsoleTextProps,
} from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "@app/components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  consoleMobileConsoleTextWrapperDefaultThemeClasses,
  consoleMobileDefaultThemeClasses,
} from "@app/components/molecules/Console/styles";

const ConsoleMobile: React.FC<Pick<IConsoleTextProps, "children">> = ({
  children,
}) => (
  <LayoutContainer themeClasses={consoleMobileDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={consoleMobileConsoleTextWrapperDefaultThemeClasses}
    >
      <ConsoleText variant={ConsoleTextVariant.Mobile}>{children}</ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
