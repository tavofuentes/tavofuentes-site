import Link from "next/link";
import Panel from "@/components/Panel";
import { Literata } from "next/font/google";
import CVCard from "../CVCard";

const fontLiterata = Literata({ subsets: ["latin"] });

const cvRecordList = [
  {
    role: "Senior Software Engineer",
    dates: "2020-2023",
    company: "Falabella",
    companyURL: "https://www.falabella.com/",
    location: "Mexico City",
    activities: [
      "Integrated financing payment methods and loyalty programs after Linio’s acquisition by the Falabella group, one of Latin America’s largest retailers.",
      "Collaborated on maintaining Linio Pay, a PCI DSS compliant payment gateway that handled transactions for Linio and the broader Falabella Group.",
      "Partnered with frontend leads on technical debt reduction.",
      "Maintained and improved the store’s payment platform as part of the payments and checkout development team.",
      "Worked closely with product owners and UX designers on visual and performance improvements of the store’s checkout journey.",
    ],
  },
  {
    role: "Web UI Developer",
    dates: "2018-2020",
    company: "Globant",
    companyURL: "https://www.globant.com",
    location: "Mexico City",
    activities: [
      "Developed wealth management web applications for Santander banking group.",
      "Built reusable modules and components, to be delivered on multi-vendor, cross-platform environments.",
      "Partnered closely with international clients to define detailed business needs and solutions.",
    ],
  },
  {
    role: "Team Leader",
    dates: "2016-2018",
    company: "Linio",
    companyURL: "https://www.linio.com.mx/",
    location: "Mexico City",
    activities: [
      "Actively participated in roadmap definition with product, logistics, marketing and legal teams, sharing estimates and technical assessments for new features and UI implementations.",
      "Guided an Agile/SCRUM development cycle for a team of 10 frontend developers responsible for the company’s marketplace platform.",
      "Collaborated with architecture and devops teams for systems design and CI/CD pipelines.",
      "Mentored junior team members through code review and knowledge sharing.",
    ],
  },
  {
    role: "Software Engineer",
    dates: "2015-2016",
    company: "Linio",
    companyURL: "https://www.linio.com.mx/",
    location: "Mexico City",
    activities: [
      "Collaborated in the creation of a multi region marketplace platform, offering to this day over 4M products in 4 Latin American countries.",
      "Implemented frontend checkout journeys for a variety of payment methods such as Paypal, Masterpass, Credit and Debit Card, voucher payments and loyalty programs.",
      "Ensured quality of critical frontend components through Unit Testing.",
      "Integration of internal and third party RESTful APIs.",
    ],
  },
];

const CVPanel = () => {
  return (
    <Panel className="bg-eggshell">
      <div className="flex flex-col lg:flex-row pb-6 md:pb-16 outline1">
        <div className="flex-1 flex-col p-6 md:p-12 outline2">
          <h1
            className={`${fontLiterata.className}  text-4xl text-black font-extrabold tracking-tight mb-10`}
          >
            Curriculum vitae
          </h1>
          <h2
            className={`${fontLiterata.className}  text-2xl text-black font-extrabold tracking-tight mb-6`}
          >
            Experience
          </h2>
          <div className="">
            {cvRecordList.map((cvRecord, key) => {
              return <CVCard key={key} cvRecord={cvRecord} />;
            })}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default CVPanel;
