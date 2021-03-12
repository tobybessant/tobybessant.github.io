import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

export const getStaticProps: GetStaticProps<any> = async () => {
  const router = useRouter();
  const { slug } = router.query;

  return {
    props: { slug }
  };
};

export default function Project({ slug }: any) {
  return <div>{slug} !</div>;
}
