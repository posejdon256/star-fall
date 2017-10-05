import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import App from './app/App.jsx';

Meteor.startup(function(){
   render(
      <App />,
      document.getElementById('render-target'))
  });
