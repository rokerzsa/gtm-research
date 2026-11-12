import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {researchBooks, bookRoute} from '../data/researchLibrary';
import styles from './index.module.css';

export default function Home(): ReactElement {
  return (
    <Layout title="GTM Research Library" description="Research on how companies build, change and take their businesses to market.">
      <main className={styles.main}>
        <section className="container">
          <p className={styles.eyebrow}>Company strategy case studies</p>
          <Heading as="h1" className={styles.title}>Go-to-market, examined over time.</Heading>
          <p className={styles.subtitle}>Research on how companies found customers, built distribution, and changed their go-to-market.</p>
          {researchBooks.map((book) => (
            <div key={book.project} className={styles.library}>
              <div>
                <p className={styles.kicker}>{book.featured ? 'Featured research' : 'Company research'}</p>
                <Heading as="h2" className={styles.bookTitle}>{book.title}</Heading>
                <p className={styles.bookDescription}>{book.description}</p>
              </div>
              <Link className="button button--primary button--lg" to={bookRoute(book)} aria-label={`Read ${book.label} case study`}>Read the case study</Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
