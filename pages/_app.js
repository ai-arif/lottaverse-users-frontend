import Navbar from "@/Components/Navbar/Navbar";
import store from "@/store/store";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

//import { Web3Modal } from '../context/web3modal'

// import '@rainbow-me/rainbowkit/styles.css';
// import {
//   getDefaultConfig,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
// } from 'wagmi/chains';
// import {
//   QueryClientProvider,
//   QueryClient,
// } from "@tanstack/react-query";

// const config = getDefaultConfig({
//   appName: 'LottaVerse',
//   projectId: "8f57e9c62e1855a9dd77dbdcab920d82",
//   chains: [mainnet, polygon],
//   //ssr: true, // If your dApp uses server side rendering (SSR)
// });

// const queryClient = new QueryClient();

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "8f57e9c62e1855a9dd77dbdcab920d82";

// 2. Set chains
const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://polygon-rpc.com",
};

// 3. Create a metadata object
const metadata = {
  name: 'LottaVerse',
  description: 'My Website description',
  url: 'https://app.lottaverse.io/', // origin must match your domain & subdomain
  icons: ['https://avatars.LottaVerse.com/']
}

// const metadata = {
//   name: "My Website",
//   description: "My Website description",
//   url: "https://mywebsite.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.mywebsite.com/"],
// };

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  //rpcUrl: '...', // used for the Coinbase SDK
  //defaultChainId: 1 // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [polygon],
  projectId,
  //enableAnalytics: true, // Optional - defaults to your Cloud configuration
  //enableOnramp: true // Optional - false as default
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const restictedRoutes = [
    "/login",
    "/register",
    "/create-mess",
    "/join-mess",
    "/",
    "404",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
    "/verify-phone",
  ];

  return (
    <Provider store={store}>
      {restictedRoutes.includes(router.pathname) ? null : <Navbar />}
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
