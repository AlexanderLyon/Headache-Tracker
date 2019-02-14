import React from 'react';

export class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.calculateAverageDays = this.calculateAverageDays.bind(this);
  }


  calculateAverageDays() {
    const data = this.props.previousEntries;
    const differences = [];

    for (let i=0; i<data.length-1; i++) {
      const thisDateMidnight = new Date(parseInt(data[i].postedTimestamp));
      thisDateMidnight.setHours(0, 0, 0);

      const nextDateMidnight = new Date(parseInt(data[i+1].postedTimestamp));
      nextDateMidnight.setHours(0, 0, 0);

      differences.push((thisDateMidnight - nextDateMidnight) / (1000*60*60*24));
    }

    const total = differences.reduce((total, val) => total + val);
    return (total / differences.length).toFixed(1);
  }


  render() {
    return (
      <section>
        <h1>Insights</h1>
        { (this.props.previousEntries && this.props.previousEntries.length > 1) ? (
          <div id="insights">
            <div className="card half">
              <h3>Average time between headaches:</h3>
              <p className="data-output">{this.calculateAverageDays()} days</p>
            </div>
          </div>
        ) : (
          <div id="no-insight-data">
            <h2>No Data Found</h2>
            <p>Add 2+ data points in order to access insights</p>
          </div>
        )}
      </section>
    );
  }
}
