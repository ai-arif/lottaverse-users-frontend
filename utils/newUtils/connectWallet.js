import { ethers } from 'ethers'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
//import { getEthersSigner } from './wagmiSignerHook'


// const MMSDK = new MetaMaskSDK({  dappMetadata: {
//   name: "LottaVerse DApp",
// },});
//
export function ConnectWallet() {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()


 async function _connectWallet() {
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
      const  userAddress = await signer.getAddress();
      console.log(userAddress)
    return address;
    } catch (error) {
      // Check if the error is specifically because the wallet is not detected
      console.error('Can\'t detect wallet on account OR', error);
    }
  }

  return <button onClick={_connectWallet}>Get User Address</button>
}


 