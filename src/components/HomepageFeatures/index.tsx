import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '可靠、稳定',
    description: (
      <>
        运行在值得信赖的中国大陆主机提供商的高端硬件上，确保数据安全性。<a href="rule#5">详细了解</a>我们如何确保服务器安全且文明。
      </>
    ),
  },
  {
    title: '多种验证方式',
    description: (
      <>
        支持正版和 LittleSkin 验证，提供最低加入门槛。
      </>
    ),
  },
  {
    title: '由社区打造',
    description: (
      <>
        Potato 是社区的功劳。我们听取社区的反馈和建议，努力创造最佳体验，并服务于社区。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
