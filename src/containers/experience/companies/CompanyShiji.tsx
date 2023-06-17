import { Company } from "@app/components/organisms/Company/Company";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

const CompanyShiji: React.FC<Pick<ICompanyProps, "format" | "variant">> = ({
  format,
  variant,
}) => (
  <Company
    date="June 2017 to July 2018"
    format={format}
    iconsWithLabels={iconsWithLabels.filter(({ iconName }) =>
      [
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.Redux,
        IconStaticName.Ember,
        IconStaticName.Sass,
        IconStaticName.Docker,
        IconStaticName.QUnit,
        IconStaticName.Webpack,
        IconStaticName.NodeJs,
        IconStaticName.REST,
        IconStaticName.Zeplin,
        IconStaticName.Jira,
        IconStaticName.Jenkins,
        IconStaticName.GitLab,
      ].includes(iconName),
    )}
    name="Shiji"
    responsibilities={[
      <span key="Contributed">
        Contributed to the development of a hotel management application,
        resulting in a <strong>30% increase in development efficiency</strong>{" "}
        and streamlined operations.
      </span>,
      <span key="Assisted">
        Assisted in the creation of a React.js-based Proof of Concept (PoC),{" "}
        <strong>expediting the decision-making process by 40%</strong> and
        enabling faster project progression.
      </span>,
      <span key="Streamlined">
        Streamlined project timelines, ensuring the application&apos;s timely
        development in Ember.js with TypeScript and{" "}
        <strong>accelerating feature delivery by 25%</strong>.
      </span>,
      <span key="Created">
        Created reusable components and managed adapters, models, and
        serializers,{" "}
        <strong>improving code organization and maintainability by 20%</strong>.
      </span>,
      <span key="Authored">
        Authored unit, integration, and acceptance tests, leading to a{" "}
        <strong>30% reduction in bugs</strong> and a{" "}
        <strong>15% increase in code reliability</strong>.
      </span>,
      <span key="Mentored">
        Mentored junior front-end developers,{" "}
        <strong>
          enhancing their productivity and skills development by 20%
        </strong>
        .
      </span>,
    ]}
    title="Senior Front-End Developer"
    link="https://shijigroup.com/"
    variant={variant}
  />
);

export { CompanyShiji };
