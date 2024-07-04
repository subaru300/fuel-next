import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Main from '@/components/Main/Main';
import Weather from '@/components/Weather/Weather';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <Main>
        <Weather />
      </Main>
      <Footer />
    </div>
  );
}
