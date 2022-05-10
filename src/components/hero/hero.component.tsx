// hooks and components
import { useQueryDataCollection } from '@hooks/useQueryData';
// native
import Link from 'next/link';
import Image from 'next/image';
// styles + icons + motion
import { motion } from 'framer-motion';
import styles from './hero.module.scss';

const heroItems = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 100,
    transition: {
      delay: 0.25,
      duration: 0.25,
      staggerChildren: 0.5,
    },
  },
};

const heroItem = {
  initial: {
    y: 50,
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

const imageMotion = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0.9,
    // height: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const Hero = () => {
  const { data } = useQueryDataCollection<'homepage'>('homepage');

  const imageAbout = `https:${data?.items[0]?.fields.image.fields.file.url}`;

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.hero_left}
        variants={heroItems}
        animate="animate"
        initial="initial"
      >
        <motion.p className={styles.hero_left_title} variants={heroItem}>
          {data?.items[0].fields.name}
        </motion.p>
        <motion.p className={styles.hero_left_text} variants={heroItem}>
          {data?.items[0].fields.phrase}
        </motion.p>
        <motion.div className={styles.hero_buttons}>
          <motion.span variants={heroItem}>
            <Link href="/work">See my work</Link>
          </motion.span>
          <motion.span variants={heroItem}>
            <Link href="/about">Who am I?</Link>
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.hero_right}
        variants={imageMotion}
        initial="initial"
        animate="animate"
      >
        {data?.items[0] == undefined ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.image}>
            <Image
              src={imageAbout == undefined ? '/' : imageAbout}
              alt="sander rosenthal image at mixer"
              layout="intrinsic"
              loading="lazy"
              width={850}
              height={550}
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
