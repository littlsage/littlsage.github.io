import {
  INavItemProps,
  NavItemPosition,
} from "@app/components/molecules/NavItem/@types/NavItem";
import {
  navItemDefaultThemeClasses,
  navItemLinkDefaultThemeClasses,
} from "@app/components/molecules/NavItem/styles";
import { IThemeClasses } from "@app/types/theme";

const useNavItemThemeClasses = ({
  isActive,
  position,
}: Pick<INavItemProps, "isActive" | "position">) => {
  const navItemThemeClasses: IThemeClasses = {
    ...navItemDefaultThemeClasses,
    ...(position === NavItemPosition.Horizontal
      ? {
          marginLeft: "ml-24",
          pseudoClasses: ["first:ml-0"],
        }
      : {
          marginTop: "mt-12",
          pseudoClasses: ["first:mt-0"],
        }),
  };

  const navItemLinkThemeClasses: IThemeClasses = {
    ...navItemLinkDefaultThemeClasses,
    ...(isActive
      ? {
          color: "text-white",
          dropShadow: "drop-shadow-xl",
        }
      : {
          color: "text-blue300",
        }),
  };

  return {
    navItemLinkThemeClasses,
    navItemThemeClasses,
  };
};

export { useNavItemThemeClasses };
