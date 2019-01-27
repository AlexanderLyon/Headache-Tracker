import React from 'react';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <button data-panel="AddData" className={this.props.currentPanel === 'AddData' ? 'current' : ''} 
          onClick={this.props.changePanels}>
          Add Data
        </button>
        <button data-panel="AllData" className={this.props.currentPanel === 'AllData' ? 'current' : ''}
          onClick={this.props.changePanels}>
          All Data
        </button>
        <button data-panel="Insights" className={this.props.currentPanel === 'Insights' ? 'current' : ''}
          onClick={this.props.changePanels}>
          Insights
        </button>
        <button data-panel="Setup" className={this.props.currentPanel === 'Setup' ? 'current' : ''}
          onClick={this.props.changePanels}>
          Setup
        </button>
      </nav>
    );
  }
}
