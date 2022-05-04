//native
import type { NextPage } from 'next';
import Head from 'next/head';
//components
import Navbar from '@components/navbar.component';
import Hero from '@components/hero/hero.component';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Footer from '@components/footer/footer.component';
//styles
import styles from '@styles/index_page.module.scss';
//animation
import { AnimatePresence } from 'framer-motion';
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
          <Footer />
        </section>
      </div>
    </AnimatePresence>
  );
};

export default Home;
