import { projects } from "@/app/data/project";

type Props = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) return <h1>Project not found</h1>;

  return <h1>Project: {project.name}</h1>;
}
