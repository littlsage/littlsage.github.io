import { detect } from "detect-browser";

const isSafari = (): boolean => {
  const browser = detect();

  return browser?.name === "safari";
};

export { isSafari };
