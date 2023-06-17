import { IThemeClasses } from "@app/types/theme";

interface IChildrenArgs {
  isMenuVisible?: boolean;
  toggleMenuVisibility: () => void;
}

export interface IHeaderProps {
  children: ({
    isMenuVisible,
    toggleMenuVisibility,
  }: IChildrenArgs) => JSX.Element;
  themeClasses?: {
    wrapper?: Pick<IThemeClasses, "zIndex">;
  };
}
