import React from 'react';

export class AllData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.populateTable = this.populateTable.bind(this);
  }


  populateTable() {
    if (this.props.previousEntries) {
      const tableRows = this.props.previousEntries.map( (entry) => {
        const key = this.props.listTitle + entry.id;
        return (
          <tr>
            <td>{entry.formattedDate}</td>
            <td>{entry.todaysWeather}</td>
            <td>{entry.painLevel}</td>
            <td>{entry.notes}</td>
          </tr>
        );
      });
  
      return tableRows;
    }
  }


  render() {
    return (
      <section id="all-data">
        <h1>View All Data</h1>

        <div id="history">
          <h2>History</h2>
          <div>
            <table cellspacing="0px">
              <thead>
                <th>Date</th>
                <th>Weather</th>
                <th>Pain Level</th>
                <th>Notes</th>
              </thead>
              <tbody>
                {this.populateTable()}
              </tbody>
            </table>
            { (!this.props.previousEntries || !this.props.previousEntries.length) &&
              <h3 id="no-data">No data</h3>
            }
          </div>
        </div>

      </section>
    );
  }
}
