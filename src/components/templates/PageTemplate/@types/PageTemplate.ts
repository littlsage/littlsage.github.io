import { ILayoutContainerProps } from "@app/components/layout/LayoutContainer/@types/LayoutContainer";

export interface IPageTemplateProps {
  as?: ILayoutContainerProps["as"];
  children: React.ReactNode;
}
