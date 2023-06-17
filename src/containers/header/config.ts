import { IconDynamicName } from "@app/components/atoms/IconDynamic/@types/IconDynamic";
import { IHorizontalLinksWithIconsProps } from "@app/components/molecules/HorizontalLinksWithIcons/@types/HorizontalLinksWithIcons";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

export const navItems: INavProps["navItems"] = [
  {
    href: "#experience",
    title: "Experience",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#about-me",
    title: "About me",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export const icons: IHorizontalLinksWithIconsProps["icons"] = [
  {
    href: "https://github.com/alan-hadyk",
    iconName: IconDynamicName.GitHub,
    isExternal: true,
  },
  {
    href: "https://www.toptal.com/resume/alan-hadyk",
    iconName: IconDynamicName.Toptal,
    isExternal: true,
  },
  {
    href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
    iconName: IconDynamicName.LinkedIn,
    isExternal: true,
  },
];
