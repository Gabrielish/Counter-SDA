import React from 'react'

import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.startingValue || 0,
            step: this.props.step || 1
        };

        this.onIncrementHandler = this.onIncrementHandler.bind(this)
        this.onDecrementHandler = this.onDecrementHandler.bind(this)
    }

    onIncrementHandler() {
        this.setState({
            value: this.state.value + this.state.step
        })
}
    onDecrementHandler(){
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    render(){
        let decrementButton = <button onClick={this.onDecrementHandler}>Decrement</button>;
        if (this.props.shouldNotHaveDecrement) {
            decrementButton = null
        }

        return (
            <div className='counter'>
                <h1>Counter: {this.props.name}</h1>
                <p>{this.state.value}</p>
                <div>
                    <button
                    onClick={this.onIncrementHandler}
                    style={{
                        marginRight: '10px'
                    }}
                    >Increment</button>
                    {decrementButton}
                    </div>
            </div>
        )
    }
}



export default Counter;