import { IDashboardInnerContainerProps } from "@app/components/molecules/DashboardInnerContainer/@types/DashboardInnerContainer";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

const DashboardInnerContainer: React.FC<IDashboardInnerContainerProps> = ({
  children,
  themeClasses,
}) => (
  <LayoutContainer
    themeClasses={{
      marginBottom: "mb-0",
      marginTop: "mt-0",
      width: "w-100%",
      ...themeClasses,
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-stretch",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        gap: "gap-48",
        height: "h-100%",
        justifyContent: "justify-center",
      }}
    >
      {children}
    </LayoutContainer>
  </LayoutContainer>
);

export { DashboardInnerContainer };
