import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInformation,fetchCommissionHistories, fetchPurchaseHistories } from '../../features/user/userSlice';
import { fetchPackages } from '@/features/homepage/homepageSlice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const Navbar = () => {
  const {user}=useSelector(state=>state.user)
  
  const dispatch = useDispatch()
  const router = useRouter()

  const [users, setUsers] = useState([]);
  const [isToggle, setToggle] = useState(true);
  useEffect(() => {
    if (Cookies.get('token')) {
      dispatch(fetchUserInformation(Cookies.get('token')))
      dispatch(fetchPackages())
      dispatch(fetchCommissionHistories())
      dispatch(fetchPurchaseHistories())
    }
    else {
      router.push('/')
    }
  }, []);

  const handleSignout = () => {
    Cookies.remove('token')
    
    router.push('/')
  }
  return (
    <div className='admin-dashboard'>
      <header id="header" className="header admin-dashboard fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block text-white">LottaVerse</span>
          </Link>
          <i onClick={() => {
            setToggle(!isToggle)
            if (isToggle) {
              document.body.classList.add('toggle-sidebar')
            }
            else {
              document.body.classList.remove('toggle-sidebar')
            }
          }} className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        {/* <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div> */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            {/* <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li> */}

            <li className="nav-item dropdown">

              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    {user?.address}
  </button>
  <ul class="dropdown-menu">
    <li onClick={handleSignout}><a class="dropdown-item" href="#">Logout</a></li>
    
    
    
    
  </ul>
</div>
              </a>

            </li>



          </ul>
        </nav>

      </header>


      <aside id="sidebar" className="sidebar admin-dashboard">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link className="nav-link " href="/dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#myprofile" data-bs-toggle="collapse" href="#">
            <i class="bi bi-person"></i><span>My Profile</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="myprofile" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/my-profile">
                  <i className="bi bi-circle"></i><span>Profile</span>
                </Link>
                <Link href="/my-profile/referral-link">
                  <i className="bi bi-circle"></i><span>Referral Link</span>
                </Link>
              </li>

            </ul>
          </li>
          
          {/* <li className="nav-item">
            <Link className="nav-link collapsed" href="/my-earning">
              <i class="bi bi-currency-dollar"></i>
              <span>My Earning</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#myteam" data-bs-toggle="collapse" href="#">
              <i className="bxs-group"></i><span>My Team</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="myteam" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/my-team/structure">
                  <i className="bi bi-circle"></i><span>Structure</span>
                </Link>
                <Link href="/my-team/generation">
                  <i className="bi bi-circle"></i><span>Generation</span>
                </Link>
                <Link href="/my-team/referral">
                  <i className="bi bi-circle"></i><span>Referral</span>
                </Link>
              </li>

            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Our Service</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/our-services/view-ticket">
                  <i className="bi bi-circle"></i><span>View Ticket</span>
                </Link>
              </li>
              <li>
                <Link href="/our-services/buy-ticket">
                  <i className="bi bi-circle"></i><span>Buy Ticket</span>
                </Link>
              </li>
              <li>
                <Link href="/our-services/winner">
                  <i className="bi bi-circle"></i><span>Winner</span>
                </Link>
              </li>

            </ul>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" href="/leaderboard">
            <i class="bi bi-award"></i>
              <span>Leaderboard</span>
            </Link>
          </li>

          {/* <li class="nav-item">
            <Link class="nav-link collapsed" href="/wallet/withdraw">
            <i class="bi bi-award"></i>
              <span>Withdraw</span>
            </Link>
          </li> */}
          
        </ul>

      </aside>
    </div>
  )
}

export default Navbar
