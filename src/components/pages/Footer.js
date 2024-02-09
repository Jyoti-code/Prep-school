import React from 'react'

export default function Footer() {
  return (
    // footer-wave-bg
    <footer id="footer" className="footer footer-currenty-style footer-wave-bg">
      <div className="footer-widget-area">
        <div className="footer-top-part">
          <div className="container pb-70 pt-lg-150 pt-md-100" data-tm-padding-top="250px">
            <div className="row" style={{paddingTop:'200px'}}>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="widget widget-about">
                  <img src="assets/images/logo-wide-white.png" alt="*" className="mb-30"/>
                  <p>Explore the doors of a Happy school where learning is an adventurous experience</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="menu-footer-page-list">
                    <ul id="footer-page-list" className="menu">
                      <li><a href="../../index.html">Home</a></li>
                      <li><a href="../../index.html">About</a></li>
                      <li><a href="../../index.html">Academic</a></li>
                      <li><a href="../../index.html">Approach</a></li>
                      <li><a href="../../index.html">Admission</a></li>
                      <li><a href="../../index.html">Fee</a></li>
                      <li><a href="../../index.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">Contact</h4>
                  <div className="footer-contact-address">
                    <div className="phone mb-15">
                      <p className="m-0 text-white"><i className="fas fa-phone-alt text-theme-colored1 mr-10"></i>000 888 0000
                      </p>
                    </div>
                    <div className="email mb-15">
                      <p className="m-0 text-white"><i className="fas fa-envelope text-theme-colored1 mr-10"></i><a
                          href="../../index.html" className="__cf_email__"
                          data-cfemail="523c3737363a373e22123f33213b3f7c313d3f">[email&#160;protected]</a></p>
                    </div>
                    <div className="address">
                      <p className="m-0 text-white"><i className="fas fa-map text-theme-colored1 mr-10"></i>80 Broklyn Golden
                        Street, Usa</p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="widget widget-newsletter">
                  <h4 className="widget-title">Follow our social media</h4>
                  <div className="tm-widget tm-widget-subscribe widget-subscribe">
                    <ul className="styled-icons icon-md icon-gray icon-circled icon-theme-colored3">
                        <li><a className="social-link" href="*"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="social-link" href="*"><i className="fab fa-youtube"></i></a></li>
                        <li><a className="social-link" href="*"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row pt-30 pb-30">
              <div className="col"></div>
              <div className="col-sm-6">
                <div className="footer-paragraph text-center">
                  © 2021 ThemeMascot. All Rights Reserved.
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
