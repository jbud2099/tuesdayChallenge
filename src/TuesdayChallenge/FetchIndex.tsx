import React from 'react';
import FetchDisplay from './FetchDisplay'

type WeatherState = {
    name: string,
    temperature: number;
}

export default class FetchIndex extends React.Component<{}, WeatherState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: "",
            temperature: 0
        }
    }

    componentDidMount() {
        const apiKey = "a84a57316ee9651bbb94f31e4d5aa5f5"
        navigator.geolocation.getCurrentPosition((position) => { 
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            fetch(`//api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    name: data.name,
                    temperature: data.main.temp
                });
            });
        });
    }

    render() {
        return (
            <div>
                <FetchDisplay name={this.state.name} temperature={this.state.temperature}/>
            </div>
        )
    }
}