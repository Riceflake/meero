import React from 'react';
import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hikeero</h1>
    </header>
  );
}
