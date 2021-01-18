import React from 'react'

const Weather = (props) => {
    // console.log("Weather", props.weather.zip) 
    return (
        <>  
            <h5> Zip: {props.weather && props.weather.zip} </h5>
            <h2> ⛅  88 ° </h2>
            <h5> Anthem, AZ </h5>
        </>
    )
}

export default (Weather)