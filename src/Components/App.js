import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <h1>Headache Tracker</h1>
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));