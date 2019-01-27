import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from './Navigation';
import {AddData} from './Panels/AddData';
import {AllData} from './Panels/AllData';
import {Insights} from './Panels/Insights';
import {Setup} from './Panels/Setup';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'AddData'
    };

    this.changePanels = this.changePanels.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
  }

  changePanels(e) {
    this.setState({ activePanel: e.currentTarget.getAttribute('data-panel') });
  }

  displayPanel() {
    // Returns the active panel to be displayed
    switch (this.state.activePanel) {
      case 'AddData':
        return <AddData/>;
        break;
      case 'AllData':
        return <AllData/>;
        break;
      case 'Insights':
        return <Insights/>;
        break;
      case 'Setup':
        return <Setup/>;
        break;
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1 id='title'>Headache<br/>Tracker</h1>
          <hr/>
        </header>
        <Navigation changePanels={this.changePanels} currentPanel={this.state.activePanel}/>
        { this.displayPanel() }
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));