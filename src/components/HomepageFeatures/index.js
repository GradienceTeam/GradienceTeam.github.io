import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    <img src="/img/welcome.svg"/>
    description: (
      <>
        Gradience offer a simple way to customize
        any colours of Adwaita.
      </>
    ),
  },
  {
    title: 'Material Color',
    <img src="/img/monet.svg"/>
    description: (
      <>
        With Gradience, you can generate your own preset from your background using Google Material Color 3.
      </>
    ),
  },
  {
    title: 'More than Adwaita',
    <img src="/img/plugins.svg"/>
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
