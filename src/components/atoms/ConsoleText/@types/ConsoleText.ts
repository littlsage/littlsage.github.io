export enum ConsoleTextVariant {
  Mobile,
  Pdf,
  TvDesktopAndTablet,
}

export interface IConsoleTextProps {
  children: string;
  variant: ConsoleTextVariant;
}
