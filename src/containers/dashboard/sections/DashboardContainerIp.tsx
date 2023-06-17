import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { Earth } from "@app/components/molecules/Earth/Earth";

const DashboardContainerIp: React.FC = () => (
  <ContentFrame
    title="IP: 127.0.0.1"
    themeClasses={{
      container: {
        flex: "flex-[0_1_30%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <Earth />
  </ContentFrame>
);

export { DashboardContainerIp };
