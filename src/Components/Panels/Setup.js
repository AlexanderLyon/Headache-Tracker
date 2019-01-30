import React from 'react';

export class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div id="user-info">
          <p>Your unique user ID:</p>
          <p><b>{this.props.userID}</b></p>
        </div>
        <div id="triggers"></div>
      </section>
    );
  }
}
