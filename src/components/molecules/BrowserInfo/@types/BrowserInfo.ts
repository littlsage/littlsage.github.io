import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { Browser } from "detect-browser";

export type TBrowserIcon = Extract<
  IconDynamicName,
  | IconDynamicName.Chrome
  | IconDynamicName.Firefox
  | IconDynamicName.IE
  | IconDynamicName.Opera
  | IconDynamicName.Safari
  | IconDynamicName.Unknown
>;

export type TActiveIcon = Browser | "react-native" | "bot" | "node" | undefined;
