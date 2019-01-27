import React from 'react';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <button data-panel="AddData" onClick={this.props.changePanels}>
          <img src="" alt=""/>
          <p>Add Data</p>
        </button>
        <button data-panel="AllData" onClick={this.props.changePanels}>
          <img src="" alt=""/>
          <p>All Data</p>
        </button>
        <button data-panel="Insights" onClick={this.props.changePanels}>
          <img src="" alt=""/>
          <p>Insights</p>
        </button>
        <button data-panel="Setup" onClick={this.props.changePanels}>
          <img src="" alt=""/>
          <p>Setup</p>
        </button>
      </nav>
    );
  }
}
