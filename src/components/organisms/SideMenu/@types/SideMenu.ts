import { IButtonProps } from "@app/components/molecules/Button/@types/Button";
import { IHorizontalLinksWithIconsProps } from "@app/components/molecules/HorizontalLinksWithIcons/@types/HorizontalLinksWithIcons";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

export interface ISideMenuProps {
  icons: IHorizontalLinksWithIconsProps["icons"];
  id?: string;
  isExpanded?: boolean;
  navItems?: INavProps["navItems"];
  onCVButtonClick?: IButtonProps["onClick"];
}
