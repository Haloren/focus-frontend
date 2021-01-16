import React from 'react';
import Clock from 'react-digital-clock';

const DateTime = () => {
    // DATE
    let today = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let day = days[ today.getDay() ];
    let month = months[ today.getMonth() ];
    let date = today.getDate();
    let year = today.getFullYear();

    return (
        <div className="date-time-container">
            <h3>{day} {month} {date}, {year}</h3>
            <div className="clock">   
                <Clock />
            </div>
        </div>
    )
}

export default DateTime