import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '免费开放',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        我们从2019年开始作为公益服务器开放，没有付费特权，且任何人都能加入。
      </>
    ),
  },
  {
    title: '完整（目前还不是）的 Wiki',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        我们有一份关于Potato的完整 Wiki，包括会教你如何连接服务器。
      </>
    ),
  },
  {
    title: '公益',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        玩家的捐款（非强制）是我们服务器唯一的收入来源，也是让服务器保持运行的原因。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
