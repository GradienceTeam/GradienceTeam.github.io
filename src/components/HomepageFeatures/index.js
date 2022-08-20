import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/welcome.svg').default,
    description: (
      <>
        Gradience offer a simple way to customize
        any colours of Adwaita.
      </>
    ),
  },
  {
    title: 'Material Color',
    Svg: require('@site/static/img/welcome-monet.svg').default,
    description: (
      <>
        With Gradience, you can generate your own preset from your background using Google Material Color 3.
      </>
    ),
  },
  {
    title: 'More than Adwaita',
    Svg: require('@site/static/img/welcome-plugins.svg').default,
    description: (
      <>
        Extend Gradience with plugins and customize GDM, Firefox Gnome, GNOME Shell...
        You can also create your own plugin for customizing everything you want.
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
