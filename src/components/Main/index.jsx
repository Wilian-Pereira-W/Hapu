import React from 'react';
import ParentForm from '../  ParentForm';
import CreateAndManageTheTribe from '../ CreateAndManageTheTribe';
import Payments from '../ Payments';
import DaycareSectionAvailableNow from '../DaycareSectionAvailableNow';
import styles from './styles.module.scss';

function Main() {
  return (
    <main className={styles.container}>
      <DaycareSectionAvailableNow />
      <CreateAndManageTheTribe />
      <ParentForm />
      <Payments />
    </main>
  );
}

export default Main;
