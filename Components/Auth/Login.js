import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import axios from '../../utils/axios'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { ethers } from 'ethers';
import abi from './Abi/abi.json';

const Login = () => {
  const router = useRouter();
  const [userObj, setUserObj] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    setUserObj({
      ...userObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('/api/auth/login', userObj);
    if (res.data.status) {
      toast.success(res.data.message);

      if (res.data.data.mess_id == null) {
        Cookies.set('temp_token', res.data.data.temp_token);
        router.push('/join-mess');
      }
      if (res.data.data.mess_id) {
        Cookies.set('mess_token', res.data.data.token);
        router.push('/');
      }
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("");
/**
 * @dev This function is used to connect to the user's MetaMask wallet.
 * It first checks if the ethereum object is available in the window object.
 * If it is, it requests the user's accounts from MetaMask.
 * It then sets up listeners for chain and account changes, reloading the page when these occur.
 * It creates a new ethers provider using the ethereum object, gets the signer from the provider,
 * and creates a new contract instance with the contract address, ABI, and signer.
 * It then sets the account and state.
 * If the ethereum object is not available, it alerts the user to install MetaMask.
 * Any errors that occur are logged.
 */
const connectWallet = async () => {
  /**
   * @param {string} contractAddress - The address of the contract you want to interact with.
   * @param {object} contractABI - The ABI (Application Binary Interface) of the contract.
   */
  const contractAddress = "Your contract address here";
  const contractABI = abi.abi;

  try {
    // Get the ethereum object from the window object
    const { ethereum } = window;

    // If the ethereum object exists (i.e., MetaMask is installed)
    if (ethereum) {
      // Request the user's accounts from MetaMask
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // When the chain changes, reload the page
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      // When the account changes, reload the page
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });

      // Create a new ethers provider using the ethereum object
      const provider = new ethers.providers.Web3Provider(ethereum);
      // Get the signer from the provider
      const signer = provider.getSigner();
      // Create a new contract instance with the contract address, ABI, and signer
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      // Get the first account from the accounts array
      const userAccount = account[0];
      // Set the account state
      setAccount(userAccount);
      // Set the state with the provider, signer, and contract
      setState({ provider, signer, contract });
      // Log the state
      console.log("state", state);
    } else {
      // If the ethereum object doesn't exist, alert the user to install MetaMask
      alert("Please install metamask");
    }
  } catch (error) {
    // Log any errors
    console.log(error);
  }
};
  return (
    <div>
      <main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>

                    <div className="col-12">
                      <label for="yourUsername" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input onChange={handleChange} type="text" name="email" className="form-control" id="email" required/>
                        <div className="invalid-feedback">Please enter your email.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourPassword" className="form-label">Password</label>
                      <input onChange={handleChange}  type="password" name="password" className="form-control" id="yourPassword" required/>
                      <div className="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button onClick={handleSubmit} className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div className="col-12">
        <button onClick={connectWallet} className="btn btn-primary w-100" type="button">
          Login with MetaMask
        </button>
      </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <Link href="/register">Create an account</Link></p>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
    </div>
  )
}

export default Login
