import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
} from "../constants";


//
export async function _setFirstPrizes(        
  _easyFirstPrizeUSD,
  _superFirstPrizeUSD,
  _superXFirstPrizeUSD) {
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
  const tx =await LotteryWithSigner.setFirstPrizes( 
    _easyFirstPrizeUSD,
    _superFirstPrizeUSD,
    _superXFirstPrizeUSD);
    } catch (error) {
      // Check if the error is specifically because the wallet is not detected
      console.error('Can\'t detect wallet on account');
    }
    
  }

  export async function setSecondPrizes(        
    _easySecondPrizeUSD,
    _superSecondPrizeUSD,
    _superXSecondPrizeUSD) {
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
    const tx =await LotteryWithSigner.setSecondPrizes( 
      _easySecondPrizeUSD,
      _superSecondPrizeUSD,
      _superXSecondPrizeUSD);
      } catch (error) {
        // Check if the error is specifically because the wallet is not detected
        console.error('Can\'t detect wallet on account');
      }
    }

    export async function setThirdPrizes(        
      _easyThirdPrizeUSD,
      _superThirdPrizeUSD,
      _superXThirdPrizeUSD) {
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
      const tx =await LotteryWithSigner.setThirdPrizes( 
        _easyThirdPrizeUSD,
        _superThirdPrizeUSD,
        _superXThirdPrizeUSD);
        } catch (error) {
          // Check if the error is specifically because the wallet is not detected
          console.error('Can\'t detect wallet on account');
        }
      }

      export async function setLuckyPrizes(        
        _easyLuckyPrizeUSD,
        _superLuckyPrizeUSD,
        _superXLuckyPrizeUSD) {
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
        const tx =await LotteryWithSigner.setLuckyPrizes( 
          _easyLuckyPrizeUSD,
          _superLuckyPrizeUSD,
          _superXLuckyPrizeUSD);
          } catch (error) {
            // Check if the error is specifically because the wallet is not detected
            console.error('Can\'t detect wallet on account');
          }
        }