import { IMenuButtonProps } from "@app/components/molecules/MenuButton/@types/MenuButton";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { MenuButtonLine } from "@app/components/atoms/MenuButtonLine/MenuButtonLine";
import { menuButtonDefaultThemeClasses } from "@app/components/molecules/MenuButton/styles";

const MenuButton: React.FC<IMenuButtonProps> = ({
  id,
  isOpen = false,
  onClick,
}) => (
  <LayoutContainer
    id={id}
    onClick={onClick}
    themeClasses={menuButtonDefaultThemeClasses}
  >
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
  </LayoutContainer>
);

export { MenuButton };
