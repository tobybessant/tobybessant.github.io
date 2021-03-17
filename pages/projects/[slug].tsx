import Head from "next/head";
import Header from "../../src/components/Header/Header";
import { readdirSync } from "fs";
import { resolve } from "path";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";

interface Props extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult<Props>> => {
  const fileNames: string[] = readdirSync(resolve("content/_projects"));
  const paths: { params: Props }[] = fileNames.map(name => ({
    params: { slug: name.substr(0, name.indexOf(".")) }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // dynamically import file contents here
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
