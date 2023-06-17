import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { FluxChart } from "@app/components/molecules/FluxChart/FluxChart";

const DashboardContainerFlux: React.FC = () => (
  <ContentFrame
    title="Flux"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <FluxChart />
  </ContentFrame>
);

export { DashboardContainerFlux };
