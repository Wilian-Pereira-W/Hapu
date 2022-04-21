import React from 'react';
import styles from './styles.module.scss';
import ImageHeader from '../../assets/ImageHeader.svg';
import Logo from '../../assets/Badge.svg';
import PlayButton from '../../assets/PlayButton.svg';

function Header() {
  return (
    <header className={styles.container}>
      <img src={Logo} className={styles.logo} alt="logo da Hapu" />
      <nav>
        <a href="/">Create Your Nanny Share</a>
        <a href="/">Browse Shares</a>
        <a href="/">Our Story</a>
      </nav>
      <section className={styles.headerBtn}>
        <button type="button" className={styles.headerBtnBecome}>Become a Nanny Share Host</button>
        <button type="button" className={styles.headerBtnSignIn}>Sign In</button>
      </section>
      <article className={styles.headerArticle}>
        <section>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home,
            nanny and costs and create new flexible, affordable solutions in childcare.
          </p>
          <button type="button">
            <img src={PlayButton} alt="Play button" />
          </button>
          <a href="/">See hapu in action (27 seconds)</a>
        </section>
        <section className={styles.sectionNanny}>
          <img width="200" height="200" src={ImageHeader} alt="gerenciar seu compartilhamento de babá" />
        </section>
      </article>
    </header>
  );
}

export default Header;
