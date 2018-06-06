import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import nxToArray from 'next-to-array';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value, multiple } = inProps;
    this.state = {
      value: multiple ? value : value[0]
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ target: { value } }, () => {
        this.change(value);
      });
    }
  }

  change(inValue) {
    const { multiple, onChange } = this.props;
    const value = multiple ? inValue : inValue[0];
    const event = {
      target: { value }
    };
    onChange(event);
  }

  _onChange = inEvent => {
    const { options } = inEvent.target;
    const value = nxToArray(options).filter(item => item.selected).map(item => item.value);
    this.setState({ value }, () => {
      this.change(value);
    });
  };

  render() {
    const { className, items, value, onChange, ...props } = this.props;
    return (
      <select
        className={classNames('react-web-select', className)}
        value={this.state.value}
        onChange={this._onChange} {...props}>
        {
          items.map(item => {
            return (
              <option key={item.value} value={item.value}>{item.label}</option>
            )
          })
        }
      </select>
    );
  }
}
