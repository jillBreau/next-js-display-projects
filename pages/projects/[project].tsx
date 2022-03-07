import { GetStaticPaths } from 'next';
import styles from '../../styles/Project.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { first10Entries } from '../../utils/dataTransformations';
import { FC } from 'react';
import { Entries } from '../../types/entries';

type Params = {
	params: {
		project: string
	}
}

const ProjectPage: FC<{ entries: Entries }> = ({
  entries
}) => {
  return (
    <Layout>
      {/* TODO: improve styling */}
      {!!entries
        && (<div className={styles.body}>
          <h1>{`Project name: ${entries.name}`}</h1>
          <p>{`Number of feed entries: ${entries.num_of_records}`}</p>
          { !!(entries.feeds && entries.feeds.length) &&
            (
              <div>
              <p>{`${entries.feeds.length === entries.num_of_records ? 'Feed entries:' : `First ${entries.feeds.length} feed entries:`}`}</p>
              <ol>
                {entries.feeds.map((feed) => {
                  return (
                    <li key={`${feed.device_id} ${feed.timestamp}`} className={styles.item}>
                      <ul>
                        <li>{`Device ID: ${feed.device_id}`}</li>
                        <li>{`Latitude: ${feed.gps_lat}`}</li>
                        <li>{`Longitude: ${feed.gps_lon}`}</li>
                        <li>{'Timestamp: '}<Date dateString={feed.timestamp} /></li>
                      </ul>
                    </li>
                  )
                })}
              </ol>
              </div>
            )
          }
        </div>)
      }
    </Layout>
  );
};

export const getStaticProps = async ({ params }: Params) => {

  const response = await fetch(`https://pm25.lass-net.org/API-1.0.0/project/${params?.project}/latest/`);
  const data = await response.json();
  const { project } = params;

  const entries = first10Entries(data, project);

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