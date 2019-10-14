import React from 'react';
import Header from 'components/home/header';
import Filters from 'components/home/filters';
import Trails from 'containers/home/trails';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <Filters />
        <Trails />
      </div>
    </div>
  );
}
