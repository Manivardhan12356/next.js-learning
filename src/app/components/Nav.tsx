// components/Nav.tsx

"use client";
import Link from "next/link";
import { projects } from "../data/project";

export default function Nav() {
  return (
    <nav className="space-x-4">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="text-blue-500 hover:underline"
        >
          {project.name}
        </Link>
      ))}
    </nav>
  );
}
