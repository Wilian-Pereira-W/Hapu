import React from 'react';
import styles from './styles.module.scss';
import ImageSection4 from '../../assets/ImageSection4.svg';

function HapuTransparency() {
  return (
    <article>
      <section className={styles.container}>
        <div />
        <h2>A framework built for the long term</h2>
        <p>
          Childcare is for the long term.
          And you need a framework you can count on that
          gives your share long term viability and success.
          That’s why we’ve defined Hapu around our three tribal principles;
          clearly defined process, transparency over money and equality of participation.
        </p>
        <a href="/">Read how Hapu’s tribal background defines our app </a>
        <img src={ImageSection4} alt="Transparência da Hapu" />
      </section>
    </article>
  );
}

export default HapuTransparency;
