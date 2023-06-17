export enum NavItemPosition {
  Horizontal,
  Vertical,
}

export interface INavItemProps {
  href: string;
  isActive?: boolean;
  position?: NavItemPosition;
  tabIndex?: number;
  title: string;
}
