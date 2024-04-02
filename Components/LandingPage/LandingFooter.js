import React from 'react'

const LandingFooter = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__top">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="footer__top__logo">
                            {/* <a href="#"><img src="/img/logo.png" alt=""/></a> */}
                            <span className='fw-bold text-white fs-2'>
                                Lotaverse
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer__top__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__option">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer__option__item">
                            <h5>About us</h5>
                            <p>Lotaverse ensures transparency, security, and efficiency in ticket transactions, eliminating common issues.</p>
                            <a href="#" className="read__more">Read more <span className="arrow_right"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <div className="footer__option__item">
                            <h5>Who we are</h5>
                            <ul>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Locations</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <div className="footer__option__item">
                            <h5>Our work</h5>
                            <ul>
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Latest</a></li>
                                <li><a href="#">Browse Archive</a></li>
                                <li><a href="#">Video for web</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__option__item">
                            <h5>Newsletter</h5>
                            <p>Lotaverse is an award-winning, full-service production company specializing.</p>
                            <form action="#">
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        
                        <p className="footer__copyright__text">Copyright &copy;
                            2024
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                aria-hidden="true"></i> by <a href="https://www.facebook.com/ai.arif.main" target="_blank">AI Arif</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default LandingFooter
