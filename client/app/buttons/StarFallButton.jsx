import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class StarFallButton extends Component{
    render(){
        return(
            <button className={`star-fall ${this.props.styleName}`}>{this.props.text}</button>
        );
    }
}