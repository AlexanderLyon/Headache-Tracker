import React from 'react';

export class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedDays: 0
    };
  }

  render() {
    return (
      <section>
        <p>It's been {this.state.elapsedDays} days since your last headache</p>
      </section>
    );
  }
}
