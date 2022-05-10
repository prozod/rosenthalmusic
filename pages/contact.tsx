// native
import React from 'react';
// styles and motion
import { ChatAltIcon } from '@heroicons/react/outline';
import styles from '@styles/contact_page.module.scss';
import { motion } from 'framer-motion';
// components and hooks
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Footer from '@components/footer/footer.component';
import Navbar from '@components/navbar.component';
import Button from '@components/button/button.component';
import SEO from '@components/SEO/seo.component';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Want to work together? Have any questions? Contact me."
        image=""
      />
      <div className={styles.bodyWrapper}>
        <Navbar />
        <NavbarMobile />
        <div className={styles.contact_container}>
          <motion.div
            className={styles.contact_container_hero}
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
            <h1>Contact Me</h1>
            <p>Want to work together? Just get in touch below!</p>
          </motion.div>
          <div className={styles.contact_container_body}>
            <motion.p
              className={styles.contact_container_body_email}
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
              <Button
                href="mailto: rosenthalmusic@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ChatAltIcon className={styles.atsymbol} />}
                text="Email me"
              ></Button>
            </motion.p>
            <motion.div
              className={styles.contact_container_body_alt}
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
              <p>or you can find me on... </p>
              <div>
                <a href="https://www.instagram.com/rosenthal.sander">
                  Instagram
                </a>
                <a href="https://linkedin.com">LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
