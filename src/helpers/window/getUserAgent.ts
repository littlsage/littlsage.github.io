export const getUserAgent = () =>
  typeof window !== "undefined"
    ? window.navigator && window.navigator.userAgent
    : "";
