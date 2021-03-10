import * as styles from "./Showcase.module.scss";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";
// import * as items from "../../mock-data/showcase-items.json";

export default function Showcase(): JSX.Element {
  return (
    <div className={styles.showcaseItem}>
      <h3>Some of my favourite projects...</h3>
      <div className={styles.showcaseItems}>
        {/* {items.data.map(i => (
          <ShowcaseItem title={i.title} key={i.title} />
        ))} */}
      </div>
    </div>
  );
}
