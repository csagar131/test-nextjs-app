import React from 'react'
import Carousal from '../UI/Carousal'

const DelightCustomer = () => {
  return (
    <section id="delight-customer" className="m-auto container row d-flex justify-content-center banner-mobile-only">
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
          <div className="delight-customer-section delight-first-section-heading d-flex">
            <div>
              <div className="delight-image-section">
                <img src="https://d10srchmli830n.cloudfront.net/1645333914496_Group.svg" height="40px"
                  alt="location icon" loading="lazy" />
              </div>
            </div>
            <div style={{paddingLeft: '28px'}} className="padding-none-mobile">
              <h4 className="delight-customer-heading padding-top-16-mobile">Delight your customer</h4>
              <p className="delight-customer-subheading">24-48 hour deliveries to over 29K pincodes covering all cities
                across India</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2">
          <div className="delight-customer-section">
            <div className="delight-image-section">
              <img src="https://d10srchmli830n.cloudfront.net/1645333961630_Group-(1).svg" alt="bulb icon" height="40px"
                loading="lazy" />
            </div>
            <h4 className="delight-customer-heading pt-3">Business intelligence insights</h4>
            <p className="delight-customer-subheading">Dedicated seller support team to guide businesses on day to day
              logistic operation and delivery growth</p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2">
          <div className="delight-customer-section">
            <div className="delight-image-section">
              <img src="https://d10srchmli830n.cloudfront.net/1645333981991_Group-(2).svg" alt="star icon" height="40px"
                loading="lazy" />
            </div>
            <h4 className="delight-customer-heading pt-3">Branded experience</h4>
            <p className="delight-customer-subheading">Automated messages, emails and branded tracking features from
              checkout to delivery. </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 pt-2 pb-2">
      <div className="supercharge-growth-section d-flex flex-column justify-content-between">
        <div>
          <h2 className="super-charge-heading">We supercharge your brand growth</h2>
        </div>
        <div>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <Carousal>
              <div className="carousel-item p-2 active" data-bs-interval="3000">
                <div className="user-profile-card d-flex supercharge-height">
                  {/* <!-- <div>
                      <img src="https://d10srchmli830n.cloudfront.net/1640544754705_Ellipse-2540.png" alt="profile-image" className="profile-image-alignments" height="42px" width="42px" />
                    </div> --> */}
                  <div>
                    <p className="profile-details">Pickrr has helped us in simplifying our journey by consolidating our
                      business requirements on one platform & contributed to upscaling of our business. </p>
                    <p className="profile-details m-0 pt-3"> <span className="fw-bold">Prateek Ruhail <br /></span>CEO, Vanity
                      Wagon</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item p-2" data-bs-interval="3000">
                <div className="user-profile-card d-flex supercharge-height">
                  {/* <!-- <div>
                      <img src="https://d10srchmli830n.cloudfront.net/1640544754705_Ellipse-2540.png" alt="profile-image" className="profile-image-alignments" height="42px" width="42px" />
                    </div> --> */}
                  <div>
                    <p className="profile-details">It&quot;s quite convenient to see all orders from multiple channels like
                      Amazon, Flipkart and my own facebook page in one place. For a small business like mine Pickrr
                      dashboard is a complete supply chain team in itself</p>
                    <p className="profile-details m-0 pt-3"> <span className="fw-bold">Swati Verma <br /></span> Owner, Laviossa
                      Garments</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item p-2" data-bs-interval="3000">
                <div className="user-profile-card d-flex supercharge-height">
                  {/* <!-- <div>
                      <img src="https://d10srchmli830n.cloudfront.net/1640544754705_Ellipse-2540.png" alt="profile-image" className="profile-image-alignments" height="42px" width="42px" />
                    </div> --> */}
                  <div>
                    <p className="profile-details">The onboarding process with Pickrr was smooth. The support team is really
                      amazing. Any issues raised related to delivery or warehousing are resolved in 24 hours.</p>
                    <p className="profile-details m-0 pt-3"> <span className="fw-bold">Supreeth Kashyap <br /></span>Co-Founder,
                      Wellbi</p>
                  </div>
                </div>
              </div>
              </Carousal>
            </div>
            {/* <!-- <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button> --> */}
          </div>
          {/* <!-- <div className="user-profile-card d-flex">
            <div>
              <img src="https://d10srchmli830n.cloudfront.net/1640544754705_Ellipse-2540.png" alt="profile-image" className="profile-image-alignments" height="42px" width="42px" />
            </div>
            <div style="padding-left: 16px;">
              <p className="profile-details">A great underlying platform is essential in bringing players together.</p>
              <p className="profile-details m-0 pt-3"> <span className="fw-bold">Prasanthy Gurugubelli <br /></span> Daughter Earth, Apparels</p>
            </div>
          </div> --> */}
          <div className="pt-4" style={{textAlign: 'right'}}>
            <img src="https://d10srchmli830n.cloudfront.net/1640544250897_quotes.png" alt="quote icon" />
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default DelightCustomer