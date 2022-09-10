import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Translate, {translate} from '@docusaurus/Translate';

import styles from "./index.module.css";

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
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Customize <b>GNOME</b> ecosystem and <b>LibAdwaita</b> with <b>ease</b>',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={clsx("button button--primary")}
              to="/docs/install"
            >
                  <Translate>Get Started</Translate>
            </Link>
            <Link className={clsx("button button--secondary")} to="/presets">
                   <Translate>Explore presets</Translate>
           
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
