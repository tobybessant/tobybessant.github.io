interface IShowcaseItemProps {
  title: string;
}

export default function ShowcaseItem(props: IShowcaseItemProps): JSX.Element {
  return <div>{props.title}</div>;
}
