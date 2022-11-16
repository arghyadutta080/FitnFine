import React from "react";

function Doctorform2() {
    return ( 
        <
div >
        <
        div class = "container" >
        <
        section id = "form"
        style = {
            {
                marginTYop: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '20px',
                color: 'rgb(5, 57, 68)',
                border: '4px solid rgb(0, 170, 255)'
            }
        } >
        <
        h2 > Fill up the required details to join us as a doctor < /h2> 
        <div id = "fillup"
        style = {
            {
                fontSize: '15px',
                /* border: 2px solid green; */
                marginBottom: '12px',
            }
        } >
        <
        form action = "" >
        <
        div class = "details" >
        <
        label
        for = "name"
        style = {
            {
                marginBottom: '8px',
                fontWeight: 'Bold',
                marginRight: '8px',
            }
        } > Name: < /label> <
        br / >
        <
        input type = "text"
        name = "name"
        id = "name"
        placeholder = "Enter your name" /
        >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "sex" > Gender - < /label> <
        div id = "radiobtn" >
        <
        input type = "radio"
        name = "myGender"
        id = "male"
        value = "Male" / >
        <
        label
        for = "male" > MALE < /label> <
        input type = "radio"
        name = "myGender"
        id = "female"
        value = "Female" /
        >
        <
        label
        for = "female" > FEMALE < /label> <
        input type = "radio"
        name = "myGender"
        id = "others"
        value = "Others" /
        >
        <
        label
        for = "others" > OTHERS < /label> < /
        div > <
        /div> <
        div class = "details" >
        <
        label
        for = "email" > E - Mail: < /label> <
        br / >
        <
        input type = "email"
        name = "email"
        id = "email"
        placeholder = "Enter your E-mail ID" /
        >
        <
        /div> <
        div className = "details" >
        <
        label
        for = "number" > Phone No: < /label> <
        br / >
        <
        input type = "text"
        name = "number"
        id = "number"
        placeholder = "Enter your Phone Number" /
        >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "address" > Address: < /label> <br / >
        <
        input type = "text"
        name = "address"
        id = "address"
        placeholder = "Enter your Address" /
        >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "clgname" > College Name: < /label> <br / >
        <
        input type = "text"
        name = "name"
        id = "clgname"
        placeholder = "Enter your College Name" /
        >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "" > Upload your Identity proof: < /label> <br / >
        <
        input type = "file" / >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "" > Upload your College Identity proof: < /label>{" "} <
        br / >
        <
        input type = "file" / >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "pswrd" > Password: < /label> <br / >
        <
        input type = "password"
        name = "name"
        id = "pswrd"
        placeholder = "password should contain alphabets, numbers and special characters" /
        >
        <
        /div> <
        div class = "details" >
        <
        label
        for = "cnfrmpswrd" > Confirm Password: < /label> <br / >
        <
        input type = "password"
        name = "name"
        id = "cnfrmpswrd"
        placeholder = "Confirm your password" /
        >
        <
        /div> <
        div class = "submit" >
        <
        button > Submit < /button> < /
        div > <
        /form> < /
        div > <
        /section> < /
        div > <
        /div>
    );
}

export default Doctorform2;