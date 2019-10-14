import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'containers/trail/checkbox';
import styles from './trail.module.scss';

export default function Trail({ id, src, name }) {
  return (
    <figure>
      <div className={styles.selection}>
        <img src={src} alt={name} className={styles.thumbnail} />
        <Checkbox id={id} className={styles.checkbox} />
      </div>
      <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
  );
}

Trail.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
