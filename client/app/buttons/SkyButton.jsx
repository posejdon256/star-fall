import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SkyButton extends Component{
    render(){
        return(
            <button className={`star-fall ${this.props.styleName}`}>{this.props.children}</button>
        );
    }
}