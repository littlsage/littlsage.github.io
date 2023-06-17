import { ILayoutContainerProps } from "@app/components/layout/LayoutContainer/@types/LayoutContainer";
import { convertObjectValuesToArray } from "@app/helpers/arrays/convertObjectValuesToArray";

const useLayoutContainerThemeClasses = ({
  onClick,
  themeClasses,
}: Pick<ILayoutContainerProps, "onClick" | "themeClasses">) => {
  const layoutContainerClassNames = [...(onClick ? ["cursor-pointer"] : [])];

  if (themeClasses) {
    layoutContainerClassNames.push(...convertObjectValuesToArray(themeClasses));
  }

  return { layoutContainerClassNames };
};

export { useLayoutContainerThemeClasses };
