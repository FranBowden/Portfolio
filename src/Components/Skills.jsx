import React from "react";
import skillData from "../Data/skillData.json";
import Reveal from "./ui/Reveal";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

const Skills = () => {
  return (
    <div className="pb-[60px]" id="skills">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center">
        <Reveal y={20}>
          <h1 className="font-display cursor-default text-4xl sm:text-5xl font-semibold text-white">
            My Skill Set
          </h1>
        </Reveal>
        <Reveal
          y={30}
          delay={0.3}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {skillData.map((skillCategory, index) => (
            <Card key={index} className="flex flex-col cursor-default p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, i) => (
                  <Tag key={i} variant="skill">
                    {item}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
