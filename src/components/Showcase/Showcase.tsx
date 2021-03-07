import "./Showcase.scss";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";

export default function Showcase(): JSX.Element {
  return (
    <div className="showcase">
      <h2>Some of my favourite projects...</h2>
      <div className="showcase-items">
        <ShowcaseItem title="Hello" />
      </div>
    </div>
  );
}
