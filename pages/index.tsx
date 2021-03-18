import Head from "next/head";
import Landing from "../src/components/Landing/Landing";
import Header from "../src/components/Header/Header";
import Showcase from "../src/components/Showcase/Showcase";
import { GetStaticProps } from "next";
import projects from "../data/projects";
import { IProject } from "../src/types/project.interface";

interface IIndexProps {
  favouriteProjects: IProject[];
}

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: { favouriteProjects: projects.filter(p => p.favourite) }
  };
};

export default function Home({ favouriteProjects }: IIndexProps) {
  return (
    <div className="app">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Toby Bessant | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"></meta>
      </Head>
      <Header />
      <Landing />
      <Showcase projects={favouriteProjects} />
    </div>
  );
}
