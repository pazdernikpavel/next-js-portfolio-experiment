import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <title>Pavel Pazderník - Software Developer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Jmenuji se Pavel a věnuji se vývoji, především tedy frontendu, již 7 rokem."
        />
        <meta
          property="og:title"
          content="Pavel Pazderník - Software Developer"
        />
        <meta
          property="og:description"
          content="Jmenuji se Pavel a věnuji se vývoji, především tedy frontendu, již 7 rokem."
        />
        <meta property="og:site_name" content="pazdy.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:pazdy.dev" />
        <meta property="og:locale" content="cs" />
        <meta property="og:image" content="https://pazdy.dev/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PavelPazdernik" />
        <meta name="twitter:creator" content="@PavelPazdernik" />
        <meta
          name="twitter:title"
          content="Pavel Pazderník - Software Developer"
        />
        <meta
          name="twitter:description"
          content="Jmenuji se Pavel a věnuji se vývoji, především tedy frontendu, již 7 rokem."
        />
        <meta name="twitter:image" content="https://pazdy.dev/image.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wvb5aqj.css" />
      </head>
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
