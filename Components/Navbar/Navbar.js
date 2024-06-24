import { fetchPackages } from "@/features/homepage/homepageSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommissionHistories, fetchPurchaseHistories, fetchUserInformation } from "../../features/user/userSlice";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const {  isConnected } = useWeb3ModalAccount()
  const dispatch = useDispatch();
  const router = useRouter();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(fetchUserInformation(Cookies.get("token")));
      dispatch(fetchPackages());
      dispatch(fetchCommissionHistories());
      dispatch(fetchPurchaseHistories());
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if(!isConnected){
      handleSignout()
    }
  },[isConnected]);

  const handleSignout = () => {
    Cookies.remove("token");
    router.push("/");
  };
  const formatAddress = (address) => {
    if (address) {
      return address.slice(0, 6) + "..." + address.slice(address.length - 4, address.length);
    }
  };
  return (
    <div className="my-5 my-lg-5 ">
      <nav class="navbar navbar-expand-lg fixed-top py-3 nav-bg-blur" data-bs-theme="dark">
        <div class="container-fluid">
          <Link href="/dashboard" className="logo d-flex align-items-center">
            <img src="/assets/img/logo.png" alt="LottaVerse" />
            <span className="text-white">LottaVerse</span>
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
            <ul class="navbar-nav mx-auto mb-2 gap-lg-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white text-nowrap" href="/dashboard">
                  <i className="bi bi-grid"></i> <span>Dashboard</span>
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link text-white text-nowrap dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person"></i> <span>My Profile</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/my-profile">
                      <i className="bi bi-circle"></i>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/my-profile/referral-link">
                      <i className="bi bi-circle"></i>
                      <span>Referral Link</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-white" href="/my-earning">
                  <i class="bi bi-currency-dollar"></i>
                  <span>My Earning</span>
                </Link>
              </li> */}
              <li class="nav-item dropdown">
                <a class="nav-link text-white text-nowrap dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-people"></i> <span>My Team</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="/my-team/structure">
                      <i className="bi bi-circle"></i>
                      <span>Structure</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/my-team/generation">
                      <i className="bi bi-circle"></i>
                      <span>Generation</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/my-team/referral">
                      <i className="bi bi-circle"></i>
                      <span>Referral</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link text-white text-nowrap dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-menu-button-wide"></i> <span>Our Service</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="/our-services/view-ticket">
                      <i className="bi bi-circle"></i>
                      <span>View Ticket</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/our-services/buy-ticket">
                      <i className="bi bi-circle"></i>
                      <span>Buy Ticket</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/our-services/winner">
                      <i className="bi bi-circle"></i>
                      <span>Winner</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-nowrap text-white" href="/leaderboard">
                  <i class="bi bi-award"></i> <span>Leaderboard</span>
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link text-nowrap" href="/wallet/withdraw">
                  <i class="bi bi-award"></i> <span>Withdraw</span>
                </Link>
              </li> */}
            </ul>
            <div className="d-flex gap-3">
              <div>
              <w3m-button />
                {/* <button type="button" class="btn btn-danger">
                  <i className="text-white bi bi-wallet"></i> {formatAddress(user?.address)}
                </button> */}
              </div>
              <div type="button" onClick={handleSignout}>
                <div className="logout-button bg-dark">
                  <b>
                    <i className="text-white bi bi-power"></i>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
