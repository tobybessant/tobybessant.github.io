import Head from "next/head";
import Header from "../../src/components/Header/Header";
import { readdirSync } from "fs";
import { resolve } from "path";
import { IProject } from "../../src/types/project.interface";
import { Md } from "../../src/types/md.type";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from "next";

type Props = {
  project: IProject;
  html: string;
};

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const fileNames: string[] = readdirSync(resolve("content/_projects"));
  const paths = fileNames.map(name => ({
    params: { slug: name.substr(0, name.indexOf(".")) }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const content: Md<IProject> = await import(`../../content/_projects/${params.slug}.md`).catch(
    () => null
  );

  return {
    props: { project: content.attributes, html: content.html }
  };
};

const Project: NextPage<Props> = ({ project: attributes, html }) => {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | {attributes.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Project;
