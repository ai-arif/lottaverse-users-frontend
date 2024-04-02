import Link from 'next/link'
import React from 'react'

const LandingNavbar = () => {
  return (
    <div>
      <header class="header2">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <Link href="/">
                        <span className='fw-bold text-white fs-2'>
                            Lotaverse
                        </span>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                <li class="active"><Link href="/">Home</Link></li>
                                
                                <li><Link href="/dashboard">Dashboard</Link></li>
                            </ul>
                        </nav>
                        <div class="header__nav__social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    </div>
  )
}

export default LandingNavbar
