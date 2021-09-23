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
          <meta name="application-name" content="Training Grounds MMA" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Training Grounds MMA"
          />
          <meta
            name="description"
            content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* TSK */}
          {/* <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#10b981" /> */}

          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
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
            color="#212121"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          {/* <meta name="twitter:url" content="https://willwilder.com" /> */}
          <meta name="twitter:title" content="Training Grounds MMA" />
          <meta
            name="twitter:description"
            content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
          />
          <meta
            name="twitter:image"
            content="https://willwilder.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@TrainingGroundsMMA" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Training Grounds MMA" />
          <meta
            property="og:description"
            content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
          />
          <meta property="og:site_name" content="Training Grounds MMA" />
          {/* <meta property="og:url" content="https://willwilder.com" /> */}
          <meta
            property="og:image"
            content="https://willwilder.com/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
