import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta name="theme-color" content="#0d0d0d" />

        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          as="image"
          href="/images/heroone.png"
        />

        <link rel="canonical" href="https://focusflixstudio.com" />
      </Head>

      <body className="antialiased scroll-smooth bg-[#0d0d0d]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}