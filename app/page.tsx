"use client";

import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import WindowLoader from "@/app/components/loader/page";
import Sidebar from "./components/sidebar/page";
import Image from "next/image";
import ServicesSection from "./services/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import { Download, Github, MessageCircle, Phone ,Linkedin,} from "lucide-react";
import { SiUpwork } from "react-icons/si";
import Link from "next/link"
import {
  IoLogoJavascript,

  IoLogoReact,
  IoLogoNodejs,
  IoLogoVue,
  IoCloudOutline,
  IoServerOutline,
} from "react-icons/io5";
import { SiTypescript } from "react-icons/si"; 


export default function HomeSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  //  Green Dots Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const dots: { x: number; y: number; r: number; dx: number; dy: number }[] =
      [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 1.5,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.r * 3
        );
        gradient.addColorStop(0, "rgba(0,255,0,0.9)");
        gradient.addColorStop(1, "rgba(0,255,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const techList = [
    {
      title: "JavaScript",
      icon: IoLogoJavascript,
    },
    { title: "TypeScript", icon: SiTypescript  },
    { title: "React / NextJS", icon: IoLogoReact },
    { title: "Vue / Nuxt", icon: IoLogoVue },
    { title: "Cloud Services", icon: IoCloudOutline },
    { title: "AWS / GCP", icon: IoServerOutline },
    { title: "NodeJS", icon: IoLogoNodejs },
  ];

  return (
    <div className="relative bg-[#0f1115] text-white">
      <WindowLoader duration={1.2} />
      <Sidebar />

      {/*  Landing / Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
        id="home"
        style={{
          backgroundImage: "url('/Landing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        ></canvas>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="text-gray-300">Zohaib</span>{" "}
            <span className="text-white">Arshad</span>
          </h1>

          <p className="text-xl md:text-2xl mt-4">
            I am a{" "}
            <ReactTyped
              strings={[
                "AI Engineer.",
                "Web Developer.",
                "App Developer.",
                "UI/UX Designer.",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
              className="font-semibold text-green-400"
            />
          </p>
        </div>
      </section>

      {/* ABOUT SECTION (Image Right – Content Left) */}
      <section
        id="about"
        className="flex flex-col-reverse lg:flex-row min-h-screen text-white px-6 lg:px-20 py-20"
      >
        {/* LEFT SIDE — TEXT */}
        <div className="lg:w-[60%] mt-10 lg:mt-0 lg:pr-20 lg:ml-14">
          <h1 className="text-5xl font-extrabold text-gray-600 mb-6">
            ABOUT ME
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-500">Hello, I’m Zohaib Arshad,</span> a
            passionate web developer .
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Hello! I’m a passionate developer with over 5 years of intensive
            experience in JavaScript and its modern frameworks like Angular,
            React, and Vue. I have rich experience in website design, building,
            and customization. I love creating clean, modern, and user-friendly
            websites. My expertise includes{" "}
            <span className="text-green-400 font-bold">
              Angular, React, Vue
            </span>{" "}
            and . I am also skilled in backend integration and performance
            optimization. With more than 20 successful projects under my belt,
            my goal is always to deliver efficient and maintainable solutions.{" "}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            {/* <button className="flex items-center gap-2 bg-gray-700 hover:bg-green-500 px-5 py-3 rounded-2xl transition cursor-pointer">
              <Download className="w-5 h-5" />
              Download CV
            </button> */}

            <Link
              href="https://github.com/ZohaibArshad12/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-green-500 p-3 rounded-full cursor-pointer inline-flex"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.upwork.com/freelancers/zohaibarshad19?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-green-500 p-3 rounded-full cursor-pointer inline-flex"
            >
              <SiUpwork className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/zohaib-arshad-83a72613b/"
              className="bg-gray-700 hover:bg-green-500 p-3 rounded-full cursor-pointer inline-flex"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE (Perfect Circle) */}
        <div className="relative w-[220px] h-[220px] lg:w-[360px] lg:h-[360px] mx-auto lg:mx-0 rounded-full overflow-hidden">
          <Image
            src="/image (2).png"
            alt="About me"
            fill
            priority
            className="object-cover rounded-full"
          />
        </div>
      </section>

      {/*  TECH STACK SECTION */}
      <section
        id="tech"
        className="min-h-screen bg-[#0d0f13] text-white px-6 lg:px-20 py-20"
      >
        <h2 className="text-gray-600 font-extrabold text-5xl mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Services.png"
              alt="Tech Stack"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col items-center lg:items-start ">
            <h3 className="text-3xl font-bold text-green-400 mb-8">
              Technologies I Use
            </h3>

            {/* ICON LIST WITHOUT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {techList.map((tech, i) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center gap-4 hover:text-green-400 transition-all"
                  >
                    {/* ICON */}
                    <Icon className="w-12 h-12 text-green-400 transition" />

                    {/* TEXT */}
                    <div className="flex flex-col justify-center text-center lg:text-left">
                      <h4 className="text-gray-400 font-semibold text-lg">
                        {tech.title === "JavaScript"
                          ? "TypeScript"
                          : tech.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesSection />
      </section>

      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
