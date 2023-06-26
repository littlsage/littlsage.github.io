import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Company } from "@app/components/organisms/Company/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanyHealthcareSaas: React.FC<
  Pick<ICompanyProps, "format" | "variant">
> = ({ format, variant }) => {
  const icons = iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.Tailwind,
        IconStaticName.GraphQL,
        IconStaticName.Apollo,
        IconStaticName.Prisma,
      ].includes(iconName),
    )
    .map(invertIcon([IconStaticName.Prisma, IconStaticName.Apollo], format));

  return (
    <Company
      date="August 2022 to December 2022"
      format={format}
      iconsWithLabels={icons}
      name="Cave Consulting"
      link="https://www.caveconsulting.com/"
      responsibilities={[
        <span key="Integrated">
          Integrated <strong>Redux and MobX</strong> on a number of React-based
          front-end projects and <strong>Vue, Vuex, and Vuetify</strong> with a{" "}
          <strong>Laravel</strong> back-end.
        </span>,
        <span key="Implemented">
          Implemented a<strong> GraphQL-and-Apollo server</strong> for a
          React-and-Vue front-end data query.
        </span>,
        <span key="Created">
          Created a new customized chart library using{" "}
          <strong>D3.js and Plotly.js</strong>.
        </span>,
        <span key="Embedded">
          Embedded a <strong>Google tag manager and Google Analytics</strong>{" "}
          for the website conversion tracking and the user event tracking.
        </span>,
      ]}
      title="Full-Stack Engineer"
      variant={variant}
    />
  );
};

export { CompanyHealthcareSaas };
