import { ICompanyTimelineProps } from "@app/components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IUnorderedListProps } from "@app/components/molecules/UnorderedList/@types/UnorderedList";
import { ICompanyDescriptionProps } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";

export enum CompanyFormat {
  Pdf,
  Web,
}

export enum CompanyVariant {
  Blue,
  Dark,
}

export interface ICompanyProps {
  date: string;
  format?: CompanyFormat;
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  link?: string;
  name: string;
  responsibilities: IUnorderedListProps["items"];
  themeClasses?: {
    companyDescription?: ICompanyDescriptionProps["themeClasses"];
    timeline?: ICompanyTimelineProps["themeClasses"];
  };
  title: string;
  variant?: CompanyVariant;
}
