import React from 'react'

function Doctorform() {
  return (
    <div>
      <div className="container">
            <section id="form">
                <h2>Fill up the required details to join us as a doctor</h2>
                <div id="fillup">
                    <form action="">
                        <div className="details">
                            <label for="name">Name :</label>
                            <br/>
                            <input type="text" name="name" id="name" placeholder="Enter your name"/>
                        </div>
                        <div className="details">
                            <label for="sex">Gender - </label>
                            <div id="radiobtn">
                                Male <input type="radio" name="myGender" id="sex"/>
                                Female <input type="radio" name="myGender" id="sex"/>
                                Others <input type="radio" name="myGender" id="sex"/>

                            </div>
                        </div>
                        <div className="details"/>
                            <label for="email">E-Mail :</label>
                            <br/>
                            <input type="email" name="email" id="email" placeholder="Enter your E-mail ID"/>
                        </div>
                        <div className="details">
                            <label for="number">Phone No :</label>
                            <br/>
                            <input type="text" name="number" id="number" placeholder="Enter your Phone Number"/>
                        </div>
                        <div className="details">
                            <label for="address">Address :</label>
                            <br/>
                            <input type="text" name="address" id="address" placeholder="Enter your Address"/>
                        </div>
                        <div className="details">
                            <label for="clgname">College Name :</label>
                            <br/>
                            <input type="text" name="name" id="clgname" placeholder="Enter your College Name"/>
                        </div>
                        <div className="details">
                            <label for="">Upload your Identity proof : </label>
                            <br/>
                            <input type="file"/>
                        </div>
                        <div className="details">
                            <label for="">Upload your College Identity proof : </label>
                            <br/>
                            <input type="file"/>
                        </div>
                        <div className="details">
                            <label for="pswrd">Password :</label>
                            <br/>
                            <input type="password" name="name" id="pswrd" placeholder="password should contain alphabets, numbers and special characters"/>
                        </div>
                        <div className="details">
                            <label for="cnfrmpswrd">Confirm Password :</label>
                            <br/>
                            <input type="password" name="name" id="cnfrmpswrd" placeholder="Confirm your password"/>
                        </div>
                        <div className="submit">
                            <button>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Doctorform
