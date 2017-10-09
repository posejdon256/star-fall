import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SkyButton from './buttons/SkyButton.jsx';
import Sky from './sky/Sky.jsx';
import SkyFavButton from './buttons/SkyFavButton.jsx';
import SkyInput from './inputs/SkyInput.jsx';

export default class App extends Component{
    render(){
        return(
            <div>
                <Sky>
                    <SkyButton styleName='violet'>Star Fall Violet</SkyButton>
                    <SkyButton styleName='light'>Star Fall Light</SkyButton>
                    <SkyButton styleName='warn'>Star Fall Warn</SkyButton>
                    <SkyButton styleName='disabled'>Star Fall Disabled</SkyButton>
                    <br/>
                    <SkyFavButton styleName="violet">star</SkyFavButton>
                    <SkyFavButton styleName="light">star</SkyFavButton>
                    <SkyFavButton styleName="warn">star</SkyFavButton>
                    <SkyFavButton styleName="disabled">star</SkyFavButton>
                    <br />
                    <SkyInput styleName="violet"/>
                    <SkyInput styleName="light"/>
                    <SkyInput styleName="warn"/>
                    <SkyInput styleName="disabled"/>
                </Sky>
            </div>
        );
    }
}