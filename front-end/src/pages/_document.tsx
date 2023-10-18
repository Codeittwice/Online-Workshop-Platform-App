import { Html, Head, Main, NextScript } from "next/document";
// import { ColorModeScript } from "@chakra-ui/react";
// import { theme } from "./_app";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Main />
        <div id="overlays" />
        <NextScript />
      </body>
    </Html>
  );
}