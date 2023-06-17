import { IMenuButtonLineProps } from "@app/components/atoms/MenuButtonLine/@types/MenuButtonLine";
import { menuButtonLineDefaultThemeClasses } from "@app/components/atoms/MenuButtonLine/styles";
import { IThemeClasses } from "@app/types/theme";

const useMenuButtonLineThemeClasses = ({
  isOpen,
}: Pick<IMenuButtonLineProps, "isOpen">) => {
  const menuButtonLineThemeClasses: IThemeClasses = {
    ...menuButtonLineDefaultThemeClasses,
    pseudoClasses: [
      ...(menuButtonLineDefaultThemeClasses.pseudoClasses
        ? menuButtonLineDefaultThemeClasses.pseudoClasses
        : []),
      ...(isOpen
        ? [
            "first:left-50%",
            "first:top-14",
            "first:w-0",
            "secondChild:rotate-[40deg]",
            "thirdChild:rotate-[-40deg]",
            "fourthChild:left-50%",
            "fourthChild:top-14",
            "fourthChild:w-0",
          ]
        : []),
    ],
  };
  return {
    menuButtonLineThemeClasses,
  };
};

export { useMenuButtonLineThemeClasses };
