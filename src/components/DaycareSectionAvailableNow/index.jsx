import React from 'react';
import ProfileImage from '../../assets/ProfileImage.svg';
import styles from './styles.module.scss';

function DaycareSectionAvailableNow() {
  return (
    <article className={styles.container}>
      <section>
        <img
          src={ProfileImage}
          alt="imagem de perfil"
        />
        <a href="/">Sarah’s day care available now in North Sydney</a>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </section>
    </article>
  );
}

export default DaycareSectionAvailableNow;
