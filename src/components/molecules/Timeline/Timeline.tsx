import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { HexagonFill } from "@app/components/molecules/Hexagon/@types/Hexagon";
import { Hexagon } from "@app/components/molecules/Hexagon/Hexagon";
import {
  timelineDefaultThemeClasses,
  timelineHexagonContainerDefaultThemeClasses,
  timelineLineDefaultThemeClasses,
} from "@app/components/molecules/Timeline/styles";

const Timeline: React.FC = () => (
  <LayoutContainer themeClasses={timelineDefaultThemeClasses}>
    <LayoutContainer themeClasses={timelineHexagonContainerDefaultThemeClasses}>
      <Hexagon fill={HexagonFill.Solid} />
    </LayoutContainer>
    <LayoutContainer themeClasses={timelineLineDefaultThemeClasses} />
  </LayoutContainer>
);

export { Timeline };
