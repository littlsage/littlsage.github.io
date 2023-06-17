import { IDashboardOuterContainerProps } from "@app/components/molecules/DashboardOuterContainer/@types/DashboardOuterContainer";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

const DashboardOuterContainer: React.FC<IDashboardOuterContainerProps> = ({
  children,
}) => (
  <LayoutContainer
    themeClasses={{
      height: "h-100vh",
      paddingTop: "pt-96",
    }}
  >
    <LayoutContainer
      themeClasses={{
        height: "h-100%",
        position: "relative",
      }}
    >
      <LayoutContainer
        themeClasses={{
          alignItems: "items-center",
          display: "flex",
          flexFlow: "flex-col-nowrap",
          height: "h-100%",
          justifyContent: "justify-between",
        }}
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { DashboardOuterContainer };
