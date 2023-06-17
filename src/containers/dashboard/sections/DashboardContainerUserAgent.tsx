"use client";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { BrowserInfo } from "@app/components/molecules/BrowserInfo/BrowserInfo";
import { useEffect, useState } from "react";
import { getUserAgent } from "@app/helpers/window/getUserAgent";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";

const DashboardContainerUserAgent: React.FC = () => {
  const [description, setDescription] = useState<string>("Loading...");

  useEffect(() => {
    setDescription(getUserAgent());
  }, []);

  return (
    <ContentFrame
      description={description}
      title="User Agent"
      themeClasses={{
        container: {
          flex: "flex-[1_0_20%]",
        },
      }}
      variant={ContentFrameVariant.Corners}
    >
      <BrowserInfo />
    </ContentFrame>
  );
};

export { DashboardContainerUserAgent };
