import Head from "next/head";
import Header from "../../src/components/Header/Header";
import { readdirSync } from "fs";
import { resolve } from "path";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from "next";
import { Md } from "../../src/types/MD";

interface IProps {
  attributes: IProjectAttributes;
  html: string;
}
interface IProjectAttributes {
  title: string;
  date: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const fileNames: string[] = readdirSync(resolve("content/_projects"));
  const paths = fileNames.map(name => ({
    params: { slug: name.substr(0, name.indexOf(".")) }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IProps> = async ({
  params
}): Promise<GetStaticPropsResult<IProps>> => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const content: Md<IProjectAttributes> = await import(
    `../../content/_projects/${params.slug}.md`
  ).catch(() => null);

  return {
    props: { attributes: content.attributes, html: content.html }
  };
};

const Project: NextPage<IProps> = ({ attributes, html }) => {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | {attributes.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{attributes.title} !</div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Project;
