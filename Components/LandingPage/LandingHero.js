import React from 'react'

const LandingHero = () => {
  return (
    <section class="hero">
        <div class="">
            <div class="hero__item hero_background" style={{backgroundImage:"url('/img/hero/hero-1.jpg')"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="">
                                <span className='gradient_text'>NEW CRYPTO GAME</span>
                                <h1 className='fw-bold text-white'>PLAY TO WIN</h1>
                                <a href="#" class="primary-btn">See more about us</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default LandingHero
