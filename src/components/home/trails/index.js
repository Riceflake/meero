import React from 'react';
import PropTypes from 'prop-types';
import Trail from 'components/home/trails/trail';
import styles from './index.module.scss';

export default function Trails({ trails }) {
  return (
    <div className={styles.trails}>
      {trails.map(trail => (
        <Trail key={trail.id} src={trail.imgMedium} name={trail.name} />
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
