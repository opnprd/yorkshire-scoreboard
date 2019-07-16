import React from 'react';
import ReactDOM from 'react-dom';
// import Dashboard from './components/Dashboard.jsx';
import Scoreboard from './components/Scoreboard.jsx';

const url = './reports.csv'

import aggregator from './utils/aggregator.js';

export function initialise({ appRootId = 'app' } = {}) {
  ReactDOM.render(
    <Scoreboard url={ url } aggregator={ aggregator }/>,
    document.getElementById(appRootId)
  );
};
