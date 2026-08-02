import React from "react";
import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from "react-icons/bi";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import SocialLink from "./ui/SocialLink";
import image from "/Fran.jpg";

const About = () => {
  return (
    <div
      className="mx-auto max-w-7xl w-full min-h-screen p-4 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <Reveal
        y={50}
        delay={0.2}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24 mt-24 md:mt-0"
      >
        <Reveal
          y={20}
          delay={0.4}
          className="flex flex-col items-center md:items-start justify-center gap-5"
        >
          <h1 className="font-display cursor-default text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left text-white tracking-tight">
            Francesca Bowden
          </h1>
          <h3 className="cursor-default text-lg font-light text-center md:text-left text-accent/90">
            Software Developer - Based in Bath, UK
          </h3>
          <p className="cursor-default max-w-xl text-base leading-relaxed text-zinc-400 text-center md:text-left">
            Hi! I'm Fran and I primarily build PHP integrations between
            marketplaces and couriers at work. I graduated in 2025 with First
            Class Honours in Creative Computing at Bath Spa University. I pick
            things up fast and deliver properly. Below is my demonstration of my
            skills and experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Button href="#projects">View my work</Button>
            <Button href="mailto:francescalbowden@gmail.com" variant="outline">
              <BiEnvelope className="text-base" />
              Get in touch
            </Button>
          </div>

          <div className="flex gap-5 mt-1">
            <SocialLink
              href="https://github.com/FranBowden"
              icon={BiLogoGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/francescabowden"
              icon={BiLogoLinkedin}
            />
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-90" />
          <img
            src={image}
            alt="profile-image"
            className="relative w-[280px] md:w-[320px] rounded-full ring-2 ring-white/10 hover:ring-accent/50 hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default About;
