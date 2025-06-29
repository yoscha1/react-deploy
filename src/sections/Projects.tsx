import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CRTA from "@/assets/images/CRTA.png"
import predictive from "@/assets/images/predictive.png"
import eWPT from "@/assets/images/eWPT.png"
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "CyberWarfare Labs",
    year: "2025",
    title: "Certified Red Team Analyst (CRTA)",
    results: [
      { title: "Red Teaming" },
      { title: "Active Directory Penetration Testing" },
      { title: "Kerberos" },
    ],
    link: "https://cyberwarfare.live/product/red-team-analyst-crta/",
    image: CRTA,
  },
  {
    company: "INE",
    year: "2024",
    title: "Web Application Penetration Tester (eWPT)",
    results: [
      { title: "Red Teaming" },
      { title: "Web Application Analysis and Inspection" },
      { title: "Manual Exploitation" },
    ],
    link: "https://security.ine.com/certifications/ewpt-certification/",
    image: eWPT,
  },
  {
    company: "Chulalongkorn University",
    year: "2022",
    title: "Interactive Exam Preparation Based on Natural Language Processing for Question Analysis",
    results: [
      { title: "Predictive Exam Paper Generation" },
      { title: "Interactive Web Application" },
      
    ],
    link: "https://github.com/leilaigl/ml-exam-paper-analysis",
    image: predictive,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Explore my tech world" title="Featured Items" description="Projects, Certifications, and other Digital Experiences" />
        <div className="flex flex-col md:mt-20 mt-10 gap-20 sticky top-0">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
