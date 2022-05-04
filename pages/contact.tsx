import React from 'react';
import styles from '@styles/contact_page.module.scss';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Footer from '@components/footer/footer.component';
import Navbar from '@components/navbar.component';

const ContactPage = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Navbar />
      <NavbarMobile />
      <Footer />
    </div>
  );
};

export default ContactPage;
