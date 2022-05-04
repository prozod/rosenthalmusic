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

function WorkPage() {
  const { data } = useQueryDataCollection('work');
  console.log(data?.items);

  return (
    <section className={styles.bodyWrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <h1>Discography</h1>
        <div className={styles.cards}>
          {data?.items.map((item) => {
            return (
              <div key={item.sys.id} className={styles.cards__cardImage}>
                <Link href={`/work/${item.sys.id}`}>
                  <Image
                    src={`https:${item.fields.songCover?.fields.file.url}`}
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default WorkPage;
