# react-select
> Select for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    items: PropTypes.array,
    value: PropTypes.any,
    multiple: PropTypes.bool,
  };

  static defaultProps = {
    onChange: noop,
    items: [],
    value: [],
    multiple: true
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-select --registry=https://registry.npm.taobao.org
```

```js
import ReactSelect from 'react-select';
```

```scss
// customize your styles:
$react-select-options:(
);

@import 'node_modules/react-select/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-select --save
// import : import ReactSelect from 'react-select'

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

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange1 = e => {
    const { value } = e.target;
    console.log(value);
  };

  _onChange2 = e => {
    const { value } = e.target;
    console.log(value);
  };

  render() {
    return (
      <div className="hello-react-select">
        <ReactSelect items={this.state.items1} className="s1" multiple={false} onChange={this._onChange1} />
        <ReactSelect items={this.state.items2} className="s2" multiple={true} onChange={this._onChange2} />
      </div>
    );
  }
}

```
