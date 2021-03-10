import styles from "./Nav.module.scss";

export default function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <a href="/">Toby Bessant</a>
      <a href="/">Projects</a>
      <a href="/">Contact</a>
      <a href="/">CV</a>
    </div>
  );
}
