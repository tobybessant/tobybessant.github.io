import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>Toby Bessant</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <a href="/contact">Contact</a>
      <a href="/CV">CV</a>
    </div>
  );
}
