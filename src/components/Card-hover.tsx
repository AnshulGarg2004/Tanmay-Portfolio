import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "NextJS",
        description:
            "A React framework for building server-rendered and statically generated web applications with ease",
        link: "",
    },
    {
        title: "TypeScript",
        description: "A superset of JavaScript that adds static typing for safer, more maintainable code.",
        link: "",
    },
    {
        title: "Node Js",
        description:
            "A JavaScript runtime that allows running JS code on the server for building scalable backend applications.",
        link: "",
    },
    {
        title: "React",
        description:
            "A JavaScript library for building interactive and reusable user interface components.",
        link: "",
    },
    {
        title: "MongoDb",
        description:
            "A popular NoSQL database that stores data in flexible, JSON-like documents.",
        link: "",
    },
    {
        title: "Express",
        description:
            "A minimal, fast Node.js web framework for building APIs and web servers.",
        link: "",
    },
    {
        title: "UI/UX design",
        description:
            "The practice of designing user interfaces and experiences to make digital products intuitive and enjoyable.",
        link: "",
    },
    {
        title: "C",
        description: "A foundational procedural programming language known for its efficiency and close-to-hardware control.",
        link: "",
    },
    {
        title: "C++",
        description:
            "A powerful, high-performance programming language used for system/software development and game programming.",
        link: "",
    },

];
