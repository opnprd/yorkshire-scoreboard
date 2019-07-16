import React, { Component } from 'react';

import Blob from './Blob.jsx';

import loadCsv from '../utils/loadCsv.js';
import aggregator from '../utils/aggregator.js';

import heading from '../content/title.md';

export default class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  render() {
    const { data } = this.state;
    const oneNumber = aggregator({ data });

    return <>
        <header dangerouslySetInnerHTML={{ __html: heading }} />
        <section id='summary'>
          <Blob value={ oneNumber } />
        </section>
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

