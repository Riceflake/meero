import React from 'react';
import FilterAll from 'containers/home/filters/all';
import FilterBlack from 'containers/home/filters/black';
import FilterBlue from 'containers/home/filters/blue';
import FilterBlueBlack from 'containers/home/filters/blueblack';
import FilterGreenBlue from 'containers/home/filters/greenblue';
import styles from './index.module.scss';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <span className={styles.difficulty}>Difficulty : </span>
      <FilterAll />
      <FilterBlack />
      <FilterBlue />
      <FilterBlueBlack />
      <FilterGreenBlue />
    </div>
  );
}
