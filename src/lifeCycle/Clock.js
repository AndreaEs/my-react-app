import React from 'react';
import { ReactDOM } from 'react';

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
      }

      render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
      }
}

export default Clock;