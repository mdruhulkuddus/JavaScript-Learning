// class component

import React, {Component} from "react";

class Card2 extends Component{
    render(){
        return(
            <h1>{this.props.name}</h1>
        );
    }
}

export default Card2;