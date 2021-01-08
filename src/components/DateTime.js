import React from 'react';

let today = new Date();
let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const DateTime = () => {
    return (
        <>
            <h3>{dateToday}</h3>
            <h1 id="clock"> 08:00 am</h1>
            <h2> Hello User Name</h2>
        </>
    )
}

export default DateTime