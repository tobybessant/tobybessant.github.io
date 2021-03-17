import Head from "next/head";
import Landing from "../src/components/Landing/Landing";
import Header from "../src/components/Header/Header";
import Showcase from "../src/components/Showcase/Showcase";
import { GetStaticProps } from "next";
import { IHomeProps } from "../src/types/Home.props";
import projects from "../data/projects";

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  return {
    props: { favouriteProjects: projects.filter(p => p.favourite) }
  };
};

export default function Home({ favouriteProjects }: IHomeProps) {
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
