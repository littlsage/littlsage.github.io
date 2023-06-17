import { Typography } from "@app/components/atoms/Typography/Typography";
import { Hexagon } from "@app/components/molecules/Hexagon/Hexagon";

import { IHexagonWithDescriptionContentProps } from "@app/components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useHexagonWithDescriptionContentThemeClasses } from "@app/components/molecules/HexagonWithDescriptionContent/hooks/useHexagonWithDescriptionContentThemeClasses";

const HexagonWithDescriptionContent: React.FC<
  IHexagonWithDescriptionContentProps
> = ({ children, description, themeClasses }) => {
  const {
    hexagonWithDescriptionContentDescriptionThemeClasses,
    hexagonWithDescriptionContentHexagonContainerThemeClasses,
    hexagonWithDescriptionContentThemeClasses,
  } = useHexagonWithDescriptionContentThemeClasses({ themeClasses });

  return (
    <LayoutContainer themeClasses={hexagonWithDescriptionContentThemeClasses}>
      <LayoutContainer
        themeClasses={hexagonWithDescriptionContentHexagonContainerThemeClasses}
      >
        <Hexagon>{children}</Hexagon>
      </LayoutContainer>

      <Typography
        themeClasses={hexagonWithDescriptionContentDescriptionThemeClasses}
      >
        {description}
      </Typography>
    </LayoutContainer>
  );
};

export { HexagonWithDescriptionContent };
