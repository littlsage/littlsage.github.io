import { Company } from "@app/components/organisms/Company/Company";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanySAP: React.FC<Pick<ICompanyProps, "format" | "variant">> = ({
  format,
  variant,
}) => {
  const icons = iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.Gulp,
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.CoffeeScript,
        IconStaticName.React,
        IconStaticName.Redux,
        IconStaticName.CSSModules,
        IconStaticName.Webpack,
        IconStaticName.NodeJs,
        IconStaticName.Docpad,
        IconStaticName.JEST,
        IconStaticName.AirBnb,
        IconStaticName.Jira,
        IconStaticName.Stash,
        IconStaticName.Bamboo,
      ].includes(iconName),
    )
    .map(
      invertIcon(
        [IconStaticName.CSSModules, IconStaticName.CoffeeScript],
        format,
      ),
    );

  return (
    <Company
      date="November 2015 to May 2017"
      format={format}
      iconsWithLabels={icons}
      link="https://www.sap.com/"
      name="SAP"
      responsibilities={[
        <span key="Facilitated">
          Facilitated UI development and monitoring across various projects,{" "}
          <strong>improving cross-team communication by 30%</strong> and
          ensuring timely delivery of features.
        </span>,
        <span key="Implemented">
          Implemented Agile methodologies across projects, resulting in a{" "}
          <strong>
            20% increase in development efficiency and adaptability
          </strong>
          .
        </span>,
        <span key="Delivered">
          Delivered university lectures, sharing expertise and contributing to
          the education of future industry professionals.
        </span>,
        <span key="Guided">
          Guided team members through rapidly evolving digital technology
          landscapes,{" "}
          <strong>
            boosting team comprehension of JavaScript frameworks by 30%
          </strong>
          .
        </span>,
        <span key="Enabled">
          Enabled the product team to access valuable data sources and develop
          innovative features,{" "}
          <strong>increasing customer satisfaction by 25%</strong>.
        </span>,
      ]}
      title="Front-End Developer"
      variant={variant}
    />
  );
};

export { CompanySAP };
