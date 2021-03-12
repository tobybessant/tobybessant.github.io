import styles from "./Showcase.module.scss";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";
import { IShowcaseProps } from "./Showcase.props";

export default function Showcase({ projects }: IShowcaseProps): JSX.Element {
  return (
    <div>
      <h3>Some of my favourite projects...</h3>
      <div className={styles.showcaseItems}>
        {projects.map(i => (
          <ShowcaseItem project={i} key={i.title} />
        ))}
      </div>
    </div>
  );
}
