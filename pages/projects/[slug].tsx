import Head from "next/head";
import Header from "../../src/components/Header/Header";
import { IProject } from "../../src/types/project.interface";
import { Md } from "../../src/types/md.type";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from "next";
import { ProjectService } from "../../src/services/project.service";
import ImageBanner from "../../src/components/Shared/ImageBanner/ImageBanner";

type Props = {
  project: IProject;
  html: string;
};

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const paths = (await ProjectService.getProjects()).map(project => ({
    params: { slug: project.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const content: Md<IProject> = await ProjectService.loadProjectContent(params.slug as string);

  return {
    props: { project: content.attributes, html: content.html }
  };
};

const Project: NextPage<Props> = ({ project, html }) => {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | {project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ImageBanner imageSource={"/" + project.hero_image} width="100%" height="200px" />
      <h1>{project.title}</h1>
      <div
        style={{ backgroundImage: "url(" + project.hero_image + ")", backgroundSize: "cover" }}
      ></div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Project;
