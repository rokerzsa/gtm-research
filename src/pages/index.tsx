import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="GTM Research Library"
      description="Research on how companies build, change and take their businesses to market."
    >
      <main className={styles.main}>
        <section className="container">
          <p className={styles.eyebrow}>Company strategy case studies</p>
          <Heading as="h1" className={styles.title}>
            Go-to-market, examined over time.
          </Heading>
          <p className={styles.subtitle}>
            Research on how companies found customers, built
            distribution, and changed their go-to-market.
          </p>
          <div className={styles.library}>
            <div>
              <p className={styles.kicker}>Featured research</p>
              <Heading as="h2" className={styles.bookTitle}>
                HackerRank: GTM strategy, evolution and current bets
              </Heading>
              <p className={styles.bookDescription}>
                How candidate practice became an employer business, how
                community and hiring workflows connect, and what Chakra
                changes in the AI era.
              </p>
            </div>
            <Link
              className="button button--primary button--lg"
              to="/docs/projects/PRJ-0001-hackerrank-gtm-history/book/"
            >
              Read the case study
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
