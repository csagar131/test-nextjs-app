import React from "react";

const PickrrCourierPartner = () => {
  return (
    <section id="courier-partners" style={{background: '#F6F7FC'}}>
      <div className="container m-auto pt-5 pb-5 pl-3 pr-3">
        <div className="d-flex justify-content-between align-items-center pb-3">
          <div className="width-100-mobile-only">
            <h2 className="courier-partner-heading m-0">30+ delivery partners</h2>
          </div>
          <div className="desktop-only">
            <a href="https://pickrr.com/carrier-int" target="_blank" rel="noopener noreferrer">
              <span
                className="view-all-button"
                style={{color: '#fff', background: '#185cb5'}}
              >
                View all
                <span style={{paddingLeft: '8px'}}>
                  <img
                    src="https://d10srchmli830n.cloudfront.net/1640547869166_arrow-right-3-(2).png"
                    alt="white-arrow"
                    height="20px"
                    width="20px"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="my-2 text-center">
          <picture>
            <source
              media="(max-width:768px)"
              srcSet="https://d10srchmli830n.cloudfront.net/1647951033403_Group-20175-(1).png"
              className="img-fluid"
              alt="brand-logos"
            />
            <img
              src="https://d10srchmli830n.cloudfront.net/1647950986100_Group-20174-(1).png"
              className="img-fluid"
              alt="brand-logos"
            />
          </picture>
        </div>
        <div className="mobile-only text-center mt-4">
          <a href="https://pickrr.com/carrier-int" target="_blank" rel="noopener noreferrer">
            <span
              className="view-all-button"
              style={{color: '#fff', background: '#185cb5'}}
            >
              View all
              <span style={{paddingLeft: '8px'}}>
                <img
                  src="https://d10srchmli830n.cloudfront.net/1640547869166_arrow-right-3-(2).png"
                  alt="white-arrow"
                  height="20px"
                  width="20px"
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PickrrCourierPartner;
