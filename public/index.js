import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSelect from '../src/main';
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
    this.onChange = this.onChange.bind(this);
  }

  onChange(inEvent) {
    console.log('value:', inEvent.target.value);
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-select">
        <p>
          <ReactSelect
            defaultValue={['v1', 'v2']}
            multiple
            items={this.state.items}
            onChange={this.onChange}
          />
        </p>

        <p>
          <ReactSelect
            defaultValue="v2"
            items={this.state.items}
            onChange={this.onChange}
          />
        </p>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
