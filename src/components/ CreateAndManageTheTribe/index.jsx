import React from 'react';
import ImageSection1 from '../../assets/ImageSection1.svg';
import styles from './styles.module.scss';

function CreateAndManageTheTribe() {
  return (
    <article className={styles.container}>
      <section className={styles.contents}>
        <h2>Share your home, nanny and costs</h2>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t
          cutting your costs in half be, well, fantastic?!
          If only it was easy to connect with other parents to share your costs? Well now it is,
          with Hapu.
          <a href="/">Hapu means tribe</a>
          and it’s our foundational 3 tribal principles that empowers
          you to create and manage your own tribe.
          A tribe that together has the power to create new affordable
          solutions in childcare that work for you and your community.
        </p>
        <a href="/">Ready to get started?</a>
      </section>
      <section className={styles.contentsImg}>
        <img src={ImageSection1} alt="encontar a babá" />
      </section>
    </article>
  );
}

export default CreateAndManageTheTribe;
