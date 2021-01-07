import React from 'react';

let today = new Date();
let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const DateTime = () => {
    return (
        <>
            <h1>{dateToday}</h1>
        </>
    )
}

export default DateTime