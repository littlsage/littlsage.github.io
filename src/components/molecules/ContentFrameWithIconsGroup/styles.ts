import { IContentFrameWithIconsGroupThemeClasses } from "@app/components/molecules/ContentFrameWithIconsGroup/@types/ContentFrameWithIconsGroup";

export const contentFrameWithIconsGroupDefaultThemeClasses: IContentFrameWithIconsGroupThemeClasses =
  {
    wrapper: {
      gap: "gap-32",
      pseudoClasses: [
        "directChildren:break-inside-avoid-column",
        "directChildren:page-break-inside-avoid",
      ],
    },
  };
