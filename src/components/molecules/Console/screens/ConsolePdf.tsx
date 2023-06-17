import {
  ConsoleTextVariant,
  IConsoleTextProps,
} from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { CornerVariant } from "@app/components/atoms/Corner/@types/Corner";
import { ConsoleText } from "@app/components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "@app/components/molecules/Corners/Corners";

const ConsolePdf: React.FC<Pick<IConsoleTextProps, "children">> = ({
  children,
}) => (
  <LayoutContainer>
    <LayoutContainer
      themeClasses={{
        paddingX: "px-16",
        paddingY: "py-8",
        position: "relative",
      }}
    >
      <Corners variant={CornerVariant.Dark} />
      <ConsoleText variant={ConsoleTextVariant.Pdf}>{children}</ConsoleText>
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsolePdf };
