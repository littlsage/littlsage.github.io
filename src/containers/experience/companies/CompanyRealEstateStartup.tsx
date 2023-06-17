import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Company } from "@app/components/organisms/Company/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanyRealEstateStartup: React.FC<
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
        IconStaticName.NextJs,
        IconStaticName.Tailwind,
        IconStaticName.Auth0,
        IconStaticName.Webpack,
        IconStaticName.JEST,
        IconStaticName.ReactTestingLibrary,
        IconStaticName.Cypress,
        IconStaticName.NodeJs,
        IconStaticName.Apollo,
        IconStaticName.GraphQL,
        IconStaticName.Docker,
      ].includes(iconName),
    )
    .map(
      invertIcon(
        [
          IconStaticName.Apollo,
          IconStaticName.Auth0,
          IconStaticName.Cypress,
          IconStaticName.NextJs,
        ],
        format,
      ),
    );

  return (
    <Company
      date="December 2021 to March 2022"
      format={format}
      iconsWithLabels={icons}
      name="Real Estate Startup"
      responsibilities={[
        <span key="Developed">
          Developed front-end architecture of a real estate web app, leading to
          a <strong>35% increase in user acquisition</strong> and{" "}
          <strong>20% improvement in customer retention</strong>.
        </span>,
        <span key="Ensured">
          Ensured adherence to coding standards and best practices, resulting in
          a <strong>50% reduction in code-related issues</strong> during QA
          testing.
        </span>,
        <span key="Optimized">
          Optimized project timelines,{" "}
          <strong>accelerating application development by 30%</strong> and
          enabling timely delivery of key features.
        </span>,
        <span key="Introduced">
          Introduced GraphQL as a communicative means with the backend system,
          <strong> boosting functional asset delivery by 40%</strong> and
          improving overall system performance.
        </span>,
      ]}
      title="Front-End Architect"
      variant={variant}
    />
  );
};

export { CompanyRealEstateStartup };
