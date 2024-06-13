import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../../constants";
import MetaMaskSDK from "@metamask/sdk";


const MMSDK = new MetaMaskSDK({  dappMetadata: {
  name: "LottaVerse DApp",
},});

//
export async function _getRemainingTickets(_lotteryId) {
    try {
      const ethereum = await MMSDK.getProvider();
    
      // This opens the app correctly, ask form permission, and gets back to the browser
      await ethereum.request({ method: 'eth_requestAccounts', params: [] });
      const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      //const provider = new ethers.providers.Web3Provider(window.ethereum)
  
      // MetaMask requires requesting permission to connect users accounts
      // *** await provider.send("eth_requestAccounts", []);
  
      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
    
    const signer = provider.getSigner()
    const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, provider);
    console.log(LOTTERYContract);
    const LotteryWithSigner = LOTTERYContract.connect(signer);
    const tx =await LotteryWithSigner.getRemainingTickets(_lotteryId);
    const tx1 = tx.toString();
    return tx1;
    } catch (error) {
      // Check if the error is specifically because the wallet is not detected
      console.error('Can\'t detect wallet on account OR', error);
    }
  }

 