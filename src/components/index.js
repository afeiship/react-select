import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-select';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop
  };
  /*===properties end===*/

  render() {
    const { className, items, ...props } = this.props;
    return (
      <select
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.map((item, index) => {
          const { label, value, ...itemProps } = item;
          return (
            <option value={value} key={index} {...itemProps}>
              {label}
            </option>
          );
        })}
      </select>
    );
  }
}
