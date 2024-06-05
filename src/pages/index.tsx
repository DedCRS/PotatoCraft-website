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
          <Link className="button button--primary" to="/blog/s20-trailer">
          开服倒计时
          </Link>
          <Link className="button button--info" href="#">
          模组包（链接移除）
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
    <iframe src="https://free.timeanddate.com/countdown/i9eijlms/n33/cf100/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fs200/szw448/szh189/tatS20%20%E5%BC%80%E6%9C%8D%E5%80%92%E8%AE%A1%E6%97%B6/tacfff/tptS20%20%E5%B7%B2%E7%BB%8F%E5%BC%80%E6%9C%8D/tpcfff/matUTC%2B8/macfff/mptUTC%2B8/mpcfff/iso2024-06-26T16:00:00" allowtransparency="true" frameborder="0" width="448" height="189"></iframe>
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