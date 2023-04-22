import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Donates from '@site/src/components/Donates';
import Donors, {type DonatesItem} from '@site/src/data/donors';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './donate.module.css';

function DonateHeader() {
    return (
      <section className="margin-top--lg margin-bottom--lg text--center">
        <Heading as="h1">您的捐助十分重要</Heading>
        <p>Potato 的全部运营成本都来自玩家的捐助。我们目前<b>只公开了</b>爱发电渠道的捐助。</p>
        <p>如果您在留言中留下了您的 GitHub 用户名（用于展示头像），您的捐助将会被展示在这里。</p>
        <Link className="button button--primary" to='https://afdian.net/a/curiousers'>
            通过 爱发电 捐助
        </Link>
      </section>
    );
  }

function DonorsSection() {
    const donateColumns: DonatesItem[][] = [[], [], []];
    Donors.filter((card) => card.showOnHomepage).forEach((card, i) =>
      donateColumns[i % 3]!.push(card),
    );
  
    return (
      <div className={clsx(styles.section, styles.sectionAlt)}>
        <div className="container">
          <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
            捐助名单
          </Heading>
          <div className={clsx('row', styles.tweetsSection)}>
            {donateColumns.map((donateItems, i) => (
              <div className="col col--4" key={i}>
                {donateItems.map((card) => (
                  <Donates {...card} key={card.url} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }



export default function Donate(): JSX.Element {
    return (
      <Layout title='捐助'>
        <main className="margin-vert--lg">
          <DonateHeader />
          <DonorsSection />
        </main>
      </Layout>
    );
  }