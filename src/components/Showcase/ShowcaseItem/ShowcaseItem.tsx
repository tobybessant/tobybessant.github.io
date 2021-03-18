import styles from "./ShowcaseItem.module.scss";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { IProject } from "../../../types/project.interface";

type Props = {
  project: IProject;
};

const ShowcaseItem = (props: Props): JSX.Element => {
  const router = useRouter();

  const openProject: MouseEventHandler<HTMLDivElement> = (): void => {
    router.push("/projects/" + props.project.slug);
  };

  return (
    <div className={styles.showcaseItem} onClick={openProject}>
      <div
        className={styles.itemImgContainer}
        style={{ backgroundImage: "url(" + props.project.imageSrc + ")", backgroundSize: "cover" }}
      ></div>
      <div className={styles.itemText}>
        <div className={styles.itemTitle}>{props.project.title}</div>
        <div className={styles.itemTags}>{props.project.tags.join(", ")}</div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
