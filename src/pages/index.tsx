import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
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
          __html: '&nbsp;<b>土豆网络</b>&nbsp;'
          }}
          />
        </Heading>
        
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
          游玩
          </Link>
          <Link className="button button--secondary" href="/docs/crossplay">
          跨平台游戏
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
        {'🚀\xa0'}
        <Link
          to="/blog/s18"
          className={styles.seasonBannerTitleText}>
          19 周目: OverSpeeding
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            2024/02/04{' '} <b> 现已开放 </b> 。
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
      description="PotatoCraft">
        <SeasonBanner />
      <main>
        <HeroBanner />
        <ServerAddressBanner />
      </main>
    </Layout>
  );
}
