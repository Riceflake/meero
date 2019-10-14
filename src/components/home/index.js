import React from 'react';
import Filters from 'components/home/filters';
import Trails from 'containers/home/trails';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.title}>Choose a trail</div>
        <Filters />
        <Trails />
      </div>
    </div>
  );
}
