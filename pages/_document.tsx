import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  console.log("DOCUMENT IS RUNNING");
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
