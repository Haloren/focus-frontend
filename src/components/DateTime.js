import React from 'react';

let today = new Date();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let day = days[ today.getDay() ];
let month = months[ today.getMonth() ];
let date = today.getDate();
let year = today.getFullYear();

const DateTime = () => {
    return (
        <>
            <h3 className="date">{day} {month} {date}, {year}</h3>
            <h1 id="clock" className="clock"> 12:59 am</h1>
        </>
    )
}

export default DateTime