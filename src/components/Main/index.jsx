import React from 'react';
import DaycareSectionAvailableNow from '../DaycareSectionAvailableNow';
import styles from './styles.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <DaycareSectionAvailableNow />
    </div>
  );
}

export default Main;
