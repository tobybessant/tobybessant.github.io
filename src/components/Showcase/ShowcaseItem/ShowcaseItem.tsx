import * as styles from "./ShowcaseItem.module.scss";
import { IShowcaseItemProps } from "./ShowcaseItem.props";

export default function ShowcaseItem(props: IShowcaseItemProps): JSX.Element {
  return (
    <div className={styles.showcaseItem}>
      <div className={styles.itemImg}></div>
      <div className={styles.itemTitle}>{props.title}</div>
    </div>
  );
}
