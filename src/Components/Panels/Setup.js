import React from 'react';

export class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.linkUserID = this.linkUserID.bind(this);
    this.deleteUserData = this.deleteUserData.bind(this);
  }


  linkUserID() {
    const linkedID = prompt(`Enter the user ID number that you want to load data from.\nWARNING: Linking data from another ID will delete all current data. This action will be permanent.`);

    if ((linkedID != null) && (linkedID.trim() !== '')) {
      if (!linkedID.match(/[a-z]/i) && linkedID.length === 12) {
        this.deleteUserData(null, true);
        this.props.changeUserID(linkedID);
      }
      else {
        alert('Please supply a properly formatted user ID.');
      }
    }
  }

  
  deleteUserData(e, skipConfirmation) {
    if (skipConfirmation || confirm('Are you sure? This will permanently delete all history, triggers, and settings.')) {
      // TODO: delete data
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          localStorage.clear('userID');
          if (!skipConfirmation) {
            alert('Data successfully deleted');
          }
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
            <p>Link data from another device</p>
            <button className="btn ghost-btn" onClick={this.linkUserID}>Enter New User ID</button>
          </div>
        </div>
        <div id="triggers-setup">
          <h2>Custom Triggers</h2>
          <div className="wrapper">
            <p>Define custom headache triggers that you want to track in your data. This feature is <em>coming soon!</em></p>
          </div>
        </div>
        <div id="about">
          <h2>About</h2>
          <p>Headache Tracker presents an intuitive way to record headaches each time you experience one, including data such as the current weather conditions, barometric pressure, and more. Using the power of machine learning, your data is analyzed and used to create accurate predications based on the underlying patterns behind your data.</p>
        </div>
      </section>
    );
  }
}
