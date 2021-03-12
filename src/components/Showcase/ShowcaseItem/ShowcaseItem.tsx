import styles from "./ShowcaseItem.module.scss";
import { IShowcaseItemProps } from "./ShowcaseItem.props";

export default function ShowcaseItem(props: IShowcaseItemProps): JSX.Element {
  return (
    <div className={styles.showcaseItem}>
      <div className={styles.itemImg}></div>
      <div className={styles.itemText}>
        <div className={styles.itemTitle}>{props.project.title}</div>
        <div className={styles.itemTags}>{props.project.tags.join(",")}</div>
      </div>
    </div>
  );
}
