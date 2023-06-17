import {
  ILineProps,
  LineDirection,
} from "@app/components/atoms/Line/@types/Line";
import { lineDefaultThemeClasses } from "@app/components/atoms/Line/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";

const useLineThemeClasses = ({
  direction,
  isActive,
}: Pick<ILineProps, "direction" | "isActive">) => {
  const lineThemeClasses: IThemeClasses = {
    ...lineDefaultThemeClasses,
    ...(isActive
      ? {
          opacity: "opacity-100",
          visibility: "visible",
          width: "w-50%",
        }
      : {
          opacity: "opacity-0",
          visibility: "invisible",
          width: "w-0",
        }),
    ...(direction === LineDirection.Left && {
      left: "left-50%",
    }),
    ...(direction === LineDirection.Right && {
      right: "right-50%",
    }),
  };

  const lineClassNames = [
    "line",
    convertObjectValuesToString(lineThemeClasses),
  ];

  return { lineClassNames };
};

export { useLineThemeClasses };
