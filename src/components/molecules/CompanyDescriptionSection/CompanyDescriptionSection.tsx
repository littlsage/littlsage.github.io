import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant,
  ICompanyDescriptionSectionProps,
} from "@app/components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import { useCompanyDescriptionSectionThemeClasses } from "@app/components/molecules/CompanyDescriptionSection/hooks/useCompanyDescriptionSectionThemeClasses";

const CompanyDescriptionSection: React.FC<ICompanyDescriptionSectionProps> = ({
  children,
  size = CompanyDescriptionSectionSize.Large,
  themeClasses,
  title,
  variant = CompanyDescriptionSectionVariant.Blue,
}) => {
  const { companyDescriptionSectionThemeClasses } =
    useCompanyDescriptionSectionThemeClasses({ size, variant });

  return (
    <LayoutContainer themeClasses={themeClasses}>
      <Typography themeClasses={companyDescriptionSectionThemeClasses.title}>
        {title}
      </Typography>
      <LayoutContainer
        themeClasses={companyDescriptionSectionThemeClasses.contentWrapper}
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { CompanyDescriptionSection };
