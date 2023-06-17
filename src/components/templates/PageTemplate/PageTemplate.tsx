import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IPageTemplateProps } from "@app/components/templates/PageTemplate/@types/PageTemplate";
import { pageTemplateDefaultThemeClasses } from "@app/components/templates/PageTemplate/styles";

const PageTemplate: React.FC<IPageTemplateProps> = ({ as, children }) => (
  <LayoutContainer as={as} themeClasses={pageTemplateDefaultThemeClasses}>
    {children}
  </LayoutContainer>
);

export { PageTemplate };
