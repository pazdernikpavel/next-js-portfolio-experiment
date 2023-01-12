import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <head>
        <title>Pavel Pazderník - Software Developer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert front-end developer for CRM, e-commerce, blockchain, Big Data, and more. Led teams and worked with top tech companies."
        />
        <meta
          property="og:title"
          content="Pavel Pazderník - Software Developer"
        />
        <meta
          property="og:description"
          content="Expert front-end developer for CRM, e-commerce, blockchain, Big Data, and more. Led teams and worked with top tech companies."
        />
        <meta property="og:site_name" content="pavelpazdernik.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pavelpazdernik.dev/" />
        <meta property="og:locale" content="en-us" />
        <meta
          property="og:image"
          content="https://pavelpazdernik.dev/image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@PavelPazdernik" />
        <meta name="twitter:site" content="@PavelPazdernik" />
        <meta
          name="twitter:title"
          content="Pavel Pazderník - Software Developer"
        />
        <meta
          name="twitter:description"
          content="Expert front-end developer for CRM, e-commerce, blockchain, Big Data, and more. Led teams and worked with top tech companies."
        />
        <meta
          name="twitter:image"
          content="https://pavelpazdernik.dev/image.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wvb5aqj.css" />
      </head>
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
