import Link from "next/link";
import Panel from "@/components/Panel";
import ExperienceCard from "@/components/ExperienceCard";

const experienceList = [
  {
    title: "Falabella",
    role: "Senior Software Engineer",
    dates: "2020-2023",
    description:
      "Development and maintenance of PCI DSS compliant payment method integrations.  Close collaboration with checkout product owners and designers for visual and performance improvements.",
    techList: "PHP, Symfony, Postrgres, Pub/Sub, PCI DSS, AngularJS, Docker",
  },
  {
    title: "Globant",
    role: "Software Engineer",
    dates: "2018-2020",
    description:
      "Development of wealth management web applications for Santander México banking group. Delivery of micro frontends for cross-platform environments.",
    techList: "Svelte, ReactJS, NodeJS, SASS, Bootstrap, Webpack, SCRUM",
  },
  {
    title: "Linio",
    role: "Team Leader",
    dates: "2016-2018",
    description:
      "Collaboration with architecture and DevOps teams for solution design and integration. Definition of roadmap in coordination with stakeholders. Onboarding of new team members. Agile development lifecycle for the Frontend team.",
    techList:
      "Agile, Scrum, Docker, PHP, Symfony, Javascript, AngularJS, MySQL, Redis",
  },
  {
    title: "Linio",
    role: "Software Engineer",
    dates: "2015-2016",
    description:
      "Multi region marketplace frontend refactor, frontend journeys from home page to checkout with payment method and in-house CMS integrations. Development of APIs for mobile clients.",
    techList:
      "PHP, Symfony, Javascript, AngularJS, SASS, Bootstrap, MySQL, Redis, CMS, CDNs",
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
