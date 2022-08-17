import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Customize Adwaita with ease"
    >
      <div className={styles.hero} data-theme="dark">
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Gradience Logo"
              className={styles.heroLogo}
              src="/img/logo.svg"
              height="200"
              width="200"
            />
            <span
              className={styles.heroTitleTextHtml}>
              // eslint-disable-next-line react/no-danger
              <b>Customize</b> Adwaita with <b>ease</b>.
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={clsx("button button--primary")}
              to="/docs/intro"
            >
                Get Started
            </Link>
            <Link className={clsx("button button--secondary")} to="/plugins">
                Explore plugins
           
            </Link>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=AdwCustomizerTeam&amp;repo=AdwCustomizer&amp;type=star&amp;count=true&amp;size=large"
                width="230"
                height="30"
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
