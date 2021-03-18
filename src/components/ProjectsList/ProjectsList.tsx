import { IProject } from "../../types/project.interface";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./ProjectsList.module.scss";

type Props = {
  projects: IProject[];
};

const ProjectsList = ({ projects }: Props): JSX.Element => {
  return (
    <div>
      <div className={styles.projectsList}>
        {projects.map(i => (
          <ProjectItem project={i} key={i.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
