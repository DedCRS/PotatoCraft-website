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
          __html: '<b>长期开放</b>的 Minecraft <b>生存</b>服务器。 完全<b>免费</b>，稳定运行。&nbsp'
          }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/current-season">
          文档
          </Link>
          <Link className="button button--info" to="https://drive.curiousers.org/Backups/Potato/client/PotatoPowered/">
          模组包下载
          </Link>
        </div>
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
          to="/blog/s16-launched"
          className={styles.seasonBannerTitleText}>
          16 周目: PotatoPowered
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            现已升级{' '}
            <b>
              <Link to="https://www.minecraft.net/article/minecraft-java-edition-1-19-2">
                Minecraft 1.19.2
              </Link>{' '}
              +{' '}
              <Link to="https://maven.minecraftforge.net/net/minecraftforge/forge/1.19.2-43.2.0/forge-1.19.2-43.2.0-changelog.txt">
                Forge 43.2.0
              </Link>{' '}
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
    <div className={styles.addressBannerInner}>
        服务器地址：
        <code>
        upt.curiousers.org
        </code>
        <br />Minecraft 1.19.2 Forge
        <br />需要
        <Link to="https://drive.curiousers.org/Backups/Potato/client/PotatoPowered/">
        模组包</Link>
    </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`首页`}
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
