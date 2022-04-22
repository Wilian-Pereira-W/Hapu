import React from 'react';
import ImageSection from '../../assets/ImageSection3.svg';
import styles from './styles.module.scss';

function Payments() {
  return (
    <article className={styles.container}>
      <section>
        <img src={ImageSection} alt="Pagamentos" />
      </section>
      <section>
        <h2>Shared payments made simple</h2>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill.
          Try sharing that bill week in, week out and you might encounter more than a few snares.
          But not with Hapu.
          Simply set your rates and our automated payment system takes care of the rest.
          You need never talk money or who owes what.
        </p>
        <a href="/"><p>Read how Bridget’s share (without Hapu) ended over $15</p></a>
      </section>
    </article>
  );
}

export default Payments;
