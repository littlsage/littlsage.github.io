import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IPdfTemplateProps } from "@app/components/templates/PdfTemplate/@types/PdfTemplate";
import {
  pdfTemplateChildrenDefaultThemeClasses,
  pdfTemplateDefaultThemeClasses,
  pdfTemplateSidebarDefaultThemeClasses,
} from "@app/components/templates/PdfTemplate/styles";

const PdfTemplate: React.FC<IPdfTemplateProps> = ({ children, sidebar }) => (
  <LayoutContainer themeClasses={pdfTemplateDefaultThemeClasses}>
    <LayoutContainer themeClasses={pdfTemplateChildrenDefaultThemeClasses}>
      {children}
    </LayoutContainer>
    <LayoutContainer themeClasses={pdfTemplateSidebarDefaultThemeClasses}>
      {sidebar}
    </LayoutContainer>
  </LayoutContainer>
);

export { PdfTemplate };
