import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        /* console.log(this.props) */
        const {name, age, belt} = this.props
        return(
            <div className="Ninja">
                <div>Name: {name} </div>
                <div>Age: {age}</div>
                <div>Belt: {this.props.belt}</div>
            </div>
        )
    }
}

export default Ninjas