import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header>
    <div className="offer-container">Get Guaranteed Rs.300 Cashback on Your First Recharge With Pickrr | Use Code:
    &quot;PICKRR300&quot; | *T&#38;C Apply</div>
    
    <div id="topheader">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex">
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation" style={{border: 'unset'}}>
              <span className="my-1 mx-2 close">X</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="https://www.pickrr.com/">
                <img src="https://d10srchmli830n.cloudfront.net/1645333441395_New-logo_c.svg" className="desktop-only"
                  alt="pickrr-logo"  
            />
              <img src="https://d10srchmli830n.cloudfront.net/1639730525608_Group-19262.png" className="mobile-only"
                alt="pickrr-mobile-logo"
               />
            </a>
          </div>
          <div>
            <ul className="d-flex login-signup-mobile mb-0 p-0" style={{listStyle:'none'}}>
              <li className="
                orangeBtn nav-item peach-gradient
                " style={{marginRight: '8px'}}>
                <a href="https://dashboard.pickrr.com/" className="color-white" rel="noreferrer" target="_blank">Free Sign Up</a>
              </li>
              <li className="blueBtn nav-item">
                <a href="https://dashboard.pickrr.com/sign-in" className="color-pickrr" rel="noreferrer" target="_blank">Login</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className=" nav-item active header-menu-item d-none">
                  <a className="nav-link" href="https://pickrr.com/">Home</a>
                </li>
                <li className="nav-item header-menu-item">
                  <a className="nav-link" href="/product">Solutions</a>
                </li>
                <li className="nav-item header-menu-item dropdown">
                  <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Integrations
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="https://pickrr.com/carrier-int">Carrier Integration</a></li>
                    <li><a className="dropdown-item" href="/pickrr-integration">Channel Integration</a></li>
                  
                  </ul>
                </li>
                <li className="nav-item header-menu-item">
                  <a className="nav-link" href="/pickrr-plus">Fullfillment</a>
                </li>
                <li className="nav-item header-menu-item">
                  <a className="nav-link" href="https://pickrr.com/blogs">Blogs</a>
                </li>
                <li className="nav-item header-menu-item">
                  <a className="nav-link" href="/pricing">Rate Calculator</a>
                </li>
                <li className="nav-item header-menu-item">
                  <a className="nav-link" href="https://pickrr.com/tracking/#/">Track Order</a>
                </li>
                <li className="
                  orangeBtn nav-item desktop-only-cust peach-gradient
                " style={{marginRight: '12px', marginLeft: '12px'}}>
                  <a href="https://dashboard.pickrr.com/" className="color-white" rel="noopener noreferrer" target="_blank">Free Sign Up</a>
                </li>
                <li className="blueBtn nav-item desktop-only-cust">
                  <a href="https://dashboard.pickrr.com/sign-in" className="color-pickrr" rel="noopener noreferrer" target="_blank">Login</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar