import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroBanner() {
  
  return (
    <div className={styles.hero} data-theme="dark">
    <div className={styles.heroInner}>
    <center>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <span
          className={styles.heroTitleTextHtml}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: '&nbsp;土豆<b>飞升</b>&nbsp;'
          }}
          />
        </Heading>
        
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
          游玩
          </Link>
        </div>
        </center>
    </div>
    </div>
  );
}

function SeasonBanner() {
  return (
    <div className={styles.seasonBanner}>
      <div className={styles.seasonBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="/blog/s18"
          className={styles.seasonBannerTitleText}>
          18 周目: Ascension
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            现已{' '}
            <b>
                开放
              {' '}
            </b>
            。
          </div>
        </div>
      </div>
    </div>
  );
}

function ServerAddressBanner() {
  return (
    <div
    className={clsx(styles.addressBanner, styles.addressBannerDark)}
    data-theme="dark">
    <img
          src="https://api.mcstatus.io/v2/widget/java/upt.curiousers.org?dark=true"
          style={{ height: '60%' }}
        />
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      description="PotatoNetwork">
        <SeasonBanner />
      <main>
        <HeroBanner />
        <ServerAddressBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
