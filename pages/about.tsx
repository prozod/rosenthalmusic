// native
import Navbar from '@components/navbar.component';
import Head from 'next/head';
// styles
import styles from '@styles/about_page.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>Rosenthal Music | About</title>
      </Head>

      <section className={styles.bodyWrapper}>
        <Navbar />
        <footer>Rosenthal Music OÜ 2022</footer>
      </section>
    </>
  );
};

export default About;
