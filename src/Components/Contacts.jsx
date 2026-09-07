import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiSolidCoffee,
} from "react-icons/bi";
import { FaCat } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import SocialLink from "./ui/SocialLink";

const Contacts = () => {
  return (
    <div className="mx-auto w-full min-h-[20vh]" id="contact">
      <Reveal
        y={50}
        delay={0.1}
        duration={0.5}
        className="mx-auto flex items-center justify-center flex-col gap-8 sm:gap-12 px-4"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            Let's build something together
          </h2>
          <p className="text-zinc-400 max-w-md">
            Have a role, a project, or just want to say hi? My inbox is open.
          </p>
        </div>

        <Button
          href="mailto:francescalbowden@gmail.com"
          size="lg"
          className="hover:scale-105"
        >
          Contact me here
        </Button>

        <div className="flex space-x-5">
          <SocialLink
            href="https://github.com/FranBowden"
            icon={BiLogoGithub}
            size="lg"
            label="Francesca Bowden's GitHub profile"
          />
          <SocialLink
            href="https://www.linkedin.com/in/francescabowden"
            icon={BiLogoLinkedin}
            size="lg"
            label="Francesca Bowden's LinkedIn profile"
          />
          <SocialLink
            href="https://www.instagram.com/franbowden_/"
            icon={BiLogoInstagram}
            size="lg"
            label="Francesca Bowden's Instagram profile"
          />
        </div>

        <footer className="w-full pb-10 pt-4 border-t border-white/10">
          <div className="cursor-default text-zinc-400 text-center text-sm pt-6 flex items-center justify-center gap-2">
            © 2026 Francesca Bowden
            <FaCat
              title="approved by cats"
              className="text-xs hover:text-accent transition-colors duration-300"
            />
            <BiSolidCoffee
              title="fuelled by coffee"
              className="text-xs hover:text-accent transition-colors duration-300"
            />
          </div>
        </footer>
      </Reveal>
    </div>
  );
};

export default Contacts;
