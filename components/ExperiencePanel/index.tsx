import Link from "next/link";
import Panel from "@/components/Panel";
import ExperienceCard from "@/components/ExperienceCard";

import linio01 from "../../public/Linio-01.png";
import linio02 from "../../public/Linio-02.png";
import linio03 from "../../public/Linio-03.png";
import globant01 from "../../public/Globant-01.png";

const experienceList = [
  {
    title: "Falabella",
    role: "Senior Software Engineer",
    dates: "2020-2023",
    description:
      "Collaboration with checkout product owners and designers for UI/UX and performance improvements. Development and maintenance of PCI DSS compliant payment method integrations.",
    techList: "PHP, Symfony, PostgreSQL, Pub/Sub, PCI DSS, AngularJS, Docker",
    image: linio03,
  },
  {
    title: "Globant",
    role: "Software Engineer",
    dates: "2018-2020",
    description:
      "Development of wealth management web applications for Santander México banking group. Delivery of micro frontends for cross-platform environments.",
    techList: "Svelte, ReactJS, NodeJS, SASS, Bootstrap, Webpack, SCRUM",
    image: globant01,
  },
  {
    title: "Linio",
    role: "Team Leader",
    dates: "2016-2018",
    description:
      "Collaboration with architecture and DevOps teams for solution design and integration. Roadmap definitions in coordination with stakeholders. Onboarding of new team members. Agile development lifecycle for the frontend team.",
    techList:
      "Agile, Scrum, Docker, PHP, Symfony, Javascript, AngularJS, MySQL, Redis",
    image: linio01,
  },
  {
    title: "Linio",
    role: "Software Engineer",
    dates: "2015-2016",
    description:
      "Multi region e-commerce marketplace frontend refactor. Frontend journeys from home page to checkout. Payment method and in-house CMS integrations. Development of APIs for mobile clients.",
    techList:
      "PHP, Symfony, Javascript, AngularJS, SASS, Bootstrap, MySQL, Redis, CMS, CDNs",
    image: linio02,
  },
];

const imgBgColors = ["bg-tangerine", "bg-brick", "bg-grass", "bg-olive"];

const ExperiencePanel = () => {
  console.log(typeof linio01);
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
