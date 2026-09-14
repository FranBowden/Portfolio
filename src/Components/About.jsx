import { BiLogoGithub, BiEnvelope } from "react-icons/bi";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import Button from "./ui/Button";
import TypewriterRole from "./ui/TypewriterRole";
import image from "/Fran.webp";

const ROLES = ["Software Developer", "PHP Developer", "Problem Solver"];

const About = () => {
  return (
    <div
      className="mx-auto max-w-7xl w-full min-h-screen p-4 lg:p-28 flex items-center justify-center scroll-mt-20"
      id="about"
    >
      <Reveal
        y={50}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24 mt-24 md:mt-0"
      >
        <Stagger className="flex flex-col items-center md:items-start justify-center gap-5">
          <StaggerItem>
            <p className="font-mono cursor-default text-sm text-comment">
              <span className="text-muted">$</span> whoami
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-display cursor-default text-6xl md:text-7xl lg:text-8xl font-semibold text-center md:text-left text-primary tracking-tight leading-[0.95]">
              Francesca Bowden
            </h1>
          </StaggerItem>
          <StaggerItem>
            <h2 className="cursor-default text-lg font-light font-mono text-center md:text-left text-accent-text/90">
              <TypewriterRole roles={ROLES} />
              <span
                className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle animate-blink"
                aria-hidden="true"
              />
              <span className="text-muted"> • </span>Based in Bath, UK
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="cursor-default max-w-xl text-base leading-relaxed text-muted text-center md:text-left">
              Hi! I'm Fran, I'm a software developer who builds PHP integrations between
              marketplaces and couriers at work. I graduated in 2025 with First
              Class Honours in Creative Computing at Bath Spa University. I pick
              things up fast and deliver properly. Below is my demonstration of
              my skills and experience.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center gap-4 mt-2">
            <Button href="#projects">View my work</Button>
            <Button
              href="https://github.com/FranBowden"
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub className="text-base" />
              GitHub
            </Button>
            <Button href="mailto:francescalbowden@gmail.com" variant="outline">
              <BiEnvelope className="text-base" />
              Get in touch
            </Button>
          </StaggerItem>
        </Stagger>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-90" />
          <img
            src={image}
            alt="Portrait of Francesca Bowden"
            width="640"
            height="640"
            fetchPriority="high"
            decoding="async"
            className="relative w-[300px] md:w-[360px] lg:w-[380px] rounded-full ring-2 ring-subtle/10 hover:ring-accent/50 hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default About;
