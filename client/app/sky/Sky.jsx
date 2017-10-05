import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class StarFallButton extends Component{
    render(){
        return(
            <div className="sky">
                <div className="sky-stars"></div>
                <div className="sky-twinkling"></div>
                <div className="sky-clouds"></div>
                {this.props.children}
            </div>
        );
    }
}