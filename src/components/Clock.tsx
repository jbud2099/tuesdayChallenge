import { type } from 'os';
import React from 'react';

type ClockState =  {
    time: Date
}

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
}

class Clock extends React.Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        this.tick();
    };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleString()}</h1>
                {/*<p>{this.props.testProp}</p>
                <p>{this.props.oprionalProp</p>*/}
            </div>
        )
    }
}

export default Clock;