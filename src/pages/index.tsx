import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="GTM Research Library"
      description="Evidence-linked historical case studies on go-to-market strategy."
    >
      <main className={styles.main}>
        <section className="container">
          <p className={styles.eyebrow}>Historical case studies</p>
          <Heading as="h1" className={styles.title}>
            Go-to-market, examined over time.
          </Heading>
          <p className={styles.subtitle}>
            Evidence-linked research on how companies found customers, built
            distribution, and changed their go-to-market.
          </p>
          <div className={styles.library}>
            <div>
              <p className={styles.kicker}>Featured research</p>
              <Heading as="h2" className={styles.bookTitle}>
                HackerRank: A Historical GTM Case Study
              </Heading>
              <p className={styles.bookDescription}>
                InterviewStreet’s early products, HackerRank’s developer
                community, employer assessment, and the evidence behind each
                growth claim.
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
