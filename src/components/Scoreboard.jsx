import React, { Component } from 'react';

import Blob from './Blob.jsx';
import Drilldown from './Drilldown.jsx';

import loadCsv from '../utils/loadCsv.js';
import aggregator from '../utils/aggregator.js';

import heading from '../content/title.md';

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function getDrillTexts({ drill, data }) {
  return data.map(_ => _[drill]).filter(onlyUnique)
}

export default class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], drill: null }
  }

  setDrill(drill) {
    this.setState(() => ({ drill }))
  }

  render() {
    const { data, drill } = this.state;
    const oneNumber = aggregator({ data });

    let drillDown = null;
    if (drill) {
      const names = getDrillTexts({data, drill});
      console.dir(names);
      const drills = names.map((drillName, i) => <Drilldown
        key={ i }
        data={ data }
        dimension={ drill }
        category={ drillName }
      />)
      drillDown = <section id='drilldown'>
        { drills }
      </section>;
    }

    return <>
        <header dangerouslySetInnerHTML={{ __html: heading }} />
        <section id='summary'>
          <Blob value={ oneNumber } />
        </section>
        <section id='control'>
          <button onClick={ () => this.setDrill('la') }>Drill by Local Authority</button>
          <button onClick={ () => this.setDrill('company') }>Drill by Company</button>
          <button onClick={ () => this.setDrill(null) }>Clear drilldown</button>
        </section>
        { drillDown }
      </>;
  }

  async loadReport() {
    const data = await loadCsv({ url: this.props.url });
    this.setState(() => ({ data }));
  }

  componentDidMount() {
    this.loadReport();
    // setInterval(() => this.loadReports(), 300000);
  }

}

