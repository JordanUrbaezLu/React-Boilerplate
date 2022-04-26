import React, { Component } from "react"
import "Counter.css"

class Counter extends Component {

    //babel will use its won constructor if you dont have one
    state = {
        count: 0
    }
    // constructor(props) {
    //     super(props);
    //     this.state = { count: 0 };
    //     this.increase = this.increase.bind(this);
    // } 

    //increase needs to bind(this) to know what this is
    increase = () => {
        this.setState({ count: this.state.count + 1 })
    }

    //decrease is an arrow function so you do not need to bind this
    //this was is better
    decrease = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return(
            <div className ="container">
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
}

export default Counter;