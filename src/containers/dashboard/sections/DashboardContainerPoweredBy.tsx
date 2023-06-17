import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { LargeIcon } from "@app/components/molecules/LargeIcon/LargeIcon";

const DashboardContainerPoweredBy: React.FC = () => (
  <ContentFrame
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <LargeIcon iconName={IconDynamicName.NextJS} />
  </ContentFrame>
);

export { DashboardContainerPoweredBy };
