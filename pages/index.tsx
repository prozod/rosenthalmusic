import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@components/navbar.component';
import styles from '@styles/index_page.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rosenthal Music | Home</title>
      </Head>

      <body className={styles.bodyWrapper}>
        <Navbar />
        <h1>I MIX SONG U GIB MONE</h1>
        <h2>rosenthalmusic@gmail.com</h2>
        <Image src={`/ag47_sander.webp`} width={400} height={500} />
      </body>
    </>
  );
};

export default Home;
