import styles from "./Tag.module.scss";

type Props = {
  tagLabel: string;
};

const Tag = ({ tagLabel }: Props): JSX.Element => {
  return <div className={styles.tag}>{tagLabel}</div>;
};

export default Tag;
