import styles from "./index.module.scss";
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.navbar}>
        <div className={styles.navbar__company}>
          <img className={styles.navbar__logo} src="icons/airplane-takeoff.svg" alt="Plane icon" />
          <p className={styles.navbar__companyname}>Prestige Services</p>
        </div>
        <nav className={styles.navbar__nav}>
          <ul className={styles.navbar__links}>
            <li className={styles.navbar__link}>
              <Link href="/">
              <a>Home</a>
              </Link>
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

      <main className={styles.container}>
        <section className={styles.sectionTop}>
          <h2 className={styles.mainHeading}>About</h2>
          <h1 className={styles.sectionTop__title}>
            We exist for people like you
          </h1>
          <p className={styles.sectionTop__text}>
            Suscipit blanditiis doloribus eaque amet vel minima placeat animi
            delectus eum ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit officia similique.
          </p>
        </section>
      </main>
    </div>
  );
}
