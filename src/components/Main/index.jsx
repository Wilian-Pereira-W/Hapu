import React from 'react';
import ParentForm from '../  ParentForm';
import CreateAndManageTheTribe from '../ CreateAndManageTheTribe';
import DaycareSectionAvailableNow from '../DaycareSectionAvailableNow';
import styles from './styles.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <DaycareSectionAvailableNow />
      <CreateAndManageTheTribe />
      <ParentForm />
    </div>
  );
}

export default Main;
