import { Company } from "@app/components/organisms/Company/Company";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanyDiH: React.FC<Pick<ICompanyProps, "format" | "variant">> = ({
  format,
  variant,
}) => {
  const icons = iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.Grunt,
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.Sass,
        IconStaticName.LESS,
        IconStaticName.JQuery,
        IconStaticName.Prestashop,
        IconStaticName.Redmine,
      ].includes(iconName),
    )
    .map(invertIcon([IconStaticName.LESS], format));

  return (
    <Company
      date="October 2010 to October 2015"
      iconsWithLabels={icons}
      format={format}
      link="https://dih.pl/"
      name="DiH"
      responsibilities={[
        <span key="Optimized">
          Optimized UI development for various e-commerce projects, resulting in
          a <strong>30% improvement in design consistency</strong> and a{" "}
          <strong>20% reduction in development time</strong>.
        </span>,
        <span key="Fostered">
          Fostered professional development in CSS preprocessors, UI pattern
          libraries, and JavaScript task runners,{" "}
          <strong>improving team efficiency by 25%</strong>.
        </span>,
        <span key="Presented">
          Presented innovative approaches to engineers, contributing to the
          company&apos;s technical market presence and enhancing team knowledge.
        </span>,
        <span key="Fostered">
          Fostered cross-functional communication with IT, end users, and
          stakeholders, resulting in a{" "}
          <strong>25% reduction in miscommunication-related issues</strong> and
          faster project delivery.
        </span>,
        <span key="Advocated">
          Advocated for the use of defect and enhancement tracking software,{" "}
          <strong>improving issue resolution efficiency by 30%</strong>.
        </span>,
      ]}
      title="Front-End Developer"
      variant={variant}
    />
  );
};

export { CompanyDiH };
