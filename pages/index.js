import React from "react";
import styles from "./index.module.scss";
import Logo from "../components/logo/logo";

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
            <h2 className={styles.mainHeading}>Explore</h2>
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
              <div className={styles.briefLeft}>
                <h2 className={styles.mainHeading}>Go where you want</h2>
                <p className={styles.briefLeft__text}>
                  An impedit principes sit. Eam omnium nusquam constituam et,
                  dolorum salutatus mel eu. Nullam urbanitas disputando ne vim,
                  graece definitiones est ei.
                </p>

                <a className={styles.learnMoreButton} href="#">
                  <span>
                    <img
                      className={styles.learnMoreButton__arrow}
                      src="icons/caret-right.svg"
                      alt="Right arrow"
                    />
                  </span>
                  Learn more
                </a>
                <div className={styles.briefLeft__pictures}>
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-1.jpg"
                    alt="Profile Picture"
                  />
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-2.jpg"
                    alt="Profile Picture"
                  />
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-3.jpg"
                    alt="Profile Picture"
                  />
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-4.jpg"
                    alt="Profile Picture"
                  />
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-5.jpg"
                    alt="Profile Picture"
                  />
                  <img
                    className={styles.briefLeft__picture}
                    src="imgs/profile-picture-6.jpg"
                    alt="Profile Picture"
                  />
                </div>
              </div>
              <div className={styles.briefRight}>
                <h2 className={styles.mainHeading}>Discover your true self</h2>
                <p className={styles.briefRight__text}>
                  Pro te partem erroribus conceptam, consul evertitur moderatius
                  cum eu, quo purto ludus accusamus an. Eos iuvaret suscipit
                  vulputate no, mel no regione eligendi.
                </p>
                <a className={styles.learnMoreButton}>
                  <img
                    className={styles.learnMoreButton__arrow}
                    src="icons/caret-right.svg"
                    alt="Right arrow"
                  ></img>{" "}
                  Learn More
                </a>
                <div className={styles.briefRight__claims}>
                  <p className={styles.briefRight__claimsFact}>
                    25,000,000+{" "}
                    <span className={styles.briefRight__claimsText}>
                      Users to date
                    </span>
                  </p>
                  <p className={styles.briefRight__claimsFact}>
                    92%{" "}
                    <span className={styles.briefRight__claimsText}>
                      Rebook rate
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionPersonalizations}>
          <div className={styles.sectionPersonalizations__header}>
            <h2 className={styles.mainHeading}>Discover</h2>
            <h3 className={styles.sectionPersonalizations__headerText}>
              Find exactly what you are looking for
            </h3>
          </div>
          <div className={styles.sectionPersonalizations__containerForBoxes}>
            <div className={styles.sectionPersonalizations__box}>
              <img
                src="imgs/personalize-1.jpg"
                alt="Oceanside landscape"
                className={styles.sectionPersonalizations__image}
              />
            </div>
            <div className={styles.sectionPersonalizations__box}>
              <h2 className={styles.mainHeading}>Harness</h2>
              <h4 className={styles.sectionPersonalizations__boxHeading}>
                Realize greater potential
              </h4>
              <p className={styles.sectionPersonalizations__boxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at augue quam. Fusce est risus, varius ac congue sit amet,
                consequat tristique metus. Pellentesque leo vulputate fermentum
                vitae nunc pretium leo tempor mollis.
              </p>
              <a href="#" className={styles.buttonPrimary}>
                Get Started
              </a>
            </div>
            <div className={styles.sectionPersonalizations__box}>
              <h2 className={styles.mainHeading}>Empower</h2>
              <h4 className={styles.sectionPersonalizations__boxHeading}>
                Adjust for more everything
              </h4>
              <p className={styles.sectionPersonalizations__boxText}>
                Curabitur eget enim ac velit cursus iaculis sit amet luctus
                neque. Class aptent taciti sociosqu ad leo vulputate fermentum
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum vel lectus sit amet tellus.
              </p>
              <a href="#" className={styles.buttonPrimary}>
                Get Started
              </a>
            </div>
            <div className={styles.sectionPersonalizations__box}>
              <img
                src="imgs/personalize-2.jpg"
                alt="Snowy landsape"
                className={styles.sectionPersonalizations__image}
              />
            </div>
            <div className={styles.sectionPersonalizations__box}>
              <img
                src="imgs/personalize-3.jpg"
                alt="Yellowstone landscape"
                className={styles.sectionPersonalizations__image}
              />
            </div>
            <div className={styles.sectionPersonalizations__box}>
              <h2 className={styles.mainHeading}>Empower</h2>
              <h4 className={styles.sectionPersonalizations__boxHeading}>
                Enhance your life experience
              </h4>
              <p className={styles.sectionPersonalizations__boxText}>
                Hendrerit mattis. Mauris gravida lacinia lacus, non tincidunt
                nunc egestas eu. Pellentesque vehicula nisl non lectus blandit
                scelerisque. Curabitur lacinia sapien risus, id lobortis odio
                placerat in. Nullam ultrices elit.
              </p>
              <a href="#" className={styles.buttonPrimary}>
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className={styles.sectionFeatures}>
          <div className={styles.container}>
            <div className={styles.sectionFeatures__header}>
              <h2 className={styles.mainHeading}>Feature Breakdown</h2>
              <h3 className={styles.sectionFeatures__headerText}>
                Encourage that one thing to come true
              </h3>
            </div>

            <div className={styles.features}>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/device-mobile.svg"
                    alt="Phone icon"
                    className={styles.featureBox__icon}
                  ></img>
                  24/7 Mobile Access
                </h5>
                <p className={styles.featureBox__text}>
                  Integer sed molestie arcu. Fusce accumsan, felis at rhoncus
                  aliquet, turpis mi aliquet.
                </p>
              </div>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/plus-circle.svg"
                    alt="Plus-circle icon"
                    className={styles.featureBox__icon}
                  ></img>
                  All work guaranteed
                </h5>
                <p className={styles.featureBox__text}>
                  Ipsum felis et nulla. Integer accumsan, mi quis consectetur
                  suscipit. 
                </p>
              </div>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/trend-up.svg"
                    alt="Trend icon"
                    className={styles.featureBox__icon}
                  ></img>
                  Fast returns
                </h5>
                <p className={styles.featureBox__text}>
                  Duis dignissim placerat posuere. Suspendisse eu blandit neque.
                  Morbi quis ultricies purus, nec.
                </p>
              </div>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/lightning.svg"
                    alt="Lightning icon"
                    className={styles.featureBox__icon}
                  ></img>
                  Hot deals
                </h5>
                <p className={styles.featureBox__text}>
                  Pellentesque tincidunt, nunc eu tempus viverra, nisl magna
                  euismod nunc, et pretium metus enim.
                </p>
              </div>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/user.svg"
                    alt="User icon"
                    className={styles.featureBox__icon}
                  ></img>
                  Future influencers
                </h5>
                <p className={styles.featureBox__text}>
                  Eu mollis urna pulvinar lacinia. Mauris in aliquam dui, ac
                  feugiat erat. Aenean non.
                </p>
              </div>
              <div className={styles.featureBox}>
                <h5 className={styles.featureBox__header}>
                  <img
                    src="icons/chat-circle.svg"
                    alt="Chat circle"
                    className={styles.featureBox__icon}
                  ></img>
                  Focused on Discretion
                </h5>
                <p className={styles.featureBox__text}>
                  In hac habitasse platea dictumst. Vivamus sollicitudin id erat
                  auctor aliquet. Proin.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
