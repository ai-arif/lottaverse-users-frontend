import React from 'react'

const LandingFeatures = () => {
  return (
    <div className="features mb-4 " style={{marginTop:"70px"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="feature-box">
							<div className="feature-box-inner">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon one">
												<img src="assets/images/feature/icon1.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
													Exclusive Offer
												</h4>
												<a href="#" className="link">read more <i class="bi bi-arrow-right-short"></i></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon two">
												<img src="assets/images/feature/icon2.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
													Provably Fair
												</h4>
												<a href="#" className="link">read more <i class="bi bi-arrow-right-short"></i></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon three">
												<img src="assets/images/feature/icon3.png" alt=""/>
											</div>
											<div className="content">
												<h4 className="title">
													24/7 Support
												</h4>
												<a href="#" className="link">read more <i class="bi bi-arrow-right-short"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default LandingFeatures
