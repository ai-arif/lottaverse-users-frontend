import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../constants";


/*
export async function _setRandomNumber() {
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
  console.log(LOTTERYContract);
  const myAddress = await signer.getAddress();
  const tx =await LotteryWithSigner.setRandomNumber([1,2,3,4,5,8],myAddress,18);
  }
*/
export async function _setRandomNumber() {
  try {
     // A Web3Provider wraps a standard Web3 provider, which is
     // what MetaMask injects as window.ethereum into each page
     const provider = new ethers.providers.Web3Provider(window.ethereum);
    
 
     // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);
 
     // The MetaMask plugin also allows signing transactions to
     // send ether and pay to change state within the blockchain.
     // For this, you need the account signer...
     const signer = provider.getSigner();
     const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, provider);
     const LotteryWithSigner = LOTTERYContract.connect(signer);
     console.log(LOTTERYContract);
     const myAddress = await signer.getAddress();
     const tx = await LotteryWithSigner.setRandomNumber([1,2,3,4,6,8], myAddress, 17);
     // Assuming you want to wait for the transaction to be mined
     await tx.wait();
     console.log('Transaction successful:', tx);
  } catch (error) {
     // Check if the error is specifically because the wallet is not detected
     console.error('Can\'t detect wallet on account');
  }
 }
 
export async function _getRandomNumber() {
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
    console.log(LOTTERYContract);
    const LotteryWithSigner = LOTTERYContract.connect(signer);
    const myAddress = await signer.getAddress();
    const tx =await LotteryWithSigner.getRandomNumber(myAddress,17);
    const tx1 = tx.toString();
    console.log(tx1);
  } catch (error) {
      // Check if the error is specifically because the wallet is not detected
      console.error('Can\'t detect wallet on account');
  }
  }