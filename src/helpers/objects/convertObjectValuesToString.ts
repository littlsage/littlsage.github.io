import { IThemeClasses } from "@app/types/theme";

export const convertObjectValuesToString = (object: IThemeClasses): string => {
  const array: string[] = [];

  Object.values(object).forEach((value) =>
    Array.isArray(value) ? array.push(...value) : array.push(String(value)),
  );

  return array.join(" ");
};
