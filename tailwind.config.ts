import plugin from "tailwindcss/plugin";

const spacing = {
  0: "0",
  1: "1px",
  2: "0.2rem",
  4: "0.4rem",
  8: "0.8rem",
  10: "1rem",
  12: "1.2rem",
  14: "1.4rem",
  16: "1.6rem",
  20: "2rem",
  24: "2.4rem",
  28: "2.8rem",
  30: "3rem",
  32: "3.2rem",
  36: "3.6rem",
  40: "4rem",
  44: "4.4rem",
  48: "4.8rem",
  "50%": "50%",
  52: "5.2rem",
  56: "5.6rem",
  64: "6.4rem",
  68: "6.8rem",
  72: "7.2rem",
  80: "8rem",
  "80%": "80%",
  88: "8.8rem",
  96: "9.6rem",
  100: "10rem",
  "100%": "100%",
  "100vh": "100vh",
  248: "24.8rem",
  356: "35.6rem",
  1056: "105.6rem",
  auto: "auto",
  full: "100%",
  inherit: "inherit",
  "negative50%": "-50%",
  screenLg: "1680px",
  screenMd: "1280px",
  screenSm: "640px",
  screenXl: "1920px",
  unset: "unset",
};

const tailwindConfig = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("secondChild", "&:nth-child(2)");
      addVariant("thirdChild", "&:nth-child(3)");
      addVariant("fourthChild", "&:nth-child(4)");
      addVariant("directChildren", "& > *");
      addVariant("childrenLi", "& li");
      addVariant("childrenStrong", "& strong");
      addVariant("childrenMask", "& mask");
      addVariant("childrenPath", "& path");
      addVariant("childrenSvg", "& svg");
      addVariant("focusChildrenSvg", "&:focus svg");
      addVariant("activeChildrenSvg", "&:active svg");
      addVariant("hoverChildrenLine", "&:hover .line");
      addVariant("focusChildrenLine", "&:focus .line");
      addVariant("activeChildrenLine", "&:active .line");
    }),
    require("tailwind-clip-path"),
  ],
  theme: {
    animation: {
      "blink-default": "blink 300ms ease-in-out infinite",
      "blink-slow": "blink 900ms ease-in-out infinite",
      "glow-slow": "glow 900ms ease-in-out infinite",
      "glow-verySlow": "glow 3600ms ease-in-out infinite",
      "rotate-slow": "rotate 900ms linear infinite",
    },
    backgroundImage: {
      crossImg:
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMyAzMyI+CiAgPGRlZnMvPgogIDxwYXRoIGZpbGw9IiMzMTRFNTMiIGQ9Ik0xMi4zNyAxNi4wOGg4djFoLTh2LTF6Ii8+CiAgPHBhdGggZmlsbD0iIzMxNEU1MyIgZD0iTTE1Ljg3IDIwLjU4di04aDF2OGgtMXoiLz4KPC9zdmc+')",
    },
    borderRadius: {
      full: "50%",
    },
    borderWidth: {
      1: "1px",
      thin: "thin",
    },
    boxShadow: {
      activeButton: "inset 0px 0px 1.6rem 0px rgba(103,210,223,0.5)",
      console: "0px 0px .8rem 0px #bcd8db",
      line: "0px 0px .4rem 0px #bcd8db",
    },
    clipPath: {
      hexagon: "polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
    },
    colors: {
      // Black
      black: "#000000",

      // Blue
      blue100: "#bcd8db",
      blue200: "#67d2df",
      blue300: "#78b0b5",
      blue400: "#526065",
      blue500: "#2b595e",
      blue600: "#22272a",
      blue700: "#1e2224",

      // Transparent
      transparent: "transparent",

      // White
      white: "#ffffff",
    },
    dropShadow: {
      lg: "0px 0px .25rem rgba(255,255,255,0.5)",
      md: "0px 0px .125rem rgba(255,255,255,0.9)",
      xl: "0px 0px .5rem #bcd8db",
    },
    fontFamily: {
      anonymousPro: ["var(--font-anonymous-pro)", "monospace", "sans-serif"],
      exan: ["var(--font-exan)", "monospace", "sans-serif"],
    },
    fontSize: {
      0: "0",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      72: "72px",
    },
    fontWeight: {
      bold: "700",
      normal: "400",
    },
    keyframes: {
      blink: {
        "0%": { opacity: "1" },
        "50%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      glow: {
        "0%": { filter: "drop-shadow(0px 0px 0px #bcd8db)", opacity: "0.99" },
        "16%": { filter: "drop-shadow(0px 0px 0.25rem #bcd8db)" },
        "32%": { filter: "drop-shadow(0px 0px 0px #bcd8db)" },
        "100%": { filter: "drop-shadow(0px 0px 0px #bcd8db)", opacity: "1" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    lineHeight: {
      ...spacing,
      1: "1",
    },
    margin: spacing,
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    screens: {
      msHighContrastActive: {
        raw: "(-ms-high-contrast: active)",
      },
      msHighContrastNone: {
        raw: "(-ms-high-contrast: none)",
      },
      "screenHeight401/799": {
        raw: "(min-height: 401px) and (max-height: 799px)",
      },
      screenHeight800: {
        raw: "(min-height: 800px)",
      },
      screenLg: "1680px",
      screenLgXl: {
        raw: "(min-width: 1680px) and (max-width: 1919px)",
      },
      screenMaxHeight400: {
        raw: "(max-height: 400px)",
      },
      screenMaxHeight640: {
        raw: "(max-height: 400px)",
      },
      screenMaxSm: {
        raw: "(max-width: 799px)",
      },
      screenMd: "1280px",
      screenMdLg: {
        raw: "(min-width: 1280px) and (max-width: 1679px)",
      },
      screenSm: "800px",
      screenSmLg: {
        raw: "(min-width: 800px) and (max-width: 1679px)",
      },
      screenSmMd: {
        raw: "(min-width: 800px) and (max-width: 1279px)",
      },
      screenXl: "1920px",
    },
    spacing,
    transitionDuration: {
      default: "300ms",
      fast: "150ms",
      slow: "900ms",
      veryFast: "75ms",
      verySlow: "3600ms",
    },
    transitionTimingFunction: {
      "in-out": "in-out",
    },
    zIndex: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      900: "900",
      1000: "1000",
      1100: "1100",
    },
  },
};

export default tailwindConfig;
