import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function Header({ count, total }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hikeero</h1>
      <div className={styles.selected}>
        {count}
        {' / '}
        {total}
      </div>
    </header>
  );
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
