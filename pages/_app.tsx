import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.testnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Teez Deez Nutz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Teez Deez Nutz NFT is a project composed of 10,000 NFTs. We unified the most experienced people in the industry to deliver a remarkable and unique, cutting edge product. With the designs to look like iconic VILLAINS for some of the largest films and video games out there."
        />
        <meta
          name="keywords"
          content="Teez Deez Nutz NFT is a project composed of 10,000 NFTs. We unified the most experienced people in the industry to deliver a remarkable and unique, cutting edge product. With the designs to look like iconic VILLAINS for some of the largest films and video games out there."
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
