import React from 'react';

export class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.deleteUserData = this.deleteUserData.bind(this);
  }

  
  deleteUserData(e) {
    if (confirm('Are you sure? This will permanently delete all history, triggers, and settings.')) {
      // TODO: delete data
      alert('Data successfully deleted');
    }
  }


  render() {
    return (
      <section>
        <div id="user-settings">
          <h2>User Settings</h2>
          <div className="wrapper">
            <p>Your unique user ID: <span><b> {this.props.userID} </b></span></p>
            <button className="btn ghost-btn" onClick={this.deleteUserData}>Delete All Data</button>
          </div>
        </div>
        <div id="triggers-setup">
          <h2>Custom Triggers</h2>
          <div className="wrapper">
            <p>Define custom headache triggers that you want to track in your data. This feature is <em>coming soon!</em></p>
          </div>
        </div>
      </section>
    );
  }
}
