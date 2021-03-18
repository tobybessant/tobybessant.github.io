import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Socials from "./Socials/Socials";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Nav />
      <Socials />
    </div>
  );
};

export default Header;
