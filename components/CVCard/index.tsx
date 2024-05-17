import Link from "next/link";
import { CVRecord } from "@/support/types";
import { Literata, Inconsolata } from "next/font/google";

interface Props {
  cvRecord: CVRecord;
}

const fontLiterata = Literata({ subsets: ["latin"] });
const fontInconsolata = Inconsolata({ subsets: ["latin"] });

const CVCard = ({ cvRecord }: Props) => {
  return (
    <div className={`${fontInconsolata.className} mb-6`}>
      <h2 className={`text-2xl text-black font-semibold mb-2`}>
        {cvRecord.role}
      </h2>
      <h3 className={`text-2xl text-black flex flex-wrap mb-2`}>
        <span className={`text-nowrap pr-2`}>
          <a className={`underline`} href={cvRecord.companyURL} target="_blank">
            {cvRecord.company}
          </a>
          {` / `}
        </span>
        <span className={`text-nowrap pr-2`}>
          {` ${cvRecord.location}`}
          {` / `}
        </span>
        <span className={`text-nowrap`}>{cvRecord.dates}</span>
      </h3>
      <ul className={`text-lg list-disc list-inside`}>
        {cvRecord.activities.map((activity, key) => (
          <li key={key}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default CVCard;
