    import react from "react";

    export default function ProjectCard({title, description, image}) {
        return (
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3>className="text-xl font-bold mb-2"{title}</h3>
            <p>{description}</p>
              </div>
        );
    }
        