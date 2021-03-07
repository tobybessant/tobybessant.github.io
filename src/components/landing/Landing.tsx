import Showcase from "../Showcase/Showcase";
import "./Landing.scss";

function Landing(): JSX.Element {
  return (
    <div className="landing">
      <div className="intro">
        <h1>Hello! 👋</h1>
        <p>
          My name is <b>Toby</b>, I&apos;m a Software Engineer based in London.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <Showcase />
    </div>
  );
}
export default Landing;
