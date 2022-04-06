import React from "react";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="upper-footer mt-5 margin-top-16-mobile-only">
        <div className="upper-footer-wrapper">
          <h4 className="start-shipping-free">
            Start shipping with Pickrr for free
          </h4>
          <div className="group-btn">
            <a
              href="https://dashboard.pickrr.com/"
              rel="noreferrer"
              target="_blank"
              className="peachBtn color-white"
            >
              Free Sign Up
            </a>
            <a href="#"  className="emptyBtn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <div className="pb-3">
            <a href="/" id="footer-home" rel="noopener noreferrer" target="_blank">
              <img
                src="https://d10srchmli830n.cloudfront.net/1645334970878_New-logo_c-(1).svg"
                alt="pickrr logo"
              />
            </a>
          </div>
          <div className="address-text text-start">
            3rd &#38; 4th floor, Enkay Square,
            <br /> 448-A, Udyog Vihar Phase V,
            <br />
            Gurugram, Haryana 122022
          </div>
          {/* <!-- <div className="pt-2 address-text" style="font-weight: bold;">Visit us at:</div> 
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14025.677716872146!2d77.0856535!3d28.497026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6120c54e56480a6!2sPickrr%20Technologies!5e0!3m2!1sen!2sin!4v1639135219388!5m2!1sen!2sin" width="260" height="164" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy"></iframe>
          </div> --> */}
          <div className="d-flex pt-2 pb-4 address-text">
            <div style={{fontWeight: 'bold' ,  paddingRight: '4px'}}>
              Email us at:
            </div>
            <div>support@pickrr.com</div>
          </div>
          <div className="desktop-only">
            <div className="address-text">Join our Social Community</div>
            <div className="d-flex align-items-center" style={{width: '100%' }}>
              <div style={{marginRight: '8px'}}>
                <a
                  href="https://instagram.com/pickrr_?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-media-icon-height"
                    src="https://d10srchmli830n.cloudfront.net/1645335004225_Group-(9).svg"
                    alt="instagram"
                  />
                </a>
              </div>
              <div style={{marginRight: '8px'}}>
                <a href="https://www.facebook.com/pickrr/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="social-media-icon-height"
                    src="https://d10srchmli830n.cloudfront.net/1645335029140_Vector-(1).svg"
                    alt="facebook"
                  
                  />
                </a>
              </div>
              <div style={{marginRight: '8px'}}>
                <a href="https://www.linkedin.com/company/pickrr">
                  <img
                    className="social-media-icon-height"
                    src="https://d10srchmli830n.cloudfront.net/1645335047474_Group-(10).svg"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/Pickrr_" rel="noopener noreferrer" target="_blank">
                  <img
                    className="social-media-icon-height"
                    src="https://d10srchmli830n.cloudfront.net/1645335064514_Group-(11).svg"
                    alt="twitter"
                   
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="menu-block">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/about" rel="noopener noreferrer" target="_blank">About Us</a>
              </li>
              <li>
                <a href="/life-at-pickrr">Life at Pickrr</a>
              </li>
              {/* <!-- <li><a href="#">Careers</a></li>
                <li><a href="#">Pickrr in News</a></li> --> */}
              <li>
                <a href="/get-in-touch">Get in Touch</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
            </ul>
          </div>
          <div className="menu-block">
            <h5>Product</h5>
            <ul>
              {/* <!-- <li><a href="#">Early COD</a></li>
                <li><a href="#">Pickrr Select</a></li>
                <li><a href="#">Pickrr Connect</a></li>
                <li><a href="#">RTO reduction suite</a></li>
                <li><a href="#">Channel Integration</a></li> --> */}
              <li>
                <a href="https://pickrr.com/carrier-int">Carrier Integration</a>
              </li>
              <li>
                <a href="/pickrr-integration">Channel Integration</a>
              </li>
              <li>
                <a href="https://docs.pickrr.com/">Open Api</a>
              </li>
              {/* <!-- <li><a href="#">Pickrr Plus Fullfillment</a></li> --> */}
            </ul>
          </div>
          <div className="menu-block">
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="https://pickrr.com/blogs" rel="noopener noreferrer" target="_blank">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              {/* <!-- <li>
                    <a href="https://pickrrsupport.freshdesk.com/support/home" target="_blank">Knowledgebase</a>
                  </li> --> */}
            </ul>
          </div>
          {/* <!-- <div className="menu-block">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">FAQ's</a></li>
                <li>
                  <a href="/terms-and-conditions">Terms and <br className="desktop-only" />Conditions</a>
                </li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div> --> */}
        </div>
        <div className="desktop-only" style={{width: '100%' , textAlign: 'center'}}>
          <div className="address-text pt-4 pb-2 m-0">
            Copyright Ⓒ 2022 Pickrr. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="mobile-only" style={{width: '100%'}}>
        <div>
          <div className="address-text">Join our Social Community</div>
          <div
            className="d-flex justify-content-center align-items-center"
           style={{width: '100%'}}
          >
            <div style={{marginRight: '8px'}}>
              <a
                href="https://instagram.com/pickrr_?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-media-icon-height"
                  src="https://d10srchmli830n.cloudfront.net/1639142330358_Vector-(1).png"
                  alt="instagram"
                  
                />
              </a>
            </div>
            <div style={{marginRight: '8px'}}>
              <a href="https://www.facebook.com/pickrr/" rel="noopener noreferrer" target="_blank">
                <img
                  className="social-media-icon-height"
                  src="https://d10srchmli830n.cloudfront.net/1639142386059_Vector-(2).png"
                  alt="facebook"
                  
                />
              </a>
            </div>
            <div style={{marginRight: '8px'}}>
              <a href="https://www.linkedin.com/company/pickrr">
                <img
                  className="social-media-icon-height"
                  src="https://d10srchmli830n.cloudfront.net/1639142436463_Group-(2).png"
                  alt="linkedin"
                  
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Pickrr_" rel="noopener noreferrer" target="_blank">
                <img
                  className="social-media-icon-height"
                  src="https://d10srchmli830n.cloudfront.net/1639142533098_Group-(3).png"
                  alt="twitter"
                 
                />
              </a>
            </div>
          </div>
        </div>
        <div className="address-text pt-4 pb-2 m-0">
          Copyright Ⓒ 2022 Pickrr. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
