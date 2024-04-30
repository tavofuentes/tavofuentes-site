import Link from "next/link";
import Panel from "@/components/Panel";
import ExperienceCard from "@/components/ExperienceCard";

const experienceList = [
  {
    title: "Falabella",
    dates: "2020-2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Globant",
    dates: "2020-2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Linio TL",
    dates: "2020-2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Linio SE",
    dates: "2020-2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

const imgBgColors = ["bg-tangerine", "bg-brick", "bg-grass", "bg-olive"];

const ExperiencePanel = () => {
  return (
    <Panel className="bg-forest">
      <div
        className="
          p-3
          md:p-6
          flex flex-col 
          lg:flex-row lg:flex-wrap
          outline1
          "
      >
        {experienceList.map((experienceItem, key) => {
          return (
            <ExperienceCard
              key={key}
              bgColor="bg-eggshell"
              imgBgColor={imgBgColors[key % 4]}
              experienceRecord={experienceItem}
            />
          );
        })}
      </div>
    </Panel>
  );
};

export default ExperiencePanel;
