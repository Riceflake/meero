import React from 'react';
import PropTypes from 'prop-types';
import Trail from 'containers/home/trails/trail';
import styles from './index.module.scss';

export default function Trails({ trails }) {
  return (
    <div className={styles.trails}>
      {trails.map(trail => (
        <Trail key={trail.id} id={trail.id} />
      ))}
    </div>
  );
}

Trails.propTypes = {
  trails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.id,
      name: PropTypes.string.isRequired,
      imgMedium: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
