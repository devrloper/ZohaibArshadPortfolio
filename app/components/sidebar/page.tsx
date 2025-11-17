"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  UserCircle,
  Briefcase,
  FolderKanban,
  PhoneCall,
  Mail,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  Cpu,
} from "lucide-react";
import { SiUpwork } from "react-icons/si";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", icon: <Home size={22} />, label: "Home" },
    { href: "#about", icon: <UserCircle size={22} />, label: "About" },
    { href: "#tech", icon: <Cpu size={22} />, label: "Tech Stack" },
    { href: "#services", icon: <Briefcase size={22} />, label: "Services" },
    { href: "#projects", icon: <FolderKanban size={22} />, label: "Projects" },
    { href: "#contact", icon: <PhoneCall size={22} />, label: "Contact" },
  ];

  const socialItems = [
    {
      href: "https://github.com/ZohaibArshad12/",
      icon: <Github size={20} />,
      label: "Github",
    },
    {
      href: "https://www.upwork.com/freelancers/zohaibarshad19?mp_source=share",
      icon: <SiUpwork size={20} />,
      label: "Upwork",
    },
    {
      href: "mailto:zohaibarshad2237@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
  ];

  return (
    <>
      {/*TOGGLE BUTTON*/}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 bg-green-600 text-white p-2 rounded-md lg:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-gray-300 flex flex-col justify-between
        transition-all duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:w-16 xl:w-20`}
      >
        {/* TOP SECTION */}
        <div>
          <div className="flex items-center justify-center mt-6 mb-10">
            <div className="bg-green-600 text-white text-lg font-bold px-3 py-2 rounded">
              Z
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col items-center gap-6 sm:gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="hover:text-green-500 flex items-center justify-center transition-colors duration-200"
                  aria-label={item.label}
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {item.icon}
                </Link>

                {/* Tooltip */}
                <span
                  className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 
                  group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap hidden lg:block"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-col items-center gap-5 mb-8">
          {socialItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="hover:text-green-500 transition-colors duration-200"
              >
                {item.icon}
              </Link>

              {/* Tooltip (Desktop only) */}
              <span
                className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 
                group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap hidden lg:block"
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* BACKDROP (for Mobile + Tablet)*/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
