import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from "../../public/project3.png";
import project4 from "../../public/project4.png";
import project5 from "../../public/project5.png";
import project6 from "../../public/project6.png";
import purrfectHome from "../../public/PurrfectHome.png"
import RWR from "../../public/RWR.png"

export const projectData = [
  {
    id: 1,
    image: purrfectHome,
    title: "Purrfect Home",
    description:
      "A 2D pixel art cat adoption game developed in Unity as my final year project, designed to promote cat adoption and fostering while offering a relaxing experience.",
    link: "https://franbowden.itch.io/purrfect-home",
    technologies: ["Unity", "C#", "Aesprite"],
  },
   {
    id: 2,
    image: RWR,
    title: "Run with Rexy App",
    description:
      "A dinosaur-themed running app designed to motivate people to stay active, compatible with both iOS and Android, and showcased at the Bath Digital Festival.",
    link: "https://www.runwithrexy.co.uk/",
    technologies: ["React Native", "Expo Go", "Firebase"],
  },
  {
    id: 3,
    image: project1,
    title: "Spatial Awareness",
    description:
      "Play as a Janitor on board an intergalactic space cruiser! Your job is to keep the ship functioning by completing as many tasks as possible. ",
    link: "https://github.com/McEw3965/CommercialGames",
    technologies: ["Unity", "Blender", "C#"],
  },
  {
    id: 4,
    image: project2,
    title: "Frosty Trails AR",
    description:
      "Frosty Trails AR is a festive Android AR app where players throw snowballs at a moving snowman, triggering animations and gradually lighting up the christmas tree.",
    link: "https://github.com/FranBowden/FrostyTrails",
    technologies: ["Unity", "Vuforia", "Blender", "C#"],
  },
  {
    id: 5,
    image: project3,
    title: "CryptoTracker App",
    description:
      "CryptoTracker fetches real-time cryptocurrency data via an API, displays market values, and features SwiftUI Charts for visualizing trends.",
    link: "https://github.com/Zac-Jones/CoinTrack",
    technologies: ["Swift"],
  },
  /*
  {
    id: 5,
    image: project5,
    title: "Harry Potter Application",
    description:
      "A wizard handy guide using the 'Potter DB' API. Users can browse potions and spells, save items, view details, and filter results in real time.",
    link: "https://github.com/FranBowden/Harry-Potter-API-Desktop-App/tree/main",
    technologies: ["C++", "PotterDB", "OpenFrameworks"],
  },*/
  {
    id: 6,
    image: project6,
    title: "Parallel Puzzle",
    description:
      "A 2D puzzle platformer where players control two characters in separate worlds, overcoming unique challenges to unlock the portal to the next level.",
    link: "https://franbowden.itch.io/parallelpuzzle",
    technologies: ["C#", "Unity"],
  },
];
