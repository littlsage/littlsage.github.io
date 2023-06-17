export enum DashboardContainerFormat {
  Pdf,
  Web,
}

export interface IDashboardContainerProps {
  format?: DashboardContainerFormat;
}
