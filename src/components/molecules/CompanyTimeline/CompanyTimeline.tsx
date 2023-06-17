import { Timeline } from "@app/components/molecules/Timeline/Timeline";
import { ICompanyTimelineProps } from "@app/components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "@app/types/theme";
import { companyTimelineDefaultThemeClasses } from "@app/components/molecules/CompanyTimeline/styles";

const CompanyTimeline: React.FC<ICompanyTimelineProps> = ({ themeClasses }) => {
  const companyTimelineThemeClasses: IThemeClasses = {
    ...companyTimelineDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <LayoutContainer themeClasses={companyTimelineThemeClasses}>
      <Timeline />
    </LayoutContainer>
  );
};

export { CompanyTimeline };
