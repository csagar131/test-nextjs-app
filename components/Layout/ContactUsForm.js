import React, { Fragment, useRef } from "react";

const ContactUsForm = ({setShowContactModal}) => {

  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <Fragment>
      <div
        className={
          "contact-form-modal modal"
        }
        onClick={() => {
            setShowContactModal(false)
        }}
        style={{display : 'block'}}
      >
        <div className="contact-form-wrapper">
          <div
            className="close-modal"
            onClick={() => setShowContactModal(false)}
          ></div>
          <div className="contact-inner-wrapper">
            <div className="left-block">
              <p className="get-in-touch">Get in Touch</p>
              <p>
                Provide us a little more details and we will get back to you!
              </p>
            </div>
            <div className="right-block">
              <form name="contact-form" className="contact-form" method="post">
                <div className="flexField">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      maxLength="64"
                      autoComplete="off"
                      type="text"
                      name="name"
                      className="inputbox"
                      id="name"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <div className="input-wrapper">
                      <input
                        max="9999999999"
                        autoComplete="off"
                        type="number"
                        name="mobile"
                        className="inputbox"
                        id="mobile"
                        ref={mobileRef}
                      />
                    </div>
                    <span className="phone-contact-error"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="email"
                    id="email"
                    className="inputbox"
                    placeholder="Enter email address"
                    ref={emailRef}
                  />
                  <span className="email-error"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="textarea">Your Message</label>
                  <textarea
                    id="textarea"
                    placeholder="I wanted to get in touch regarding..."
                    ref={messageRef}
                  ></textarea>
                </div>

                <button type="submit" id="contact-submit" className="orangeBtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="success-contact-form">
            <div className="success-wrapper">
              <img src="/static/homepage-assets/images/success-check.svg" />
              <p>Thank you!</p>
              <p>We&quot;ll get back to you soon!</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUsForm;
