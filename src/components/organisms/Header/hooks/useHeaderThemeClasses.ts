import { IHeaderProps } from "@app/components/organisms/Header/@types/Header";
import { headerContainerDefaultThemeClasses } from "@app/components/organisms/Header/styles";
import { IThemeClasses } from "@app/types/theme";

export const useHeaderThemeClasses = ({
  themeClasses,
}: Pick<IHeaderProps, "themeClasses">) => {
  const headerContainerThemeClasses: IThemeClasses = {
    ...headerContainerDefaultThemeClasses,
    ...themeClasses?.wrapper,
  };

  return {
    headerContainerThemeClasses,
  };
};
