    import React, {useEffect, useState} from "react";
    import { fetchAbout } from "../utils/api";

    export default function AboutSection() {
        const [about, setAbout] = useState(null);
        
        useEffect(() => {
            fetchAbout().then(setAbout).catch(console.error);
        }, []);

        if (!about) return <p>Loading...</p>;

        return ( 
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>{about.bio}</p>
            <div className="mt-4 flex space-x-4">
                {about.socials.map((s) => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.platform}
                    </a>
                ))}
            </div>
        </section>
        );
    }
