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
  return projects.map((p: any) => (
      <Link href="projects/{p.slug}"><a>{p.slug}</a></Link>
    ))};
}
