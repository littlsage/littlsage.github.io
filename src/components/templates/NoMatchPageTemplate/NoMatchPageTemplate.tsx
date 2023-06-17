import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { INoMatchPageTemplateProps } from "@app/components/templates/NoMatchPageTemplate/@types/NoMatchPageTemplate";
import { noMatchPageTemplateDefaultThemeClasses } from "@app/components/templates/NoMatchPageTemplate/styles";

const NoMatchPageTemplate: React.FC<INoMatchPageTemplateProps> = ({
  children,
}) => (
  <LayoutContainer themeClasses={noMatchPageTemplateDefaultThemeClasses}>
    {children}
  </LayoutContainer>
);

export { NoMatchPageTemplate };
