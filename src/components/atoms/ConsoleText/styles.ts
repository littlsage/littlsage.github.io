import { ConsoleTextVariant } from "@app/components/atoms/ConsoleText/@types/ConsoleText";
import { IThemeClasses } from "@app/types/theme";

const consoleTextDefaultThemeClasses: IThemeClasses = {
  after: [
    "after:animate-blink-slow",
    "after:bg-blue100",
    "after:content-['']",
    "after:inline-block",
    "after:ml-8",
  ],
  color: "text-white",
  fontFamily: "font-exan",
  mediaQuery: [
    "msHighContrastNone:font-anonymousPro",
    "msHighContrastNone:uppercase",
    "msHighContrastActive:font-anonymousPro",
    "msHighContrastActive:uppercase",
  ],
  textAlign: "text-center",
  textTransform: "lowercase",
};

const mapConsoleTextVariantToStyles: Record<ConsoleTextVariant, IThemeClasses> =
  {
    [ConsoleTextVariant.Mobile]: {
      fontSize: "text-32",
      lineHeight: "leading-36",
      pseudoClasses: ["after:h-24", "after:translate-y-[1px]", "after:w-12"],
    },
    [ConsoleTextVariant.Pdf]: {
      color: "text-blue600",
      fontFamily: "font-anonymousPro",
      fontSize: "text-12",
      lineHeight: "leading-16",
      textTransform: "uppercase",
    },
    [ConsoleTextVariant.TvDesktopAndTablet]: {
      fontSize: "text-[6vh]",
      lineHeight: "leading-[7.4vh]",
      pseudoClasses: [
        "after:h-[6vh]",
        "after:translate-y-[1vh]",
        "after:w-[3vh]",
      ],
    },
  };

export { consoleTextDefaultThemeClasses, mapConsoleTextVariantToStyles };
