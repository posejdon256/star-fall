import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SkyButton from './buttons/SkyButton.jsx';
import Sky from './sky/Sky.jsx';
import SkyFavButton from './buttons/SkyFavButton.jsx';

export default class App extends Component{
    render(){
        return(
            <div>
                <Sky>
                    <SkyButton styleName='violet'>Star Fall Violet</SkyButton>
                    <SkyButton styleName='light'>Star Fall Light</SkyButton>
                    <SkyButton styleName='warn'>Star Fall Warn</SkyButton>
                    <SkyButton styleName='disabled'>Star Fall Disabled</SkyButton>
                    <SkyFavButton styleName="primary">star</SkyFavButton>
                </Sky>
            </div>
        );
    }
}