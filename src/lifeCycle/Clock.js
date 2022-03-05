import React from 'react';

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            isClockVisible: true
         };
         this.toggleClock = this.toggleClock.bind(this);
    }
    toggleClock(){
        this.setState({isClockVisible: !this.state.isClockVisible});
    }

    render() {
        let localDate;
        if(this.state.isClockVisible){
            localDate = this.state.date.toLocaleTimeString();
        }

        return (
        <div>
            <button onClick={this.toggleClock}>
                Toggle clock
            </button>
            {localDate}
        </div>);
    }

    componentDidMount(){
        const oneSecond = 1000;
        this.intervalID = setInterval(() =>{
          this.setState({
            date: new Date()
          });
        }, oneSecond);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
}

export default Clock;