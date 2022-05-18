// components
import Navbar from "@components/navbar.component";
// native
import { useRouter } from "next/router";
// costum hooks
import { useQuerySingleEntry } from "src/hooks/useQuerySingleEntry";
// styles
import styles from "@styles/work_page_slug.module.scss";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "@components/navbar_mobile/navbar_mobile.component";
import Footer from "@components/footer/footer.component";
import { motion } from "framer-motion";
import SEO from "@components/SEO/seo.component";

function SongPage() {
  const route = useRouter();
  const { data } = useQuerySingleEntry(route.asPath.split("/")[2]);

  return (
    <>
      <SEO
        title={`Rosenthal Music | ${data?.fields.songTitle}`}
        description={`More information about ${data?.fields.songTitle}`}
        image={`https:${data?.fields.songCover?.fields.file.url}`}
      />
      <div className={styles.bodyWrapper}>
        <NavbarMobile />
        <Navbar />
        <div className={styles.sections_wrapper}>
          {data !== undefined ? (
            <div className={styles.sections_split}>
              <motion.section
                className={styles.section_left}
                initial={{ opacity: 0, x: -50, scale: 0.98 }}
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
                <Image
                  alt="album or song cover"
                  src={`https:${data.fields.songCover?.fields.file.url}`}
                  layout="intrinsic"
                  width={400}
                  height={400}
                />
                <motion.div
                  className={styles.digitalplatform_wrapper}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.25,
                      type: "tween",
                    },
                  }}
                >
                  {data.fields.songPlatformSpotify && (
                    <Link href={data.fields.songPlatformSpotify}>
                      <button className={styles.digitalplatform_button}>
                        Spotify
                      </button>
                    </Link>
                  )}
                  {data.fields.songPlatformApple && (
                    <Link href={data.fields.songPlatformApple}>
                      <button className={styles.digitalplatform_button}>
                        Apple Music
                      </button>
                    </Link>
                  )}
                </motion.div>
              </motion.section>
              <motion.section
                className={styles.section_right}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
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
                <div>
                  <h1>{data.fields.songTitle}</h1>
                  {/* MIXING */}
                  {data.fields.songInfo.mixing && (
                    <p className={styles.details_field}>
                      Mixing:
                      {data.fields.songInfo.mixing.map((eng: string) => {
                        const comparePos =
                          data.fields.songInfo?.mixing[
                            data.fields.songInfo.mixing.length - 1
                          ];

                        {
                          return eng === comparePos ? (
                            <span>&nbsp;{eng}</span>
                          ) : (
                            <span>&nbsp;{eng},&nbsp;</span>
                          );
                        }
                      })}
                    </p>
                  )}
                  {/* MASTERING */}
                  {data.fields.songInfo?.mastering && (
                    <p className={styles.details_field}>
                      Mastering:
                      {data.fields.songInfo.mastering.map((eng: string) => {
                        const comparePos =
                          data.fields.songInfo?.mastering[
                            data?.fields.songInfo.mastering.length - 1
                          ];

                        {
                          return eng === comparePos ? (
                            <span>&nbsp;{eng}</span>
                          ) : (
                            <span>&nbsp;{eng},</span>
                          );
                        }
                      })}
                    </p>
                  )}
                  {/* PRODUCTION */}
                  {data.fields.songInfo?.production && (
                    <p className={styles.details_field}>
                      Production:
                      {data.fields.songInfo.production.map((eng: string) => {
                        const comparePos =
                          data.fields.songInfo?.production[
                            data.fields.songInfo.production.length - 1
                          ];

                        {
                          return eng === comparePos ? (
                            <span>&nbsp;{eng}</span>
                          ) : (
                            <span>&nbsp;{eng},</span>
                          );
                        }
                      })}
                    </p>
                  )}
                  {/* RECORDING */}
                  {data.fields.songInfo?.recording && (
                    <p className={styles.details_field}>
                      Recording:
                      {data.fields.songInfo.recording.map((eng: string) => {
                        const comparePos =
                          data.fields.songInfo?.recording[
                            data.fields.songInfo.recording.length - 1
                          ];

                        {
                          return eng === comparePos ? (
                            <span>&nbsp;{eng}</span>
                          ) : (
                            <span>&nbsp;{eng},</span>
                          );
                        }
                      })}
                    </p>
                  )}
                </div>
                <div className={styles.release_info}>
                  {data.fields.releaseInfo && <p>{data.fields.releaseInfo}</p>}
                </div>
              </motion.section>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SongPage;
