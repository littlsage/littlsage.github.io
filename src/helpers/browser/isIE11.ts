import { detect } from "detect-browser";

const isIE11 = (): boolean => {
  const browser = detect();

  return browser?.name === "ie";
};

export { isIE11 };
