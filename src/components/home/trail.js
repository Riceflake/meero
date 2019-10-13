import React from 'react';
import PropTypes from 'prop-types';
import styles from './trail.module.scss';

export default function Trail({ src, name }) {
  return (
    <figure>
      <img src={src} alt={name} className={styles.thumbnail} />
      <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
  );
}

Trail.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
