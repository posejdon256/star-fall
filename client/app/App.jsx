import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StarFallButton from './buttons/StarFallButton.jsx';

export default class App extends Component{
    render(){
        return(
            <div>
                <StarFallButton styleName='violet' text="Star Fall Violet" />
            </div>
        );
    }
}