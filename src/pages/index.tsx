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
          <Link className="button button--primary" to="/blog/potato-anvil">
          铁砧工艺模组服 (1.20.1)
          </Link>
          <Link className="button button--info" href="https://portal.curiousers.org/events/potato-s21.html">
          整合包下载
          </Link>
        </div>
        <p style={{color: 'white'}}>[*]截图来自: 2023-06-26 S17</p>
    </div>
    </div>
  );
}

function SeasonBanner() {
  return (
    <div className={styles.seasonBanner}>
      <div className={styles.seasonBannerTitle}>
        {'🔮\xa0'} 当前开放：
        <Link
          to="/blog/potato-anvil"
          className={styles.seasonBannerTitleText}>
          铁砧工艺模组服
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            {' '}
            <b> Minecraft 1.20.1 Forge 
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
          src="https://api.mcstatus.io/v2/widget/java/ac.curiousers.org?dark=true"
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