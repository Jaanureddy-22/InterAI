import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>I</span>
        <span>INTERA</span>
      </div>

      <div className={styles.navLinks}>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </div>

      <div className={styles.actions}>
        <Link to="/auth" className={styles.login}>
          Login
        </Link>

        <Link to="/auth" className={styles.navButton}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;