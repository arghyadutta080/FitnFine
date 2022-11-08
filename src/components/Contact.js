import React from 'react'

function Contact() {
    // document.body.style.background = "rgb(221, 213, 213)"
    return (
        <div>
            <section className="para1 my-8">
                <div className="box1 my-4 mx-5 text-white">
                    <div className="my-4">
                        <div className="mt-4">
                            <h3 className="mt-4 text-white">FITnFINE</h3>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-4 mb-3 text-center" style={{ color: "#8000ff" }}><b id="contact">Contact Us</b></h1>
                        <h5 className="mt-2 mb-4 text-center text-dark"><b>If you are facing any trouble using our FITnFINE Web
                            Page, please fil up the form below to inform us about your query</b></h5>

                        <div className="form-group ms-5 me-5">
                            <label for="title" className="tableHead mt-2 ms-2"><b className="text-dark">Your Name</b></label>
                            <input type="text" className="form-control mt-1" id="title" aria-describedby="emailHelp" style={{ border: "2px solid #00a0ff" }} />
                        </div>

                        <div className="form-group my-4 ms-5 me-5">
                            <label for="title" className="tableHead mt-2 ms-2"><b className="text-dark">Your E-mail id</b></label>
                            <input type="email" className="form-control mt-1" id="title" aria-describedby="emailHelp" style={{ border: "2px solid #00a0ff" }} />
                        </div>

                        <div className="form-group my-4 ms-5 me-5">
                            <label for="description" className="tableHead ms-2"><b className="text-dark">Describe your Query</b></label>
                            <textarea className="form-control mt-1" id="description" rows="3" style={{ border: "2px solid #00a0ff" }}></textarea>
                        </div>

                        <div className="d-flex align-items-center justify-content-center my-4">
                            <button type="button" className="btn btn-primary btn-lg my-4">Submit</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
