import ReactSelect from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      {
        label: 'optino1',
        value: 'v1'
      },
      {
        label: 'optino2',
        value: 'v2'
      },
      {
        label: 'optino3',
        value: 'v3'
      }
    ]
  };

  constructor(inProps) {
    super(inProps);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(inEvent) {
    console.log(inEvent.target.value);
  }

  render() {
    return (
      <div className="app-container">
        <ReactSelect defaultValue="v1" items={this.state.items} onChange={this._onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
