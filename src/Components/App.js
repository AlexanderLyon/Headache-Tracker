import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from './Navigation';
import {Help} from './Help';
import {AddData} from './Panels/AddData';
import {AllData} from './Panels/AllData';
import {Insights} from './Panels/Insights';
import {Setup} from './Panels/Setup';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: localStorage.getItem('userID'),
      activePanel: 'AddData',
      showingHelp: false
    };

    this.changePanels = this.changePanels.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
  }


  changePanels(e) {
    this.setState({ activePanel: e.currentTarget.getAttribute('data-panel') });
  }


  displayPanel() {
    // Returns the active panel to be displayed
    switch (this.state.activePanel) {
      case 'AddData':
        return <AddData userID={this.state.userID}/>;
        break;
      case 'AllData':
        return <AllData/>;
        break;
      case 'Insights':
        return <Insights/>;
        break;
      case 'Setup':
        return <Setup userID={this.state.userID}/>;
        break;
    }
  }


  generateID() {
    /* Generates a random, unique 12-digit ID */
    const num = Math.floor(new Date() * Math.random() * (1 - 0.1)) + 100000000000;
    return parseInt(num.toString().slice(0, 12), 10);
  }


  toggleHelp(e) {
    if (this.state.showingHelp) {
      this.setState({ showingHelp: false });
    }
    else {
      this.setState({ showingHelp: true });
    }
  }


  componentDidMount() {
    if (!this.state.userID) {
      // No user ID found, create a new one
      const newID = this.generateID();
      localStorage.setItem('userID', newID);
      this.setState({ userID: newID }, () => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          console.log('Posted successfully');
        };
        xhr.open('POST', 'utilities/addUser.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('userID=' + newID);
      });
    }
    else {
      console.log(`Welcome back, user ${this.state.userID}`);
    }
  }


  render() {
    return (
      <main>
        <header>
          <h1 id='title'>Headache<br/>Tracker</h1>
          <div id='help-btn' onClick={this.toggleHelp}>?</div>
          <hr/>
        </header>
        { this.state.showingHelp &&
          <Help closeMenu={this.toggleHelp}/>
        }
        <Navigation changePanels={this.changePanels} currentPanel={this.state.activePanel}/>
        { this.displayPanel() }
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));