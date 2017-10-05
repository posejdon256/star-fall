import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SkyFavButton extends Component{
    render(){
        return(
            <button className={`sky-fav-button star-fall ${this.props.styleName}`}>
                <i className="material-icons sky-icon">{this.props.children}</i>
            </button>
        );
    }
}