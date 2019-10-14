import React from 'react';
import PropTypes from 'prop-types';
import BackButton from 'components/trail/backButton';
import styles from './index.module.scss';

export default function Trail({ trail }) {
  if (trail === undefined) {
    return <div>Trail not found</div>;
  }

  return (
    <figure className={styles.trail}>
      <BackButton />
      <img className={styles.img} alt={trail.name} src={trail.imgMedium} />
    </figure>
  );
}

Trail.propTypes = {
  trail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgMedium: PropTypes.string.isRequired,
  }).isRequired,
};
