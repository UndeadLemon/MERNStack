import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: Number(this.props.age)
        }
    }
    render(){
        return(
            <div className="personCard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h5>Age: {this.state.age}</h5>
                <h5>Hair Color: {this.props.hairColor}</h5>
                <button onClick ={ () => this.setState({age:(this.state.age + 1)})}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
export default PersonCard