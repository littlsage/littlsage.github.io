import isString from "lodash/isString";
import flatMap from "lodash/flatMap";
import { IThemeClasses } from "@app/types/theme";

export const convertObjectValuesToArray = (object: IThemeClasses): string[] =>
  flatMap(object as Record<string, unknown>, (value) =>
    Array.isArray(value)
      ? convertObjectValuesToArray(Object.fromEntries(value.entries()))
      : value,
  ).filter(isString);
