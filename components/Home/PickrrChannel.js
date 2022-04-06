import React from 'react'

const PickrrChannel = () => {
  return (
    <section id="pickrr-channel" className="m-auto container row d-flex justify-content-center pt-5 pb-5 mt-5">
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div className="channel-information-section d-flex flex-column justify-content-between">
        <div>
          <h2 className="channel-information-heading"><span className="fw-bold">One click integration</span> with leading
            marketplaces & channel partners</h2>
          <p className="channel-information-details">With out writing a line of code, you can easily integrate your website
            with Pickrr and get powerful functionalities and insights.</p>
        </div>
        <div className="mt-5">
          <a href="/pickrr-integration" target="_blank">
            <span className="view-all-button">View all<span style={{paddingLeft: '8px'}}><img
                  src="https://d10srchmli830n.cloudfront.net/1640547183363_arrow-right-3-(1).png" alt="blue-arrow"
                  height="20px" width="20px" /></span></span>
          </a>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-none-mobile-only mt-4 mt-md-0 text-center">
      <picture>
        <source media="(max-width:576px)"
          srcSet="https://d10srchmli830n.cloudfront.net/1647950793602_Group-20176-(1).png" className="img-fluid"
          alt="pickrr integration"/>
        <img src="https://d10srchmli830n.cloudfront.net/1647950687059_Group-20156-(1).png" className="img-fluid"
          alt="pickrr web integration"/>
      </picture>
    </div>
  </section>
  )
}

export default PickrrChannel