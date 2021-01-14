import React from 'react';

let today = new Date();
let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const DateTime = () => {
    return (
        <>
            <h3 className="date">{dateToday}</h3>
            <h1 id="clock" className="clock"> 12:59 am</h1>
        </>
    )
}

export default DateTime