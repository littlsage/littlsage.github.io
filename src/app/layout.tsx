import "@app/styles/global.css";
import { fontAnonymousPro, fontExan } from "@app/styles/fonts";
import { IRootLayoutProps } from "@app/app/@types/layout";

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://api.github.com" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22272a" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#22272a" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#22272a" />
    </head>

    <body className={`${fontExan.variable} ${fontAnonymousPro.variable}`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
