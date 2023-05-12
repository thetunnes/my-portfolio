import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function MyDocument() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script src="../utils/pixi.min.js"></Script>
      </body>
    </Html>
  )
}
