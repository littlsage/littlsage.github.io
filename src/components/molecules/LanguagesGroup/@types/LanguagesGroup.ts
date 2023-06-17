export enum LanguageLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
}

export interface ILanguagesGroupProps {
  languages: {
    level: LanguageLevel;
    name: string;
  }[];
}
