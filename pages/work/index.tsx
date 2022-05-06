// native
import Image from 'next/image';
import Link from 'next/link';
// costums
import { useQueryDataCollection } from 'src/hooks/useContentData';
// styles
import styles from '@styles/work_page.module.scss';
//components
import Navbar from '@components/navbar.component';
import Footer from '@components/footer/footer.component';
import { AnimatePresence, motion } from 'framer-motion';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Head from 'next/head';

const container = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function WorkPage() {
  const { data } = useQueryDataCollection('work');

  return (
    <>
      <Head>
        <title>Rosenthal Music | Discography</title>
      </Head>
      <section className={styles.bodyWrapper}>
        <Navbar />
        <NavbarMobile />
        <div className={styles.contentWrapper}>
          <h1>Discography</h1>
          <motion.section
            className={styles.cards}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence exitBeforeEnter>
              {data?.items.map((item) => {
                return (
                  <Link
                    href={`/work/${item.sys.id}`}
                    passHref
                    key={item.sys.id}
                  >
                    <motion.div
                      className={styles.cards__cardImage}
                      data-song-name={item?.fields.songTitle}
                      whileTap={{ scale: 1.05 }}
                    >
                      <Image
                        alt="song or album art cover"
                        src={`https:${item.fields.songCover?.fields.file.url}`}
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </AnimatePresence>
          </motion.section>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default WorkPage;
