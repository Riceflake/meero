import React from 'react';
import PropTypes from 'prop-types';
import styles from './trail.module.scss';

export default function Trail({ src, name, isChecked, onChange }) {
  return (
    <figure>
      <div className={styles.selection}>
        <img src={src} alt={name} className={styles.thumbnail} />
        <input
          type="checkbox"
          checked={isChecked}
          className={styles.checkbox}
          onChange={() => onChange()}
        />
      </div>
      <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
  );
}

Trail.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
