import React from 'react';

export interface WeatherProps{
    name: string,
    temperature: number
}

const FetchDisplay = (props: WeatherProps) => {
    return (
         <div>
            The temperature is {props.temperature}&deg; F at {props.name}
        </div>
    )
}

export default FetchDisplay;