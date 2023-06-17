import { IContentFrameProps } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { IThemeClasses } from "@app/types/theme";

const calculateChildrenHeight = ({
  description,
}: Pick<IContentFrameProps, "description">): IThemeClasses["height"] =>
  description ? "h-[calc(100%-3.6rem-2.4rem-2.8rem)]" : "h-[calc(100%-3.6rem)]";

export { calculateChildrenHeight };
