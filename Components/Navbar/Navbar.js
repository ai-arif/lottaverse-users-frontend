import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUserInformation } from '../../features/user/userSlice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const Navbar = () => {
  const { userInformation } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const [users, setUsers] = useState([]);
  const [isToggle, setToggle] = useState(true);
  // useEffect(() => {
  //     fetch(`${process.env.API}/users`)
  //     .then(res => res.json())
  //     .then(data => setUsers(data))        
  // }, []);

  const handleSignout = () => {
    Cookies.remove('mess_token')
    dispatch(setUserInformation(null))
    router.push('/login')
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

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>

              </ul>

            </li>

            <li className="nav-item dropdown">

              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#">
                    <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#">
                    <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#">
                    <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>David Muldon</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>

              </ul>

            </li>

            <li className="nav-item dropdown pe-3">

              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">{userInformation?.name}</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{userInformation?.name}</h6>
                  {/* <span>Web Designer</span> */}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link onClick={handleSignout} className="dropdown-item d-flex align-items-center" href="/login">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </Link>
                </li>

              </ul>
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
                <Link href="/my-team/referral-link">
                  <i className="bi bi-circle"></i><span>Referral Link</span>
                </Link>
              </li>

            </ul>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link collapsed" href="/my-earning">
              <i class="bi bi-currency-dollar"></i>
              <span>My Earning</span>
            </Link>
          </li>
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
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/leaderboard">
              <i className="bi bi-journal-text"></i><span>Wallet</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link href="/wallet/deposit">
                  <i className="bi bi-circle"></i><span>Deposit</span>
                </Link>
              </li>
              <li>
                <Link href="/wallet/withdraw">
                  <i className="bi bi-circle"></i><span>Withdraw</span>
                </Link>
              </li>
              <li>
                <a href="/wallet/p2p-transfer">
                  <i className="bi bi-circle"></i><span>P2p Transfer</span>
                </a>
              </li>
              
            </ul>
          </li>



        </ul>

      </aside>
    </div>
  )
}

export default Navbar
