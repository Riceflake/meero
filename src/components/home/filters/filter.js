import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './filter.module.scss';

export default function Filter({ name, isActive, onClick }) {
  const buttonClasses = classNames(styles.filter, {
    [styles.blue]: isActive,
  });
  return (
    <button type="button" className={buttonClasses} onClick={() => onClick()}>
      {name}
    </button>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
