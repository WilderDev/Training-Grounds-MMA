import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
