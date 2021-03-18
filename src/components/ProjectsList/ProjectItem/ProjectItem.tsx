import { IProject } from "../../../types/project.interface";
import styles from "./ProjectItem.module.scss";

type Props = {
  project: IProject;
};

const ProjectItem = ({ project }: Props): JSX.Element => {
  return (
    <div>
      <h2>Project Showcase</h2>
      <div className={styles.projectItem}></div>
    </div>
  );
};

export default ProjectItem;
