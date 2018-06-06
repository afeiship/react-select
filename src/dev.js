import './dev.scss';
import ReactSelect from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
