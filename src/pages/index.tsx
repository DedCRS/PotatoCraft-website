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
          __html: '超越<b>界限</b>'
          }}
          />
        </Heading>
        
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/current-season">
          文档
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
          to="/blog/s16"
          className={styles.seasonBannerTitleText}>
          17 周目: Superar Barrera
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            现已升级{' '}
            <b>
                Minecraft 1.20 (Java Edition) + 1.20.0 (Bedrock Edition)
              {' '}
            </b>
            ！
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
    <iframe width='860' height='240' src="https://api.mcstatus.io/v2/widget/java/upt.curiousers.org?dark=true"></iframe>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`超越界限`}
      description="PotatoNetwork">
      <main>
        <HeroBanner />
        <ServerAddressBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
