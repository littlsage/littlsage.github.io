import { INavItemProps } from "@app/components/molecules/NavItem/@types/NavItem";

export interface INavProps {
  navItems: INavItemProps[];
  position?: INavItemProps["position"];
}
