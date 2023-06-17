import {
  CornerVariant,
  ICornerProps,
} from "@app/components/atoms/Corner/@types/Corner";
import {
  cornerDefaultThemeClasses,
  mapPositionToCornerProps,
} from "@app/components/atoms/Corner/styles";
import { convertObjectValuesToArray } from "@app/helpers/arrays/convertObjectValuesToArray";
import { IThemeClasses } from "@app/types/theme";

const Corner: React.FC<ICornerProps> = ({
  isActive = false,
  position,
  variant = CornerVariant.Light,
}) => {
  const cornerThemeClasses: IThemeClasses = {
    ...cornerDefaultThemeClasses,
    ...mapPositionToCornerProps(isActive)[position],
    borderColor:
      variant === CornerVariant.Light ? "border-white" : "border-blue500",
    opacity:
      isActive || variant === CornerVariant.Dark ? "opacity-100" : "opacity-50",
  };

  const cornerClassNames = convertObjectValuesToArray(cornerThemeClasses);

  return <div className={cornerClassNames.join(" ")} />;
};

export { Corner };
