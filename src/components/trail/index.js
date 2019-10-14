import React from 'react';
import PropTypes from 'prop-types';
import BackButton from 'components/trail/backButton';
import Checkbox from 'containers/trail/checkbox';

import styles from './index.module.scss';

export default function Trail({ trail }) {
  if (trail === undefined) {
    return <div>Trail not found</div>;
  }

  return (
    <figure className={styles.trail}>
      <BackButton />
      <img className={styles.img} alt={trail.name} src={trail.imgMedium} />
      <figcaption className={styles.caption}>
        <Checkbox id={trail.id} className={styles.checkbox} />
        {trail.name}
      </figcaption>
    </figure>
  );
}

Trail.propTypes = {
  trail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgMedium: PropTypes.string.isRequired,
  }),
};

Trail.defaultProps = {
  trail: undefined,
};
