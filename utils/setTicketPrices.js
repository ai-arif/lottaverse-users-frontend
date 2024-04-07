import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../constants";


//
export async function _setTicketPrices(
    _easyTicketPriceUSD,
    _superTicketPriceUSD,
    _superXTicketPriceUSD) {
      try {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner()
  const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, provider);
  const LotteryWithSigner = LOTTERYContract.connect(signer);
  const tx = await LotteryWithSigner.setTicketPrices(
    _easyTicketPriceUSD,
    _superTicketPriceUSD,
    _superXTicketPriceUSD);
      } catch (error) {
        // Check if the error is specifically because the wallet is not detected
        console.error('Can\'t detect wallet on account');
      }
    
  }
