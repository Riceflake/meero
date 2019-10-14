import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

export default function Checkbox({ className, isChecked, onChange }) {
  const checkboxClasses = classNames(styles.checkbox, className);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      className={checkboxClasses}
      onChange={() => onChange()}
    />
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  className: null,
};
