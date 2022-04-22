import React from 'react';
import styles from './styles.module.scss';
import ImageSection5 from '../../assets/ImageSection5.svg';

function HapuDiary() {
  return (
    <article>
      <section className={styles.container}>
        <div />
        <img src={ImageSection5} alt="Diário Hapu" />
        <h2>Coming soon: Nanny Share Daily Diary!</h2>
        <p>
          With the Hapu daily diary your nanny will be able to update
          you and your sharers with photos and commentary of the day.
          You and sharers will receive notifications and you’ll
          be able to login to view the daily adventures fo your little ones.
          We can’t wait!
        </p>
      </section>
    </article>
  );
}

export default HapuDiary;
