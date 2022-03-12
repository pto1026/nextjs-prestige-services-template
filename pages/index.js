import React from "react";
import styles from "./index.module.scss";
import Logo from "../components/logo/logo";
import heroImg from "../public/imgs/exotic_mountain.jpg";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.navbar}>
        <div className={styles.navbar__company}>
          <Logo className={styles.navbar__logo} />
          <p className={styles.navbar__companyname}>Prestige Services</p>
        </div>
        <nav className={styles.navbar__nav}>
          <ul className={styles.navbar__links}>
            <li className={styles.navbar__link}>
              <a href="#">Home</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="#">About</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="#">Contact</a>
            </li>
            <li className={styles.navbar__link}>
              <a href="#">Pricing</a>
            </li>
            <li className={styles.navbar__link}>
              <a className="button-secondary" href="#">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <section className={styles.sectionHero}>
          <div className={styles.container}>
            <h2 className={styles.sectionHero__mainHeading}>Explore</h2>
            <div className={styles.flexed}>
              <div className={styles.headerBox}>
                <h1 className={styles.sectionHero__header}>
                  All your ideal destinations in one spot.
                </h1>
                <p className={styles.sectionHero__headerText}>
                  Lorem ipsum dolor sit amet, eirmod vituperata contentiones at
                  mei, sea no idque solet assentior, cum te errem volumus
                  adipisci.
                </p>
                <div className={styles.sectionHero__buttons}>
                  <a href="#" className={styles.buttonPrimary}>
                    Get Started
                  </a>
                  <a href="#" className="button-secondary">
                    Learn More
                  </a>
                </div>
              </div>
              <div className={styles.imageBox}>
                <img
                  src="imgs/exotic_mountain.jpg"
                  alt="Beautiful green and lushous looking mountain just off the coast of a very blue body of water"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.featuredLogos}>
            <img
              src="icons/logoipsum-logo-6.svg"
              alt="Logo icon"
              className={styles.logo}
            />
            <img
              src="icons/logoipsum-logo-7.svg"
              alt="Logo icon"
              className={styles.logo}
            />
            <img
              src="icons/logoipsum-logo-8.svg"
              alt="Logo icon"
              className={styles.logo}
            />
            <img
              src="icons/logoipsum-logo-9.svg"
              alt="Logo icon"
              className={styles.logo}
            />
          </div>
        </section>

        <section className={styles.sectionBrief}>
          <div className={styles.container}>
            <div className={styles.grid2cols}>
              <div className={styles.briefLeft}>Left</div>
              <div className={styles.briefRight}>Right</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
