"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  size: "small" | "medium" | "large";
  imageinner: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "AmericaScores Bay Area",
    image: "/Soocer1.png",
    imageinner: "/sooceriner.png",
    description:
      "A mobile coaching platform offering a secure space for different affiliations to register. Students can view scheduled sessions, receive personalized instruction, and share progress updates with parents. The platform fosters engagement, ensures accountability, and enhances learning outcomes for every student.",
    size: "large",
  },
  {
    id: 2,
    name: "Centraleyes",
    image: "/outercent.png",
    imageinner: "/innercent.png",
    description:
      "A digital security platform providing real-time cloud-based insights into cyber risk compliance. It consolidates data to help organizations identify vulnerabilities and enhance overall cyber resilience. The platform ensures regulatory compliance and supports proactive risk management strategies.",
    size: "large",
  },
  {
    id: 3,
    name: "Fork",
    image: "/forouter.png",
    imageinner: "/Forkinner.png",
    description:
      "An AI-powered career guidance platform that helps users navigate professional paths. Fork matches users with roles and training opportunities tailored to their goals and market needs. It provides career insights, skill development resources, and personalized recommendations for success.",
    size: "large",
  },
  {
    id: 4,
    name: "Peaque",
    imageinner: "/Peinner.png",
    image: "/Peouter.png",
    description:
      "A unique book reading platform combining a vast library with interactive fan content. Users can read, create, and share content while engaging with a vibrant literary community. Peaque encourages creativity, social interaction, and a deeper appreciation for literature.",
    size: "medium",
  },
  {
    id: 5,
    name: "CRYPTO WIZAD",
    imageinner: "/crinner.png",
    image: "/crouter.png",
    description:
      "Custom libraries were created for dashboards to streamline processes. The platform captures user interactions, enabling real-time display, analysis, and historical tracking for insights. This approach supports data-driven decision making and continuous performance improvement.",
    size: "medium",
  },
  {
    id: 6,
    name: "One Mind",
    imageinner: "/oninner.png",
    image: "/onouter.png",
    description:
      "An innovative platform using Avatar AI to provide a personalized digital assistant. It enhances productivity by performing tasks and offering assistance tailored to individual user needs. The application transforms daily workflows and creates a unique interactive experience for every user.",
    size: "large",
  },
  {
    id: 7,
    name: "CAMELEON",
    imageinner: "/cainner.png",
    image: "/camouter.png",
    description:
      "A web app that empowers music fans and artists to record live audio from performances. Users can capture fleeting moments and store them securely in the cloud for unlimited playback. The platform also enables sharing and collaboration, creating a dynamic community for music enthusiasts.",
    size: "medium",
  },
  {
    id: 8,
    name: "FAIRYHOMES",
    imageinner: "/fairyinner.png",
    image: "/fairyouter.png",
    description:
      "A real estate platform enabling users to customize searches for apartments or houses. Advanced filters and user-friendly interfaces provide a seamless and tailored property search experience. Users can easily explore options, compare properties, and make informed decisions about their ideal living space.",
    size: "large",
  },
   {
    id: 9,
    name: "Society for Vascular Surgery",
    imageinner: "/SVC inner.png",
    image: "/SVS outer.png",
    description:"The Vascular Education and Self-Assessment Program (VESAP6) is an online self-study tool developed by the Society for Vascular Surgery (SVS).It offers over 600 multiple-choice questions with detailed explanations and references across vascular surgery and endovascular therapy topics.VESAP6 supports lifelong learning, exam preparation , MOC requirements, and RPVI credentialing. Users can earn up to 102 AMA PRA Category 1 CME credits through comprehensive modules.",
    size: "medium",
  },
 
   {
    id: 10,
    name: "CAPRA",
    imageinner: "/capra inner1.png",
    image: "/capra outer.png",
    description:"The Vascular Education and Self-Assessment Program (VESAP6) is an online self-study tool developed by the Society for Vascular Surgery (SVS).It offers over 600 multiple-choice questions with detailed explanations and references across vascular surgery and endovascular therapy topics.VESAP6 supports lifelong learning, exam preparation , MOC requirements, and RPVI credentialing. Users can earn up to 102 AMA PRA Category 1 CME credits through comprehensive modules.",
    size: "medium",
  },
];



export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heightClasses = {
    small: "h-48 sm:h-56",
    medium: "h-64 sm:h-72",
    large: "h-80 sm:h-96",
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[#0f1115] text-white px-6 sm:px-10 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] font-extrabold
        text-gray-600 leading-none mb-4 text-center"
        >
          PROJECTS
        </h1>

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center mb-14">
          <span className="text-green-500">Some of my recent work</span>
        </h2>

        {/* Masonry Projects Grid */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer rounded-xl overflow-hidden break-inside-avoid ${
                heightClasses[project.size]
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
              transition-opacity flex items-center justify-center"
              >
                <p className="text-white text-lg sm:text-xl font-semibold text-center">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1b1f24] rounded-xl w-full max-w-md p-6 relative border border-green-900/30 shadow-lg shadow-green-500/10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-green-400 text-2xl cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Image */}
            <Image
              src={selectedProject.imageinner}
              alt={selectedProject.name}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-contain w-full h-52"
            />

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-2 text-center">
              {selectedProject.name}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm text-justify leading-relaxed ">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
