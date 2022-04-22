import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

function ParentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nome: name,
      email,
    };
    axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', data)
      .then(() => {
        setEmail('');
        setName('');
      })
      .catch((error) => {
        setEmail('');
        setName('');
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  return (
    <article>
      <section className={styles.container}>
        <div />
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll
          update you as soon as a share becomes available in your area!
        </p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Your email"
            required
          />
          <button type="submit">Send</button>
        </form>
        <div />
      </section>
    </article>
  );
}

export default ParentForm;
