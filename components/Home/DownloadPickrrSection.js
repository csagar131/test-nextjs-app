import React from 'react'

const DownloadPickrrSection = () => {
  return (
    <section className="container-fluid pt-5 pl-5 pr-5 pickrr-download-background">
    <div className="row pl-5 pr-5 pt-5">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h3 className="download-app-text">Download Pickrr App <br/> and manage all your orders
            </h3>
            <a href="https://play.google.com/store/apps/details?id=com.pickrr" target="_blank" rel="noopener noreferrer"> 
              <img src="https://d10srchmli830n.cloudfront.net/1645425786930_Group-11206-(1).svg" alt="google play"
                height="auto" style={{margin: 'auto'}} className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{textAlign: 'center'}}>
        <div>
          <img src="https://d10srchmli830n.cloudfront.net/1639125169753_Group-19108-(1).png" height="auto" alt="mobile"
            style={{margin: 'auto', height: '350px'}}  className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default DownloadPickrrSection