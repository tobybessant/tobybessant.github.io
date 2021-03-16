import Head from "next/head";
import Header from "../../src/components/Header/Header";
import projects from "../../data/projects";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map(post => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { slug: params?.slug ?? null }
  };
};

export default function Project({ slug }: any) {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{slug} !</div>
    </div>
  );
}
