import { motion } from 'framer-motion';
import Button from '@components/button/button.component';
import Image from 'next/image';
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
    scale: 0.2,
    height: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    height: 'auto',
    transition: {
      duration: 0.25,
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.hero_left}
        variants={heroItems}
        animate="animate"
        initial="initial"
      >
        <motion.p className={styles.hero_left_text} variants={heroItem}>
          Music producer, recording, mixing & mastering engineer
        </motion.p>
        <motion.div className={styles.hero_buttons}>
          <motion.span variants={heroItem}>
            <Button text="See my work" />
          </motion.span>
          <motion.span variants={heroItem}>
            <Button text="Who am I?" outline />
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.hero_right}
        variants={imageMotion}
        initial="initial"
        animate="animate"
      >
        <Image
          src={`/ag47_sander.webp`}
          layout="intrinsic"
          width={530}
          height={700}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
