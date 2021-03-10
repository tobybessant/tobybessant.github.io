import "./Header.scss";
import Nav from "./Nav/Nav";
import Socials from "./Socials/Socials";

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <Nav />
      <Socials />
    </div>
  );
}
