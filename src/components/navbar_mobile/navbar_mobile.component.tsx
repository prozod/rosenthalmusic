import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from './navbar_mobile.module.scss';
import { MenuIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

const hamburgerAnimation = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 90,
    transition: {
      duration: 0.15,
    },
  },
};

const menuContainerAnimations = {
  initial: {
    opacity: 0,
    height: '0px',
    padding: '0rem',
  },
  animate: {
    opacity: 100,
    height: 'min-content',
    padding: '2rem',
    transition: {
      duration: 0.15,
      staggerChildren: 0.25,
    },
  },
};
const menuItemAnimation = {
  initial: {
    y: 50,
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const NavbarMobile = () => {
  const menuItemsRef = useRef<any>();
  const hamburgerMenuRef = useRef<any>();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkItems = {
    home: '/',
    about: '/about',
    work: '/work',
    contact: '/contact',
  };

  useEffect(() => {
    const links = menuItemsRef.current.querySelectorAll('li');
    links.forEach((li: HTMLElement) => {
      if (router.pathname === li.dataset.item) {
        li.classList.add(styles.current);
      } else {
        li.classList.remove(styles.current);
      }
    });
  }, [router.pathname]);

  return (
    <div className={styles.menu}>
      <motion.div className={styles.menu_logo_container}>
        <h1 className={styles.menu_textlogo}>ROSENTHAL</h1>
        <motion.span
          variants={hamburgerAnimation}
          initial="initial"
          animate={isMenuOpen ? 'animate' : 'initial'}
        >
          <MenuIcon
            ref={hamburgerMenuRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menu_icon}
          />
        </motion.span>
      </motion.div>
      <motion.ul
        variants={menuContainerAnimations}
        initial="initial"
        animate={isMenuOpen ? 'animate' : 'initial'}
        exit="exit"
        className={styles.menu_anchorlinks}
        ref={menuItemsRef}
      >
        <Link href={navLinkItems.home} passHref>
          <motion.li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.home}
            variants={menuItemAnimation}
          >
            Home
          </motion.li>
        </Link>
        <Link href={navLinkItems.about} passHref>
          <motion.li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.about}
            variants={menuItemAnimation}
          >
            About
          </motion.li>
        </Link>
        <Link href={navLinkItems.work} passHref>
          <motion.li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.work}
            variants={menuItemAnimation}
          >
            Work
          </motion.li>
        </Link>
        <Link href={navLinkItems.contact} passHref>
          <motion.li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.contact}
            variants={menuItemAnimation}
          >
            Contact
          </motion.li>
        </Link>
      </motion.ul>
    </div>
  );
};

export default NavbarMobile;
