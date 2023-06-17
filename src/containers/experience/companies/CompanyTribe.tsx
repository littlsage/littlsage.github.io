import { Company } from "@app/components/organisms/Company/Company";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanyTribe: React.FC<Pick<ICompanyProps, "format" | "variant">> = ({
  format,
  variant,
}) => {
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
        IconStaticName.Chakra,
        IconStaticName.Webpack,
        IconStaticName.JEST,
        IconStaticName.ReactTestingLibrary,
        IconStaticName.Cypress,
        IconStaticName.NodeJs,
        IconStaticName.NestJs,
        IconStaticName.Apollo,
        IconStaticName.GraphQL,
        IconStaticName.Docker,
        IconStaticName.GitLab,
      ].includes(iconName),
    )
    .map(
      invertIcon(
        [IconStaticName.Apollo, IconStaticName.Cypress, IconStaticName.NextJs],
        format,
      ),
    );

  return (
    <Company
      date="April 2021 to October 2021"
      format={format}
      iconsWithLabels={icons}
      link="https://tribe.so/"
      name="Tribe"
      responsibilities={[
        <span key="created-scalable">
          Designed a scalable front-end architecture, resulting in a{" "}
          <strong>
            20% increase in application stability and maintainability
          </strong>
          .
        </span>,
        <span key="delivered">
          Delivered features for both front-end and back-end applications,{" "}
          <strong>reducing development time by 20%</strong> and ensuring
          adherence to best practices.
        </span>,
        <span key="Expedited">
          Expedited project timelines, ensuring timely delivery of application
          features and <strong>reducing time-to-market by 10%</strong>.
        </span>,
        <span key="Created">
          Created reusable components,{" "}
          <strong>decreasing code redundancy by 25%</strong> and improving
          overall code quality.
        </span>,
        <span key="Authored">
          Authored unit, integration, and acceptance tests, enhancing code
          reliability and <strong>reducing the number of bugs by 30%</strong>.
        </span>,
        <span key="Leveraged">
          Leveraged GraphQL for seamless backend communication,{" "}
          <strong>improving data handling efficiency by 20%</strong> and{" "}
          <strong>system performance by 15%</strong>.
        </span>,
      ]}
      title="Senior Full-Stack Developer"
      variant={variant}
    />
  );
};

export { CompanyTribe };
