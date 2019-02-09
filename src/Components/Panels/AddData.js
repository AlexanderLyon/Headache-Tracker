import React from 'react';

export class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingData: false,
      showingConfirmation: false,
      charsRemaining: 100
    };

    this.handleClick = this.handleClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.notesKeyup = this.notesKeyup.bind(this);
  }


  handleClick(e) {
    // Toggles form visibility
    if (this.state.addingData) {
      this.setState({ addingData: false, charsRemaining: 100, showingConfirmation: false });
    }
    else {
      this.setState({ addingData: true, showingConfirmation: false });
    }
  }


  submitForm(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    let urlEncodedDataPairs = [];
    const data = {
      'userID': this.props.userID,
      'timestamp': Date.now(),
      'todays-weather': document.getElementById('todays-weather').value,
      'tomorrows-weather': document.getElementById('tomorrows-weather').value,
      'barometric-pressure': document.getElementById('barometric-pressure').value,
      'pain-severity': document.getElementById('pain-severity').value,
      'notes': document.getElementById('entry-notes').value
    }

    // Turn the data object into an array of URL-encoded key/value pairs.
    for (let name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    let urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    xhr.onload = () => {
      if (xhr.status === 200) {
        // Completed successfully
        this.setState({
          addingData: false,
          showingConfirmation: true
        }, () => {
          this.props.updateEntries();
        });
      }
    };

    xhr.onerror = () => {
      console.error('Something went wrong submitting the form');
    };

    xhr.open('POST', e.target.getAttribute('action'));
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(urlEncodedData);
  }


  notesKeyup(e) {
    const charCount = e.currentTarget.value.length;
    this.setState({charsRemaining: 100 - charCount});
  }


  render() {
    return (
      <section>
        <h1>Add New Data</h1>
        <p>It's been <span className="elapsed-days">{this.props.elapsedDays}</span> days since your last headache</p>
        <button id="addDataBtn" className="btn" onClick={this.handleClick}>
          { this.state.addingData ? <span><i className="fas fa-times"></i> Cancel</span> : 'Add Headache Data' }
        </button>
        { this.state.showingConfirmation &&
          <p id="submit-confirmation"><i className="fas fa-check"></i> Submitted</p>
        }

        { this.state.addingData &&
          <form id="add-data" action="utilities/receiveData.php" method="POST" onSubmit={this.submitForm}>
            <div className="field">
              <label htmlFor="todays-weather">Today's Weather</label>
              <select id="todays-weather" placeholder="Select one">
                <option>Sunny/clear</option>
                <option>Clouds</option>
                <option>Rain</option>
                <option>Snow</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="pain-severity">Pain Severity</label>
              <select id="pain-severity" placeholder="Rate your pain level">
                <option>1 (Mild)</option>
                <option>2</option>
                <option>3 (Aching)</option>
                <option>4</option>
                <option>5 (Painful)</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10 (Excruciating)</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="tomorrows-weather">Tomorrow's Weather</label>
              <select id="tomorrows-weather" placeholder="Select one">
                <option>Sunny/clear</option>
                <option>Clouds</option>
                <option>Rain</option>
                <option>Snow</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="barometric-pressure">Current Barometric Pressure</label> <a href="https://darksky.net/forecast/" target="_blank"><i className="fa fa-question-circle"></i></a>
              <input type="text" id="barometric-pressure" placeholder="Enter Pressure (mb)"/>
            </div>

            <div className="field full-width">
              <label htmlFor="entry-notes">Notes</label>
              <textarea id="entry-notes" 
                maxlength="100" 
                placeholder="Enter any special notes"
                onKeyUp={this.notesKeyup}>
              </textarea>
              <p id="characters"><span id="char-count">{this.state.charsRemaining}</span></p>
            </div>
            
            <button type="submit" className="btn">Submit</button>
          </form>
        }

      </section>
    );
  }
}
