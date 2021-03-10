import "./Showcase.scss";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";
import * as items from "../../mock-data/showcase-items.json";

export default function Showcase(): JSX.Element {
  return (
    <div className="showcase">
      <h3>Some of my favourite projects...</h3>
      <div className="showcase-items">
        {items.data.map(i => (
          <ShowcaseItem title={i.title} key={i.title} />
        ))}
      </div>
    </div>
  );
}
