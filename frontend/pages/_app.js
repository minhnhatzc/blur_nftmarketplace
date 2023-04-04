import '@/styles/globals.css';
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
	mainnet,
	polygon,
	optimism,
	arbitrum,
	goerli,
	polygonMumbai,
	optimismGoerli,
	arbitrumGoerli,
} from "wagmi/chains";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider } = configureChains(
  [
		mainnet,
		goerli,
		polygon,
		polygonMumbai,
		optimism,
		optimismGoerli,
		arbitrum,
		arbitrumGoerli,
	],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "NFT Marketplace",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
          <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
