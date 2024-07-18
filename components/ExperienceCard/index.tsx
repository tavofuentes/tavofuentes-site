import { ExperienceRecord } from "@/support/types";
import ButtonLink from "../ButtonLink";
import { Literata, Inconsolata } from "next/font/google";
import Image from "next/image";

interface Props {
  experienceRecord: ExperienceRecord;
  bgColor: string;
  imgBgColor: string;
}

const fontLiterata = Literata({ subsets: ["latin"] });
const fontInconsolata = Inconsolata({ subsets: ["latin"] });

const ExperienceCard = ({ experienceRecord, bgColor, imgBgColor }: Props) => {
  return (
    <div
      className="
      px-3
      py-6
      flex flex-col
      md:flex-row md:p-6
      lg:max-w-1/2 lg:basis-1/2
      outline1 
      "
    >
      <div
        className={`${bgColor} 
        rounded-lg
        flex flex-grow flex-col-reverse
        md:flex-row
        lg:flex-col-reverse
        xl:flex-row
        outline2
      `}
      >
        <div
          className="
          outline3
          p-6 
          md:p-12
          flex-1"
        >
          <h1
            className={`${fontLiterata.className} text-5xl mb-2 md:mb-3 text-black font-semibold`}
          >
            {experienceRecord.title}
          </h1>
          <div className={`flex flex-col items-baseline mb-3`}>
            <h2
              className={`${fontInconsolata.className} text-2xl text-black font-semibold`}
            >
              {experienceRecord.role}
            </h2>
            <span
              className={`${fontInconsolata.className} text-2xl text-black font-semibold`}
            >
              {experienceRecord.dates}
            </span>
          </div>
          <p className={`${fontInconsolata.className} text-lg mb-3`}>
            {experienceRecord.description}
          </p>
          <p className={`${fontInconsolata.className} text-sm`}>
            {experienceRecord.techList}
          </p>
          {/* <ButtonLink
            className="mt-6 inline-block"
            buttonStyle="outline-light"
            targetUrl="/more"
          >
            Read more
          </ButtonLink> */}
        </div>
        <div
          className={`${imgBgColor} outline2
          rounded-t-lg
          p-1
          h-64
          md:rounded-tl-none md:rounded-r-lg md:h-auto md:w-1/3
          lg:w-full lg:rounded-t-lg lg:rounded-r-none lg:h-64
          xl:rounded-tl-none xl:rounded-r-lg xl:h-auto xl:w-1/3 xl:h-auto
          flex justify-center items-center`}
        >
          <Image
            className="w-auto max-h-full flex-grow-0 flex-shrink-0 outline2"
            alt={experienceRecord.title}
            src={experienceRecord.image}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
