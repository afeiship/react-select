import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';

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
    /**
     * The extended class name.
     */
    className: PropTypes.string,
    /**
     * Default value for form control.
     */
    defaultValue: PropTypes.any,
    /**
     * Runtime value for form control.
     */
    value: PropTypes.any,
    /**
     * If value support multiple.
     */
    multiple: PropTypes.bool,
    /**
     * The select options.
     */
    items: PropTypes.array,
    /**
     * The option template.
     */
    template: PropTypes.func,
    /**
     * The handler when value changed.
     */
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
