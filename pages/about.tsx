// native
import Head from 'next/head';
import Image from 'next/image';
// styles
import styles from '@styles/about_page.module.scss';
// components
import Footer from '@components/footer/footer.component';
import NavbarMobile from '@components/navbar_mobile/navbar_mobile.component';
import Navbar from '@components/navbar.component';
import { useQueryDataCollection } from '@hooks/useContentData';
import Button from '@components/button/button.component';

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
        <div className={styles.content_wrapper}>
          <div className={styles.content_wrapper_topbar}>
            <p>{data?.items[0].fields.title}</p>
            <span></span>
          </div>
          <div className={styles.content_wrapper_containers}>
            <div className={styles.content_wrapper_containers_left}>
              {data?.items[0] == undefined ? (
                <p>Loading...</p>
              ) : (
                <div className={styles.image}>
                  <Image
                    src={imageAbout == undefined ? '/' : imageAbout}
                    layout="intrinsic"
                    loading="lazy"
                    width={850}
                    height={550}
                  />
                </div>
              )}
            </div>
            <div className={styles.content_wrapper_containers_right}>
              <p>
                {data?.items[0].fields.paragraph.content[0].content[0].value}
              </p>
              <div className={styles.content_wrapper_containers_right_buttons}>
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
