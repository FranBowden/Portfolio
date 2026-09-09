import skillData from "../Data/skillData.json";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

const Skills = () => {
  return (
    <div className="pb-[60px]" id="skills">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-primary flex flex-col gap-10 sm:gap-16 items-center justify-center">
        <Reveal y={20}>
          <h2 className="font-display cursor-default text-4xl sm:text-5xl font-semibold text-primary">
            My Skill Set
          </h2>
        </Reveal>
        <Stagger
          delay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 w-full"
        >
          {skillData.map((skillCategory, index) => (
            <StaggerItem key={index} className="h-full">
              <Card className="flex h-full flex-col cursor-default p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/[0.05]">
                <h3 className="font-mono text-sm font-medium text-comment mb-4">
                  <span className="text-muted">// </span>
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
};

export default Skills;
