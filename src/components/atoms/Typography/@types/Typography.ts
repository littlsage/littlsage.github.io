import { IThemeClasses } from "@app/types/theme";
import { TChildren } from "@app/types/props";

export interface ITypographyProps {
  children: TChildren;
  ellipsis?: boolean;
  isHoverable?: boolean;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  shuffleDelay?: number;
  shuffleInterval?: number;
  themeClasses?: IThemeClasses;
}
