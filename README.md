# react-select
> Pure select for react.

## installation
```shell
npm install -S @feizheng/react-select
```

## update
```shell
npm update @feizheng/react-select
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-select/dist/style.scss";

  // customize your styles:
  $react-select-options: ()
  ```
2. import js
  ```js
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
      this.onChange = this.onChange.bind(this);
    }

    onChange(inEvent) {
      console.log('value:', inEvent.target.value);
    }

    render() {
      return (
        <div className="app-container">
          <p>
            <ReactSelect
              defaultValue={['v1']}
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
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-select/
