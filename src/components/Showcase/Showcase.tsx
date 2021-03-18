import { IProject } from "../../types/project.interface";
import styles from "./Showcase.module.scss";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";

type Props = {
  projects: IProject[];
};

const Showcase = ({ projects }: Props): JSX.Element => {
  return (
    <div>
      <h2>Project Showcase</h2>
      <div className={styles.showcaseItems}>
        {projects.map(i => (
          <ShowcaseItem project={i} key={i.title} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
