import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
    <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <span
          className={styles.heroTitleTextHtml}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: '由<b>社区驱动</b>的</br>Minecraft </br><b>服务器</b>。&nbsp'
          }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--info" href="https://portal.curiousers.org/events/potato-s23.html">
          模组包下载
          </Link>
        </div>
        <p style={{color: 'white'}}>[*]截图来自: 2025-02-08 S22</p>
    </div>
    </div>
  );
}

function SeasonBanner() {
  return (
    <div className={styles.seasonBanner}>
      <div className={styles.seasonBannerTitle}>
        {'🔮\xa0'}
        <Link
          to="/blog/the-solstice-convergence"
          className={styles.seasonBannerTitleText}>
          第 23 周目: 夏至盛会
        </Link>
        &nbsp;即将开启！
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            {' '}
            <b> 支持 Minecraft 1.21.6 原版 
            </b>
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
        <HomepageFeatures />
        <ServerAddressBanner />
      </main>
    </Layout>
  );
}