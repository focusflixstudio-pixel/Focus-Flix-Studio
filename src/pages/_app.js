import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
  
        <title>
          Focus Flix Studio | Wedding Photography & Cinematography in Delhi
        </title>

        <meta
          name="description"
          content="Focus Flix Studio offers luxury wedding photography, cinematic wedding films, pre wedding shoots and event cinematography in Delhi NCR."
        />

        <meta
          name="keywords"
          content="wedding photographer Delhi, wedding videographer Delhi, cinematic wedding films, pre wedding shoot Delhi"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Focus Flix Studio"
        />

        <meta
          property="og:description"
          content="Luxury wedding photography and cinematic wedding films."
        />

        <meta
          property="og:image"
          content="https://focusflixstudio.com/images/heroone.png"
        />

        <meta
          property="og:url"
          content="https://focusflixstudio.com"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <link
          rel="canonical"
          href="https://focusflixstudio.com"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}