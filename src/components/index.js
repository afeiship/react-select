import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-select';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  const { label, value, ...itemProps } = item;
  return (
    <option value={value} key={index} {...itemProps}>
      {label}
    </option>
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    multiple: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    multiple: false,
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  get value() {
    if (this.root) {
      const els = this.root.querySelectorAll('option:checked');
      const items = [].slice.call(els);
      return items.map((item) => item.value);
    }
    return [];
  }

  onChange = (inEvent) => {
    const { onChange, multiple } = this.props;
    const value = multiple ? this.value : this.value[0];
    onChange({
      target: { value }
    });
  };

  render() {
    const { className, items, template, onChange, ...props } = this.props;
    return (
      <select
        ref={(root) => (this.root = root)}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.onChange}
        {...props}>
        {items.map((item, index) => template({ item, index }))}
      </select>
    );
  }
}
