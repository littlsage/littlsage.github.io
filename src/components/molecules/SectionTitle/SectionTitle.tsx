import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import {
  ISectionTitleProps,
  SectionTitleSize,
  SectionTitleVariant,
} from "@app/components/molecules/SectionTitle/@types/SectionTitle";
import { useSectionTitleThemeClasses } from "@app/components/molecules/SectionTitle/hooks/useSectionTitleThemeClasses";

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  size = SectionTitleSize.Large,
  themeClasses,
  variant = SectionTitleVariant.Blue,
}) => {
  const {
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses,
  } = useSectionTitleThemeClasses({ size, themeClasses, variant });

  return (
    <>
      <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
        <LayoutContainer
          themeClasses={sectionTitleTvDesktopTabletThemeClasses.wrapper}
        >
          <Typography
            themeClasses={sectionTitleTvDesktopTabletThemeClasses.title}
          >
            {children}
          </Typography>
        </LayoutContainer>
      </Responsive>

      <Responsive devices={[Device.Mobile]}>
        <LayoutContainer themeClasses={sectionTitleMobileThemeClasses.wrapper}>
          <Typography themeClasses={sectionTitleMobileThemeClasses.title}>
            {children}
          </Typography>
        </LayoutContainer>
      </Responsive>
    </>
  );
};

export { SectionTitle };
