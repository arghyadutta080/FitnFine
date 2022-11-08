import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'
// import 'img'

function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">FIT n FINE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/book">Book your slot</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="my-1">
                                <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal"
                                    data-bs-target="#signupModal">Sign
                                    Up</button>
                                <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                    data-bs-target="#loginModal">Log
                                    In</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up to FITnFINE.COM</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="text-center" id="signup">
                                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                                    <h1 className="h3 mb-3 fw-normal"><b>Welcome to FITnFINE.COM</b></h1>
                                    <h4 className="h3 mb-3 fw-normal"><b>Please Sign Up</b></h4>
                                    <div id="choice">
                                        <div className="pat"><a href="/patient.html"><b>Sign Up as patient</b></a></div>
                                        <div className="doc"><a href="/doctor.html"><b>Sign Up as doctor</b></a></div>
                                    </div>
                                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Log In to FITnFINE.COM</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="text-center">
                                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                                    <h1 className="h3 mb-3 fw-normal">Log In to your account</h1>


                                    <div className="form-floating my-2">
                                        <input type="email" className="form-control" id="floatingInputlogin"
                                            placeholder="name@example.com" />
                                        <label for="floatingInputlogin">Email address</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="password" className="form-control" id="floatingPasswordlogin"
                                            placeholder="Password" />
                                        <label for="floatingPasswordlogin">Password</label>
                                    </div>


                                    <div className="checkbox mb-3 mt-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-primary" type="submit" onclick="login()">Log in</button>
                                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
