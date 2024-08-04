import './Portfolio.css'
import photo1 from './img/poert1.png'
import photo2 from './img/port2.png'
import photo3 from './img/port3.png'
export default function Portfolio() {
       return (
              <section id='Portfolio' className='d-flex flex-column align-items-center justify-content-start'>
                            <h1>PORTFOLIO COMPONENT</h1>
                            <span className='icon'><i className="fa-solid fa-star"></i></span>

                            <div className="container row g-5">
                                   {/* item one */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4 ps-lg-0 ">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo1} alt="poert1"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>
                                          </div>
                                   </div>

                                   {/* item two */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo2} alt="poert2"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>

                                          </div>
                                   </div>

                                   {/* item three */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4 pe-lg-0">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo3} alt="poert2"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>

                                          </div>
                                   </div>

                                   {/* item four */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4 ps-lg-0">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo1} alt="poert1"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>

                                          </div>
                                   </div>

                                   {/* item five */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo2} alt="poert2"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>

                                          </div>
                                   </div>

                                   {/* item sex */}
                                   <div className="item | col-12 col-md-6 col-lg-4 p-0 pe-md-4 p-lg-4 pe-lg-0">
                                          <div className="item-card | rounded-4 overflow-hidden position-relative">
                                                 <img src={photo3} alt="poert2"/>
                                                 <div className="layer | d-flex align-items-center justify-content-center position-absolute">
                                                        <i className="fa-solid fa-plus"></i>
                                                 </div>

                                          </div>
                                   </div>
                            </div>

                            {/* <div className="full-screen | d-flex align-items-center justify-content-center position-fixed">
                                          <img src={photo3} alt="poert2" width={500}/>
                            </div> */}
              </section>       
       )
}
