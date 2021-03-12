import { GetStaticProps } from "next";
import Link from "next/link";
import projects from "../../data/projects";
import { IProjectPageProps } from "../../src/types/Projects.props";

export const getStaticProps: GetStaticProps<IProjectPageProps> = async () => {
  return {
    props: { projects: projects }
  };
};

export default function Projects({ projects }: IProjectPageProps) {
  return <div>{projects.toString()}</div>;
}
