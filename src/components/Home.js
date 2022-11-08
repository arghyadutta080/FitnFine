import React from 'react'
import bg2 from './img/bg-2.jpeg'
import bg3 from './img/bg-3.jpeg'
import bg4 from './img/bg-4.jpeg'
import vdc from './img/vdc.jpeg'
import vdcLogo from './img/vdc.png'
import vc from './img/vc.jpeg'
import vcLogo from './img/vc.png'
import txt from './img/txt.jpeg'
import txtLogo from './img/txt.png'
import './index.css'

function Home() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <main>

                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className=""
                            aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                            className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                            className=""></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="bd-placeholder-img" width="100%" height="450px" src={bg4} alt="" />
                            <div className="container">
                                <div className="carousel-caption text-start text-dark">
                                    <h2>Appoinment cost starts from 0 Rs.</h2>
                                    <h5>go and take benifits of virtual checkups</h5>
                                    <p>
                                        <div className="mx-2 my-1">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#signupModal" style={{ marginLeft: "7px", marginRight: "7px" }}>Sign
                                                Up</button>
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Log
                                                In</button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="bd-placeholder-img" width="100%" height="450px" src={bg2} alt="" />
                            <div className="container">
                                <div className="carousel-caption text-center text-dark">
                                    <h1>Welcome to FITnFINE.COM</h1>
                                    <h5>Your health, our solution</h5>
                                    <p>
                                        <div className="mx-2 my-1">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#signupModal" style={{ marginLeft: "7px", marginRight: "7px" }}>Sign
                                                Up</button>
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Log
                                                In</button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="bd-placeholder-img" width="100%" height="450px" src={bg3} alt="" />
                            <div className="container">
                                <div className="carousel-caption text-end text-dark">
                                    <h3>Freelancing Opportunity for medical students</h3>
                                    <h5>learning plus earning opportunity for medical students</h5>
                                    <p>
                                        <div className="mx-2 my-1">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#signupModal" style={{ marginLeft: "7px", marginRight: "7px" }}>Sign
                                                Up</button>
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                                data-bs-target="#loginModal">Log
                                                In</button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container marketing mt-4">
                    {/* <!-- Three columns of text below the carousel --> */}
                    <div className="row mt-4" id='features'>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={vdc} alt="" />
                            <h2 className="fw-normal text-center">Video Calling feature</h2>
                            {/* <p className="text-center">Call your doctor and talk about your problem</p> */}
                            <button type="button" className="text-center btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#vdcModal">View details »</button>
                        </div>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="vdcModal" tabindex="-1" aria-labelledby="vdcModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Video Calling feature</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="text-center" id="signup">
                                            <img className="mb-4" src={vdcLogo} alt="" width="148" height="114" />
                                            <h1 className="h3 mb-3 fw-normal"><b>Video Call your doctor and talk about your problem</b></h1>
                                            {/* <h4 className="h3 mb-3 fw-normal"><b>Please Sign Up</b></h4> */}
                                            <div id="choice">
                                                {/* <div className="pat"><a href="/patient.html"><b>Sign Up as patient</b></a></div> */}
                                                {/* <div className="doc"><a href="/doctor.html"><b>Sign Up as doctor</b></a></div> */}
                                            </div>
                                            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={vc} alt="" />

                            <h2 className="fw-normal text-center">Voice Calling feature</h2>
                            {/* <p className="text-center">Call your doctor and talk about your problem</p> */}
                            <button type="button" className="text-center btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#vcModal">View details »</button>
                        </div>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="vcModal" tabindex="-1" aria-labelledby="vcModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Voice Calling feature</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="text-center" id="signup">
                                                <img className="mb-4" src={vcLogo} alt="" width="160" height="114" />
                                                <h1 className="h3 mb-3 fw-normal"><b>Call your doctor and talk about your problem</b></h1>
                                                {/* <h4 className="h3 mb-3 fw-normal"><b>Please Sign Up</b></h4> */}
                                                <div id="choice">
                                                    {/* <div className="pat"><a href="/patient.html"><b>Sign Up as patient</b></a></div> */}
                                                    {/* <div className="doc"><a href="/doctor.html"><b>Sign Up as doctor</b></a></div> */}
                                                </div>
                                                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={txt} alt="" />

                            <h2 className="fw-normal text-center">Messaging Feature</h2>
                            {/* <p className="text-center">Set your virtual appoinment to your doctor</p> */}
                            <button type="button" className="text-center btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#txtModal">View details »</button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="txtModal" tabindex="-1" aria-labelledby="txtModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Messaging Feature</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="text-center" id="signup">
                                                <img className="mb-4" src={txtLogo} alt="" width="180" height="114" />
                                                <h1 className="h3 mb-3 fw-normal"><b>Set your virtual appoinment to your doctor</b></h1>
                                                {/* <h4 className="h3 mb-3 fw-normal"><b>Please Sign Up</b></h4> */}
                                                <div id="choice">
                                                    {/* <div className="pat"><a href="/patient.html"><b>Sign Up as patient</b></a></div> */}
                                                    {/* <div className="doc"><a href="/doctor.html"><b>Sign Up as doctor</b></a></div> */}
                                                </div>
                                                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Home
