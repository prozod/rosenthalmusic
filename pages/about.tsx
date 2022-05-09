// native
import Head from 'next/head';
import Image from 'next/image';
// styles
import styles from '@styles/about_page.module.scss';
// components
import Footer from '@components/footer/footer.component';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Navbar from '@components/navbar.component';
import { useQueryDataCollection } from '@hooks/useQueryData';
import Button from '@components/button/button.component';
import { motion } from 'framer-motion';

const About = () => {
  const { data } = useQueryDataCollection('about');
  const imageAbout = `https:${data?.items[0]?.fields.picture.fields.file.url}`;

  return (
    <>
      <Head>
        <title>Rosenthal Music | About</title>
      </Head>

      <section className={styles.bodyWrapper}>
        <Navbar />
        <NavbarMobile />
        <motion.div
          className={styles.content_wrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.25,
              type: 'tween',
            },
          }}
        >
          <motion.div
            className={styles.content_wrapper_topbar}
            initial={{ opacity: 0, x: 150, scale: 0.98 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.25,
                type: 'tween',
              },
            }}
          >
            <p>{data?.items[0].fields.title}</p>
            <span></span>
          </motion.div>
          <div className={styles.content_wrapper_containers}>
            <motion.div
              className={styles.content_wrapper_containers_left}
              initial={{ opacity: 0, x: -150, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.25,
                  type: 'tween',
                },
              }}
            >
              {data?.items[0] == undefined ? (
                <p>Loading...</p>
              ) : (
                <div className={styles.image}>
                  <Image
                    src={imageAbout == undefined ? '/' : imageAbout}
                    alt="sander rosenthal image"
                    layout="intrinsic"
                    loading="lazy"
                    width={850}
                    height={550}
                  />
                </div>
              )}
            </motion.div>
            <motion.div
              className={styles.content_wrapper_containers_right}
              initial={{ opacity: 0, x: 150, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.25,
                  type: 'tween',
                },
              }}
            >
              <p>
                {data?.items[0].fields.paragraph.content[0].content[0].value}
              </p>
              <motion.div
                className={styles.content_wrapper_containers_right_buttons}
                initial={{ opacity: 0, x: -150, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.25,
                    type: 'tween',
                  },
                }}
              >
                <Button
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  outline
                  rel="noopener noreferrer"
                  text="Instagram"
                />
                <Button
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  outline
                  target="_blank"
                  text="Twitter"
                  rel="noopener noreferrer"
                />
                <Button
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  outline
                  text="Spotify"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </section>
    </>
  );
};

export default About;
