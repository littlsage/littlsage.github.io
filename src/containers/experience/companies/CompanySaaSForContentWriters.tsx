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
      date="December 2022 - April 2023"
      format={format}
      iconsWithLabels={icons}
      name="Canibuild"
      link="https://canibuild.com"
      responsibilities={[
        <span key="Led">
          Led the development of web applications and the implementation CI/CD
          throughout the organization to{" "}
          <strong>reduce the delivery time by 80%</strong>.
        </span>,
        <span key="Built">
          <strong>Gathered and validated 40+ requirements</strong> as part of
          the collaboration of a high-profile progressive web app that helped
          develop clear, unambiguous technical requirements and establish a
          consistent feedback loop.
        </span>,
        <span key="Analyzed">
          Analyzed a<strong> Python Django-based original website</strong> and
          found ways to improve its usability.
        </span>,
        <span key="Developed">
          Developed code that deals with large data sets by rendering component
          on UI and{" "}
          <strong>optimizing calls to minimize HTTP request by 75%</strong>.
        </span>,
      ]}
      title="Lead Full-Stack Engineer"
      variant={variant}
    />
  );
};

export { CompanySaaSForContentWriters };
