import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import React from "react";
import { IProject } from "../../src/types/project.interface";
import { readdirSync } from "fs";
import { resolve } from "path";
import { IProjectAttributes } from "../../src/types/project-attributes.interface";
import { Md } from "../../src/types/md.type";
import ProjectsList from "../../src/components/ProjectsList/ProjectsList";

type Props = {
  projects: IProject[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fileNames: string[] = readdirSync(resolve("content/_projects"));

  const projects: IProject[] = [];

  for (const fileName in fileNames) {
    const content: Md<IProjectAttributes> = await import(
      `../../content/_projects/${fileName}.md`
    ).catch(() => null);

    if (content) {
      projects.push({
        slug: fileName,
        title: content.attributes.title,
        tags: content.attributes.tags ?? [],
        favourite: !!content.attributes.favourite,
        imageSrc: ""
      });
    }
  }

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
