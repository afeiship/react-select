# react-select
> Pure select for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-select
```

## properties
| Name         | Type   | Required | Default | Description                     |
| ------------ | ------ | -------- | ------- | ------------------------------- |
| className    | string | false    | -       | The extended class name.        |
| defaultValue | any    | false    | -       | Default value for form control. |
| value        | any    | false    | -       | Runtime value for form control. |
| multiple     | bool   | false    | false   | If value support multiple.      |
| items        | array  | false    | []      | The select options.             |
| template     | func   | false    | -       | The option template.            |
| onChange     | func   | false    | noop    | The handler when value changed. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-select/dist/style.css";

  // or use sass
  @import "~@jswork/react-select/dist/style.scss";

  // customize your styles:
  $react-select-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSelect from '@jswork/react-select';
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

  ```

## documentation
- https://afeiship.github.io/react-select/


## license
Code released under [the MIT license](https://github.com/afeiship/react-select/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-select
[version-url]: https://npmjs.org/package/@jswork/react-select

[license-image]: https://img.shields.io/npm/l/@jswork/react-select
[license-url]: https://github.com/afeiship/react-select/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-select
[size-url]: https://github.com/afeiship/react-select/blob/master/dist/react-select.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-select
[download-url]: https://www.npmjs.com/package/@jswork/react-select
