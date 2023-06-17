"use client";
import { ITypographyProps } from "@app/components/atoms/Typography/@types/Typography";
import { theme } from "@app/theme/theme";
import { useTypographyState } from "@app/components/atoms/Typography/hooks/useTypographyState";
import { useTypographyThemeClasses } from "@app/components/atoms/Typography/hooks/useTypographyThemeClasses";

const Typography: React.FC<ITypographyProps> = ({
  children,
  ellipsis = false,
  isHoverable = false,
  shouldShuffle = false,
  shouldShuffleOnHover = false,
  shuffleDelay = 0,
  shuffleInterval = parseInt(
    theme.transitionDuration.verySlow.replace("ms", ""),
  ),
  themeClasses,
}) => {
  const { handleMouseOver, textElementRef } = useTypographyState({
    children,
    shouldShuffle,
    shouldShuffleOnHover,
    shuffleDelay,
    shuffleInterval,
  });

  const { typographyClassName } = useTypographyThemeClasses({
    ellipsis,
    isHoverable,
    themeClasses,
  });

  return (
    <div
      className={typographyClassName}
      onMouseOver={handleMouseOver}
      ref={textElementRef}
    >
      {children}
    </div>
  );
};
export { Typography };
