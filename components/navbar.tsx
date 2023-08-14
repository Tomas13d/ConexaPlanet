import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`navbar navbar-expand-xxl ${styles.navbar} navbar-dark`}>
        <a href={"/"} className={`noLink ${styles.hasLink}`}>
          <h2 className={styles.planet}>CONEXA PLANET</h2>
          <p className={styles.sings}>𑻨𑻳𑻮𑻳𑻣𑻴𑻢𑻳𑻷𑻨𑻳𑻤𑻴𑻧𑻴𑻷𑻭𑻳𑻦𑻴𑻦</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${styles.options}`}
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            {["ciudadanos", "naves", "planetas", "peliculas"].map((item) => (
              <li className="nav-item" key={item}>
                <a className={`nav-link ${styles.navText}`} href={`/#${item}`}>
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
