import ReactSelect from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items1: [
      {
        value: 0,
        label: 'option0'
      },
      {
        value: 1,
        label: 'option1'
      },
      {
        value: 2,
        label: 'option2'
      },
      {
        value: 3,
        label: 'option3'
      }
    ],
    items2: [
      {
        value: 0,
        label: 'option00'
      },
      {
        value: 1,
        label: 'option11'
      },
      {
        value: 2,
        label: 'option22'
      },
      {
        value: 3,
        label: 'option33'
      }
    ]
  };

  _onChange1 = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  _onChange2 = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  render() {
    return (
      <div className="app-container">
        <div className="row">
          <ReactSelect
            items={this.state.items1}
            className="s1"
            multiple={false}
            onChange={this._onChange1}
          />
        </div>
        <div className="row">
          <ReactSelect
            items={this.state.items2}
            className="s2"
            multiple={true}
            onChange={this._onChange2}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
