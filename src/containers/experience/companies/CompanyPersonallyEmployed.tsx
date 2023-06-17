import { Company } from "@app/components/organisms/Company/Company";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyPersonallyEmployed: React.FC<
  Pick<ICompanyProps, "format" | "variant">
> = ({ format, variant }) => (
  <Company
    date="May 2008 to September 2010"
    format={format}
    iconsWithLabels={iconsWithLabels.filter(({ iconName }) =>
      [
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.JQuery,
      ].includes(iconName),
    )}
    name="Little Sage"
    responsibilities={[
      <span key="Leveraged">
        Leveraged personal referral networks to secure small job order
        contracts, expanding the freelance client base.
      </span>,
      <span key="Initiated">
        Initiated self-motivation to acquire front-end development skills,
        enhancing personal marketability and expertise.
      </span>,
      <span key="Cultivated">
        Cultivated strong ties to the technology community through a
        demonstrated ability to deliver quality work.
      </span>,
      <span key="Coordinated">
        Coordinated the development of interactive web-based data
        visualizations, including interactive charts and maps, enhancing user
        experience for clients&apos; websites.
      </span>,
    ]}
    title="Freelancer"
    themeClasses={{
      companyDescription: {
        responsibilitiesWrapper: {
          paddingBottom: "pb-0",
        },
      },
      timeline: {
        bottom: "bottom-0",
      },
    }}
    variant={variant}
  />
);

export { CompanyPersonallyEmployed };
