import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../../constants";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
//import { useEthersSigner } from './wagmiSignerHook'


// const MMSDK = new MetaMaskSDK({  dappMetadata: {
//   name: "LottaVerse DApp",
// },});
//
export async function _LotteryWinner(_lotteryId,walletProvider) {
  try {

    // if (!isConnected) throw Error('User disconnected')
  
    const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
    const signer = await ethersProvider.getSigner()
    
  const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
  console.log(LOTTERYContract);
  const LotteryWithSigner = LOTTERYContract.connect(signer);
  const tx =await LotteryWithSigner.LotteryWinner(_lotteryId);
  const tx1 = tx.toString();
  console.log(tx1);
  return tx1;
  } catch (error) {
    // Check if the error is specifically because the wallet is not detected
    console.error('Can\'t detect wallet on account OR', error);
  }
}
// export function LotteryWinner(_lotteryId) {
//   const { address, chainId, isConnected } = useWeb3ModalAccount()
//   const { walletProvider } = useWeb3ModalProvider()
  // async function _LotteryWinner(_lotteryId) {
  //   try {

  //     if (!isConnected) throw Error('User disconnected')

  //     const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
  //     const signer = await ethersProvider.getSigner()
  //   const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
  //   console.log(LOTTERYContract);
  //   const LotteryWithSigner = LOTTERYContract.connect(signer);
  //   const tx =await LotteryWithSigner.LotteryWinner(_lotteryId);
  //   const tx1 = tx.toString();
  //   console.log(tx1);
  //   return tx1;
  //   } catch (error) {
  //     // Check if the error is specifically because the wallet is not detected
  //     console.error('Can\'t detect wallet on account OR', error);
  //   }
  // }
  // return <button onClick={() => _LotteryWinner(_lotteryId) }>Get User Address</button>
// }
 