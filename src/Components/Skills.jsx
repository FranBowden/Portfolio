import skillData from "../Data/skillData.json";
import Reveal from "./ui/Reveal";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

const Skills = () => {
  return (
    <div className="pb-[60px]" id="skills">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center">
        <Reveal y={20}>
          <h2 className="font-display cursor-default text-4xl sm:text-5xl font-semibold text-white">
            My Skill Set
          </h2>
        </Reveal>
        <Reveal
          y={30}
          delay={0.3}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {skillData.map((skillCategory, index) => (
            <Card key={index} className="flex flex-col cursor-default p-6">
              <h3 className="font-mono text-sm font-medium text-code-comment mb-4">
                <span className="text-zinc-400">// </span>
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
