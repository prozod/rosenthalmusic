import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.menu_textlogo}>ROSENTHAL</h1>
      <ul className={styles.menu_anchorlinks}>
        <li className={styles.menu_anchorlinks_link}>Home</li>
        <li className={styles.menu_anchorlinks_link}>About</li>
        <li className={styles.menu_anchorlinks_link}>Work</li>
        <li className={styles.menu_anchorlinks_link}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
