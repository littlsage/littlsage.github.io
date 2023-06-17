import { UnorderedListSize } from "@app/components/molecules/UnorderedList/@types/UnorderedList";
import { IThemeClasses, TPseudoClasses } from "@app/types/theme";

const commonPseudoClasses: TPseudoClasses = [
  "childrenLi:items-start",
  "childrenLi:flex",
  "childrenLi:before:bg-blue100",
  "childrenLi:before:rounded-full",
  "childrenLi:before:content-['']",
  "childrenLi:before:inline-block",
];

export const unorderedListDefaultThemeClasses: IThemeClasses = {
  listStyleType: "list-none",
};

export const mapUnorderedListSizeToPseudoClasses: Record<
  UnorderedListSize,
  TPseudoClasses
> = {
  [UnorderedListSize.Medium]: [
    ...commonPseudoClasses,
    "childrenLi:mb-8",
    "childrenLi:before:h-4",
    "childrenLi:before:mr-4",
    "childrenLi:before:mt-[.6rem]",
    "childrenLi:before:min-h-4",
    "childrenLi:before:min-w-4",
    "childrenLi:before:w-4",
  ],
  [UnorderedListSize.Large]: [
    ...commonPseudoClasses,
    "childrenLi:mb-16",
    "childrenLi:before:h-8",
    "childrenLi:before:mr-8",
    "childrenLi:before:mt-10",
    "childrenLi:before:min-h-8",
    "childrenLi:before:min-w-8",
    "childrenLi:before:w-8",
  ],
};
