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
              __html: '<b>长期开放</b> 的 Minecraft <b>生存</b> 服务器。 完全<b>免费</b>，稳定运行。'
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/current-season">
            文档
          </Link>
          <Link className="button button--info" to="https://drive.curiousers.org/Backups/Potato/client/PotatoPowered/">
            整合包下载
          </Link>
          
        </div>
      </div>
    </div>
  );
}

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="/blog/s16-launched"
          className={styles.topBannerTitleText}>
          16 周目: PotatoPowered
        </Link>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.topBannerDescription}>
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
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - CSUB`}
      description="Description will go into a meta tag in <head />">
      <TopBanner />
      <main>
      <HeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
