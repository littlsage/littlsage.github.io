import { Anonymous_Pro } from "next/font/google";
import localFont from "next/font/local";

export const fontAnonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
  weight: ["400", "700"],
});

export const fontExan = localFont({
  src: [{ path: "../../public/fonts/Exan-400.woff2", weight: "400" }],
  variable: "--font-exan",
});
