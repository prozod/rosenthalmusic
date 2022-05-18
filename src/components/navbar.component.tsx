import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styles from './navbar.module.scss';

const Navbar = () => {
  const menuItemsRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const router = useRouter();

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
      <h1 className={styles.menu_textlogo}>ROSENTHAL</h1>
      <ul className={styles.menu_anchorlinks} ref={menuItemsRef}>
        <Link href={navLinkItems.home} passHref>
          <li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.home}
          >
            Home
          </li>
        </Link>
        <Link href={navLinkItems.about} passHref>
          <li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.about}
          >
            About
          </li>
        </Link>
        <Link href={navLinkItems.work} passHref>
          <li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.work}
          >
            Work
          </li>
        </Link>
        <Link href={navLinkItems.contact} passHref>
          <li
            className={styles.menu_anchorlinks_link}
            data-item={navLinkItems.contact}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
