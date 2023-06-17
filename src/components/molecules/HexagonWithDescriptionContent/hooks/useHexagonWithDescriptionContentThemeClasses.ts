import { IHexagonWithDescriptionContentProps } from "@app/components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";

import { IThemeClasses } from "@app/types/theme";
import {
  hexagonWithDescriptionContentDefaultThemeClasses,
  hexagonWithDescriptionContentDescriptionDefaultThemeClasses,
  hexagonWithDescriptionContentHexagonContainerDefaultThemeClasses,
} from "@app/components/molecules/HexagonWithDescriptionContent/styles";

const useHexagonWithDescriptionContentThemeClasses = ({
  themeClasses,
}: Pick<IHexagonWithDescriptionContentProps, "themeClasses">) => {
  const hexagonWithDescriptionContentThemeClasses: IThemeClasses = {
    ...hexagonWithDescriptionContentDefaultThemeClasses,
    ...themeClasses?.wrapper,
  };

  const hexagonWithDescriptionContentHexagonContainerThemeClasses: IThemeClasses =
    {
      ...hexagonWithDescriptionContentHexagonContainerDefaultThemeClasses,
      ...themeClasses?.hexagonContainer,
    };

  const hexagonWithDescriptionContentDescriptionThemeClasses: IThemeClasses = {
    ...hexagonWithDescriptionContentDescriptionDefaultThemeClasses,
    ...themeClasses?.description,
  };

  return {
    hexagonWithDescriptionContentDescriptionThemeClasses,
    hexagonWithDescriptionContentHexagonContainerThemeClasses,
    hexagonWithDescriptionContentThemeClasses,
  };
};

export { useHexagonWithDescriptionContentThemeClasses };
