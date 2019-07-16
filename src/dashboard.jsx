import React from 'react';
import ReactDOM from 'react-dom';
// import Dashboard from './components/Dashboard.jsx';
import Scoreboard from './components/Scoreboard.jsx';

const url = './reports.csv'

export function initialise({ appRootId = 'app' } = {}) {
  ReactDOM.render(
    <Scoreboard url={ url } />,
    document.getElementById(appRootId)
  );
};
