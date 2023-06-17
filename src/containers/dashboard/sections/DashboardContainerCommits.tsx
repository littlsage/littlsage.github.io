"use client";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { ListOfCommits } from "@app/components/molecules/ListOfCommits/ListOfCommits";
import { CommitsState } from "@app/hooks/@types/useCommits";

import { useCommits } from "@app/hooks/useCommits";

const DashboardContainerCommits: React.FC = () => {
  const { commitsList, commitsState } = useCommits();

  return (
    <ContentFrame
      title="Commits"
      themeClasses={{
        container: {
          flex: "flex-[1_0_20%]",
          overflow: "overflow-hidden",
        },
      }}
      variant={
        commitsState === CommitsState.Error
          ? ContentFrameVariant.Corners
          : ContentFrameVariant.Empty
      }
    >
      <ListOfCommits commitsList={commitsList} commitsState={commitsState} />
    </ContentFrame>
  );
};

export { DashboardContainerCommits };
