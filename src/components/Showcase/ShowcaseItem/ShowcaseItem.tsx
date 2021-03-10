interface IShowcaseItemProps {
  title: string;
  imageSrc?: string;
}

import "./ShowcaseItem.scss";

export default function ShowcaseItem(props: IShowcaseItemProps): JSX.Element {
  return (
    <div className="showcase-item">
      <div className="item-img"></div>
      <div className="item-title">{props.title}</div>
    </div>
  );
}
