import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { ConnectWallet } from "../../utils/newUtils/connectWallet";
import ConnectWalletModal from "./ConnectWalletModal";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const LandingNavbar = () => {
  const closeButtonRef = useRef(null);
  const router = useRouter();
  const getToken = async (address) => {
    try {
      let res = await axiosInstance.post("/api/register", { address: address, referralLink: router.asPath });

      if (res.data.success) {
        closeModal();
        Cookies.set("token", res.data.data.token, { expires: 10 });
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      let address = await _connectWallet();
      await getToken(address);
    } catch (error) {
      alert("Please connect your wallet");
    }
  };

  const myFunction= async () => {
    try {
      let address = await _connectWallet();
      console.log(address);
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  };

  return (
    <div>
      <header className="header2">
        <div className="container">
          <nav class="navbar navbar-expand-lg py-3 py-lg-4" data-bs-theme="dark">
            <div class="container-fluid">
              <Link href="/">
                <span className="fw-bold text-white fs-2">Lotaverse</span>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 gap-2 gap-lg-3 mt-3 mt-lg-0 mb-lg-0">
                  <li class="nav-item">
                    <Link href="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="#features" className="text-white">
                      Features
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="#featured_game" className="text-white">
                      Featured Game
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="#fun_fact" className="text-white">
                      Fun Fact
                    </Link>
                  </li>
                </ul>
                <w3m-button />
                <div className="d-flex gap-3">
                  <li data-bs-toggle="modal" data-bs-target="#exampleModal" className="mybtn1 link1" style={{ cursor: "pointer" }}>
                    <span>Connect Wallet</span>
                  </li>
                </div>
                {/* <button onClick={myFunction}>Log Message</button> */}
                <ConnectWallet/>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <ConnectWalletModal connectWallet={connectWallet} closeButtonRef={closeButtonRef} />
    </div>
  );
};

export default LandingNavbar;
