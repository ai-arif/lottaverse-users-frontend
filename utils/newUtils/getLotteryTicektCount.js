import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../../constants";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { useEffect, useState } from "react";
//import { useEthersSigner } from './wagmiSignerHook'


// const MMSDK = new MetaMaskSDK({  dappMetadata: {
//   name: "LottaVerse DApp",
// },});

export async function _getLotteryTicektCount(_lotteryId, walletProvider ,isConnected ) {
  try {
    
   
    if (!isConnected) throw Error('User disconnected')

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
    const signer = await ethersProvider.getSigner()
  const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
  console.log(LOTTERYContract);
  const LotteryWithSigner = LOTTERYContract.connect(signer);
  const tx =await LotteryWithSigner.getLotteryTicektCount(_lotteryId);
  const tx1 = tx.toString();
  console.log(tx1);
  
  return tx1;
  } catch (error) {
    // Check if the error is specifically because the wallet is not detected
    console.error('Can\'t detect wallet on account OR', error);
    // setErrorMessage(error.message);
  }
}

//
// export function GetLotteryTicektCount({_lotteryId}) {
//   const { address, chainId, isConnected } = useWeb3ModalAccount()
//   const { walletProvider } = useWeb3ModalProvider()
//   const [ticketCount, setTicketCount] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null); 

//   async function _getLotteryTicektCount(_lotteryId) {
//     try {
//       console.log('getting lottery id',_lotteryId)
     
//       if (!isConnected) throw Error('User disconnected')

//       const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
//       const signer = await ethersProvider.getSigner()
//     const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
//     console.log(LOTTERYContract);
//     const LotteryWithSigner = LOTTERYContract.connect(signer);
//     const tx =await LotteryWithSigner.getLotteryTicektCount(_lotteryId);
//     const tx1 = tx.toString();
//     console.log(tx1);
//     setTicketCount(tx1);
//     return tx1;
//     } catch (error) {
//       // Check if the error is specifically because the wallet is not detected
//       console.error('Can\'t detect wallet on account OR', error);
//       setErrorMessage(error.message);
//     }
//   }
//   useEffect(() => {
//     _getLotteryTicektCount(_lotteryId);
//   }, [_lotteryId, isConnected, walletProvider]);
//   return (
//     <div className="">
//       {ticketCount === null ? (
//         <div>Loading...</div>
//       ) : (
//         <div>{`${ticketCount}`}</div>
//       )}
//       {errorMessage && (
//         <div>{`Error: ${errorMessage}`}</div>
//       )}
//     </div>
//   )
// }
 
