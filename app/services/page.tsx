"use client";
import Image from "next/image";
import {
  Code2,
  Palette,
  Layers,
  Smartphone,
  Search,
  Wrench,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  size: "small" | "medium" | "large";
}
const services: Service[] = [
  {
    id: 1,
    title: "AI Engineering",
    icon: <Palette className="text-green-500 w-10 h-10" />,
    description:
      "AI-driven solutions that automate workflows and boost productivity. I build LLM apps, chatbots, and custom AI tools tailored to business needs.",
    size: "medium",
  },
  {
    id: 2,
    title: "Full Stack Development",
    icon: <Code2 className="text-green-500 w-10 h-10" />,
    description:
      "End-to-end development for modern, scalable applications. I combine Next.js, Node.js, and MongoDB to deliver clean UIs, secure APIs, and smooth backend workflows.",
    size: "large",
  },
  {
    id: 3,
    title: "UI / UX Architect",
    icon: <Layers className="text-green-500 w-10 h-10" />,
    description:
      "Creating visually engaging and user-friendly designs with a strong focus on flow and consistency. Every interface feels clean, intuitive, and enjoyable to use.",
    size: "small",
  },
  {
    id: 4,
    title: "Mobile App Development",
    icon: <Smartphone className="text-green-500 w-10 h-10" />,
    description:
      "Building cross-platform mobile apps with React Native & Flutter. I focus on clean layouts, responsive components, and stable app architecture.",
    size: "medium",
  },
  {
    id: 5,
    title: "SEO Optimization",
    icon: <Search className="text-green-500 w-10 h-10" />,
    description:
      "Improving website ranking with technical SEO, speed optimization, and structured content. The goal is sustainable visibility and stronger organic growth.",
    size: "small",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    icon: <Wrench className="text-green-500 w-10 h-10" />,
    description:
      "Providing long-term support with regular updates, security checks, and performance improvements. I ensure everything runs smoothly and reliably.",
    size: "medium",
  },
];




export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#0f1115] text-white px-6 lg:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-extrabold 
        text-gray-800/20 leading-none mb-6 text-center">
          SERVICES
        </h1>

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-12 text-center">
          <span className="text-green-500">What I can do for you</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-15">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#1a1c20] rounded-2xl p-6 shadow-md hover:shadow-green-500/10 
              transition-all duration-300 border border-transparent 
              hover:border-green-500/30 cursor-pointer"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side Image */}
       
      </div>
    </section>
  );
}
