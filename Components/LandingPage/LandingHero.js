import React from 'react'

const LandingHero = () => {
  return (
    <div className="hero-area hero__item hero_background" style={{background:"#070b28"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-self-center">
                            <div className="">
                                <span className='gradient_text'>NEW CRYPTO GAME</span>
                                <h1 className='fw-bold text-white'>PLAY TO WIN</h1>
                                <a href="#" className="primary-btn">See more about us</a>
                                <p className='text' style={{width:'400px'}}>
                                Play, Invest,Exchange and Join the Contest with high rewards at Lotaverse!
                                </p>
                                <div className="links">
								<a href="#" className="mybtn1 link1">Get Started Now!</a>
							</div>
                            </div>
                        </div>

                        <div className="col-lg-7" style={{position:'relative'}}>
					<div className="hero-img2 d-block d-md-none">
						<img src="assets/images/heroarea.png" alt=""/>
					</div>
					<div className="hero-img d-none d-md-block">
						<img className="img-fluid full-image" src="assets/images/heroarea.png" alt=""/>
						<img className="shape phone" src="/img/phone.png" alt=""/>
						<img className="shape man" src="/img/man222.png" alt=""/>
						<img className="shape ripple" src="/img/ripple.png" alt=""/>
						<img className="shape ripple2" src="/img/ripple1.png" alt=""/>
						<img className="shape bitcoin1" src="assets/images/h-shapes/bitcoin1.png" alt=""/>
						<img className="shape bitcoin2" src="assets/images/h-shapes/bitcoin2.png" alt=""/>
						<img className="shape shape-icon" src="assets/images/h-shapes/shape.png" alt=""/>
						<img className="shape award-bg" src="assets/images/h-shapes/award/bg.png" alt=""/>
						<img className="shape award" src="assets/images/h-shapes/award/award.png" alt=""/>
						<img className="shape gift-bg" src="assets/images/h-shapes/giftbox/bg.png" alt=""/>
						<img className="shape gift" src="assets/images/h-shapes/giftbox/gift.png" alt=""/>
						<img className="shape shield-bg" src="assets/images/h-shapes/shield/bg.png" alt=""/>
						<img className="shape shield" src="assets/images/h-shapes/shield/shield.png" alt=""/>
					</div>
				</div>
                        
                    </div>
                </div>
                <br /><br /><br />
            </div>
            
  )
}

export default LandingHero
