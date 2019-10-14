import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_TRAILS } from 'routes/paths';
import styles from './backButton.module.scss';

export default function BackButton() {
  return (
    <Link to={PATH_TRAILS} className={styles.button} type="button">
      back
    </Link>
  );
}
