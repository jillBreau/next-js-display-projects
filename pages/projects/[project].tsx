import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/Project.module.css';
import Layout from '../../components/layout';

type Feed = {
  device_id: string,
  gps_lat: number,
  gps_lon: number,
  timestamp: string
}

const ProjectPage = ({
  entries
}: {
  entries: { name: string, num_of_records: number, feeds: Array<Feed> }
}) => {
  const { name, num_of_records, feeds } = entries;
  return (
    <Layout>
      <div className={styles.body}>
      <h1>{`Project name: ${name}`}</h1>

      <p>{`Number of feed entries: ${num_of_records}`}</p>

      { !!feeds.length &&
        (
          <>
          <p>{`${feeds.length === num_of_records ? 'Feed entries:' : `First ${feeds.length} feed entries:`}`}</p>
          <ol>
            {feeds.map((feed) => {
              return (
                <li className={styles.item}>
                  <ul>
                    <li>{`Device ID: ${feed.device_id}`}</li>
                    <li>{`Latitude: ${feed.gps_lat}`}</li>
                    <li>{`Longitude: ${feed.gps_lon}`}</li>
                    <li>{`Timestamp: ${feed.timestamp}`}</li>
                  </ul>
                </li>
              )
            })}
          </ol>
          </>
        )
      }
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ entries: { num_of_records: number, feeds: Array<Feed> } }> = async ({ params }) => {

  const response = await fetch(`https://pm25.lass-net.org/API-1.0.0/project/${params.project}/latest/`);
  const data = await response.json();
  const { num_of_records, feeds } = data;
  const feedsReduced = feeds.slice(0, Math.min(10, feeds.length));
  const entries = {
    name: params?.project,
    num_of_records,
    feeds: feedsReduced,
  };

  return {
    props: {
      entries,
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch('https://pm25.lass-net.org/API-1.0.0/project/all/');
  const data = await response.text();
  const paths = data.split("\n").filter((projectName) => projectName.length).map(projectName => {
    return {
      params: {
        project: projectName
      }
    }
  });

  return {
    paths,
    fallback: false
  };
};

export default ProjectPage;