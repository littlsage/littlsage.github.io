import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import {
  ContentFrameWithIconsVariant,
  IContentFrameWithIconsProps,
} from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { ContentFrameWithIcons } from "@app/components/molecules/ContentFrameWithIcons/ContentFrameWithIcons";
import { IContentFrameWithIconsGroupProps } from "@app/components/molecules/ContentFrameWithIconsGroup/@types/ContentFrameWithIconsGroup";
import { contentFrameWithIconsGroupDefaultThemeClasses } from "@app/components/molecules/ContentFrameWithIconsGroup/styles";

const ContentFrameWithIconsGroup: React.FC<
  IContentFrameWithIconsGroupProps
> = ({ columnCount, device, items }) => {
  const { wrapper } = contentFrameWithIconsGroupDefaultThemeClasses;

  const renderItems = items.map(
    ({ iconsWithLabels, title }: IContentFrameWithIconsProps) => (
      <LayoutContainer
        key={title}
        themeClasses={{
          marginBottom: device ? "mb-32" : "mb-24",
        }}
      >
        <ContentFrameWithIcons
          iconsWithLabels={iconsWithLabels}
          title={title}
          variant={
            device
              ? ContentFrameWithIconsVariant.Full
              : ContentFrameWithIconsVariant.Limited
          }
        />
      </LayoutContainer>
    ),
  );

  if (device === Device.Mobile) {
    return <Responsive devices={[Device.Mobile]}>{renderItems}</Responsive>;
  }

  return device ? (
    <Responsive devices={[device]}>
      <LayoutContainer
        themeClasses={{
          ...wrapper,
          columns: columnCount,
        }}
      >
        {renderItems}
      </LayoutContainer>
    </Responsive>
  ) : (
    <>{renderItems}</>
  );
};

export { ContentFrameWithIconsGroup };
