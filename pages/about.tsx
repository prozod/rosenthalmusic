import Navbar from '@components/navbar.component';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Rosenthal Music | Home</title>
      </Head>

      <section className="">
        <Navbar />
        <footer>Rosenthal Music OÜ © 2022</footer>
      </section>
    </>
  );
};

export default About;
