import React, { Fragment } from "react";

import {
  ISectionProps,
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { SectionTitle } from "@app/components/molecules/SectionTitle/SectionTitle";
import { useSectionThemeClasses } from "@app/components/molecules/Section/hooks/useSectionThemeClasses";
import {
  mapSectionSizeToSectionTitleSize,
  mapSectionVariantToSectionTitleVariant,
} from "@app/components/molecules/Section/config";

const Section: React.FC<ISectionProps> = ({
  children,
  id,
  size = SectionSize.Large,
  themeClasses,
  title,
  variant = SectionVariant.Blue,
}) => {
  const { sectionThemeClasses } = useSectionThemeClasses({
    size,
    themeClasses,
    title,
  });

  return (
    <LayoutContainer id={id} themeClasses={sectionThemeClasses}>
      {title && (
        <SectionTitle
          size={mapSectionSizeToSectionTitleSize[size]}
          variant={mapSectionVariantToSectionTitleVariant[variant]}
        >
          {title}
        </SectionTitle>
      )}

      <Fragment>{children}</Fragment>
    </LayoutContainer>
  );
};

export { Section };
