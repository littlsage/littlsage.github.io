import { CompanyDescription } from "@app/components/organisms/CompanyDescription/CompanyDescription";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import {
  CompanyVariant,
  ICompanyProps,
} from "@app/components/organisms/Company/@types/Company";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { companyMobileContainerDefaultThemeClasses } from "@app/components/organisms/Company/styles";
import { CompanyName } from "@app/components/molecules/CompanyName/CompanyName";
import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";
import {
  mapCompanyVariantToCompanyDescriptionVariant,
  mapCompanyVariantToCompanyNameVariant,
} from "@app/components/organisms/Company/config";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Blue,
}) => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer themeClasses={companyMobileContainerDefaultThemeClasses}>
      <CompanyName
        format={CompanyNameFormat.Mobile}
        variant={mapCompanyVariantToCompanyNameVariant[variant]}
      >
        {name}
      </CompanyName>

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        responsibilities={responsibilities}
        themeClasses={{
          ...themeClasses?.companyDescription,
          title: {
            textAlign: "text-center",
            ...themeClasses?.companyDescription?.title,
          },
        }}
        title={title}
        variant={mapCompanyVariantToCompanyDescriptionVariant[variant]}
      />
    </LayoutContainer>
  </Responsive>
);

export { CompanyMobile };
