import React from 'react'

export default function VideoSection() {
  return (
    <>
      <section className="bg-theme-colored2" data-tm-bg-img="assets/images/bg/object-bg1.png" style={{backgroundImage:'url(assets/images/bg/object-bg1.png)'}}>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col"></div>
              <div className="col-xl-8">
                <div className="video-block text-center mb-0">
                  <div className="cp-video-divider section-typo-light">
                    <div className="tm-sc-video-popup video-popup-current-style1 box-hover-effect play-video-button">
                      <div className="effect-wrapper">
                        <div className="icon">
                          <i className="fa fa-play"></i>
                        </div>
                        <div className="video-button-text"></div>
                        <a className="hover-link" data-lightbox-gallery="youtube-video"
                          href="https://www.youtube.com/mcvqOUtcAJg" title></a>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-white popup-video-title" data-tm-font-size="3.8rem">Kipso one & only mission is to
                    extend your knowledge base</h2>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="z-index-1" data-tm-margin-top="-10px" style={{marginTop:'-50px'}}>
        <div className="container pt-0 pb-lg--0">
          <div className="section-content">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="testimonial-current-style1 testimonial-theme-colored1 mb-lg-60">
                  <div className="testimonial-upper">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="author-text"> I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional very good luck &amp; success for this industry</div>
                  </div>
                  <div className="d-flex align-items-center author-info clearfix ml-30">
                    <div className="author-thumb mr-15">
                      <img className="rounded-circle" src="assets/images/testimonials/s1.jpg" alt="" />
                    </div>
                    <div className="author-detials">
                      <h5 className="name m-0">Tom Johan,</h5>
                      <h6 className="job-position font-weight-400 m-0">Developer</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="testimonial-current-style1 mb-lg-60">
                  <div className="testimonial-upper">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="author-text"> I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional very good luck &amp; success for this industry</div>
                  </div>
                  <div className="d-flex align-items-center author-info clearfix ml-30">
                    <div className="author-thumb mr-15">
                      <img className="rounded-circle" src="assets/images/testimonials/s2.jpg" alt="" />
                    </div>
                    <div className="author-detials">
                      <h5 className="name m-0">Alina Grace,</h5>
                      <h6 className="job-position font-weight-400 m-0">Developer</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="testimonial-current-style1 testimonial-theme-colored3 mb-lg-60">
                  <div className="testimonial-upper">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="author-text"> I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional very good luck &amp; success for this industry</div>
                  </div>
                  <div className="d-flex align-items-center author-info clearfix ml-30">
                    <div className="author-thumb mr-15">
                      <img className="rounded-circle" src="assets/images/testimonials/s3.jpg" alt="" />
                    </div>
                    <div className="author-detials">
                      <h5 className="name m-0">Jim Drow,</h5>
                      <h6 className="job-position font-weight-400 m-0">Developer</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
