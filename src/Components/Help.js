import React from 'react';

export class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div id="help-dialog"></div>
        <div id="help-background"></div>
      </div>
    );
  }
}
