const openUrl = (url: string) => {
  typeof window !== undefined ? window?.open(url, "_blank") : null;
};

export { openUrl };
