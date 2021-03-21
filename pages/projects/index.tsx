import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import React from "react";
import { IProject } from "../../src/types/project.interface";
import ProjectsList from "../../src/components/ProjectsList/ProjectsList";
import { ProjectService } from "../../src/services/project.service";

type Props = {
  projects: IProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: IProject[] = await ProjectService.getProjects();

  return {
    props: { projects: projects }
  };
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Projects;
