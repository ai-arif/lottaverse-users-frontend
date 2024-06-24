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
export async function _claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver) {
  try {
    if (!isConnected) throw Error('User disconnected')

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
    const signer = await ethersProvider.getSigner()
  const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
  console.log(LOTTERYContract);
  const LotteryWithSigner = LOTTERYContract.connect(signer);
  const tx = await LotteryWithSigner.claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver);
  console.log(tx);
  return tx;
  } catch (error) {
    // Check if the error is specifically because the wallet is not detected
    console.error('Can\'t detect wallet on account OR', error);
    alert(error?.data?.message)
  }
}
// export function ClaimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver) {
//   const { address, chainId, isConnected } = useWeb3ModalAccount()
//   const { walletProvider } = useWeb3ModalProvider()
//  async function _claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver) {
//     try {
     

//       if (!isConnected) throw Error('User disconnected')

//       const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
//       const signer = await ethersProvider.getSigner()
//     const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
//     console.log(LOTTERYContract);
//     const LotteryWithSigner = LOTTERYContract.connect(signer);
//     const tx = await LotteryWithSigner.claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver);
//     console.log(tx);
//     return tx;
//     } catch (error) {
//       // Check if the error is specifically because the wallet is not detected
//       console.error('Can\'t detect wallet on account OR', error);
//       alert(error?.data?.message)
//     }
//   }
//   return <button onClick={() => _claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver)}>Get User Address</button>
// } 
 
