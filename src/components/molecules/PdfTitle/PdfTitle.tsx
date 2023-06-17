import {
  CornerPosition,
  CornerVariant,
} from "@app/components/atoms/Corner/@types/Corner";
import { Corner } from "@app/components/atoms/Corner/Corner";
import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IPdfTitleProps } from "@app/components/molecules/PdfTitle/@types/PdfTitle";
import { pdfTitleDefaultThemeClasses } from "@app/components/molecules/PdfTitle/styles";

const PdfTitle: React.FC<IPdfTitleProps> = ({ children }) => {
  const { container, typography } = pdfTitleDefaultThemeClasses;

  return (
    <LayoutContainer themeClasses={container}>
      <Typography themeClasses={typography}>
        <Corner
          position={CornerPosition.TopLeft}
          variant={CornerVariant.Dark}
        />
        <Corner
          position={CornerPosition.BottomRight}
          variant={CornerVariant.Dark}
        />
        {children}
      </Typography>
    </LayoutContainer>
  );
};

export { PdfTitle };
