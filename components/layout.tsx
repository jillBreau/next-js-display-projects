import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({
  home,
  children,
}: {
  home?: boolean,
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Fetch and display a list of projects"
        />
      </Head>
      <header>
        <div className={`${styles.hero} ${home ? styles.heroHome : styles.heroProject}`}>
          {!home && <h1 className={styles.back}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </h1>}
          <h1 className={styles.title}>
            {`Display project${home ? 's' : ' info'}`}
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
};
