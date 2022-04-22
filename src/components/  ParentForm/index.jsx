import React from 'react';
import styles from './styles.module.scss';

function ParentForm() {
  return (
    <article>
      <section className={styles.container}>
        <div />
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll
          update you as soon as a share becomes available in your area!
        </p>
        <form>
          <input type="text" id="name" name="name" placeholder="Your name" />
          <input type="text" id="email" name="email" placeholder="Your email" />
          <button type="button">Send</button>
        </form>
      </section>
    </article>
  );
}

export default ParentForm;
