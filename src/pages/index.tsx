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
          __html: '设想一个</br>由<b>社区驱动</b>的、</br>欢迎所有人的</br>Minecraft <b>服务器</b>。&nbsp'
          }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/current-season">
          加入服务器
          </Link>
          <Link className="button button--info" to="https://drive.curiousers.org/Backups/Potato/client/PotatoPowered/">
          模组包
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
        {'🎉\xa0'}
        <Link
          to="/blog/s20-trailer"
          className={styles.seasonBannerTitleText}>
          20 周目：???
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            支持{' '}
            <b>
              <Link to="https://www.minecraft.net/en-us/article/1-21-update-officially-named-tricky-trials">
                Minecraft 1.21
              </Link>
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
      title={`首页`}
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