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
export function ClaimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver) {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
 async function _claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver) {
    try {
     //const ethereum = await MMSDK.getProvider();
    
      // This opens the app correctly, ask form permission, and gets back to the browser
      //await ethereum.request({ method: 'eth_requestAccounts', params: [] });
      //const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
      
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      //const provider = new ethers.providers.Web3Provider(window.ethereum)
  
      // MetaMask requires requesting permission to connect users accounts
      // *** await provider.send("eth_requestAccounts", []);
  
      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
    
      //const signer = provider.getSigner()
      //const signer = await getEthersSigner(1);


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

  return <button onClick={() => _claimReward(_lotteryID, _tokenAddress, _claimer, _commisionReceiver)}>Get User Address</button>
} 
 
