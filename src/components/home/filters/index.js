import React from 'react';
import {
  TRAIL_FILTER_ALL,
  TRAIL_FILTER_BLACK,
  TRAIL_FILTER_BLUE,
  TRAIL_FILTER_BLUEBLACK,
  TRAIL_FILTER_GREENBLUE,
} from 'actions/filters';
import Filter from 'containers/home/filters/filter';
import styles from './index.module.scss';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <div>
        <span className={styles.difficulty}>Difficulty : </span>
        <Filter filter={TRAIL_FILTER_ALL} />
        <Filter filter={TRAIL_FILTER_BLUEBLACK} />
        <Filter filter={TRAIL_FILTER_GREENBLUE} />
        <Filter filter={TRAIL_FILTER_BLUE} />
        <Filter filter={TRAIL_FILTER_BLACK} />
      </div>
    </div>
  );
}
