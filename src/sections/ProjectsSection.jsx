    // src/sections/ProjectsSection.jsx
    import React, { useEffect, useState } from "react";
    import { fetchProjects, fetchAsset } from "../utils/api";
    import ProjectCard from "../components/ProjectCard";

    export default function ProjectsSection() {
        const [projects, setProjects] = useState([]);

        useEffect(() => {
            fetchProjects()
                .then((data) =>
                    setProjects(
                        data.map((p) => ({
                            ...p,
                            image: fetchAsset(p.image)
                        }))
                    )
                )
                .catch(console.error);
        }, []);

        if (!projects.length) return <p>Loading projects...</p>;

        return (
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
    </section>
  );
}
