import './Footer.css'

export default function Footer() {
       return (
              <footer>
                     {/* Info Footer */}
                     <div className="row m-0">
                            {/* Location */}
                            <div className="item | col-12 col-lg-4">
                                   <h3>Location</h3>
                                   <p>2215 John Daniel Drive</p>
                                   <p>Clark, MO 65243</p>
                            </div>

                            {/* Around The Web  */}
                            <div className="item | col-12 col-lg-4">
                                   <h3>Around The Web</h3>
                                   <div className="icons | d-flex align-items-center justify-content-center mt-3">
                                          <i className="fa-brands fa-facebook"></i>
                                          <i className="fa-brands fa-twitter"></i>
                                          <i className="fa-brands fa-linkedin-in"></i>
                                          <i className="fa fa-globe" aria-hidden="true"></i>
                                   </div>
                            </div>

                            {/* About Freelancer */}
                            <div className="item | col-12 col-lg-4">
                                   <h3>About Freelancer</h3>
                                   <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                     </div>
                     <div className="copy-right">
                            <p>Copyright © Your Website 2021</p>
                     </div>
              </footer>
       )
}

