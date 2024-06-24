// "use client";

// import "../styles/globals.css";
// import { useEffect, useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createWeb3Modal } from "@web3modal/wagmi/react";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
// // import { mainnet } from "viem/chains";
// import { mainnet, bscTestnet, bsc, sepolia } from "@wagmi/core/chains";
// import { WagmiProvider } from "wagmi";
// import WalletButton from "@/components/WalletButton";
// import { http, createConfig } from "@wagmi/core";

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// export const blockchainconfig = createConfig({
//   chains: [sepolia],
//   transports: {
//     [sepolia.id]: http(),
//   },
// });
// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// // const chains = [bscTestnet];
// // const config = defaultWagmiConfig({
// //   chains,
// //   projectId,
// //   metadata,
// // });

// createWeb3Modal({
//   wagmiConfig: blockchainconfig,
//   projectId,
//   enableAnalytics: true,
//   enableOnramp: true,
// });

// const queryClient = new QueryClient();

// export default function App({ Component, pageProps }) {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     setReady(true);
//   }, []);

//   return (
//     <>
//       {ready ? (
//         <WagmiProvider config={blockchainconfig}>
//           <QueryClientProvider client={queryClient}>
//             <WalletButton />
//             <Component {...pageProps} />;
//           </QueryClientProvider>
//         </WagmiProvider>
//       ) : null}
//     </>
//   );
// }
