import styles from "./ImageBanner.module.scss";

type Props = {
  imageSource: string;
  width: string;
  height: string;
};

const ImageBanner = ({ imageSource, height, width }: Props): JSX.Element => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: "url(" + imageSource + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        width
      }}
    ></div>
  );
};

export default ImageBanner;
