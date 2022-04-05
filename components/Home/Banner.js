import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className="row container" style={{paddingTop: '125px', margin: 'auto' , marginBottom: '30px'}}>
    <div className="row home-new-banner banner-mobile-only">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 d-flex align-items-center"
        style={{justifyContent: 'center'}}>
        <div>
          <h1 className="fw-bold banner-heading desktop-only"><span style={{color: '#2D7BE4'}}>eCommerce</span> Shipping <br />
            Solutions</h1>
          <div className="d-flex align-items-baseline p-1">
            <div className="mr-2"><Image src="https://d10srchmli830n.cloudfront.net/1640535774177_Group-2630.png"
                alt="tick" /></div>
            <div>
              <p className="banner-subheading">AI enabled dashboard for eCommerce business</p>
            </div>
          </div>
          <div className="d-flex align-items-baseline p-1">
            <div className="mr-2"><Image src="https://d10srchmli830n.cloudfront.net/1640535774177_Group-2630.png"
                alt="tick" /></div>
            <div>
              <p className="banner-subheading">Fastest delivery across 29,000 pincodes</p>
            </div>
          </div>
          <div className="d-flex align-items-baseline p-1">
            <div className="mr-2"><Image src="https://d10srchmli830n.cloudfront.net/1640535774177_Group-2630.png"
                alt="tick" /></div>
            <div>
              <p className="banner-subheading">One click integration, no coding required</p>
            </div>
          </div>
          <div className="mt-5 mb-3 text-center-mobile-only">
            <a href="https://dashboard.pickrr.com/" rel="noopener noreferrer" target="_blank">
              <span className="banner-button">Sign up for free</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 d-flex align-items-center justify-content-center">
        <div>
          <h1 className="fw-bold banner-heading mobile-only"><span style={{color: '#2D7BE4'}}>eCommerce</span> Shipping <br />
            Solutions
          </h1>
          <Image src="https://pickrr.s3.amazonaws.com/2022-03-30T16:30:19.351865_pickrr_analytics.png"
            alt="ecommerce shipping solutions" className="img-fluid px-3" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner