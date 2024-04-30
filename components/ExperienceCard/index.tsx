import Link from "next/link";
import { ExperienceRecord } from "@/support/types";
import ButtonLink from "../ButtonLink";
interface Props {
  experienceRecord: ExperienceRecord;
  bgColor: string;
  imgBgColor: string;
}

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
        flex flex-grow flex-col flex-col-reverse
        md:flex-row
        outline1
      `}
      >
        <div className="outline2 p-6 md:p-12 flex-1">
          <h1
            className={`font-literata text-5xl mb-3 md:mb-6 text-black font-semibold`}
          >
            {experienceRecord.title}
          </h1>
          <p className="font-inconsolata">{experienceRecord.description}</p>
          <ButtonLink
            className="mt-6 inline-block"
            buttonStyle="outline-light"
            targetUrl="/more"
          >
            Read more
          </ButtonLink>
        </div>
        <div
          className={`${imgBgColor} outline2
          rounded-t-lg
          md:rounded-tl-none md:rounded-r-lg
          h-64
          md:h-auto md:w-1/3`}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceCard;
