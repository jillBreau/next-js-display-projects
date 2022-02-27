import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

const Home = ({ projectNames }: { projectNames: Array<string>}) => {
  return (
    <Layout home>
      <Head>
        <title>Display Projects</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {projectNames.map((projectName) => {
            return (
              <Link href={`/projects/${projectName}`}>
                <a className={styles.card}>
                  <h2>{projectName}</h2>
                </a>
              </Link>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{ projectNames: Array<string>}> = async () => {

  const response = await fetch('https://pm25.lass-net.org/API-1.0.0/project/all/');
  const data = await response.text();
  const projectNames = data.split("\n").filter((projectName) => projectName.length);

  return {
    props: {
      projectNames,
    }
  };
};

export default Home;
