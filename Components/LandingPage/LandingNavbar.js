import Link from 'next/link'
import React from 'react'
import axiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';
import {
	_connectWallet
} from "../../utils/newUtils/connectWallet";
import { useRouter } from 'next/router';

const LandingNavbar = () => {
    const router=useRouter()
    const getToken=async(address)=>{
        try {
            let res=await axiosInstance.post('/api/register',{address:address})
            
            if(res.data.success){
                Cookies.set('token',res.data.data.token,{expires:10})
                router.push('/dashboard')
            }
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div>
      <header className="header2">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <Link href="/">
                        <span className='fw-bold text-white fs-2'>
                            Lotaverse
                        </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="header__nav__option">
                        <nav className="header__nav__menu mobile-menu">
                            <ul>
                                <li className="active"><Link href="/">Home</Link></li>
                                
                                <li onClick={async()=>{
                                    try {
                                        let address=await _connectWallet();
                                        await getToken(address)
                                    } catch (error) {
                                        alert('Please connect your wallet')
                                    }
                                }} className="mybtn1 link1" style={{cursor:'pointer'}}><span >Connect Wallet</span></li>
                            </ul>
                        </nav>
                        <div className="header__nav__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
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
