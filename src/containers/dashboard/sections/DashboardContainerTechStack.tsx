import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { HorizontalIcons } from "@app/components/molecules/HorizontalIcons/HorizontalIcons";

const DashboardContainerTechStack: React.FC = () => (
  <ContentFrame
    title="Tech Stack"
    themeClasses={{
      container: {
        flex: "flex-[1_0_40%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <HorizontalIcons />
  </ContentFrame>
);

export { DashboardContainerTechStack };
