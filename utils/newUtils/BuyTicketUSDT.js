import { ethers } from "ethers";
import {
  LOTTERY_CONTRACT_ABI,
  LOTTERY_CONTRACT_ADDRESS,
  tokenAddress,
  tokenABI,
} from "../../constants";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
//import { useEthersSigner } from './wagmiSignerHook'

// const MMSDK = new MetaMaskSDK({  dappMetadata: {
//   name: "LottaVerse DApp",
// },});
//
export async function _BuyTicketsUSDT(
  _tokenAddress,
  _lotteryId,
  _tickets,
  weiAmount,
  _addressesReffArray,
  _amountsReffArray,
  _mainAccountReff,
  _mainAccountAmountReff,
  _payWithRewardReff,
  walletProvider,
  isConnected
) {
  try {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    console.log(ethersProvider);
    const signer = ethersProvider.getSigner();
    const LOTTERYContract = new ethers.Contract(
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI,
      ethersProvider
    );
    console.log(LOTTERYContract);

    const LotteryWithSigner = LOTTERYContract.connect(signer);
    console.log(LotteryWithSigner);
    var tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
    console.log(tokenContract);

    const tx2 = await tokenContract.approve(
      LOTTERY_CONTRACT_ADDRESS,
      weiAmount
    );
    const tx = await LotteryWithSigner.BuyTicket(
      _tokenAddress,
      _lotteryId,
      _tickets,
      weiAmount,
      _addressesReffArray,
      _amountsReffArray,
      _mainAccountReff,
      _mainAccountAmountReff,
      _payWithRewardReff
    );
    console.log(tx);
    return tx;
  } catch (error) {
    // Check if the error is specifically because the wallet is not detected
    console.error("Can't detect wallet on account OR", error);
    alert(error?.data?.message);
  }
}
// export function BuyTicketsUSDT(    _tokenAddress,
//   _lotteryId,
//   _tickets,
//   weiAmount,
//   _addressesReffArray,
//   _amountsReffArray,
//   _mainAccountReff,
//   _mainAccountAmountReff,
//   _payWithRewardReff) {
//   const { address, chainId, isConnected } = useWeb3ModalAccount()
//   const { walletProvider } = useWeb3ModalProvider()
// async function _BuyTicketsUSDT(
//     _tokenAddress,
//     _lotteryId,
//     _tickets,
//     weiAmount,
//     _addressesReffArray,
//     _amountsReffArray,
//     _mainAccountReff,
//     _mainAccountAmountReff,
//     _payWithRewardReff) {
//     try {

//       if (!isConnected) throw Error('User disconnected')

//       const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
//       const signer = await ethersProvider.getSigner()
//     const LOTTERYContract = new ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_CONTRACT_ABI, ethersProvider);
//     console.log(LOTTERYContract);
//     const LotteryWithSigner = LOTTERYContract.connect(signer);
//     var tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
//     const tx2 = await tokenContract.approve(LOTTERY_CONTRACT_ADDRESS, weiAmount)
//     const tx = await LotteryWithSigner.BuyTicket(_tokenAddress,_lotteryId, _tickets,weiAmount,_addressesReffArray,_amountsReffArray,_mainAccountReff,_mainAccountAmountReff,_payWithRewardReff);
//     console.log(tx);
//     return tx;
//     } catch (error) {
//       // Check if the error is specifically because the wallet is not detected
//       console.error('Can\'t detect wallet on account OR', error);
//       alert(error?.data?.message)
//     }
//   }

//   return <button onClick={() => _BuyTicketsUSDT(    _tokenAddress,
//     _lotteryId,
//     _tickets,
//     weiAmount,
//     _addressesReffArray,
//     _amountsReffArray,
//     _mainAccountReff,
//     _mainAccountAmountReff,
//     _payWithRewardReff)}>Get User Address</button>
// }
