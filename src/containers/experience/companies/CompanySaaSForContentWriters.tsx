import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Company } from "@app/components/organisms/Company/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanySaaSForContentWriters: React.FC<
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
        IconStaticName.WindiCSS,
        IconStaticName.ReactQuery,
        IconStaticName.Vite,
        IconStaticName.Axios,
        IconStaticName.REST,
        IconStaticName.Prisma,
      ].includes(iconName),
    )
    .map(invertIcon([IconStaticName.Prisma], format));

  return (
    <Company
      date="September 2022 - January 2023"
      format={format}
      iconsWithLabels={icons}
      name="SaaS for Content writers"
      responsibilities={[
        <span key="Engineered">
          Engineered a TypeScript-based React single-page application using
          Vite, <strong>enhancing efficiency by 20%</strong> and{" "}
          <strong>decreasing development time by 25%</strong>.
        </span>,
        <span key="Designed">
          Designed a scalable app architecture utilizing design patterns like
          Dumb & Smart Components and Atomic Design, incorporating React Query
          and Windi CSS to <strong>reduce UI design time by 30%</strong>.
        </span>,
        <span key="Employed">
          Employed React Query and Axios for robust communication with backend
          systems, <strong>optimizing resource management</strong> and
          streamlining data fetching.
        </span>,
      ]}
      title="Front-End Architect"
      variant={variant}
    />
  );
};

export { CompanySaaSForContentWriters };
