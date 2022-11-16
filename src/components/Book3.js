import React from 'react'
import {Link} from 'react-router-dom'
import './book.css'
import doc1 from './img/doc1.jpeg'
import doc2 from './img/doc2.jpeg'
import doc3 from './img/doc3.jpeg'
import doc4 from './img/doc4.jpeg'
import doc5 from './img/doc5.1.jpeg'


function Book() {
    return (
        <div>
            <div class="mt-3" id="booking">
        <div class="row justify-content-md-center">

            <div class="col-md-2 mt-4" id="col1" >              
                <div class="mt-4">
                    <h2 style={{marginTop : '25px'}}>Popular Now</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0" style={{marginTop : '8px'}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ort">Orthopedics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/der">Dermatologist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/psy">Psychiatrist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gas">Gastro</Link>
                        </li>
                    </ul>
                </div>

                <div class="mt-3">
                    <h3 class="text-center mt-1">Fees</h3>
                    <div class="mt-3">
                        <input type="number" name="myBonus" id="bonus" placeholder="MIN"/>
                    </div>
                    <div class="mt-3">
                        <input type="number" name="myBonus" id="bonus" placeholder="MAX"/>
                    </div>
                </div>

                <div class="mt-4">
                    <button type="button" class="btn btn-primary btn-sm mt-3">Submit</button>
                </div>
            </div>

            <div class="col-md-10 mt-4" id="col2">
                <div class="container">
                    <div class="album py-5" id="col2">
                        <div class="container">
                            <h2 class="text-center mb-4">OUR YOUNGSTERS</h2>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc1} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Ms. K Chatterjee</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 5.0</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc2} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Mr. S Basu</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.8</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc3} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Ms. S Saha</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.7</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc4} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Mr. R Basu</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.5</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc1} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Ms. J Paul</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.4</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc5} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Mr. K Chatterjee</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.3</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc2} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Mr. A Dutta</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.3</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc3} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Ms. S Ghosal</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.2</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={doc4} class="bd-placeholder-img card-img-top" width="100%"
                                            height="225" alt=""/>

                                        <div class="card-body">
                                            <p class="card-text my-1"><b>Mr. R Sarkar</b></p>
                                            <p class="card-text my-1">Category : Psychiatrist  </p>
                                            <p class="card-text my-1 mb-3">Public Rating : 4.0</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button type="button"
                                                    class="btn btn-outline-primary">Appoinment</button>
                                                <small class="text-muted">Last Updated : 2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- <div class="col-md-1 mt-4" id="col3">
                <li class="nav-item dropdown mt-4">
                    <a class="nav-link dropdown-toggle text-start mt-4" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        <h3>Filter</h3>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
            </div> --> */}
        </div>
    </div>
        </div>
    )
}

export default Book
