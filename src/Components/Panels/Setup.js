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
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          localStorage.clear('userID');
          alert('Data successfully deleted');
        }
      };

      xhr.onerror = () => {
        console.error('Unable to remove user data');
      };
      xhr.open('POST', 'utilities/clearUserData.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('userID=' + this.props.userID);
    }
  }


  render() {
    return (
      <section>
        <h1>Tools &amp; Settings</h1>
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
