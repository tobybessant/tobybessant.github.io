import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import projects from "../../data/projects";
import { IProjectPageProps } from "../../src/types/Projects.props";

export const getStaticProps: GetStaticProps<IProjectPageProps> = async () => {
  return {
    props: { projects: projects }
  };
};

export default function Projects({ projects }: IProjectPageProps) {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
