import { ILineProps } from "@app/components/atoms/Line/@types/Line";
import { useLineThemeClasses } from "@app/components/atoms/Line/hooks/useLineThemeClasses";

const Line: React.FC<ILineProps> = ({ direction, isActive = false }) => {
  const { lineClassNames } = useLineThemeClasses({ direction, isActive });

  return <div className={lineClassNames.join(" ")} />;
};

export { Line };
