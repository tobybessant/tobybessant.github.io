import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>Toby Bessant</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/CV">
        <a>CV</a>
      </Link>
    </div>
  );
};

export default Nav;
