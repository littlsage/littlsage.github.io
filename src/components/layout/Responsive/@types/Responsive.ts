export enum Device {
  Desktop = "desktop",
  Mobile = "mobile",
  Tablet = "tablet",
  Tv = "tv",
}

export interface IResponsiveProps {
  children: React.ReactNode;
  devices: Device[];
}
