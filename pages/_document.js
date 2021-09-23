import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
          {/* <meta name="application-name" content="William Wilder Portfolio" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="William Wilder" />
          <meta
            name="description"
            content="Portfolio website for William Wilder - Software Developer - NextJS && React Specialist."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" /> */}
          {/* TSK */}
          {/* <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#10b981" /> */}

          {/* <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/android-chrome-512x512.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/maskable_icon.png"
            color="#222222"
          /> */}

          <link rel="shortcut icon" href="/favicon.ico" />

          {/* <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://willwilder.com" />
          <meta
            name="twitter:title"
            content="William Wilder Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Portfolio website for William Wilder - Software Developer - NextJS && React Specialist."
          />
          <meta
            name="twitter:image"
            content="https://willwilder.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@WilderDev" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="William Wilder Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Portfolio website for William Wilder - Software Developer - NextJS && React Specialist."
          />
          <meta property="og:site_name" content="Will Wilder" />
          <meta property="og:url" content="https://willwilder.com" />
          <meta
            property="og:image"
            content="https://willwilder.com/icons/apple-touch-icon.png"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
