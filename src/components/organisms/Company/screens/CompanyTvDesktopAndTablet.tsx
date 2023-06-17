import React from "react";

import { CompanyDescription } from "@app/components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "@app/components/molecules/CompanyTimeline/CompanyTimeline";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

import {
  CompanyVariant,
  ICompanyProps,
} from "@app/components/organisms/Company/@types/Company";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import {
  companyDesktopCompanyDescriptionContainerDefaultThemeClasses,
  companyBasicContainerDefaultThemeClasses,
} from "@app/components/organisms/Company/styles";
import { CompanyName } from "@app/components/molecules/CompanyName/CompanyName";
import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";
import {
  mapCompanyVariantToCompanyDescriptionVariant,
  mapCompanyVariantToCompanyNameVariant,
} from "@app/components/organisms/Company/config";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Blue,
}) => (
  <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
    <CompanyTimeline themeClasses={themeClasses?.timeline} />

    <LayoutContainer themeClasses={companyBasicContainerDefaultThemeClasses}>
      <CompanyName
        format={CompanyNameFormat.TvDesktopAndTablet}
        variant={mapCompanyVariantToCompanyNameVariant[variant]}
      >
        {name}
      </CompanyName>

      <LayoutContainer
        themeClasses={
          companyDesktopCompanyDescriptionContainerDefaultThemeClasses
        }
      >
        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          link={link}
          responsibilities={responsibilities}
          themeClasses={themeClasses?.companyDescription}
          title={title}
          variant={mapCompanyVariantToCompanyDescriptionVariant[variant]}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
