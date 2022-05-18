// native
import Image from "next/image";
// styles + icons
import styles from "@styles/about_page.module.scss";
// components
import Footer from "@components/footer/footer.component";
import NavbarMobile from "@components/navbar_mobile/navbar_mobile.component";
import Navbar from "@components/navbar.component";
import { useQueryDataCollection } from "@hooks/useQueryData";
import Button from "@components/button/button.component";
import { motion } from "framer-motion";
import SEO from "@components/SEO/seo.component";

const About = () => {
  const { data } = useQueryDataCollection<"about">("about");
  const imageAbout = `https:${data?.items[0]?.fields.picture.fields.file.url}`;

  return (
    <>
      <SEO
        title="Rosenthal Music | About"
        description="More details about me, who am I and what I do."
        image=""
      />

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
              type: "tween",
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
                type: "tween",
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
                  type: "tween",
                },
              }}
            >
              {data?.items[0] == undefined ? (
                <p>Loading...</p>
              ) : (
                <div className={styles.image}>
                  <Image
                    src={imageAbout == undefined ? "/" : imageAbout}
                    alt="sander rosenthal image"
                    layout="intrinsic"
                    loading="lazy"
                    width={500}
                    height={500}
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
                  type: "tween",
                },
              }}
            >
              <div
                className={styles.content_wrapper_containers_right_paragraphs}
              >
                <p>{data?.items[0].fields.description1}</p>
                <p>{data?.items[0].fields.description2}</p>
                <p>{data?.items[0].fields.description3}</p>
              </div>
              <motion.div
                className={styles.content_wrapper_containers_right_buttons}
                initial={{ opacity: 0, x: -150, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.25,
                    type: "tween",
                  },
                }}
              >
                <Button
                  href="https://www.linkedin.com/in/sander-rosenthal-3594a423b/"
                  target="_blank"
                  outline
                  rel="noopener noreferrer"
                  text="LinkedIn"
                />
                <Button
                  href="https://www.instagram.com/rosenthal.sander/"
                  outline
                  target="_blank"
                  text="Instagram"
                  rel="noopener noreferrer"
                />
                <Button
                  href="https://open.spotify.com/artist/3jR3AXo118TEdHlAWUNhwE?si=uDJOML9BQRakfeJt8YM7wA"
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
