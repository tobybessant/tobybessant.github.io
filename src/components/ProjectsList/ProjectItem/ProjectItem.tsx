import Link from "next/link";
import { IProject } from "../../../types/project.interface";
import styles from "./ProjectItem.module.scss";

type Props = {
  project: IProject;
};

const ProjectItem = ({ project }: Props): JSX.Element => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className={styles.projectItem}>
        <h4>{project.title}</h4>
      </div>
    </Link>
  );
};

export default ProjectItem;
