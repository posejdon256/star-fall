import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SkyInput extends Component{
    render(){
        return(
            <input type="text" className={`sky-fav-input star-fall ${this.props.styleName}`} />
        );
    }
}