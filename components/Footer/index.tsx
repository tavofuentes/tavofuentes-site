import Panel from "@/components/Panel";
import ButtonLink from "@/components/ButtonLink";
import { Inconsolata } from "next/font/google";
const fontInconsolata = Inconsolata({ subsets: ["latin"] });

const Footer = () => {
  const cvDownloadURL =
    "https://drive.google.com/file/d/13D29PHw5KEAqUfw9F8-PrPewYnnSG-uH";
  return (
    <Panel className="bg-night grow">
      <div
        className={`${fontInconsolata.className} font-inconsolata text-base font-bold text-eggshell flex flex-col items-center p-6 md:p-12 outline1`}
      >
        <span className="">See full experience</span>
        <div className="flex flex-wrap mt-6 justify-between">
          <ButtonLink
            className="mr-5 mb-5"
            buttonStyle="outline-dark"
            targetUrl="/cv"
          >
            Read full
          </ButtonLink>

          <ButtonLink
            className="mb-5"
            buttonStyle="outline-dark"
            targetUrl={cvDownloadURL}
          >
            Download CV
          </ButtonLink>
        </div>
        <p className="mt-12 text-xs">
          Design by{" "}
          <a
            className="underline decoration-solid"
            href="//www.karlavilla.com"
            target="_blank"
          >
            Karla Villa
          </a>
        </p>
      </div>
    </Panel>
  );
};

export default Footer;
