import Link from "next/link";
import { IProject } from "../../../types/project.interface";
import Tag from "../../Shared/Tag/Tag";
import styles from "./ProjectItem.module.scss";

type Props = {
  project: IProject;
};

const ProjectItem = ({ project }: Props): JSX.Element => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className={styles.projectItem}>
        <h4>{project.title}</h4>
        <p>I am the description for the project, perhaps a one line intro.</p>
        <div className={styles.tags}>
          {project.tags.map(t => (
            <Tag tagLabel={t} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
