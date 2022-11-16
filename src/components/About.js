import React from 'react'
import m1 from './img/m1.jpeg'
import m2 from './img/m2.jpeg'
import m3 from './img/m3.jpg'
import m4 from './img/m4.jpeg'
// import './about.css'

function About() {
    return (
        <div>
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="container marketing mt-2">
                    {/* <!-- Three columns of text below the carousel --> */}
                    <h1 className="text-center" style={{ color: "#7000ff" }}><b>FOUNDERS OF FITnFINE.COM</b></h1>
                    <div className="d-flex flex-column align-items-center row my-4">
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" width="136" height="136" src={m1} alt="" />

                            <h3 className="fw-normal text-center mt-2"><b>DEBOPOM BANERJEE</b></h3>
                            <p className="text-center mb-0" style={{ color: "#005bff" }}><b>Student of RCC Institute of Information Technology</b></p>
                            <p className="text-center mb-2" style={{ color: "#005bff" }}><b>Team Lead</b></p>
                            <p className="text-center"><a className="btn btn-primary"
                                href="https://www.linkedin.com/in/debopom-banerjee-a35123215/">View profile</a></p>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <div className="col-lg-4 mt-2">
                                <img className="bd-placeholder-img rounded-circle" width="136" height="136" src={m2} alt="" />

                                <h3 className="fw-normal text-center mt-2"><b>SANSRITA SAHA</b></h3>
                                <p className="text-center mb-0" style={{ color: "#005bff" }}><b>Student of RCC Institute of Information Technology</b></p>
                                <p className="text-center mb-2" style={{ color: "#005bff" }}><b>UI/UX Designer</b></p>
                                <p className="text-center"><a className="btn btn-primary"
                                    href="https://www.linkedin.com/in/sansrita-saha-068246228/">View profile</a></p>
                            </div>
                            <div className="col-lg-4 mt-2">
                                <img className="bd-placeholder-img rounded-circle" width="136" height="136" src={m3} alt="" />

                                <h3 className="fw-normal text-center mt-2"><b>ARGHYA DUTTA</b></h3>
                                <p className="text-center mb-0" style={{ color: "#005bff" }}><b>Student of RCC Institute of Information Technology</b></p>
                                <p className="text-center mb-2" style={{ color: "#005bff" }}><b>Frontend Developer</b></p>
                                <p className="text-center"><a className="btn btn-primary"
                                    href="https://www.linkedin.com/in/arghya-dutta-623617229/">View profile</a></p>
                            </div>
                            <div className="col-lg-4 mt-2">
                                <img className="bd-placeholder-img rounded-circle" width="136" height="136" src={m4} alt="" />

                                <h3 className="fw-normal text-center mt-2"><b>SHUVANGI DE</b></h3>
                                <p className="text-center mb-0" style={{ color: "#005bff" }}><b>Student of RCC Institute of Information Technology</b></p>
                                <p className="text-center mb-2" style={{ color: "#005bff" }}><b>Frontend Developer</b></p>
                                <p className="text-center"><a className="btn btn-primary"
                                    href="https://www.linkedin.com/in/shuvangi-de-369071236/">View profile</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <b><hr style={{ color: "black" }} /></b>

            <section className="mt-30 d-flex align-items-center justify-content-center flex-column mb-0"
            >
                <h1 style={{ marginTop: "14px", color: "#7000ff" }}><b>ABOUT US</b></h1>
                <div style={{ marginLeft: "70px", marginRight: "70px", textAlign: "center" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ fontSize: "22px", color: "#00546b" }}><b>FitnFine.com is a one-stop freelancing website for medical students, doctors and also a cheapest way for us
                        to get a medical advice from an individual who is already working in that area.</b></div>
                </div>
                <div className="my-2"><div style={{ fontSize: "22px", color: "#00546b" }}><b>Do register and take benifits of FITnFINE.COM</b></div></div>
                <div style={{ marginLeft: "50px", marginRight: "50px", marginBottom: "20px", fontSize: "22px", color: "#00546b" }}><b>Thank You for visiting us</b></div>
            </section>

        </div >
    )
}

export default About
