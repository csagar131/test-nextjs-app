import React, { useState} from 'react'

const Feature = () => {

  const [currentActiveCommitId, setCurrentActiveCommitId] = useState('commit-1')

  const handleCommitDivChange = (e) => {
    if(e.target.tagName === 'P' || e.target.tagName === 'H3'){
      setCurrentActiveCommitId(e.target.parentNode.id)
    }
    else{
      setCurrentActiveCommitId(e.target.id)
    }
  }


  return (
    <section id="commit-section" className="commitment-section mb-5">
    <div className="pt-4 container m-auto mt-4 row d-flex justify-content-between pb-4 banner-mobile-only">
      <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <div className="desktop-only">
          <h2 className="commit-heading mb-2">We are <span className="fw-bold">Committed to</span></h2>
          <p className="commit-subheading">We bring the power of data to help you make the right decisions to improve your
            conversion rate.</p>
        </div>
        <div className="mt-5" id="commit-part-start">
          <div className={'commit-details-section ' + (currentActiveCommitId === 'commit-1' ? 'commit-section-selected' : '')} id="commit-1" onClick={handleCommitDivChange}>
            <h3 className="commit-details-heading" >Reduce RTO losses</h3>
            <p className="commit-details-subheading" >Pickrr reduces RTO by 30% helping you to make more profit from every
              shipment</p>
          </div>
          <div className={'commit-details-section ' + (currentActiveCommitId === 'commit-2' ? 'commit-section-selected' : '')} id="commit-2" onClick={handleCommitDivChange}>
            <h3 className="commit-details-heading" >Reduce shipping cost</h3>
            <p className="commit-details-subheading" > Our AI and ML models analyze 50+ parameters to and suggest couriers
              which reduce cost</p>
          </div>
          <div className={'commit-details-section ' + (currentActiveCommitId === 'commit-3' ? 'commit-section-selected' : '')} id="commit-3" onClick={handleCommitDivChange}>
            <h3 className="commit-details-heading" >Deliver within hours</h3>
            <p className="commit-details-subheading" >Pickrr has the widest network of warehouses across India ensuring your
              orders are fulfilled within hours</p>
          </div>
          <div className={'commit-details-section ' + (currentActiveCommitId === 'commit-4' ? 'commit-section-selected' : '')} id="commit-4" onClick={handleCommitDivChange}>
            <h3 className="commit-details-heading">Start shipping within seconds</h3>
            <p className="commit-details-subheading">One click integration with 50+ leading eCommerce platforms and
              marketplaces.</p>
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center flex-direction-column-mobile-only">
        <div className="mobile-only">
          <h2 className="commit-heading">We are committed to</h2>
          <p className="commit-subheading">We bring the power of data to help you make the right decisions to improve your
            conversion rate.</p>
        </div>
        <div id="commitment-image-section">
          <img src="https://d10srchmli830n.cloudfront.net/1645333637402_Group-19107.svg" id="commit-1-image"
            alt="reduce RTO losses" className={"width-100-mobile-only " + (currentActiveCommitId+'-image' === 'commit-1-image' ? 'd-block' : 'd-none')} />
          <img src="https://d10srchmli830n.cloudfront.net/1640591271099_Group-19093.png" id="commit-2-image"
            alt="reduce shipping cost" className={"width-100-mobile-only " + (currentActiveCommitId+'-image' === 'commit-2-image' ? 'd-block' : 'd-none')} loading="lazy" />
          <img src="https://d10srchmli830n.cloudfront.net/1640598662546_Group-19152.png" id="commit-3-image"
            alt="deliver within hours" className={"width-100-mobile-only " + (currentActiveCommitId+'-image' === 'commit-3-image' ? 'd-block' : 'd-none')} loading="lazy" />
          <img src="https://d10srchmli830n.cloudfront.net/1640598753764_Group-19153.png" id="commit-4-image"
            alt="Start shipping within seconds" className={"width-100-mobile-only " + (currentActiveCommitId+'-image' === 'commit-4-image' ? 'd-block' : 'd-none')} loading="lazy" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feature