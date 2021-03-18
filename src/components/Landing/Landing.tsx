import styles from "./Landing.module.scss";

const Landing = (): JSX.Element => {
  return (
    <div className={styles.landing}>
      <div className={styles.intro}>
        <h1>Hello! 👋</h1>
        <p>
          My name is <b>Toby</b>, I&apos;m a developer based in London.
        </p>
        <p>
          I have a burning passion for all things web development, i like it lots - currently
          working as a Sofware Engineer at{" "}
          <a href="https://www.greenmangaming.com" target="_blank">
            Green Man Gaming
          </a>
          .
        </p>
        <p>
          Outside of programming, I enjoy cycling and playing guitar. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>
    </div>
  );
};

export default Landing;
