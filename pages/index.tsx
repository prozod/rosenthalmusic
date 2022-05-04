//native
import type { NextPage } from 'next';
import Head from 'next/head';
//components
import Navbar from '@components/navbar.component';
import Hero from '@components/hero/hero.component';
//styles
import styles from '@styles/index_page.module.scss';
//animation
import { AnimatePresence } from 'framer-motion';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
//particles

const Home: NextPage = () => {
  return (
    <AnimatePresence>
      <div className={styles.index}>
        <Head>
          <title>Rosenthal Music | Home</title>
        </Head>

        <section className={styles.bodyWrapper}>
          <Navbar />
          <NavbarMobile />
          <Hero />
          <footer>Rosenthal Music OÜ 2022</footer>
        </section>
      </div>
    </AnimatePresence>
  );
};

export default Home;
