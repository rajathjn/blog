import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Side projects',
    Svg: require('@site/static/img/developerActivity.svg').default,
    description: (
      <>
        I sometimes have a random flash of brilliance and try to create something cool.
        I try my best to document them here or follow me on GitHub to see the latest project that I've made public 🧐.
      </>
    ),
  },
  {
    title: 'How I think',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I am a firm believer that <b>Our Mind is for having Ideas not for Keeping them</b>.
        I am someone who is always up for a challenge 💪.
      </>
    ),
  },
  {
    title: 'Reach out to me',
    Svg: require('@site/static/img/address_image.svg').default,
    description: (
      <>
        If you have any queries or want to collaborate on something cool, feel free to reach out to me.
        I am always open to new ideas and collaborations 🤝.
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
        <Heading as="h3">{title}</Heading>
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
