import React from 'react';
import PropTypes from 'prop-types';
import Trail from 'components/home/trail';
import styles from './trails.module.scss';

export default function Trails({ trails }) {
  return (
    <main className={styles.trails}>
      {trails.map(trail => (
        <Trail key={trail.id} src={trail.imgMedium} name={trail.name} />
      ))}
    </main>
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
