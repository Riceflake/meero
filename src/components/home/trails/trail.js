import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Checkbox from 'containers/trail/checkbox';
import styles from './trail.module.scss';

export default function Trail({ id, url, src, name }) {
  return (
    <figure>
      <div className={styles.selection}>
        <Link to={url}>
          <img src={src} alt={name} className={styles.thumbnail} />
        </Link>
        <Checkbox id={id} className={styles.checkbox} />
      </div>
      <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
  );
}

Trail.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
